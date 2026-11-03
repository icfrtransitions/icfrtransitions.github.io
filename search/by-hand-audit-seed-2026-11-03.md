# By-hand exclusion audit: seed and selection rule

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. This amends section 7 as described in [corrections-and-deviations-2026-11-03.md](corrections-and-deviations-2026-11-03.md), deviation D2.

**Committed on November 3, 2026, before the draw and before any of the drawn filings is read.** This file's GitHub commit date is the public timestamp.

## Frames

The frames are the automatic exclusions of the 2025 screen, published in full on November 3, 2026:
- [data/exclusion-audit-frame-AQ-2026-11-01.csv](../data/exclusion-audit-frame-AQ-2026-11-01.csv): 5,409 filings;
- [data/exclusion-audit-frame-NP-2026-11-01.csv](../data/exclusion-audit-frame-NP-2026-11-01.csv): 6,519 filings.

Both files list the frame in the seed-20261104 order of the first audit. Their accession order reproduces the SHA-256 fingerprints published in [exclusion-audit-2026-11-01.md](exclusion-audit-2026-11-01.md): AQ `3cafeb73…`, NP `7bcc2936…`. The first 541 (AQ) and 652 (NP) rows, marked `in_ai_audit_2026_11_01 = yes`, are the filings of the AI-assisted first audit. Those lists also reproduce the published fingerprints: AQ `9782d819…`, NP `bc25d2e5…`.

**Record note.** The two commits that added the frame files (dea9734 and b16d876, November 3, 2026) carry an unrelated commit message ("Update print statement from 'Hello' to 'Goodbye'"). The GitHub web editor inserted it and it was not caught before committing. Commit history is not rewritten, so the messages stay as they are. The files' content is as described here.

## Rule

1. For each cohort, sort the frame's accession numbers in ascending order.
2. Shuffle with mulberry32 seed **20261106** (descending Fisher–Yates; the same implementation as [tools/shuffle.js](../tools/shuffle.js)), starting a fresh generator for each cohort.
3. The first **60** filings in each shuffled list form the by-hand audit draw.

The draw may include filings that were also in the AI-assisted audit. The overlap will be counted and reported. Results are reported for the whole draw and separately for the filings that were not in the first audit.

## Reading

- The investigator reads each drawn filing by hand. The reading covers Item 9A, management's report on internal control wherever it appears, and the auditor's report, looking for a qualifying statement:
  - **AQ:** a named, recently acquired business excluded from management's assessment;
  - **NP:** the newly public transition statement, together with the FRM 4310.6 conditions.
- No AI first-pass result is shown to the investigator before the reading.
- For each filing the investigator records: statement found (yes or no); the passage, if found; whether the exclusion was wrongful; and the reading time.
- The wrongful-exclusion count is reported per cohort with its denominator of 60 and an exact binomial 95% interval.
- Each wrongful exclusion found is handled under deviation D1: the revised screen S2, with the fixed sample kept.
