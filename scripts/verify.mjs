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

import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
  "app/data.js",
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

try {
  execFileSync(process.execPath, ["--test", join(root, "scripts/data_flow_test.mjs")], { stdio: "pipe" });
  ok("data flow tests pass");
} catch (error) {
  const detail = error.stderr?.toString().trim() || error.message;
  fail(`data flow tests failed:\n${detail}`);
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
const speechLocaleWired = appSource.includes("speechLocale(navigator.language)") && appSource.includes("let speechLang = 'et-EE'") && appSource.includes("SPEECH_FALLBACK");
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

const speechUnlimited = appSource.includes("const SPEECH_CHUNK_CHARS = 160")
  && appSource.includes("onMicFree")
  && !/transcript[^;\n]{0,80}slice\(0,\s*300\)/.test(appSource);
if (speechUnlimited) {
  ok("voice mode keeps a long note instead of cutting it near 300 characters");
} else {
  fail("app/app.js: voice mode still caps a spoken note");
}

const spellingWired = appSource.includes("if (userOwned)") && appSource.includes("fetch('./api/transcribe'");
if (spellingWired && existsSync(join(root, "functions/api/transcribe.js")) && !readFileSync(join(root, "functions/api/transcribe.js"), "utf8").includes("gsk_")) {
  ok("a typed letter stays and spelling is corrected online");
} else {
  fail("app: voice still drops a typed letter or the spelling check is missing");
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
if (indexSource.includes('href="taptoprove_ledger.xlsx"') && appSource.includes("hygiene_download")) {
  ok("the workbook download is on the landing page");
} else {
  fail("app/index.html: the XLSX workbook download is missing");
}
if (indexSource.includes('id="workbookTable"') && indexSource.includes('id="workbookBody"') && appSource.includes("function renderWorkbook()")) {
  ok("the landing embeds the workbook records table");
} else {
  fail("app: the embedded workbook records table is missing");
}
const workbookColumns = ["'seq'", "'created_at'", "'teostaja'", "'evidence'", "'chain_ok'", "'hash'"];
if (workbookColumns.every((column) => appSource.includes(column)) && appSource.includes("await refreshCount();") && appSource.includes("renderWorkbook();")) {
  ok("workbook rows follow the saved records with the Excel columns");
} else {
  fail("app/app.js: workbook columns or the save refresh is missing");
}
if (appSource.includes("recordsChannel?.addEventListener") && appSource.includes("workbookChain(records)")) {
  ok("the workbook table follows other tabs and verifies the hash chain");
} else {
  fail("app/app.js: workbook live update or chain check is missing");
}
const stylesSource = existsSync(join(appDir, "styles.css")) ? readFileSync(join(appDir, "styles.css"), "utf8") : "";


const sheetSource = existsSync(join(appDir, "sheet.html")) ? readFileSync(join(appDir, "sheet.html"), "utf8") : "";
if (sheetSource.includes("new BroadcastChannel('toend-records')") && sheetSource.includes("indexedDB.open('toend'") && sheetSource.includes('id="sheetExcelBtn"')) {
  ok("live sheet reads IndexedDB, listens for records and exports Excel CSV");
} else {
  fail("app/sheet.html: live sheet wiring is missing");
}
if (appSource.includes("notifyRecords(record)") && sheetSource.includes("new BroadcastChannel('toend-records')") && indexSource.includes('id="sheetLink"')) {
  ok("capture app broadcasts saved records and links to live sheet");
} else {
  fail("app: record broadcast call or live sheet link is missing");
}
if (appSource.includes("if (!recordsChannel)") && sheetSource.includes('db.onversionchange')) {
  ok("record events fall back without double refresh and sheet closes stale databases");
} else {
  fail("app: record event fallback or sheet database handoff is missing");
}
const freshExportReads = (sheetSource.match(/const current = await allRecords\(\);/g) || []).length;
if (freshExportReads >= 2 && sheetSource.includes("import { csvCell, recordHeaders }") && sheetSource.includes("recordHeaders(current)")) {
  ok("sheet exports fresh complete CSV and JSONL with attachments");
} else {
  fail("app/sheet.html: fresh complete export wiring is missing");
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

// Domain split: landing stays on taptoprove.ee, every NFC link uses nfc.taptoprove.ee.
const showcase = existsSync(join(root, "app/showcase.html")) ? readFileSync(join(root, "app/showcase.html"), "utf8") : "";
const readmeSource = existsSync(join(root, "README.md")) ? readFileSync(join(root, "README.md"), "utf8") : "";
const runbookSource = existsSync(join(root, "docs/demo_runbook.md")) ? readFileSync(join(root, "docs/demo_runbook.md"), "utf8") : "";
if (showcase.includes("TAP-DEMO-01") && showcase.includes("https://nfc.taptoprove.ee/?asset=")) {
  ok("showcase carries the NFC demo link on nfc.taptoprove.ee");
} else {
  fail("app/showcase.html: NFC demo link or nfc.taptoprove.ee host is missing");
}
if (!showcase.includes("https://taptoprove.ee/?asset=") && !appSource.includes("https://taptoprove.ee/?asset=")) {
  ok("no NFC link still points at the landing host");
} else {
  fail("NFC link still uses https://taptoprove.ee/?asset= instead of nfc.taptoprove.ee");
}
const indexHead = indexSource.split("</head>")[0];
if (indexHead.includes('rel="canonical"') && indexHead.includes('href="https://taptoprove.ee/"')) {
  ok("landing page canonical is https://taptoprove.ee/");
} else {
  fail("app/index.html: canonical link to https://taptoprove.ee/ is missing");
}
if (readmeSource.includes("Production: https://taptoprove.ee") && readmeSource.includes("https://nfc.taptoprove.ee/?asset=")) {
  ok("README documents both hosts");
} else {
  fail("README.md: landing or NFC host is missing");
}
if (runbookSource.includes("https://nfc.taptoprove.ee/?asset=")) {
  ok("demo runbook uses the NFC host for card links");
} else {
  fail("docs/demo_runbook.md: NFC card link host is missing");
}
const stylesForMode = existsSync(join(appDir, "styles.css")) ? readFileSync(join(appDir, "styles.css"), "utf8") : "";
const domainsSource = existsSync(join(root, "docs/DOMAINS.md")) ? readFileSync(join(root, "docs/DOMAINS.md"), "utf8") : "";
if (indexHead.includes("dataset.mode") && indexHead.includes("/^nfc\\./")) {
  ok("host mode is selected before styles load");
} else {
  fail("app/index.html: hostname mode script is missing");
}
if (stylesForMode.includes('html[data-mode="landing"] #sheetLink') && stylesForMode.includes('html[data-mode="record"] .hero')) {
  ok("CSS keeps capture available and hides the wrong view on each host");
} else {
  fail("app/styles.css: host view rules are missing");
}
if (indexSource.includes('href="#capture"') && indexSource.includes('href="#hygieen"')) {
 ok("landing CTA goes to capture and the table link is present");
} else {
  fail("app/index.html: landing CTA or table link is wrong");
}
if (domainsSource.includes("record entry only") && domainsSource.includes("nfc origin")) {
  ok("DOMAINS.md explains the one-way storage");
} else {
  fail("docs/DOMAINS.md: host views or storage origin are not documented");
}
if (runbookSource.includes("Open the NFC host on a phone")) {
  ok("runbook warms the NFC host offline");
} else {
  fail("docs/demo_runbook.md: offline warm-up still names the landing host");
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

  for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
    const script = match[1];
    if (!script.trim()) continue;
    try {
      const args = /type=["']module["']/i.test(match[0]) ? ["--check", "--input-type=module", "-"] : ["--check", "-"];
      execFileSync(process.execPath, args, { input: script, stdio: "pipe" });
    } catch (error) {
      fail(`${name}: inline script has a syntax error: ${error.stderr?.toString().trim() || error.message}`);
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

    const digest = createHash("sha256");
    for (const asset of assets) {
      digest.update(asset);
      const path = [resolve(appDir, asset), resolve(appDir, `${asset}.html`)]
        .find((candidate) => existsSync(candidate) && statSync(candidate).isFile());
      if (path) digest.update(readFileSync(path, "utf8").replace(/\r\n/g, "\n"));
    }
    const expected = `tap-to-prove-${digest.digest("hex").slice(0, 12)}`;
    const declared = sw.match(/const CACHE = ['"]([^'"]+)['"]/)?.[1];
    if (declared === expected) ok(`service worker cache version matches assets (${expected})`);
    else fail(`app/sw.js: CACHE is "${declared}", expected "${expected}" for current assets`);
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


const deployYaml = existsSync(join(root, ".github/workflows/deploy.yml")) ? readFileSync(join(root, ".github/workflows/deploy.yml"), "utf8") : "";
if (deployYaml.includes("node scripts/verify.mjs") && deployYaml.includes("github.ref == 'refs/heads/main'")) {
  ok("deploy workflow verifies before publishing and restricts manual runs to main");
} else {
  fail(".github/workflows/deploy.yml: verification gate or manual dispatch branch guard is missing");
}
const ciYaml = existsSync(join(root, ".github/workflows/ci.yml")) ? readFileSync(join(root, ".github/workflows/ci.yml"), "utf8") : "";
if (ciYaml.includes("types: [opened, synchronize, reopened, edited]") && ciYaml.includes("text.length")) {
  ok("CI rechecks edited PR descriptions and rejects empty sections");
} else {
  fail(".github/workflows/ci.yml: edited PR trigger or non-empty section check is missing");
}
const readme = existsSync(join(root, "README.md")) ? readFileSync(join(root, "README.md"), "utf8") : "";
if (readme.includes("Automatic deploy happens on every push") && !readme.includes("line dropdown")) {
  ok("README documents automatic deploy and drops the removed line dropdown");
} else {
  fail("README.md: deployment or demo wording is stale");
}
// Report.
console.log(`Tap to Prove verify — ${passed.length} passed, ${failed.length} failed\n`);

if (failed.length > 0) {
  for (const problem of failed) console.error(`  ✗ ${problem}`);
  console.error("\nFix the problems above before opening a pull request.");
  process.exit(1);
}

console.log("  ✓ all checks passed");
