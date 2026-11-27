# Decisions

Short, dated records of choices the whole team must follow. Add a new entry at
the top. One screen maximum. If it is reversible and local, do not record it.

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
