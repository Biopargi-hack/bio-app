# Tap to Prove

Challenge 3: Simplifying the documentation of hygiene checks. Documentation must not disrupt production, must include fixed default assessments when no photo is available, and must produce a high quality traceable dataset.

Quick demo runbook: `docs/demo_runbook.md`. Earlier working name: Tõend.

## Idee kirjeldus

Kujuta ette, et töötad A. Le Coq'i tehases. Sinu ülesanne on iga natukese aja tagant kontrollida, kas limonaadi või õllemasinad on puhtad.

Praegu peab töötaja iga kontrolli järel täitma paberil või arvutis igavaid tabeleid. See võtab kaua aega, tüütab ära ja vahel ununeb üldse ära. Lisaks ei saa igas kohas telefoniga pilti teha, aga kuidagi peab ikkagi tõestama, et kontroll on tehtud.

Lahendus on NFC kaardid. Igale tähtsale masinale kleebitakse veekindel NFC kaart. Töötaja paneb telefoni korraks vastu kaarti ja saab eeltäidetud vaate "Kõik on puhas ja korras". Kiirnupud 3, 2 ja 1 salvestavad hinnangu mõne sekundiga. Kui pilti ei saa, kasutatakse nuppu "Pilti ei saa? Kasuta fikseeritud hinnangut". Kirje saab fikseeritud põhjuse ja tase C, aga andmed jäävad täielikuks ja jälgitavaks. Kui midagi on must, valitakse viga listist ja tehakse võimalusel pilt.

Kui sama kontrollkoha neli järjestikust hinnangut on 2, salvestatakse neljas hindena 1. Esialgne valik ja automaatse muutmise põhjus jäävad kirjesse; arvestus põhineb sama seadme kirjetel ning järgmine hinnang alustab uut jada.

Kaardid kirjutatakse eraldi NFC tööriistaga. Kaart kannab URL-i `https://nfc.taptoprove.ee/?asset=...&tag=...&via=nfc`. Puudutamine avab selle URL-i otse. Rakendus ei kirjuta NFC silti. Kirjete andmebaas on Supabase, ühenduse lisab meeskond.

## Live site

Production: https://taptoprove.ee

Landing leht: https://taptoprove.ee. Kirjeldus, salvestusvorm ja tööraamatu tabel.
NFC kaardid: https://nfc.taptoprove.ee. Ainult kirjevaade, ilma landinguta.
Mõlemad aadressid serveerivad sama deploy, vaade valitakse domeeni järgi. Kirjed jäävad selle domeeni seadmesse, kus need salvestati.
Landing page: https://taptoprove.ee, description, capture form and the workbook table.
NFC cards: https://nfc.taptoprove.ee, record entry only, no landing copy.
Both hosts serve the same deploy and pick the view from the hostname. Records stay in the device store of the origin that saved them.

Every push to `main` deploys automatically. No build step, no manual publish. A push starts a GitHub Action that uploads the `app/` folder to Cloudflare Pages, usually in under a minute. Newer pushes cancel older deploys, so the newest commit always wins. The app shell is network first: a reload fetches the newest files, and an offline device falls back to the cached shell.

Pull requests get their own preview URL printed in the Action log. Branch name becomes `preview-pr-N`, so four people can work at once without waiting for each other.

## Näide ja NFC link

Näide on lehel https://taptoprove.ee/showcase. NFC demo link on `https://nfc.taptoprove.ee/?asset=Villimisliin%202%20Filler%20head&tag=TAP-DEMO-01&via=nfc`. Leht näitab ühe villimisliini 100 kontrollikohta, muutja ja vaataja rolli, hinded 3, 2 ja 1 ning pildi, hääle, video ja teksti. Andmed on ainult näite lehel.

## Four contributors

The repository is public and `main` is protected: every change lands through a pull request with one approval from `@Biopargi-hack/crew` and green `verify` + `pr-notes` checks. Squash merge only; force pushes are blocked. Admins can bypass in a demo emergency and must note it afterwards.

