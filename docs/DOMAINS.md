# Tap to Prove domains

Updated 2026-11-27. Two host names, one deploy, one app.

| Host | Used for | Example |
| --- | --- | --- |
| `https://taptoprove.ee` | Landing page, capture app, records sheet, showcase | `https://taptoprove.ee/`, `https://taptoprove.ee/showcase`, `https://taptoprove.ee/sheet` |
| `https://nfc.taptoprove.ee` | Every NFC card link, QR link and demo tag | `https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc` |

Both names are custom domains on Cloudflare Pages project `toend`. They serve the same files from the `main` deploy. The subdomain is a naming split for written cards, not a second app, backend or record store. Records still live in the device IndexedDB and the chain format is unchanged.

## Card URL format

```
https://nfc.taptoprove.ee/?asset=<place>&tag=<unique card id>&via=nfc
```

`asset` prefills the place, `tag` is written into every record as the card ID, and `via=nfc` opens the grade view with buttons 3, 2 and 1. Use a unique tag per physical card. The app does not write cards; a separate NFC tool does.

Generated examples are in `app/showcase.html` (`NFC_URL` and `MACHINE_LINKS`). The demo tags `TAP-DEMO-01` to `TAP-DEMO-09` have no physical stickers.

## Migration

Cards already written with `nfc.arle.top` still redirect to the app and keep working. Cards written with `https://taptoprove.ee/?asset=...` also still open the app because the query parsing is identical on both hosts. Do not rewrite those stickers just for the name. Write all new cards with `nfc.taptoprove.ee`.

Old values in session notes and git history are historical records and are left untouched. Current references in README, the demo runbook, the showcase and the verify gate use the new host.

## Verify

```bash
node scripts/verify.mjs
```

The gate rejects an NFC link on the landing host, a missing canonical landing URL, and README or runbook text that still points card links at `taptoprove.ee`.

Live check after a deploy:

```bash
curl -4 -sS -o /dev/null -w '%{http_code}\n' https://taptoprove.ee/
curl -4 -sS -o /dev/null -w '%{http_code}\n' 'https://nfc.taptoprove.ee/?asset=Pesu&tag=TAP-NFC-001&via=nfc'
```

Physical NFC reading and phone camera access are not device tested in this repo. A 200 from curl proves the address serves the app, not that a phone tap works.
