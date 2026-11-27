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

test("recordHeaders keeps useful fields but omits hashes and attachment internals", () => {
  const rows = [{ seq: 1, asset: "Pesu", grade: 2, transcript: "Must", hash: "h", prev_hash: "0", reason: "declared", media_hash: "m", photo_hash: "p", audio_hash: "a", media_items: [{ kind: "image" }], photo_thumb: "data:image/png;base64,AA", language: "et", speech_lang: "et-EE", default_assessment: true, local_seq: 1, quick: true, supervisor: "name" }];
  assert.deepEqual(recordHeaders(rows), ["seq", "asset", "reason", "grade", "transcript"]);
});

test("isoWeekKey uses Tallinn local date and ISO year", () => {
  assert.equal(isoWeekKey("2026-11-29T22:30:00Z"), "2026-W49");
  assert.equal(isoWeekKey("2027-01-04T09:00:00Z"), "2027-W1");
});
