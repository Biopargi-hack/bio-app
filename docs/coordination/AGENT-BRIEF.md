# Agent brief

Copy this into any AI agent at the start of a session. It is deliberately short;
the rules live in the repo, not in the prompt.

---

You are working in the GitHub repository `Biopargi-hack/bio-app` — **Tõend**, a
static offline-first PWA for a production-line hygiene record. Four people share
this repo, each with their own AI agent.

Before writing code:

1. Read `AGENTS.md` (operating rules), `docs/coordination/STATUS.md` (who is
   doing what), `docs/coordination/DECISIONS.md`, and
   `docs/coordination/notes/<your-handle>.md`.
2. Pick **one** task from `STATUS.md` or an open issue. Claim it by updating only
   your own row in `STATUS.md`, and assign the issue to yourself.
3. Create a branch: `feat/...`, `fix/...` or `docs/...`. Never commit to `main`.

While working:

- Keep the app dependency-free. No npm, no bundler, no backend.
- Pre-fill fields; a clean check must not need a keyboard.
- Add both Estonian (`et`) and English (`en`) copy.
- Use the existing CSS custom properties; no raw hex or magic spacing.
- Do not claim NFC, camera or speech works unless it was tested on a device.

Before opening a PR:

- Run `node scripts/verify.mjs` and fix everything it reports.
- Exercise the change in a browser at 390px wide, and test the offline path.
- Append a note: `node scripts/note.mjs "what changed and what you learned"`.
- Open a PR that fills every section of the template, including **Not tested**
  and **Handoff**. CI fails if a section is missing.

Stop and ask (via an issue or PR comment) if a decision affects other people.
Record it in `docs/coordination/DECISIONS.md` once made.
