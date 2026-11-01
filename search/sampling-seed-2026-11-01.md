# Main-sample seed and selection rules

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2 (DOI 10.17605/OSF.IO/JNPR2), section 5. Query version: [Q3](Q3-frozen-2026-11-01.md).

**Committed on November 1, 2026, before any candidate list was put in random order and before any candidate's eligibility was checked.** This file's GitHub commit date is the public timestamp.

## Candidate pool (from the 2025 screen)

- **Screen:** Q3 queries plus the automated Item 9A test over 2025 10-K and 10-K/A main documents, excluding March 3–6. That is 6,656 filings.
- **Candidates:**
  - AQ: 325 automatic AQ-IN filings, plus 7 manual-review (R0) filings confirmed by the investigator, for 332 filings.
  - NP: 107 automatic NP-IN filings, plus 13 confirmed R0 filings, for 120 filings.
- **Not yet decided:** passing the screen is not eligibility. Every candidate is still checked against sections 3 and 6 in list order.

## Ordering rule

1. **Deduplicate under C1:** one issuer-event per company (CIK), cohort and fiscal year. The fiscal year is the period of report in EDGAR. Where several filings fall in one issuer-event (for example a 10-K and a 10-K/A), the earliest-filed is kept and the others are listed with it.
2. **Sort** each cohort's issuer-events by the accession number of the kept filing.
3. **Shuffle** with mulberry32 seed **20261103** (Fisher–Yates, the same implementation used for the validation samples), separately for AQ and NP. Each cohort's shuffle starts from a fresh generator.
4. **Publish** the ordered lists before any eligibility check.
5. **Check eligibility in order.** The investigator checks each candidate in list order. An ineligible candidate is recorded with its reason and the next one is checked. The first 30 eligible issuer-events per cohort (or all, if fewer) form the fixed sample. No substitution after selection.

## Exclusion audit draw (protocol section 7)

- **Frame:** for each cohort, every filing excluded automatically. This means:
  - X1, X2, X3 or X4 in the screen;
  - R0 filings that the first-pass review recorded with no statement.
- **Order:** sorted by accession number and shuffled with mulberry32 seed **20261104**, separately per cohort.
- **Sample:** the first 10% of each frame, rounded up, with at least 10.
- **Reading:** each audited filing is re-read in full, first pass AI-assisted. Any filing where a qualifying statement is found goes to the investigator.
- **Reporting:** the count of wrongful exclusions is reported with its denominator. Wrongful exclusions found in the audit become candidates. They are added after the last ordered candidate, in the same seeded manner, and reported separately.
