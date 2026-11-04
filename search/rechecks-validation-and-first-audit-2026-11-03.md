# Re-checks: Q3 validation negatives (I1) and the first exclusion audit, one by one

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. Prepared November 3, 2026. This completes the two items left open in [I1-retrospective-check-2026-11-03.md](I1-retrospective-check-2026-11-03.md) under "Not yet checked".

Both checks were run through the project's automation (AI-assisted, November 3, 2026). Every hit was read. Neither check is a human independent review.

## 1. Q3 validation, AQ second sample: rows coded N or O

**Records recovered (part of open item O1).** The automation's run logs from November 1, 2026 (21:00–21:08 UTC) still hold the record of every filing read in the Q3 AQ validation: the 8-K, its date, and the accession number of the 10-K that was read. The 53 rows coded N or O in [Q3-validation-results-2026-11-01.md](Q3-validation-results-2026-11-01.md) were matched to those 10-Ks. That gives 49 distinct filings, because rows 48 and 130, rows 95 and 128, and rows 153, 162 and 179 share a 10-K.

**Check.** Each 10-K was searched for any statement, by management or by the auditor, that management excluded something from its ICFR assessment. This is the test that decides whether interpretation I1 could apply.

**Result.**
- All 49 filings were retrieved.
- None contains such a statement.
- I1 cannot apply, and no validation decision changes. The Q3 recall figures are unchanged.

**Still open under O1.** The full row-level validation records (8-K accession, dates and reasons for every one of the 185 rows) are not yet published. They can now be exported from the run logs.

## 2. First exclusion audit: every audited filing re-checked

**Why.** The first audit's negatives were AI first-pass results (deviation D2), and none had been re-checked individually.

**Scope.** All filings in the first audit: 541 AQ and 652 NP ([data/exclusion-audit-frame-AQ-2026-11-01.csv](../data/exclusion-audit-frame-AQ-2026-11-01.csv) and [data/exclusion-audit-frame-NP-2026-11-01.csv](../data/exclusion-audit-frame-NP-2026-11-01.csv), rows marked `in_ai_audit_2026_11_01 = yes`).

**Deferred to keep the by-hand audit blind.** Any audited filing that also appears in the by-hand audit draw ([by-hand-audit-draw-2026-11-03.md](by-hand-audit-draw-2026-11-03.md), either cohort) was not checked: 8 AQ and 14 NP filings. They will be checked after the investigator's reading is recorded.

**Tests.** The whole filing was searched, not only Item 9A:
- **AQ:** any statement, by management or by the auditor, that management excluded something from its assessment, near an acquisition term.
- **NP:** the newly public transition statement.

Every hit was read. Two AQ downloads failed at first and succeeded on retry.

**Results.**

| Cohort | Audited | Deferred | Checked | Statement found | First audit had found it |
| --- | --- | --- | --- | --- | --- |
| AQ | 541 | 8 | 533 | 3 | 1 |
| NP | 652 | 14 | 638 | 6 | 6 |

**AQ hits:**
- **Liberty Media** (0001558370-25-001830): known. It is the first audit's find (C1), also in the S2 decisions.
- **Arcadium Lithium plc** (0001977303-25-000006; audit rank 140; screen decision X3): **new.** The filing states that "Allkem's business has, therefore, been excluded from management's assessment of internal control over financial reporting for the year ended December 31, 2024."
  - The first audit (AI first pass) missed it.
  - Screen S2 also did not pass it. The likely reason is that no acquisition term falls within 300 characters of the exclusion wording; this is to be confirmed.
  - **Eligibility not yet decided** (investigator).
- **IAC Inc.** (0001800227-25-000013): false match ("excluded from our assessment of performance" in MD&A). Not a statement.

**NP hits:** all 6 were found by the first audit: TechTarget (C1), three blank-check companies (X1) and two exchange-traded funds (X2). No new NP statement.

## What this means

- The validation results stand. I1 changes nothing in the identified earlier decisions.
- The first audit's AQ negatives contain at least one filing with an exclusion statement that the AI first pass missed (Arcadium Lithium), pending its eligibility decision. If it is eligible, it is a second wrongful exclusion in the audited AQ sample (2 of 541 instead of 1 of 541).
- Protocol section 7 says any wrongly excluded in-scope filing triggers a rule revision and a re-screen. A miss by S2 would raise that question again for S2. This will be decided and recorded with the Arcadium decision.
- The NP side of the first audit is confirmed: no missed NP statements among the 638 filings checked.
- The by-hand audit (D2) remains the estimate of the screen's miss rate. The 22 deferred filings will be added to this check after it.

## Limits

The searches are automated text tests. A statement worded differently from the patterns used could have been missed. That is the reason the by-hand audit is kept.
