import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseURL = process.env.TEST_URL || "http://127.0.0.1:3001";
const output = new URL("../docs/qa/", import.meta.url);
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const widths = [
  [360, 800],
  [390, 844],
  [430, 932],
  [768, 1024],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
];
try {
  for (const [width, height] of widths) {
    const context = await browser.newContext({
      viewport: { width, height },
      hasTouch: width < 768,
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(baseURL, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow at ${width}`,
    );
    const prices = await page.locator(".hero-prices").boundingBox();
    assert(
      prices.y + prices.height < height - (width < 768 ? 68 : 0),
      `Hero prices hidden at ${width}`,
    );
    const heroFile = new URL(`hero-${width}.png`, output);
    await page.screenshot({
      path: fileURLToPath(heroFile),
    });
    if (width < 768) {
      const open = page.getByRole("button", { name: "Abrir menu" });
      await open.click();
      const modal = page.getByRole("dialog", { name: "Menu de navegação" });
      await modal.waitFor({ state: "visible" });
      for (let i = 0; i < 8; i++) {
        await page.keyboard.press("Tab");
        assert(
          await page.evaluate(() =>
            document.querySelector("dialog")?.contains(document.activeElement),
          ),
          "Focus escaped menu",
        );
      }
      await page.keyboard.press("Escape");
      assert.equal(await modal.isVisible(), false);
      assert.equal(
        await open.evaluate((el) => el === document.activeElement),
        true,
      );
      await open.click();
      await modal.getByRole("link", { name: "Serviços", exact: true }).click();
      assert.equal(await modal.isVisible(), false);
      assert.equal(new URL(page.url()).hash, "#servicos");
      await page.waitForFunction(
        () => document.body.style.overflow !== "hidden",
      );
    }
    const slider = page.getByRole("slider");
    await slider.scrollIntoViewIfNeeded();
    await slider.focus();
    await slider.press("Home");
    assert.equal(await slider.inputValue(), "0");
    await slider.press("ArrowRight");
    assert.equal(await slider.inputValue(), "1");
    await slider.press("End");
    assert.equal(await slider.inputValue(), "100");
    await page
      .getByRole("button", { name: "Meio a meio", exact: true })
      .click();
    assert.equal(await slider.inputValue(), "50");
    if (width < 768) {
      const box = await slider.boundingBox();
      await page.touchscreen.tap(
        box.x + box.width * 0.25,
        box.y + box.height * 0.5,
      );
      assert(
        Number(await slider.inputValue()) < 40,
        "Touch did not move slider",
      );
    }
    // Fails if the observer band collapses on a wide screen: a visible step must select itself.
    for (const index of [0, 1, 2]) {
      await page
        .locator(`[data-step="${index}"]`)
        .evaluate((el) =>
          el.scrollIntoView({ block: "center", behavior: "instant" }),
        );
      await page.waitForFunction(
        (i) =>
          document.querySelector(`[data-step="${i}"]`)?.dataset.active ===
          "true",
        index,
        { timeout: 2500 },
      );
    }
    await page.getByRole("button", { name: "Secagem", exact: true }).click();
    assert.equal(
      await page
        .getByRole("button", { name: "Secagem", exact: true })
        .getAttribute("aria-pressed"),
      "true",
    );
    const links = await page
      .locator('a[href^="https://wa.me/"]')
      .evaluateAll((elements) =>
        elements.map((el) => ({
          label: el.textContent.trim(),
          href: el.href,
          rel: el.rel,
          target: el.target,
        })),
      );
    assert(links.length >= 10);
    for (const link of links) {
      const url = new URL(link.href);
      assert.equal(url.pathname, "/5562994488816");
      assert(url.searchParams.get("text")?.length > 30);
      assert.equal(url.searchParams.size, 1);
      assert.equal(link.target, "_blank");
      assert(link.rel.includes("noopener"));
    }
    assert.match(
      new URL(
        links.find((link) => link.label === "Agendar carro").href,
      ).searchParams.get("text"),
      /R\$50/,
    );
    assert.match(
      new URL(
        links.find((link) => link.label === "Agendar SUV ou caminhonete").href,
      ).searchParams.get("text"),
      /R\$60/,
    );
    assert.match(
      new URL(
        links.find((link) => link.label === "Adicionar cera").href,
      ).searchParams.get("text"),
      /cera em pasta/,
    );
    const maps = new URL(
      await page
        .getByRole("link", { name: "Abrir no Google Maps" })
        .getAttribute("href"),
    );
    assert.equal(maps.hostname, "www.google.com");
    assert.match(
      maps.searchParams.get("query"),
      /Av\. Brasil Norte, 1310.*Cidade Jardim.*Anápolis/,
    );
    await page.waitForTimeout(250);
    await page.locator("footer.site-footer").scrollIntoViewIfNeeded();
    const broken = await page
      .locator("img")
      .evaluateAll((images) =>
        images
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.src),
      );
    assert.deepEqual(broken, []);
    const a11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    await writeFile(
      new URL(`accessibility-${width}.json`, output),
      JSON.stringify(a11y.violations, null, 2),
    );
    assert.deepEqual(
      a11y.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
      [],
      `Accessibility at ${width}`,
    );
    assert.deepEqual(errors, [], `Browser errors at ${width}`);
    results.push({
      viewport: `${width}x${height}`,
      overflow: false,
      links: links.length,
      menu: width < 768 ? "pass" : "desktop",
      comparison: "keyboard and buttons pass",
      processScroll: "pass",
      accessibilityViolations: 0,
      browserErrors: 0,
    });
    console.log(`PASS ${width}x${height}`);
    await context.close();
  }
  const reduced = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await reduced.newPage();
  await page.goto(baseURL);
  await page.mouse.move(900, 400);
  assert.equal(
    await page
      .locator(".hero-car")
      .evaluate((el) => getComputedStyle(el).transform),
    "none",
  );
  await page.getByRole("button", { name: "Acabamento", exact: true }).click();
  assert.equal(
    await page
      .locator(".process-shine")
      .evaluate((el) => getComputedStyle(el).animationName),
    "none",
  );
  results.push({ reducedMotion: "pass" });
  await reduced.close();
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const staticPage = await noJs.newPage();
  await staticPage.goto(baseURL);
  assert.equal(await staticPage.locator("h1").isVisible(), true);
  assert.equal(await staticPage.locator(".hero-prices").isVisible(), true);
  assert.equal(
    await staticPage
      .getByRole("link", { name: "Agendar carro", exact: true })
      .isVisible(),
    true,
  );
  results.push({ withoutJavaScript: "content, prices and booking links pass" });
  await noJs.close();
  await writeFile(
    new URL("results.json", output),
    JSON.stringify(results, null, 2),
  );
} finally {
  await browser.close();
}
