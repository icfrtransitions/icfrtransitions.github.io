# By-hand exclusion audit (D2): results

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. Rule: [by-hand-audit-seed-2026-11-03.md](by-hand-audit-seed-2026-11-03.md). Draw: [by-hand-audit-draw-2026-11-03.md](by-hand-audit-draw-2026-11-03.md). Deviation D2: [corrections-and-deviations-2026-11-03.md](corrections-and-deviations-2026-11-03.md).

Row-level record: [data/by-hand-audit-reading-2026-11-06.csv](../data/by-hand-audit-reading-2026-11-06.csv).

## The reading

- **Who and how.** The investigator read all 120 drawn filings by hand, with no AI first-pass result shown, and recorded each on a reading sheet. The investigator confirmed on November 6, 2026 that the reading was done by hand.
- **When received.** The completed sheet was received on November 6, 2026 (06:52 UTC).
- **Draw check.** The sheet's accession numbers reproduce both published draw fingerprints, in draw order (AQ `711fab65…`, NP `75e709e8…`).
- **Reading time.** AQ 618 minutes and NP 655 minutes, about 21 hours in total, as recorded per filing.

## Corrections and resolutions (investigator, November 6, 2026)

These were settled after the sheet was received and before anything was published. The sheet's original entries stay in the CSV; the final value and the reason are in the columns `wrongful_exclusion_final` and `resolution_note`.

- **Six NP entries corrected from "yes" to "no"**: Klotho Neurosciences (51), Pangaea Logistics (53), Yoshiharu Global (55), Life360 (56), CV Sciences (58) and Albemarle (59). Each was entered as wrongful, but no statement was found and each note says management's assessment is present. A wrongful exclusion needs a qualifying statement.
- **Nine "unsure" entries resolved as not wrongful.** None needs a new scope rule.
  - **Range Capital Acquisition Corp. (NP 45):** the newly public statement is present. The filer is a blank-check company (SIC 6770), which is outside the registered scope. The screen excluded it under rule X1, correctly.
  - **Four amendments (AQ 6 Wave Life Sciences, AQ 7 Interactive Strength, AQ 39 Texas Mineral Resources, AQ 49 Agrify):** no statement in the 10-K/A or in the original 10-K. They are not wrongful however amendments are treated. AQ 6 was entered as "no" with a note saying unsure; it is listed here so the record is complete.
  - **Four asset-backed trusts (NP 52 BANK 2017-BNK6, NP 54 GM Financial receivables trust, NP 57 Wells Fargo Commercial Mortgage Trust 2024-5C1, NP 60 BMO 2024-5C5):** no statement found. They are not wrongful however such trusts are treated.
- **Still open (no effect on these counts):** whether 10-K/A filings that carry only Part III information, and asset-backed trusts, belong in the screen's frame. This will be considered with the codebook; it does not change any result here.

## Results

| Cohort | Read | Qualifying statement found | Wrongful exclusions | 95% interval (exact binomial) |
| --- | --- | --- | --- | --- |
| AQ | 60 | 0 | **0** | 0% to 5.96% |
| NP | 60 | 1 (Range Capital; out of scope, X1) | **0** | 0% to 5.96% |

**Filings not in the first audit** (reported separately, as the seed requires):

| Cohort | Read | Wrongful exclusions | 95% interval |
| --- | --- | --- | --- |
| AQ | 56 | 0 | 0% to 6.38% |
| NP | 54 | 0 | 0% to 6.60% |

No wrongful exclusion was found, so nothing is handled under D1 and protocol section 7 is not triggered.

**Side observations (no action needed).** Two NP-draw filings mention acquired businesses excluded from management's assessment: America's Car-Mart (NP 12) and Travelers (NP 31). They are AQ matters, not NP, and both filings already pass the 2025 AQ screen (AQ-IN).

## Reconciliation with the automated checks

All of the following are AI-assisted automated checks. They are compared with the investigator's reading only now that the reading is recorded.

**1. The 21 deferred first-audit filings, now checked.** The one-by-one re-check of the first audit ([rechecks-validation-and-first-audit-2026-11-03.md](rechecks-validation-and-first-audit-2026-11-03.md)) held back the audited filings that are also in the draw. They were run on November 6, 2026, after the reading was received, with the same tests:

| Cohort | Deferred | Statement found |
| --- | --- | --- |
| AQ | 8 | 0 |
| NP | 13 | 0 |

All 21 agree with the investigator's reading.

**Correction to the re-check file.** It reports 14 NP filings deferred and 638 checked. The correct figures are **13 deferred and 639 checked**. Recomputing from the published audit frame gives 13 NP audited filings in the draw, and the run's table holds 13 deferred NP rows. The NP results there are otherwise unchanged (6 statements found, all known). The AQ figures there (8 deferred, 533 checked) are correct.

With this step, every filing in the first audit has been re-checked: AQ 541 (3 statements, 2 wrongful exclusions: Liberty Media and Arcadium Lithium) and NP 652 (6 statements, 1 wrongful exclusion: TechTarget).

**2. Screens S2 and S3.**
- No drawn filing passed S2.
- 15 drawn filings passed S3: AQ draw 26, 27, 36, 37, 38, 41, 50 and 60; NP draw 8, 19, 26, 30, 40, 49 and 58. (S3 was run on AQ X3 exclusions; the NP-draw filings are also in that frame.) All 15 were among the 490 recorded "Not eligible: no exclusion statement (AI triage)" in [S3-results-2026-11-04.md](S3-results-2026-11-04.md). The investigator found no statement in any of them, so the reading agrees with the triage on these 15.
- None of the 31 AQ additions from S2, Arcadium and S3 is in the draw.

## What this means

- The investigator's by-hand reading found **no wrongful exclusion in 60 AQ and 60 NP** automatic exclusions.
- **The audit has limited power.** An upper bound of 5.96% of 5,409 AQ exclusions is about 320 filings. The misses already identified (Liberty Media plus the 31 additions, 32 in all) are about 0.6% of the AQ frame. A draw of 60 would be expected to contain fewer than one of them, so a result of 0 of 60 is consistent with them. It is not evidence that the 2025 AQ screen missed nothing.
- The AQ screen is known to be incomplete by at least 32 issuer-events. D2 bounds the rate; it does not replace the S2 and S3 corrections.
- D2 itself remains a protocol amendment: 60 per cohort instead of the registered 10% (deviation D2).

## Limits

- One reader. The reading has not been checked by a second person.
- The automated checks in the reconciliation are AI-assisted text searches, not human independent review.
