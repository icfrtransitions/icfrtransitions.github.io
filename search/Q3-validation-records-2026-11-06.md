# Q3 validation records (open item O1)

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. This publishes the row-level records behind [Q3-validation-results-2026-11-01.md](Q3-validation-results-2026-11-01.md), as open item O1 in [corrections-and-deviations-2026-11-03.md](corrections-and-deviations-2026-11-03.md) requires. Prepared November 6, 2026.

Row-level file: [data/Q3-AQ-validation-records-2026-11-01.csv](../data/Q3-AQ-validation-records-2026-11-01.csv).

## AQ second sample: exported

**Source.** The automation's run logs for the reading of November 1, 2026: eight runs of flow BVvS35edIv9VCqESLHaJf, 20:58 to 21:08 UTC (s6Gvigd9K3KHQAAA1hpZT, vuRrmzscWv8QtSAwDg3vw, y1zTTMsRelS6i9FqWxSnh, NkVRXnWgeM64FQ8VVfSCe, xSRM7C1wl4nw7vNnRfNlY, d1kIgBVXtfloYEfTtpZrg, FU47z2ldVu9Pnrl892RPb, NXQ2TOEfbYW9fQ2NAUmCR).
- Each run reports the shuffled order's fingerprint prefix `26ebf08663525fde`, which matches the published order (`26ebf086…`).
- The records are exported as logged.
- The published decision and reason are added for rows 1–185.

**What each row holds:**
- the 8-K date and the opening of its Item 2.01 text;
- the next annual report found (accession and filing date);
- whether the Q3 query returned it, and the Q3 screen result;
- the independent reader's hits, with excerpts;
- the published decision code and reason;
- the run it came from.

The logs record the 8-K by date and text only. **The 8-K accession numbers were not logged, so they are not in the file.** The CIK was logged only in the first run.

**Reconciliation with the published results (rows 1–185).**
- Decisions: 15 P, 32 N, 21 O, 7 W, 110 X, as published.
- All 15 positives were returned by the Q3 query. Fourteen passed the screen and one failed (case 185, ANI Pharmaceuticals), as published.
- Every P, N and O row has an annual report filed in 2025, and every W row has one outside 2025.
- No published decision conflicts with the logged record.

**The O rows.** O1 noted that the 21 O rows (no exclusion found; transaction type not classified) bear on the 100-acquisition stopping cap. The logs hold the 8-K text for each O row but do not classify the transaction, so the type cannot be taken from the record. On any reading, the count of acquisitions read stays below 100: P + N + O + W = 75 even if every O row is an acquisition. The cap was not reached.

### Rows retrieved after the stopping point (186–196)

The last run retrieved 11 filings beyond row 185, where reading stopped at the 15th positive. They were not part of the sample and were not read. They are included in the file, marked `no (retrieved after the stopping point)`, because they are in the log.

**One of them shows an acquired-business exclusion that the screens missed.**

| | |
| --- | --- |
| Row | 192 |
| Company | First National Corp /VA/ (CIK 719402) |
| Event | Merger with Touchstone Bankshares, effective October 1, 2024 (8-K) |
| Annual report | FY2024 10-K, [0001437749-25-010228](https://www.sec.gov/Archives/edgar/data/719402/000143774925010228/0001437749-25-010228-index.htm), filed March 31, 2025 |
| Logged excerpt | "management excluded the operations of Touchstone from its assessment of internal control over financial reporting as of December 31, 2024. Touchstone was merged with and into the Company …" |
| 2025 screen | X3 (Q3 screen fail) |
| S2 | X3: two Item 9A passages tested, no management's-report passage found |
| S3 | X3 |
| First audit / by-hand draw | Not included (audit-frame rank 4,407) |

- **Status: eligibility not decided (investigator).** The excerpt comes from the automated reader and has not yet been checked against the filing.
- If it is eligible, it is an in-scope filing that the 2025 screen, S2 and S3 all excluded. It would be found outside any audit, as Arcadium Lithium was.
- **A likely reason S3 missed it:** S3 requires an acquisition term (`acqui`, `merger`, `purchas`, `business combination`), and the logged passage says "merged". This is to be confirmed with the filing.
- Whether this calls for another rule revision under protocol section 7 is a decision for the investigator. It will be recorded with the eligibility decision.

## NP sample: not exported (still open)

O1 also covers the 58 NP companies that were considered but not kept. Their records are not in the run history that can now be retrieved: the automation lists only the 50 most recent runs of a flow, and the NP reading ran before those.
- The NP part of O1 stays open.
- The published NP results are unchanged: 20 kept, 17 positives, all returned by Q3.
- The NP frame and order can be recomputed from the published seed, but that would be a reconstruction, not the record. It will be labeled as such if it is done.

## Limits

The logged screening and reading were automated and AI-assisted. Only the 32 positives were verified by the investigator (November 1, 2026). The excerpts are partial text windows.