Suggested split, from the selected idea:

| Role | Owns |
|---|---|
| Builder | Tag payload writer, app, ledger, demo |
| Food science or quality student | Checkpoint schema, domain answers |
| Designer and pitcher | Three minute story, paper form, visual polish |
| Second builder | Audit console, CIP import, validation numbers |

To contribute:

```bash
git clone https://github.com/Biopargi-hack/bio-app.git
cd bio-app
git switch -c feat/your-change
# edit files in app/
node scripts/verify.mjs
git add -A && git commit -m "feat(app): what changed"
git push -u origin feat/your-change
gh pr create --fill
```

Then update your row in `docs/coordination/STATUS.md`, append a note with
`node scripts/note.mjs "..."`, and squash-merge once checks are green.

Watch the deploy in the Actions tab, then reload the live site once. A warm phone or laptop picks up the new files on that reload. Add `?asset=filler%20head` to the URL to open a QR linked asset.

## Files

| File | Job |
|---|---|
| `app/index.html` | Screens, copy and the embedded live checkpoint grid |
| `app/styles.css` | Visual system for the NFC record view, the subpages and the capture form |
| `app/landing.css` | Black, white and red landing view on taptoprove.ee; imports `styles.css` as a layer for the capture form and grid |
| `app/landing.js` | Landing demo: simulated card tap onto a phone mock with a grade, nothing saved |
| `app/sheet.html` | Live records table and JSONL with attachments; links to Google Sheets |
| `app/app.js` | Capture, photo and video preview, hash chain, broadcast, Sheets sync and grid |
| `functions/api/ledger.js` | Serverless writer to Google Sheets and Drive |
| `app/sw.js` | Offline shell |
| `app/sample_cip.csv` | Static semicolon CIP sample, not linked to records |
| `app/paper.html` | Printable paper form for the timed comparison |
| `scripts/verify.mjs` | Dependency-free gate: syntax, links, manifest, precache, secrets |
| `scripts/note.mjs` | Append a session note to your coordination file |
| `docs/coordination/` | Status board, per-person notes, decisions, agent brief |
| `AGENTS.md` | Operating rules for humans and AI agents |
| `.github/workflows/deploy.yml` | Deploy on every push and pull request |
| `.github/workflows/ci.yml` | `verify` and `pr-notes` checks on every pull request |

No npm dependencies, no build command. Plain files go straight to Pages.

## Sheets connection

Cloudflare Pages secrets `GOOGLE_SERVICE_ACCOUNT` and `SHEET_ID` hold the service account JSON and the ledger sheet id. The account `tapprove-sheets@arleserver.iam.gserviceaccount.com` has writer access to the sheet. Its private key stays outside the repo at `~/.config/secrets/taptoprove_sheets_sa.json`. `wrangler.toml` binds the `EVIDENCE` KV namespace for uploaded files. The old 5 minute sync job is paused, because the app writes directly.

## Checks

`node scripts/verify.mjs` runs locally and in CI. It checks that JavaScript
parses, the manifest is valid and its icons exist, every local link resolves,
the service worker only precaches real files, and no secret is committed.

`pr-notes` fails a pull request whose description is missing any of the four
template sections: what changed, verification, not tested, handoff.

## Working together

Four people, four agents. Start with `AGENTS.md`, the live board in
`docs/coordination/STATUS.md`, and the copy-paste prompt in
`docs/coordination/AGENT-BRIEF.md`. Notes are one file per handle, so agents
never edit the same lines. Decisions go in `docs/coordination/DECISIONS.md`, and
handoffs use the issue template. PR comments are the async conversation.

## Demo in five beats

