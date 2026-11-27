#!/usr/bin/env node
/**
 * Start a task on a fresh branch from the current origin/main.
 *
 *   node scripts/start_task.mjs feat/next_task
 *   node scripts/start_task.mjs feat/next_task --dry-run
 *
 * The local main checkout is stale on purpose. Always branch from origin/main.
 */

import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const branch = args[0] ?? "";
const dryRun = args.includes("--dry-run");

if (!/^(feat|fix|docs|chore)\/[a-z0-9_]+$/.test(branch)) {
  console.error("usage: node scripts/start_task.mjs <feat|fix|docs|chore>/<name> [--dry-run]");
  console.error("Use lowercase letters, digits and underscores in the name.");
  process.exit(1);
}

const name = branch.split("/")[1];
const worktree = resolve(root, "..", `bio_${name}`);

function run(command, commandArgs) {
  if (dryRun) {
    console.log([command, ...commandArgs].join(" "));
    return;
  }
  execFileSync(command, commandArgs, { cwd: root, stdio: "inherit" });
}

run("git", ["fetch", "origin"]);
run("git", ["worktree", "add", "-b", branch, worktree, "origin/main"]);

if (!dryRun) {
  console.log(`\ncd ${worktree}`);
  console.log('\nnode scripts/note.mjs --as <handle> "what you started"');
}
