# STATUS

The live board. **Edit only your own row.** Keep it short enough to read in 20
seconds. States: `idle`, `doing`, `review`, `blocked`, `demo`.

| Person | Agent | State | Now | Branch / PR | Blocker |
| --- | --- | --- | --- | --- | --- |
| @AARenor | omp | demo | challenge 3 copy and fixed no photo default | feat/challenge_three | none |
| @linnudtonisted | OpenCode | review | NFC fault media: photo/video, details, voice note | PR #14 (`feat/nfc-fault-evidence`) | device test |
| @Pepukarv | _fill in_ | idle | _pick a task_ | — | — |
| @stevenlaas123-pixel | _fill in_ | idle | repo hardening | `chore/team-workflow` | — |

## Demo-critical path

The three-minute story only works if these hold. Anything here beats polish.

1. Tap an NFC sticker (or QR / asset field fallback) and see the asset name.
2. Speak a check; the transcript fills the structured field.
3. A bad photo is refused and the evidence tier stays low.
4. Audit console answers a question; tamper break lands on the exact record.
5. Sample CIP month is visibly labelled synthetic; paper form prints.

## Current risks

- NFC and camera are **not device-tested** in this repo. Test on the demo phone
  before claiming them.
- `main` deploys to production. Broken merges are visible to judges.
- The hash chain is the differentiator; never weaken verification for a demo.