1. Give a judge an NFC sticker written with your own NFC tool. Tap it and the URL opens with the asset and card ID prefilled and grade buttons 3, 2 and 1 ready. If NFC is unavailable, use the asset field or a QR link. iPhone background reading is not device tested.
2. They press grade 3, 2 or 1, then press Append record. The record appears with its card ID, source, checkpoint and grade. With no photo or instrument reading, grade 3 stores the fixed default reason and tier C.
3. They tap another card, choose a grade, then show a fault from the list and a bad photo being refused as hard evidence.
4. Use the asset field or tap a sticker, then append one record. Show the queued count on the device.
5. Scroll to the checkpoint grid on the same page. Press a grade in the capture form, then press Append record. The grade lands in the current week column without a reload, and the same check goes to the `Live` tab of the Google Sheet. Open `/sheet` for the record table and JSONL, then print the paper form and time five checks against the app.

## What is real and what is sample

Records, tags and photos the judge makes during the demo are live, stored in IndexedDB on the phone and sent to Google Sheets through `/api/ledger`. The CIP month is generated by us and is labelled as sample data, synthetic, not A. Le Coq. It never mixes into the judge's records.

Every saved check posts to `/api/ledger`. The serverless writer signs a Google service account token, appends one row to the `Live` tab and stores each usable photo or video in a Cloudflare KV namespace with a public view link in the sheet. A failed send stays in a local queue and retries on the next save or when the connection returns. Files over 8 MB are skipped; the record still lands in the sheet. IndexedDB keeps the full record and attachments for the hash chain, and JSONL remains a manual backup. There is no Excel download and no CSV export.

The checkpoint grid on `taptoprove.ee` mirrors the `Live` tab: the same week columns, checkpoint rows and grade colours, filled from this device's records. A save from the capture form fills the cell at once, and a second tab on the same device follows through the browser broadcast. A record's `checkpoint` comes from the place name (`Pesu` becomes `Wash`, `Filler head` stays `Filler head`), which is what fills the grid. `/sheet` shows the records of this device.


Dictation has two paths. Where the browser has the Web Speech API (Chrome, Edge), words appear while you speak, and the same recording is sent to Whisper to correct the spelling. iPhone Safari has no speech API, so the `Räägi` button records a clip, sends it to `/api/transcribe` on the server, and writes the text into the note when you press the button again. The clip is plain `audio/webm` or `audio/mp4` depending on the browser, named `note.webm` or `note.m4a` to match, and a tap shorter than a word is ignored. This path needs a connection.

The live sheet at `/sheet` reads the same IndexedDB store as the capture app and follows new records on that device through a browser broadcast. It is same device only, same browser profile only. Cross device sync needs a shared store such as Supabase. There is no server yet.

The JSONL export keeps inspection records unchanged and adds a separate
`type: "attachment"` line for each photo, video or voice note. Each attachment
line contains its record sequence, storage key and a `data_url` holding the
original file. Export fails visibly if a referenced attachment is missing.

The capture screen shows the chosen photo or video straight away, with its file
name and size, and marks a photo the app cannot read as evidence. After saving,
a small card keeps the thumbnail and says whether the record went in with the
photo, with the video or without media. The live sheet has a Proof column with
that thumbnail; pressing it opens the full photo, video or voice note from
device storage.

The ledger sync reads those attachment lines, writes each file next to the
workbook under `media/`, uploads it to Drive and puts a hyperlink in the table.
The row then shows `foto` or `video` as a clickable link instead of a hash.

## Deployment details

Cloudflare Pages project name: `toend`. Production branch: `main`. Custom domains: `taptoprove.ee` (landing and app) and `nfc.taptoprove.ee` (NFC card links). The old `nfc.arle.top` alias redirects to the landing domain.

Secrets are stored in the GitHub repo as `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, set from the machine's `~/.config/opencode/api-keys.env` without printing values. If a secret is ever rotated, update the repo secret too.

Automatic deploy happens on every push to `main` and on same-repo pull requests
through `.github/workflows/deploy.yml`. The command below is a manual fallback:

```bash
cd app
npx wrangler@4.151.0 pages deploy . --project-name=toend --branch=main
```

## Local check

```bash
cd app
python3 -m http.server 8765
```

Open `http://localhost:8765`. The app has no NFC writer or card kit, so card writing uses a separate tool. The Supabase connection is a team handoff.
