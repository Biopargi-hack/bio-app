# Decisions

Short, dated records of choices the whole team must follow. Add a new entry at
the top. One screen maximum. If it is reversible and local, do not record it.

---

## 2026-11-27 — One writable note field, speech in the chosen language

**Decision.** Capture has one clearly writable note field. Typing goes straight
into it; speech recognition (ET, RU or EN) appends each recognised sentence as a
new line in the selected language. The selected `speech_lang` is saved with the
record. The separate "details" field was removed.

**Why.** Two textareas confused the worker and one was hard to type into. A
single field keeps typed and spoken notes together and traceable.

**Consequence.** `transcript` carries the full note; `details` is no longer
written. Voice note mode also transcribes to the same field while recording.

---

## 2026-11-27 — Fault media lives in a second IndexedDB store

**Decision.** Photo, video and voice clips are stored as blobs in a new `media`
object store (IndexedDB version 2). The hash-chained record keeps only the byte
hash, type, size and duration, plus the typed or spoken note and its language.

**Why.** The app has no backend and must work offline. Keeping blobs out of the
record body preserves the existing append-only hash chain while still tying each
clip to its record with a verifiable hash.

**Consequence.** Upgrading an existing device opens version 2 and creates the
store without touching old records. Ledger rows link to stored clips; a missing
clip hides its link instead of breaking the chain.

---

## 2026-11-27 — No team-wide review requests

**Decision.** Removed `.github/CODEOWNERS` and the "require code owner review"
rule. A pull request still needs one approval from any crew member and green
`verify` + `pr-notes` checks.

**Why.** A team code-owner rule requested a review from all four members on every
pull request, so every change emailed everyone. For a four-person team, one
approval is enough; the author asks one person.

**Consequences.** No automatic reviewer. The author requests a reviewer (or
mentions them) when opening the PR. The approval gate still blocks unreviewed
merges.

---

## 2026-11-27 — `main` is protected, repository is public

**Decision.** The repository is public and `main` requires a pull request, one
approval, and green `verify` + `pr-notes` checks. Squash merges only; force
pushes and branch deletion are blocked.

**Why.** GitHub Free only allows branch rules on public repositories. A public
repo also lets judges see the work and gives us free secret scanning.

**Consequences.** No direct pushes to `main`; the deploy follows a reviewed
merge. Admins can bypass for a demo emergency, and must note it afterwards.

---

## 2026-11-27 — Coordination lives in the repo

**Decision.** Agents coordinate through `STATUS.md`, per-handle note files,
issue templates, PR descriptions and this file — not through private chat.

**Why.** Four agents share no context. A file that survives the session is the
only reliable handoff.

**Consequences.** Every session starts by reading `STATUS.md` and ends with a
note. PRs that skip the template fail CI.
