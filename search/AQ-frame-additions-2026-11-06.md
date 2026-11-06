# AQ frame additions: description and comparison with the sample

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. This is the description that deviation D1 calls for ([corrections-and-deviations-2026-11-03.md](corrections-and-deviations-2026-11-03.md)). Prepared November 6, 2026.

Row-level file: [data/AQ-frame-additions-2026-11-06.csv](../data/AQ-frame-additions-2026-11-06.csv). SHA-256 of the 31 accession numbers, sorted and joined by "\n": `b0058df071391346bf4e6f58ba23ca23883f138f2f4b8b4451d7f77965ac9ad4`.

## The additions

The 31 eligible AQ issuer-events that the 2025 screen excluded, found after the fixed sample was set:

| Found by | Count | Decision record |
| --- | --- | --- |
| Screen S2 | 26 | [S2-eligibility-2026-11-03.md](S2-eligibility-2026-11-03.md) |
| First-audit one-by-one re-check (Arcadium Lithium; also passes S3) | 1 | [S3-frozen-2026-11-04.md](S3-frozen-2026-11-04.md) |
| Screen S3 | 4 | [S3-results-2026-11-04.md](S3-results-2026-11-04.md) |

- Liberty Media, the first audit's find, is listed separately in clarification C1 and is not among the 31.
- First National Corp ([Q3-validation-records-2026-11-06.md](Q3-validation-records-2026-11-06.md)) is not included because its eligibility is not decided.
- Sensitivity: Olympic Steel is not included; it would add 1 under broader naming. Casella is included under interpretation I1; without I1 the count would be 30.
- The additions are not in the random order and do not enter the fixed sample (decision of November 3, 2026).

## Comparison with the fixed AQ sample (30)

The fields come from the 2025 screen table (form, filing date, SIC code, screen decision) and from the eligibility records (excluded businesses).

| | Additions (31) | Sample (30) |
| --- | --- | --- |
| Form | 10-K: 31 | 10-K: 30 |
| 2025 screen decision | X3: 31 | AQ-IN: 29; R0 (manual review): 1 |
| Filed Jan–Mar 2025 | 23 (74%) | 21 (70%) |
| Filed Apr–Jun | 3 | 5 |
| Filed Jul–Sep | 4 | 2 |
| Filed Oct–Dec | 1 | 2 |
| Manufacturing (SIC 2000–3999) | 18 (58%) | 12 (40%) |
| Services (7000–8999) | 4 | 6 |
| Finance, insurance, real estate (6000–6799) | 2 | 4 |
| Transportation, communications, utilities (4000–4999) | 3 | 2 |
| Wholesale trade (5000–5199) | 0 | 3 |
| Mining (1000–1499) | 1 | 2 |
| Construction (1500–1799) | 2 | 0 |
| Retail trade (5200–5999) | 1 | 1 |
| Distinct issuers | 31 | 30 |
| Issuers in both groups | 0 | 0 |

**Excluded businesses (additions).** 23 additions exclude one named business, 4 exclude two, 2 exclude three and 2 exclude four. Brown & Brown also excludes nine smaller acquisitions that are not named. The same count for the sample comes from draft codings that the investigator has not yet verified, so it is not reported here.

## What this shows

- **The additions look like the sample on form and filing timing.** All are original 10-Ks, and about three-quarters were filed in the first quarter.
- **The additions lean more toward manufacturing**: 58% against 40%. With 31 and 30 cases this difference is descriptive only. No test is planned or reported.
- **Why the screen missed them.** All 31 were excluded under X3: the 2025 screen found no exclusion statement in the Item 9A passage it read. S2 and S3 found the statements elsewhere:
  - in management's report placed outside Item 9A (44 of the 55 S2 AQ passes were on management's-report passages);
  - or in sentences beyond the 300-character window (Arcadium, and the S3 finds).

  This reflects where companies place the statement. The sample therefore probably under-represents filings that put the statement outside Item 9A. This is an inference from the screen design, not a measured result.
- **Effect on the study's estimates.** The sample is fixed, so these additions do not change it. Any finding from the AQ sample applies to issuer-events the 2025 screen detected. Whether the missed group differs on the study's outcomes (for example, material weaknesses or the size of the excluded business) is unknown. It could be checked only by coding the additions, which the protocol does not plan.

## Limits

- The comparison uses fields that are already recorded; nothing new was read for it.
- SIC codes are EDGAR's registrant codes and may not reflect the acquired business.
- The eligibility decisions behind the additions rest on AI-assisted reviews adopted by the investigator, as set out in each decision record.
