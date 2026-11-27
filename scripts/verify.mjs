#!/usr/bin/env node
/**
 * Dependency-free gate for the Tap to Prove static app.
 *
 * Checks that the files we ship are the files we reference: JS parses, the
 * manifest is valid, local links and icons exist, the service worker precache
 * list is real, and no secret is committed.
 *
 * Run locally with: node scripts/verify.mjs
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const appDir = join(root, "app");

const passed = [];
const failed = [];
const ok = (message) => passed.push(message);
const fail = (message) => failed.push(message);

const REQUIRED_FILES = [
  "app/index.html",
  "app/paper.html",
  "app/app.js",
  "app/sw.js",
  "app/styles.css",
  "app/manifest.webmanifest",
  "app/showcase.html",
  "app/sample_cip.csv",
  "app/sheet.html",
  "app/hygieen.json",
  "app/taptoprove_ledger.xlsx",
];

for (const file of REQUIRED_FILES) {
  if (existsSync(join(root, file))) ok(`${file} exists`);
  else fail(`${file} is missing`);
}

// JavaScript must at least parse. No bundler will catch this for us.
for (const file of ["app/app.js", "app/sw.js"]) {
  const path = join(root, file);
  if (!existsSync(path)) continue;
  try {
    execFileSync(process.execPath, ["--check", path], { stdio: "pipe" });
    ok(`${file} parses`);
  } catch (error) {
    const detail = error.stderr?.toString().trim() || error.message;
    fail(`${file} has a syntax error:\n${detail}`);
  }
}

// Card ID must survive from the tap into every appended record.
const appSource = existsSync(join(root, "app/app.js")) ? readFileSync(join(root, "app/app.js"), "utf8") : "";
if (appSource.includes("tag_sig: currentTag")) {
  ok("card ID is written to records");
} else {
  fail("app/app.js: card ID is missing from records");
}

// The no photo case must write a fixed default assessment into the dataset.
const defaultWired = appSource.includes("quickRecord('default')") && /defaultAssessment\s*=\s*\(isDefault\s*\|\|\s*\(isGrade\s*&&\s*grade\s*===\s*3\)\)\s*&&\s*noEvidence/.test(appSource) && appSource.includes('default_assessment: defaultAssessment');
if (defaultWired) {
  ok("fixed default assessment is wired into records");
} else {
  fail("app/app.js: fixed default assessment is missing from records");
}

// Speech must not depend on a raw browser locale or lose interim-only words.
const speechLocaleWired = appSource.includes("speechLocale(navigator.language)") && appSource.includes("SPEECH_FALLBACK");
if (speechLocaleWired) {
  ok("speech locale is normalised with a fallback");
} else {
  fail("app/app.js: speech locale is not normalised with a fallback");
}

const speechTextWired = appSource.includes("session.texts, session.interim") && appSource.includes("handlers.onInterim");
if (speechTextWired) {
  ok("speech keeps interim words when the mic closes");
} else {
  fail("app/app.js: interim speech words are dropped");
}

const speechCopyWired = appSource.includes("speech_detected: 'Speech language detected'") && appSource.includes("speech_detected: 'Tuvastatud kõne keel'");
if (speechCopyWired) {
  ok("speech language detection copy is bilingual");
} else {
  fail("app/app.js: speech language detection copy is missing in et or en");
}

// NFC and QR links must open a grade 1 to 3 rating view.
const indexSource = existsSync(join(appDir, "index.html")) ? readFileSync(join(appDir, "index.html"), "utf8") : "";
if (appSource.includes("kind === 'grade'") && indexSource.includes('id="gradeRow"')) {
  ok("NFC link opens a grade view");
} else {
  fail("app: NFC link grade view is missing");
}

// The minimal capture app must not bring back the ledger or audit panel.
if (!indexSource.includes('id="records"') && !indexSource.includes('id="cipSummary"')) {
  ok("minimal app has no ledger or audit panel");
} else {
  fail("app/index.html still contains the ledger or audit panel");
}

const cipRaw = existsSync(join(appDir, "sample_cip.csv")) ? readFileSync(join(appDir, "sample_cip.csv")) : Buffer.alloc(0);
if (cipRaw.slice(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf])) && cipRaw.includes(0x3b) && cipRaw.includes(0x2c)) {
  ok("sample CIP is Excel friendly with BOM, semicolon and comma decimals");
} else {
  fail("app/sample_cip.csv: expected UTF-8 BOM, semicolon separators and comma decimals");
}
if (indexSource.includes('id="hygieneGrid"') && indexSource.includes('href="taptoprove_ledger.xlsx"') && appSource.includes("fetch('hygieen.json')")) {
  ok("hygiene workbook grid is embedded with an XLSX download");
} else {
  fail("app/index.html: hygiene workbook grid or XLSX download is missing");
}
const stylesSource = existsSync(join(appDir, "styles.css")) ? readFileSync(join(appDir, "styles.css"), "utf8") : "";
if (appSource.includes("visibleHygieneWeeks()") && !stylesSource.includes("min-width: 2480px")) {
 ok("hygiene grid stays compact with a six week window");
} else {
 fail("app: hygiene grid still uses the full year width");
}

const sheetSource = existsSync(join(appDir, "sheet.html")) ? readFileSync(join(appDir, "sheet.html"), "utf8") : "";
if (sheetSource.includes("new BroadcastChannel('toend-records')") && sheetSource.includes("indexedDB.open('toend'") && sheetSource.includes('id="sheetExcelBtn"')) {
  ok("live sheet reads IndexedDB, listens for records and exports Excel CSV");
} else {
  fail("app/sheet.html: live sheet wiring is missing");
}
if (appSource.includes("new BroadcastChannel('toend-records')") && appSource.includes("postMessage(event)") && indexSource.includes('id="sheetLink"')) {
  ok("capture app broadcasts records and links to live sheet");
} else {
  fail("app: record broadcast or live sheet link is missing");
}

const cameraWired = indexSource.includes('id="photoBtn"') && indexSource.includes('id="videoBtn"') && indexSource.includes('capture="environment"') && appSource.includes('photoBtn') && appSource.includes('videoBtn');
if (cameraWired) {
  ok("photo and video buttons open the device camera");
} else {
  fail("app: direct camera buttons are missing");
}
if (!indexSource.includes('id="assetSource"') && !appSource.includes('assetSource')) {
  ok("visible NFC card number is removed");
} else {
  fail("app: visible NFC card number readout is still present");
}
if (appSource.includes("speak: 'Speak'") && appSource.includes("speak: 'Räägi'") && !appSource.includes('Räägi ja kirjuta')) {
  ok("voice button copy is short in both languages");
} else {
  fail("app: voice button copy is still confusing");
}

// The showcase page must carry the demo NFC link and its tag id.
const showcase = existsSync(join(root, "app/showcase.html")) ? readFileSync(join(root, "app/showcase.html"), "utf8") : "";
if (showcase.includes("TAP-DEMO-01") && showcase.includes("taptoprove.ee/?asset=")) {
  ok("showcase carries the NFC demo link");
} else {
  fail("app/showcase.html: NFC demo link or tag id is missing");
}

// Manifest: valid JSON and every icon actually exists.
let manifest = null;
try {
  manifest = JSON.parse(readFileSync(join(appDir, "manifest.webmanifest"), "utf8"));
  ok("manifest.webmanifest is valid JSON");
} catch (error) {
  fail(`manifest.webmanifest is not valid JSON: ${error.message}`);
}

if (manifest) {
  for (const key of ["name", "short_name", "start_url", "display", "icons"]) {
    if (manifest[key] === undefined) fail(`manifest.webmanifest is missing "${key}"`);
  }
  const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
  if (icons.length === 0) fail("manifest.webmanifest lists no icons");
  for (const icon of icons) {
    if (!icon?.src) {
      fail("manifest.webmanifest has an icon without src");
      continue;
    }
    if (!existsSync(resolve(appDir, icon.src))) {
      fail(`manifest.webmanifest references missing icon "${icon.src}"`);
    }
  }
}

// HTML: language, title, viewport, real local references, alt text on images.
const htmlFiles = readdirSync(appDir).filter((name) => name.endsWith(".html"));

for (const name of htmlFiles) {
  const html = readFileSync(join(appDir, name), "utf8");

  if (!/<html[^>]*\slang=/i.test(html)) fail(`${name}: <html> needs a lang attribute`);
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(`${name}: missing a non-empty <title>`);
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) fail(`${name}: missing viewport meta`);

  for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (/^(?:[a-z]+:|\/\/|#)/i.test(reference)) continue;

    let path = reference.split(/[?#]/)[0];
    if (!path) continue;

    const candidates = path.startsWith('/')
      ? [resolve(appDir, path.slice(1)), resolve(appDir, `${path.slice(1)}.html`)]
      : [resolve(appDir, path)];
    if (!candidates.some((candidate) => existsSync(candidate))) {
      fail(`${name}: broken local reference "${reference}"`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=/i.test(match[0])) {
      fail(`${name}: <img> without alt text: ${match[0].slice(0, 80)}`);
    }
  }
}

if (htmlFiles.length > 0) ok(`${htmlFiles.length} HTML file(s) checked`);

// Service worker: every precached asset must exist, or install fails offline.
const swPath = join(appDir, "sw.js");
if (existsSync(swPath)) {
  const sw = readFileSync(swPath, "utf8");
  const list = sw.match(/const\s+ASSETS\s*=\s*\[([\s\S]*?)\];/);
  if (!list) {
    fail("app/sw.js: could not find the ASSETS precache list");
  } else {
    const assets = [...list[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
    if (assets.length === 0) fail("app/sw.js: ASSETS list is empty");
    for (const asset of assets) {
      if (!existsSync(resolve(appDir, asset)) && !existsSync(resolve(appDir, `${asset}.html`))) {
        fail(`app/sw.js precaches missing file "${asset}"`);
      }
    }
    ok(`service worker precaches ${assets.length} assets`);
  }
}

// Secrets: strong token shapes anywhere, plus credential files in git.
const TOKEN_PATTERNS = [
  { name: "GitHub token", pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}\b/ },
  { name: "API key", pattern: /\bsk-[A-Za-z0-9]{20,}\b/ },
  { name: "private key", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
];

let tracked = [];
try {
  tracked = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
} catch {
  // Not a git checkout (e.g. a tarball); skip the history-only checks.
}

const TEXT_FILE = /\.(?:js|mjs|html|css|json|webmanifest|csv|md|ya?ml|txt|toml|sh)$/i;
const SECRET_FILE = /(^|\/)(?:\.env(\..+)?|id_[a-z0-9]+|.*\.(?:pem|key|p12|pfx))$/i;

for (const file of tracked) {
  if (SECRET_FILE.test(file)) {
    fail(`credential-like file is tracked: ${file}`);
    continue;
  }
  if (!TEXT_FILE.test(file)) continue;

  let contents = "";
  try {
    contents = readFileSync(join(root, file), "utf8");
  } catch {
    continue;
  }

  for (const { name, pattern } of TOKEN_PATTERNS) {
    if (pattern.test(contents)) fail(`${file}: looks like a committed ${name}`);
  }
}

ok(`${tracked.length} tracked file(s) scanned for secrets`);

// Report.
console.log(`Tap to Prove verify — ${passed.length} passed, ${failed.length} failed\n`);

if (failed.length > 0) {
  for (const problem of failed) console.error(`  ✗ ${problem}`);
  console.error("\nFix the problems above before opening a pull request.");
  process.exit(1);
}

console.log("  ✓ all checks passed");
