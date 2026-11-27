# STATUS

The live board. **Edit only your own row.** Keep it short enough to read in 20
seconds. States: `idle`, `doing`, `review`, `blocked`, `demo`.

| Person | Agent | State | Now | Branch / PR | Blocker |
| --- | --- | --- | --- | --- | --- |
| @AARenor | omp | review | Several photos and videos per record: gallery preview, per-file remove, proof dialog shows every attachment, table links `media` to `media_6` | `feat/multi_photo` | device camera test |
| @linnudtonisted | OpenCode | review | Normalize cache hash across Windows and CI | `fix/cache_hash` | none |
| @Pepukarv | OpenCode | review | Capture UI polish and manual place selector | #96, fix/ui_visual_function | none |
| @stevenlaas123-pixel | omp | review | Remove speech language selector | `fix/remove-speech-selector` | device speech test |

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

