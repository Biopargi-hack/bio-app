# Notes — @linnudtonisted

Append-only. Newest at the bottom. One line per session is enough; include the
file or line number when it helps the next person.

Format:

```
- **2026-11-27 14:05** — what changed, what you learned, what is next
```

---


- **2026-11-27 12:35** — Feat #13: NFC fault media — photo/video upload, fault details textarea and MediaRecorder voice note; blobs in IndexedDB v2 media store with hashes in the chain. verify 16/16; browser at 390px and desktop, offline reload, fake mic and generated WebM all passed. NFC/camera/mic not device-tested.

- **2026-11-27 12:36** — Opened PR #14 from feat/nfc-fault-evidence for issue #13; awaiting review and device test.

- **2026-11-27 12:54** — PR #14 follow-up: single writable note field replaces two textareas; speech recognition ET/RU/EN appends each sentence as a new line in its own language; voice-note mode also transcribes; speech_lang saved with record. Rebased onto current main. verify 18/18; Playwright tested RU/EN/ET speech, manual typing, photo, video, offline and 390px/desktop. Not device-tested.

- **2026-11-27 13:41** — Fix #14 after rebase onto main #17/#18/#20: precache real ./showcase.html and bump cache to v4 so offline shell installs; kept grade marks alongside media/speech marks.

- **2026-11-27 14:04** — Issue #22: replaced voice-language dropdown with ET/RU/EN buttons (ET default); transcript-based language detection stored in speech_lang; removed reason field and use fixed default for tier C. verify 19/19; Playwright tested RU/EN/ET speech, reason absent, tier C save, offline, 390px/desktop. Real speech recognition not device-tested.

- **2026-11-27 14:17** — Issue #24: ET/RU/EN buttons now start speech recognition directly; clear bilingual messages for unsupported browser/language/permission; removed supervisor signature field and its tier C validation. verify 19/19; Playwright tested all three buttons, main speak button, tier C save without signature, offline, 390px/desktop and unsupported-browser path. Real speech not device-tested.

- **2026-11-27 15:35** — Issue #27: speech sessions now use continuous=true, interimResults=true and a 2500ms silence timer that resets on speech; final results join into one paragraph without duplicates; language buttons, main speak button and voice-note transcription share the helper. verify 19/19; Playwright fake continuous results confirmed mic stays open through pauses and closes after ~2.5s, early stop, voice note, offline. Real device not tested.

- **2026-11-27 16:03** — Issue #45: restored the hidden transcript textarea so speech and typing are visible; removed the Evidence tier label/output from the capture card while keeping tierFor() for records. verify 20/20; Playwright confirmed field visible at 390px and desktop, ET speech lands in it, manual typing works, tier absent, save and offline reload pass. Real device not tested.

- **2026-11-27 17:19** — Issue #66: switched README production URL, NFC card URL, demo links and deployment details to taptoprove.ee; verify gate now requires the taptoprove.ee demo link. Confirmed taptoprove.ee serves the app and nfc.arle.top redirects to it. verify 23/23.

- **2026-11-27 17:21** — Started fix/speech-to-text off origin/main (1fe306e) for issue #44: PR 62 set speech locale straight from navigator.language and dropped interim words, so speech stopped producing text. Claimed issue, will port the PR 47 approach without reviving removed audio recorder.

- **2026-11-27 17:56** — Fixed speech-to-text on fix/speech-to-text: normalise browser locale to et-EE/ru-RU/en-US with en-US fallback, keep interim words, detect language from first words and restart the recogniser, store detected language. verify.mjs 26/26 plus Playwright fake SpeechRecognition (ET/RU/EN, bare locale, unsupported fallback, interim-only, saved record) and offline reload all pass. No real microphone test; PR opened next.

- **2026-11-27 18:02** — Rebased fix/speech-to-text twice onto the moving remote tip (3b897af then f185396) and force-pushed the PR branch with --force-with-lease, disclosed in PR #72. Only STATUS.md conflicted (own row); all checks rerun and pass.

- **2026-11-27 18:03** — PR #72 checks green (verify 26/26, pr-notes, preview deploy). Owner's agent is using admin merge to ship this demo-critical speech fix to taptoprove.ee without waiting for a second reviewer, the third such bypass in this repo; disclosed in the PR comment. Real microphone still untested on a phone.

- **2026-11-27 18:50** — Issue #88: restored ET/RU/EN language buttons that start speech in the chosen locale; kept continuous listening and 2.5s silence timer; video button now reads Filmi video in both dictionaries. verify 33/33; Playwright confirmed three languages, correct locale, text in transcript, no errors. Real device not tested.

- **2026-11-27 18:52** — Bumped service worker CACHE to tap-to-prove-32b72d14562b after rebase so verify gate matches current assets; verify 41/41.

- **2026-11-27 19:04** — Restamped service worker cache to tap-to-prove-1d345ca063a6 after rebase onto #89; verify 45/45.

- **2026-11-27 19:06** — Restamped cache to tap-to-prove-e15b9eaf650c after rebase onto #95.

- **2026-11-27 19:08** — Restamped cache to tap-to-prove-ef6a19103b18 after rebase onto #99.

- **2026-11-27 19:21** — Issue #103: verify now normalizes CRLF to LF before hashing assets, so Windows and CI compute the same cache digest; restamped CACHE to tap-to-prove-bad4c1f636b0. verify 50/50.
