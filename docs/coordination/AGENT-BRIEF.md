# Agent brief

Copy this into any AI agent at the start of a session. It is deliberately short;
the rules live in the repo, not in the prompt.

---

You are working in the GitHub repository `Biopargi-hack/bio-app` — **Tõend**, a
static offline-first PWA for a production-line hygiene record. Four people share
this repo, each with their own AI agent.

Before writing code:

1. Read `AGENTS.md`, `docs/coordination/STATUS.md`,
   `docs/coordination/DECISIONS.md` and your own note file.
2. Pick one task from `STATUS.md` or an open issue. Claim it by updating only
   your own row, and assign the issue to yourself.
3. Start every task with `node scripts/start_task.mjs feat/task_name`. It
   fetches `origin` and branches from the current remote tip.
4. Never commit to `main`. Never reuse a merged branch.

While working:

- Keep the app dependency-free. No npm, no bundler, no backend.
- Pre-fill fields; a clean check must not need a keyboard.
- Add both Estonian (`et`) and English (`en`) copy.
- Use the existing CSS custom properties; no raw hex or magic spacing.
- Do not claim NFC, camera or speech works unless it was tested on a device.

Before opening a PR:

1. Run `node scripts/verify.mjs` and fix everything it reports.
2. Exercise the change in a browser at 390px wide and on desktop. Test the
   offline path. Keep UI changes small so the preview and checks stay fast.
3. Append a note: `node scripts/note.mjs --as <handle> "what changed"`.
4. Open the PR only with `node scripts/open_pr.mjs "title" <changed files>`.
   List the exact paths. Never use `gh pr create --fill`. The helper writes all
   four required sections and refuses a branch that is behind `origin/main`.

Stop and ask (via an issue or PR comment) if a decision affects other people.
Record it in `docs/coordination/DECISIONS.md` once made.
