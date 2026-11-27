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

- **2026-11-27 16:00** — Issue #44: removed the ET/RU/EN picker; mic now sniffs interim words and restarts recognition in ET, RU or EN, so the worker never selects a language. Detected code labels the transcript and is saved with the record. verify 20/20; Playwright with a fake SpeechRecognition confirmed ET no switch, RU/EN switch from first words, EN copy, saved speech_lang, 390px/desktop and offline shell. Real microphone not device-tested.
