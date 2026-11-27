# Tõend

Prototype for A. Le Coq challenge 3 at Hack the Future of Food 2026, 27 and 28 November, Tartu.

## Idee kirjeldus

Kujuta ette, et töötad A. Le Coq'i tehases. Sinu ülesanne on iga natukese aja tagant kontrollida, kas limonaadi või õllemasinad on puhtad.

Praegu peab töötaja iga kontrolli järel täitma paberil või arvutis igavaid tabeleid. See võtab kaua aega, tüütab ära ja vahel ununeb üldse ära. Lisaks ei saa igas kohas telefoniga pilti teha, aga kuidagi peab ikkagi tõestama, et kontroll on tehtud.

Lahendus on NFC kleepsud. See on nagu viipemakse pangakaardiga, ainult et raha maksmise asemel kinnitad masina puhtuse. Igale tähtsale masinale kleebitakse veekindel NFC kleeps. Töötaja paneb telefoni korraks vastu kleepsu. Ekraanile hüppab eeltäidetud tekst "Kõik on puhas ja korras" ja töötaja vajutab ühte suurt rohelist nuppu KINNITA. Kogu tegevus võtab 2 sekundit. Kui midagi on must, vajutab töötaja punast nuppu, valib listist vea, näiteks "vaht maas", ja teeb võimalusel pildi.

## Live site

Production: https://nfc.arle.top

Every push to `main` deploys automatically. No build step, no manual publish. A push starts a GitHub Action that uploads the `app/` folder to Cloudflare Pages, usually in under a minute. Newer pushes cancel older deploys, so the newest commit always wins. The app shell is network first: a reload fetches the newest files, and an offline device falls back to the cached shell.

Pull requests get their own preview URL printed in the Action log. Branch name becomes `preview-pr-N`, so four people can work at once without waiting for each other.

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
| `app/index.html` | Screens and copy |
| `app/styles.css` | Visual system |
| `app/app.js` | Capture, photo check, hash chain, audit console |
| `app/sw.js` | Offline shell |
| `app/sample_cip.csv` | Synthetic CIP month, labelled on screen |
| `app/paper.html` | Printable paper form for the timed comparison |
| `scripts/verify.mjs` | Dependency-free gate: syntax, links, manifest, precache, secrets |
| `scripts/note.mjs` | Append a session note to your coordination file |
| `docs/coordination/` | Status board, per-person notes, decisions, agent brief |
| `AGENTS.md` | Operating rules for humans and AI agents |
| `.github/workflows/deploy.yml` | Deploy on every push and pull request |
| `.github/workflows/ci.yml` | `verify` and `pr-notes` checks on every pull request |

No npm dependencies, no build command. Plain files go straight to Pages.

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

1. Give a judge an NFC sticker. They put it on any object, tap it with an Android phone in Chrome, and the asset name appears on the stamp. If NFC is unavailable, use the asset field or a QR link. iPhone browsers cannot write NFC.
2. They press **Hold to speak** and say a check. The transcript fills the structured field. If the browser has no speech recognition, they type it.
3. They take a deliberately bad photo of a shiny surface. The photo check refuses it and the tier stays C until a usable photo or instrument reading exists.
4. They ask an audit question from the console, then press **Show tamper break**. The edited copy breaks at the exact record. Stored records are untouched.
5. Show the sample CIP month, labelled synthetic, then print the paper form and time five checks against the app.

## What is real and what is sample

Records, tags and photos the judge makes during the demo are live, stored in IndexedDB on the phone. The CIP month is generated by us and labelled on screen as sample data, synthetic, not A. Le Coq. It never mixes into the judge's records.

There is no server yet. Everything stays on the device until a backend is connected. The header shows how many records are queued. Export JSONL gives the handover file.

## Deployment details

Cloudflare Pages project name: `toend`. Production branch: `main`. Custom domain: `nfc.arle.top`.

Secrets are stored in the GitHub repo as `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`, set from the machine's `~/.config/opencode/api-keys.env` without printing values. If a secret is ever rotated, update the repo secret too.

To deploy by hand from this machine:

```bash
cd app
npx wrangler@4.151.0 pages deploy . --project-name=toend --branch=main
```

## Local check

```bash
cd app
python3 -m http.server 8765
```

Open `http://localhost:8765`. Web NFC needs HTTPS and Android Chrome, so the live site is the real test for tag reading.
