import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const target = new URL("../public/images/", import.meta.url);
await mkdir(target, { recursive: true });
const generated = process.argv[2];
if (!generated)
  throw new Error("Informe o caminho da imagem ilustrativa original.");
for (const width of [640, 960, 1536]) {
  await sharp(generated)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(fileURLToPath(new URL(`hero-${width}.webp`, target)));
}
const photos = {
  "reference-a":
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1000&q=80",
  "reference-b":
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
  suv: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",
};
for (const [name, url] of Object.entries(photos)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const input = Buffer.from(await response.arrayBuffer());
  await writeFile(
    new URL(`${name}.webp`, target),
    await sharp(input)
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer(),
  );
}
