# Decisions

Short, dated records of choices the whole team must follow. Add a new entry at
the top. One screen maximum. If it is reversible and local, do not record it.

---

## 2026-11-27 — Minimal capture app: ledger removed, line selector added

**Decision.** The main app no longer shows the proof-chain panel: no record list, audit questions, filter, JSONL export, tamper-break demo or sample CIP summary. Those functions were removed from `app.js` and the gate was updated. A **Line** dropdown (All lines, Line 1–5) was added above the asset field; choosing a line pre-fills the asset in both Estonian and English. Records are still appended with a hash chain.

**Why.** The owner asked for a minimal app: the ledger content was not wanted on the capture screen. The dropdown makes a line's cleaning checkable through the site without typing.

**Consequence.** The original demo story loses its on-screen audit and tamper-break beat; the showcase page still demonstrates the wider flow. This is an explicit change of scope requested by the owner, not a hidden regression.

---

## 2026-11-27 — Card-based app shell with one dominant action

**Decision.** The app, showcase and paper form share a card system: soft `#F3F6F7` page background, white rounded surfaces with a light shadow, an at-a-glance status card, boxed inputs, chip-shaped filters and one large primary action. Press feedback and row entrance are short and disabled under reduced motion. The layout follows Dribbble tap-to-pay and health-dashboard patterns: big status, quick chips, calm hierarchy.

**Why.** The old screens were a dense document with competing actions. A worker needs the asset, the clean action and the chain state in one glance, on a phone, without typing.

**Consequence.** No copy, data model or offline behaviour changed. The verify gate, bilingual strings and 44px targets still hold; all new colours and radii are tokens, so a future retheme stays a one-file edit.

---

## 2026-11-27 — Illustration palette becomes the site design system

**Decision.** `app/illustration.svg` sets the visual language: A. Le Coq red `#A30029` for primary actions, mint `#0B7A59` for clean states, a `#F3F6F7` soft wash and rounded cards. Colours live as tokens in `app/styles.css`; the showcase and paper form use the same tokens instead of local hex values.

**Why.** The site and the hero illustration told two different visual stories. One token set keeps the product consistent and makes the next UI change a token edit instead of a hunt through inline styles.

**Consequence.** Blue accents are gone. Contrast stays at WCAG AA (8.11:1 for white on red, 13.62:1 for ink on paper); the offline shell and bilingual copy are unchanged.

---

## 2026-11-27 — Language buttons start listening; no signature field

**Decision.** Tapping ET / RU / EN both selects the language and immediately
starts speech recognition. The separate speak button repeats in the selected
language. The supervisor signature field and its tier C validation are removed;
tier C saves with the fixed default reason.

**Why.** The worker treated the language buttons as the voice mode and spoke
without pressing a second button. A signature field added typing to a flow that
must stay fast and offline.

**Consequence.** Unsupported browsers or unsupported languages show a clear
bilingual message; the worker can type or record a clip instead. Audit filters
no longer rely on `supervisor`.

---

## 2026-11-27 — Speech language is explicit, detected from the text

**Decision.** The single language dropdown is replaced by ET / RU / EN buttons;
Estonian is the default. Each recorded sentence is also classified from its
text (Cyrillic → RU, Estonian letters/words → ET, otherwise EN) and the detected
codes are stored in `speech_lang`. The "Reason when there is no hard evidence"
field is removed; tier C uses the fixed default reason instead.

**Why.** Web Speech API needs one BCP-47 language per session and cannot listen
in three languages at once. English was the old default, so spoken Estonian was
written as English. Explicit buttons plus text classification make the recorded
language correct and keep tier C traceable without extra typing.

**Consequence.** The worker picks ET/RU/EN before speaking. A wrong pick can
still mis-transcribe; the detected language is stored, not the selected one.

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
