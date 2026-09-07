import test from "node:test";
import assert from "node:assert/strict";
import { businessData } from "../src/config/business.ts";

test("WhatsApp preserves accents, symbols and newlines as one message parameter", () => {
  const message = "Olá, Paulinho! Carro & cera + R$10?\nDia #2";
  const url = new URL(businessData.getWhatsAppLink(message));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/5562994488816");
  assert.deepEqual([...url.searchParams], [["text", message]]);
});

test("a blank contextual message falls back to an actionable scheduling message", () => {
  const url = new URL(businessData.getWhatsAppLink("   "));
  assert.match(url.searchParams.get("text"), /agendar/i);
});
