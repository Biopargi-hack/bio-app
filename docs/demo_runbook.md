# Tap to Prove: demo runbook

Live site: https://taptoprove.ee
Repo: https://github.com/Biopargi-hack/bio-app

## The three minute story

1. One person taps a card on the filler head. The page opens with the place filled in and KINNITA PUHAS in focus.
2. They press KINNITA PUHAS. The record appears with its card ID, source and checkpoint.
3. They tap another card and press "Pilti ei saa? Kasuta fikseeritud hinnangut". The record is tier C with the fixed reason and `default_assessment: true`.
4. They show a fault from the list and a bad photo being refused as hard evidence.
5. Open the audit questions. Show the unsigned clean checks and the tier C rows.
6. Press Show tamper break. The chain breaks in the copy while the stored records stay intact.
7. Print the paper form and put it beside the phone. The difference is the point.

Say plainly: the card ID shows which card was tapped. It is not a cryptographic signature. Real signing needs NTAG424.

## Before the demo

- Open the live site on a phone and reload once so the offline shell is fresh.
- Write the five cards in the app under Write 5 cards. Give each one a real place name.
- Tap one card. Confirm the place is filled, KINNITA PUHAS is focused, and the chain row shows `nfc <card ID>`.
- Open `/?asset=filler&tag=T1%20TEST&via=nfc` once. Confirm the row shows the same card ID.
- Press the fixed default button and confirm the row shows tier C, the fixed reason and `default_assessment: true`.
- Check that changing the asset field by hand clears the card ID and sets source to typed.
- Keep the paper form printed.

## Roles

| Handle | Job |
| --- | --- |
| @AARenor | App, tags, ledger, final device check |
| @stevenlaas123-pixel | Repo rules, reviews, PR template |
| @linnudtonisted | Checkpoint wording and food science answers |
| @Pepukarv | Three minute story and the pitch |

## Fast change loop

```bash
git fetch origin
git worktree add -b feat/<task> ../bio_<task> origin/main
cd ../bio_<task>
node scripts/verify.mjs
node scripts/note.mjs --as <handle> "what you did"
```

Push the branch, open a PR, let the checks finish, then squash merge. Each PR gets a preview URL in the Action log. Production updates from `main` in under a minute.

Do not branch from a stale local `main`. The old local checkout was left behind after squash merges.

## Review reality

`main` requires one approval. During this hackathon the owner has used admin merge twice to ship faster. Both merges are named in the note files. If that happens again, say so in the PR and in your own note.

## What is not device tested

Physical NFC writing and reading, Android background taps, and iPhone background reads are not verified on a real phone in this repo. Use the live site over HTTPS on the day. Do not claim more than you saw.
