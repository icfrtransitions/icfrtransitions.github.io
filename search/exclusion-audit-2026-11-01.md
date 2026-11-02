# Exclusion audit: 2025 screen

ICFR Transitions Study. Protocol v1.4, section 7. Seed and rules: [sampling-seed-2026-11-01.md](sampling-seed-2026-11-01.md), committed before the draw.

**Run on November 1, 2026. Wrongful exclusions confirmed by the investigator the same day.**

## Method

- **Frame:** every filing in the 2025 screen that was excluded automatically, per cohort.
  - The screen decided X1, X2 or X3 (and X4 for NP).
  - The screen sent the filing to manual review (R0), and the first-pass whole-document read found no qualifying statement.
- **Draw:** each frame was sorted by accession number and shuffled with mulberry32 seed 20261104. The first 10%, rounded up, were audited.
- **Re-read:** each audited filing was read in full (AI-assisted first pass), not only Item 9A, looking for a qualifying exclusion statement (AQ) or newly public transition statement (NP). Any filing with a statement found went to the investigator.

## Result

| | AQ | NP |
| --- | --- | --- |
| Automatic exclusions (frame) | 5,409 | 6,519 |
| Frame order, SHA-256 | `3cafeb73e6aa1e436343a036e6745e91aadbac7adcf8cad67f8e4115e970fe26` | `7bcc29362dcb175fb92f323e16d31b3b1420f2dd77b710e9bd07cb6b0bac417f` |
| Audited | 541 (446 X3, 56 R0, 21 X2, 18 X1) | 652 (478 X3, 141 R0, 20 X2, 13 X1) |
| Audited list, SHA-256 | `9782d819dc2f245038d0c64b1f91eb3a074b2444e57fa214eb8819377332276d` | `bc25d2e50cca272195084eb869a73f90a151c26f5132f06c42808a067b734263` |
| Qualifying statement found | 1 | 6 |
| Correctly excluded anyway (X1 shell or X2 fund) | 0 | 5 |
| **Wrongful exclusions (investigator-confirmed)** | **1 of 541** | **1 of 652** |

**Correct exclusions despite a statement (NP):** these are blank-check companies or crypto funds that the protocol excludes by design under X1 or X2:
- Aldel Financial II;
- Columbus Acquisition;
- Roman DBDR Acquisition II;
- WisdomTree Bitcoin Fund;
- Invesco Galaxy Ethereum ETF.

## Wrongful exclusions

| Cohort | Company | Filing | Screen decision | Statement |
| --- | --- | --- | --- | --- |
| AQ | Liberty Media Corp | [0001558370-25-001830](https://www.sec.gov/Archives/edgar/data/1560385/000155837025001830/lmca-20241231x10k.htm) | X3 | "The Company's assessment of internal control over financial reporting did not include the internal controls of Quint Events, LLC which the Company acquired in the first quarter of 2024." |
| NP | TechTarget, Inc. | [0000950170-25-078416](https://www.sec.gov/Archives/edgar/data/2018064/000095017025078416/ttgt-20241231.htm) | X3 | "This Annual Report on Form 10-K does not include a report of management's assessment regarding internal control over financial reporting … due to a transition period established by rules of the Securities and Exchange Commission for newly public companies." |

As the seed file requires, each is added to its cohort's candidate list after the last ordered candidate:
- Liberty Media becomes AQ rank 330.
- TechTarget becomes NP rank 119.

Both are reported separately as audit additions.

## What this means

The observed wrongful-exclusion rate is about 0.2% in each cohort. Applied to the frames, roughly 10 more filings per cohort may have been missed across 2025. This is an estimate from a small number of events, and its uncertainty is wide. Results describe the search-identified cohorts, and this rate is reported with them.
