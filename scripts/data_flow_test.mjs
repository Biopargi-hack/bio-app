import test from "node:test";
import assert from "node:assert/strict";
import { csvCell, imageHashBits, recordHeaders, isoWeekKey } from "../app/data.js";

test("csvCell neutralises spreadsheet formulas before quoting", () => {
  assert.equal(csvCell('=HYPERLINK("x")'), `"'=HYPERLINK(""x"")"`);
  assert.equal(csvCell("+cmd|'/c calc'"), `"'+cmd|'/c calc'"`);
  assert.equal(csvCell("normal"), '"normal"');
});

test("imageHashBits keeps all 64 bits distinct", () => {
  const a = "1" + "0".repeat(63);
  const b = "1" + "0".repeat(62) + "1";
  assert.equal(imageHashBits("1".repeat(64)), "ffffffffffffffff");
  assert.notEqual(imageHashBits(a), imageHashBits(b));
  assert.equal(imageHashBits(a).length, 16);
});

test("recordHeaders exports chain and evidence fields", () => {
  const rows = [{ seq: 1, hash: "h", prev_hash: "0", reason: "declared", media_hash: "m", photo_thumb: "data:image/png;base64,AA" }];
  const headers = recordHeaders(rows);
  assert.ok(headers.includes("prev_hash"));
  assert.ok(headers.includes("reason"));
  assert.ok(headers.includes("media_hash"));
  assert.ok(!headers.includes("photo_thumb"));
});

test("isoWeekKey uses Tallinn local date and ISO year", () => {
  assert.equal(isoWeekKey("2026-11-29T22:30:00Z"), "2026-W49");
  assert.equal(isoWeekKey("2027-01-04T09:00:00Z"), "2027-W1");
});
