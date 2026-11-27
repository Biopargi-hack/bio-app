#!/usr/bin/env node
/**
 * Commit explicit paths and open a PR with a body that passes pr-notes.
 *
 *   node scripts/open_pr.mjs "feat(app): add hero art" app/index.html app/illustration.svg
 *   node scripts/open_pr.mjs "title" app/index.html --dry-run
 *
 * Non-interactive answers come from PR_WHAT, PR_VERIFY, PR_NOT_TESTED,
 * PR_HANDOFF and PR_CONFIRM=1.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { createInterface } from "node:readline/promises";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const rawArgs = process.argv.slice(2);
const dryRun = rawArgs.includes("--dry-run");
const args = rawArgs.filter((value) => value !== "--dry-run");
const title = args[0] ?? "";
const paths = args.slice(1);
const rl = process.stdin.isTTY
  ? createInterface({ input: process.stdin, output: process.stdout })
  : null;

function out(command, commandArgs) {
  execFileSync(command, commandArgs, { cwd: root, stdio: "inherit", encoding: "utf8" });
}

function text(command, commandArgs) {
  return execFileSync(command, commandArgs, { cwd: root, encoding: "utf8" }).trim();
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function ask(label, envName, fallback) {
  if (process.env[envName]) return process.env[envName].trim();
  if (!rl) return fallback;
  const answer = (await rl.question(`${label} [${fallback || "empty"}]: `)).trim();
  return answer || fallback;
}

function buildBody(what, verifyExtra, notTested, handoff, actor) {
  const verification = [
    "- [x] `node scripts/verify.mjs` passes",
    verifyExtra ? `\n${verifyExtra}` : "",
  ].filter(Boolean).join("\n");

  return [
    "## What changed",
    "",
    what,
    "",
    "## Verification",
    "",
    verification,
    "",
    "## Not tested",
    "",
    notTested,
    "",
    "## Handoff",
    "",
    `- Agent: ${actor}`,
    `- Next action: ${handoff}`,
    `- Files: ${paths.join(", ")}`,
    "",
  ].join("\n");
}

if (!title || paths.length === 0) {
  fail('usage: node scripts/open_pr.mjs "PR title" <file> [file ...] [--dry-run]');
}

if (dryRun) {
  const body = buildBody(
    process.env.PR_WHAT ?? title,
    process.env.PR_VERIFY ?? "",
    process.env.PR_NOT_TESTED ?? "Physical NFC reading and writing were not tested.",
    process.env.PR_HANDOFF ?? "Review and squash merge.",
    "dry-run",
  );
  console.log(body);
  process.exit(0);
}

const branch = text("git", ["branch", "--show-current"]);
if (!branch || branch === "main") fail("Work in a task branch, not main. Use scripts/start_task.mjs.");

const staged = text("git", ["diff", "--cached", "--name-only"]);
if (staged) fail("The index has staged files. Unstage them first so only the listed paths are committed.");

for (const path of paths) {
  if (!existsSync(resolve(root, path))) fail(`File not found: ${path}`);
}

const changed = text("git", ["status", "--porcelain", "--", ...paths]);
if (!changed) fail("None of the listed files has a change.");

out("node", ["scripts/verify.mjs"]);
out("git", ["add", "--", ...paths]);
out("git", ["commit", "-m", title]);
out("git", ["push", "-u", "origin", "HEAD"]);

let actor = "";
try {
  actor = text("git", ["config", "user.name"]);
} catch {
  actor = "teammate";
}

const what = await ask("What changed", "PR_WHAT", title);
const verifyExtra = await ask("Extra verification notes", "PR_VERIFY", "");
const notTested = await ask("What was not tested", "PR_NOT_TESTED", "Physical NFC reading and writing were not tested.");
const handoff = await ask("Next action", "PR_HANDOFF", "Review and squash merge.");
const body = buildBody(what, verifyExtra, notTested, handoff, actor);

console.log("\n--- PR body ---\n");
console.log(body);

if (rl) {
  const confirm = (await rl.question("Create this PR? [y/N]: ")).trim().toLowerCase();
  rl.close();
  if (confirm !== "y" && confirm !== "yes") fail("Stopped before creating the PR.");
} else if (process.env.PR_CONFIRM !== "1") {
  fail("Set PR_CONFIRM=1 to create the PR non-interactively.");
}

const tmpDir = mkdtempSync(join(tmpdir(), "bio-pr-"));
const bodyFile = join(tmpDir, "body.md");
try {
  writeFileSync(bodyFile, body, "utf8");
  out("gh", ["pr", "create", "--base", "main", "--title", title, "--body-file", bodyFile]);
} finally {
  rmSync(tmpDir, { recursive: true, force: true });
}
