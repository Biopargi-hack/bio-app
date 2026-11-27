# Coordination

Four people, four AI agents, one repository. This folder is the shared memory:
who is doing what, what was learned, and what was decided. It replaces the chat
history that agents do not share.

## The four surfaces

| Surface | File | Who writes | Rule |
| --- | --- | --- | --- |
| Live board | `STATUS.md` | each person, their own row | one row per person; update before and after work |
| Session notes | `notes/<handle>.md` | each person, their own file | append-only, newest at the bottom |
| Decisions | `DECISIONS.md` | whoever proposes | date, options, reason, consequences |
| Conversation | Issues and PRs | everyone | task = issue, change = PR, question = Discussion |

## The loop

1. **Read** `AGENTS.md`, `STATUS.md`, `DECISIONS.md`, and your note file.
2. **Claim** one item: update your `STATUS.md` row with task, branch and state
   `doing`, and assign yourself an issue (or open one from the *Task* template).
3. **Work** on a branch. Run `node scripts/verify.mjs` before pushing.
4. **Record** what you learned as you go:
   `node scripts/note.mjs "photo check rejects glare; threshold in app.js:214"`.
5. **Hand off** by opening a PR that fills the template, then set your row to
   `review` and mention the reviewer.
6. **Close** by moving your row to `idle` and appending one line: what shipped.

## Why separate note files

If all four agents append to one file, every session conflicts. One file per
handle means no two agents ever touch the same lines, and `git log` still gives
a single chronological story across the folder.

## Status vocabulary

`idle` · `doing` · `review` · `blocked` · `demo` (on the critical demo path)

A row in `blocked` must name the blocker and the person who can unblock it.

## Agent handoff format

```
**From:** @handle (agent name)
**To:** @handle (agent name)
**State:** what is finished, what is half-done
**Next action:** the single next step
**Files:** paths touched
**Not tested:** anything unverified, especially device features
```

Paste that into the *Handoff* issue, and link the branch or PR.

## Copy-paste brief for a new agent

See `AGENT-BRIEF.md`. Give it to the agent at the start of a session; it points
at this folder and the rules in `AGENTS.md`.

## Quiet Gmail

GitHub email is per account. `NOTIFICATIONS.md` has the one-time settings and a
Gmail filter. Team-wide review requests were removed on 27 November; a PR still
needs one approval, but only the chosen reviewer is notified.

## Cadence during the hackathon

- **Every 45 minutes:** update your `STATUS.md` row.
- **Before any demo run:** one person reads `STATUS.md` aloud; blockers get an
  owner immediately.
- **After the demo:** one note per person, one decision entry if the scope
  changed.
