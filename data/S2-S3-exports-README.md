# S2 and S3 per-filing results: data dictionary

ICFR Transitions Study. Exported November 6, 2026 from the automation tables that hold the run results: S2_Rescreen_2025 (5,172 rows) and S3_Rescreen_2025 (4,831 rows). Each filing appears once. Where a first download failed, the export uses the successful retry.

The exports reproduce the published fingerprints. SHA-256 is taken over sorted accession numbers joined by "\n":

| File | Filings | Frame fingerprint | Passes | Pass fingerprint | File SHA-256 |
| --- | --- | --- | --- | --- | --- |
| [S2-results-per-filing-2026-11-03.csv](S2-results-per-filing-2026-11-03.csv) | 4,856 | `bd39fc38…` (as in [S2-results](../search/S2-results-2026-11-03.md)) | AQ 55, NP 2 | (not published for S2) | `7ab9a881e58c247e1f4d5ab76a319b353d370f44e18daee408111b5775a89573` |
| [S3-results-per-filing-2026-11-04.csv](S3-results-per-filing-2026-11-04.csv) | 4,442 | `f544ac4c…` (as in [S3-results](../search/S3-results-2026-11-04.md)) | 505 | `8c47b02b…` | `92a4efefdee243fc4a3089b844bb12d8a1a9727e211cee7ea849308b1c739652` |

The S3 frame equals the set of S2 filings with `aq_s2 = X3`.

## S2 columns

| Column | Meaning |
| --- | --- |
| accession, cik, company, filed | EDGAR identifiers and filing date |
| tested_for | Cohorts in which the 2025 screen excluded the filing under X3 (AQ, NP or AQ+NP) |
| aq_s2, np_s2 | `S2-pass`, `X3` (still excluded), or `-` (not tested in that cohort) |
| aq_passages, np_passages | Passages tested: `s1:n` is Item 9A passages, `s2:n` is management's report passages |
| aq_first_match, np_first_match | For passes, the text around the first match. A match is not an exclusion statement; see the decision. |
| aq_decision, np_decision | For passes, the eligibility decision from [S2-eligibility-2026-11-03.md](../search/S2-eligibility-2026-11-03.md), with the reasons given there |
| document_url, index_url | The main 10-K document read and the filing index |

## S3 columns

| Column | Meaning |
| --- | --- |
| accession, cik, company, filed | EDGAR identifiers and filing date |
| s3 | `S3-pass` or `X3` |
| passing_source | For passes, the passage that passed: `item9a#i/n` or `mgmt#i/n` |
| first_passing_sentence | For passes, the first sentence meeting the S3 sentence test. Most are auditor-attestation boilerplate (see S3-results). |
| decision | For passes: `Eligible (investigator)` or `Not eligible (investigator)` for the 8 filings read by the investigator; `Not eligible: not an acquisition exclusion (AI triage)` for the 7 false matches; `Not eligible: no exclusion statement (AI triage)` for the other 490 |
| document_url, index_url | The main document read and the filing index |

## Limits

The screen results come from automated text tests. The AI-triage decisions were not read individually by the investigator.
