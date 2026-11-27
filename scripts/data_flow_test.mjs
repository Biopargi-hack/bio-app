import test from "node:test";
import assert from "node:assert/strict";
import { imageHashBits, isoWeekKey } from "../app/data.js";


test("imageHashBits keeps all 64 bits distinct", () => {
  const a = "1" + "0".repeat(63);
  const b = "1" + "0".repeat(62) + "1";
  assert.equal(imageHashBits("1".repeat(64)), "ffffffffffffffff");
  assert.notEqual(imageHashBits(a), imageHashBits(b));
  assert.equal(imageHashBits(a).length, 16);
});


test("isoWeekKey uses Tallinn local date and ISO year", () => {
  assert.equal(isoWeekKey("2026-11-29T22:30:00Z"), "2026-W49");
  assert.equal(isoWeekKey("2027-01-04T09:00:00Z"), "2027-W1");
});
