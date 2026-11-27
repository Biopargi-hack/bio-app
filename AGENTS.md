# AGENTS.md

Operating rules for anyone — human or AI agent — working in this repository.
Read this file, `docs/coordination/STATUS.md` and your own note file before you
start. Keep them current.

## Mission

**Tõend** is a production-line flight recorder for the A. Le Coq challenge at
Hack the Future of Food 2026. Tap a sticker, say what you did, attach evidence,
and keep an append-only record with an evidence tier and a hash chain.

Win the demo: **tap → speak → bad photo refused → audit → tamper break**, in
under three minutes, on a phone, offline if needed.

## Current state

- `app/` is a plain static PWA. No bundler, no npm dependencies, no build step.
- Deployed to Cloudflare Pages (`toend`) on every push to `main` and as a
  preview per pull request.
- Records live in IndexedDB on the device. There is no backend yet.
- Web NFC and camera are real APIs but **not verified on a physical device in
  this repo**. Never claim they work without a device test; say what you tested.

## Golden commands

```bash
cd app && python3 -m http.server 8765   # local preview
node scripts/verify.mjs                 # the gate: syntax, links, manifest, secrets
node scripts/note.mjs "what you did"    # append to your coordination note
```

There is no `bun install` and no test runner. `verify.mjs` is dependency-free on
purpose. If you add tooling, justify it in the commit message.

## Non-negotiables

1. **One primary action per screen.** One clear next step; destructive actions
   are separated by space and never adjacent to the primary action.
2. **Two seconds, no typing.** A clean check never requires a keyboard. Pre-fill
   everything you can.
3. **Offline is the default.** Capture works with no network. Records go to
   IndexedDB before any request.
4. **Never lose a record.** The ledger is append-only; edits produce a new
   entry. The hash chain must stay verifiable.
5. **Bilingual copy.** UI strings exist in Estonian (`et`) and English (`en`)
   through the `data-i18n` dictionary. Add both, sentence case, plain verbs.
6. **Use the existing design tokens.** Colours, spacing and type come from the
   custom properties in `app/styles.css`. No new raw hex or magic px in JS.
7. **Accessibility is a floor.** WCAG 2.1 AA, 44pt touch targets, visible focus,
   screen-reader labels, reduced motion respected.
8. **No secrets in the repo.** Deploy credentials live in GitHub Actions
   secrets. Only `${{ secrets.NAME }}` references may appear in workflows.

## Architecture rules

- `app/index.html` — screens and copy. `app/app.js` — capture, photo check,
  ledger, audit. `app/styles.css` — the visual system. `app/sw.js` — offline
  shell.
- Keep the app dependency-free. Prefer platform APIs over libraries.
- Domain vocabulary (evidence tiers, checkpoint names) lives in `app.js` in one
  place; do not scatter string literals across the UI.
- The deploy workflow is the only deploy path. Manual `wrangler` is for
  incidents only, and must be noted in `docs/coordination/notes/`.

## Working with other agents

The repo is the message bus. Four people, four agents, no chat history shared.

1. **Claim before you build.** Put your handle, agent name and task in your row
   of `docs/coordination/STATUS.md`, and open or assign an issue. One task per
   person at a time.
2. **Write notes, not essays.** Append to `docs/coordination/notes/<handle>.md`
   only. Never edit someone else's note file — that is how agents merge without
   conflicts. `node scripts/note.mjs "..."` does this for you.
3. **Hand off explicitly.** Use the *Handoff* issue template. State what is
   done, what is not, the next action, and the files involved.
4. **Decide in public.** Any choice that affects others goes in
   `docs/coordination/DECISIONS.md` with the date, the options and the reason.
5. **Talk through pull requests.** PR comments are the async conversation.
   Review someone else's PR before asking for review on yours.

## Git and review

- `main` is protected: no direct pushes, no force pushes, one approval, green
  checks. Work on `feat/...`, `fix/...`, `docs/...` branches.
- Squash merge only. The PR title becomes the commit subject: imperative,
  scoped, e.g. `feat(app): refuse unusable photos`.
- Every PR fills the template: what changed, how it was verified, what was
  **not** tested, and the handoff. CI rejects PRs that skip these sections.
- Keep PRs small enough to review in five minutes. One logical change.

## Definition of done

- [ ] `node scripts/verify.mjs` passes locally.
- [ ] The change was exercised in a browser at 390px wide and on desktop.
- [ ] Offline path still works (DevTools → Network → Offline, reload, capture).
- [ ] Both `et` and `en` copy added where the UI changed.
- [ ] Keyboard focus and screen-reader labels checked for new controls.
- [ ] PR template complete; `docs/coordination/STATUS.md` row updated.
- [ ] Anything not tested on a real device is named in the PR.

## Do not

- Push to `main`, force-push, or bypass the ruleset except during a demo
  emergency (then say so in the PR and the note file).
- Add a framework, package manager or backend during the hackathon unless the
  brief changes.
- Commit `.env`, tokens, photos of real people or real production data.
- Rewrite another person's note file or STATUS row.
- Claim NFC, camera or speech recognition works without a device test.
