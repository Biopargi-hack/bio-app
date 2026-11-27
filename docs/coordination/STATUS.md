# STATUS

The live board. **Edit only your own row.** Keep it short enough to read in 20
seconds. States: `idle`, `doing`, `review`, `blocked`, `demo`.

| Person | Agent | State | Now | Branch / PR | Blocker |
| --- | --- | --- | --- | --- | --- |
| @AARenor | omp | doing | Split landing and NFC hosts, update docs and gate | `feat/nfc_subdomain` | none |
| @linnudtonisted | OpenCode | review | Speech-to-text: detect language from first words | `fix/speech-to-text`, issue #44 | device test |
| @Pepukarv | OpenCode | review | Remove 'Kaheksa kohta. Üks rutiin.' heading from landing | #70, fix/remove_checkpoints_title | none |
| @stevenlaas123-pixel | omp | review | Escalate four consecutive grade 2 checks | `feat/grade-escalation`, issue #84 | device test |

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

