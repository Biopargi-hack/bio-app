# Tap to Prove: demo runbook

Landing page only: https://taptoprove.ee
Record entry only: https://nfc.taptoprove.ee/?asset=...&tag=...&via=nfc
Repo: https://github.com/Biopargi-hack/bio-app

## The three minute story

1. One person taps a card written with a separate NFC tool. The page opens with the place filled in and grade buttons 3, 2 and 1 ready.
2. They press 3. The record appears with its card ID, source, checkpoint and grade.
3. They tap another card and press 2 or 1. The grade appears in the ledger.
4. They show a fault from the list and a bad photo being refused as hard evidence.
5. With no photo or instrument reading, they press 3 and show tier C with the fixed reason and `default_assessment: true`.
6. Open the audit questions. Show the unsigned clean checks and the tier C rows.
7. Press Show tamper break. The chain breaks in the copy while the stored records stay intact.
8. Print the paper form and put it beside the phone. The difference is the point.

Say plainly: the card ID shows which card was tapped. It is not a cryptographic signature. Real signing needs NTAG424.

## Before the demo

- Open the NFC host on a phone and reload once so its offline shell is fresh. The landing host has no record form.
- Write the five cards with your own NFC tool. Give each one a real place name. The app does not write cards.
- Tap one card. Confirm the place is filled, grade buttons 3, 2 and 1 are visible, and the chain row shows `nfc <card ID>`.
- Open `https://nfc.taptoprove.ee/?asset=filler&tag=T1%20TEST&via=nfc` once. Confirm the row shows the same card ID and grade buttons.
- Press grade 3 with no photo or instrument reading and confirm the row shows tier C, the fixed reason and `default_assessment: true`.
- Change the asset field by hand and confirm the card ID clears and source changes to typed.
- Keep the paper form printed.

## Roles

| Handle | Job |
| --- | --- |
| @AARenor | App, tags, ledger, final device check |
| @stevenlaas123-pixel | Repo rules, reviews, PR template |
| @linnudtonisted | Checkpoint wording and food science answers |
| @Pepukarv | Three minute story and the pitch |

## Fast change loop

Always start from the current `main`. The old local checkout is stale after squash merges.

```bash
node scripts/start_task.mjs feat/my_task
cd ../bio_my_task
node scripts/note.mjs --as <handle> "what you started"
```

Make the change, then open the PR with the helper:

```bash
node scripts/verify.mjs
node scripts/open_pr.mjs "feat(app): short title" app/index.html app/styles.css
```

`open_pr.mjs` stages only the paths you list, commits them, pushes the branch and creates a PR with all four required sections. Do not use `gh pr create --fill`. It produces a body that fails the `pr-notes` check.

Each PR gets a preview URL in the Action log. Production updates from `main` in under a minute after an approval and a squash merge.

## Review reality

`main` requires one approval. During this hackathon the owner has used admin merge twice to ship faster. Both merges are named in the note files. If that happens again, say so in the PR and in your own note.

## What is not device tested

Physical NFC writing and reading, Android background taps, and iPhone background reads are not verified on a real phone in this repo. Use the live site over HTTPS on the day. Do not claim more than you saw.
