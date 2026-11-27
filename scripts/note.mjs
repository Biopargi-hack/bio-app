#!/usr/bin/env node
/**
 * Append a one-line session note to your coordination file.
 *
 *   node scripts/note.mjs "photo check rejects glare; threshold in app.js:214"
 *   node scripts/note.mjs --as Pepukarv "demo script shortened to 2:40"
 *
 * The handle comes from --as, then GITHUB_ACTOR, then git config user.name.
 */

import { execFileSync } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const notesDir = join(root, "docs", "coordination", "notes");

const args = process.argv.slice(2);
let handle = process.env.GITHUB_ACTOR ?? "";

const asIndex = args.indexOf("--as");
if (asIndex !== -1) {
  handle = args[asIndex + 1] ?? "";
  args.splice(asIndex, 2);
}

if (!handle) {
  try {
    handle = execFileSync("git", ["config", "user.name"], {
      cwd: root,
      encoding: "utf8",
    }).trim();
  } catch {
    // Fall through to the usage error below.
  }
}

const message = args.join(" ").trim();

if (!handle || !message) {
  console.error('usage: node scripts/note.mjs [--as handle] "what you did"');
  process.exit(1);
}

const known = existsSync(notesDir)
  ? readdirSync(notesDir)
      .filter((name) => name.endsWith(".md"))
      .map((name) => name.replace(/\.md$/, ""))
  : [];

const slug = known.find((name) => name.toLowerCase() === handle.toLowerCase());

if (!slug) {
  console.error(`Unknown handle "${handle}". Known handles: ${known.join(", ") || "none"}`);
  console.error("Pass --as <handle> with the exact GitHub handle.");
  process.exit(1);
}

mkdirSync(notesDir, { recursive: true });

const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
const file = join(notesDir, `${slug}.md`);
appendFileSync(file, `\n- **${stamp}** — ${message}\n`);

console.log(`noted in ${relative(root, file)}`);
