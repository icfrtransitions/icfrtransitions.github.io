# Clarifications C10 and C11: asset-backed trusts and amendments

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2. These settle the scope question left open in [by-hand-audit-results-2026-11-06.md](by-hand-audit-results-2026-11-06.md). They continue the numbering in [corrections-and-deviations-2026-11-03.md](corrections-and-deviations-2026-11-03.md).

**Decided by the investigator on November 6, 2026, after the by-hand reading.** Neither clarification changes any published count.

## C10. Asset-backed trusts are investment vehicles under rule X2 (clarification)

**The question.** The by-hand audit drew four asset-backed trusts (NP 52, 54, 57 and 60). These file annual reports under General Instruction J to Form 10-K (Regulation AB), which permits omitting Item 9A. They make no management assessment of internal control over financial reporting.

**The rule.** Registered rule X2 excludes "Investment vehicle: trust, ETF, BDC or fund" ([Q2-frozen-2026-11-01.md](Q2-frozen-2026-11-01.md); unchanged in Q3).

**Decision.** Asset-backed issuers are trusts within X2 and are outside the registered scope.
- The automated screen did not apply X2 to them. It labelled them R0-none (Item 9A missing or short) or X3.
- This is a labelling error in the screen, not a change of scope.

**How many.** The 2025 screen table has at least 510 filings with SIC code 6189 (asset-backed securities). The count is a lower bound because the table query returns at most 500 rows per call, and March 2025 alone reached that limit.
- 5 of them are in the AQ audit frame and at least 500 in the NP audit frame, nearly all labelled R0-none.
- Asset-backed issuers under other SIC codes may exist; they are not counted here.

**Effect.**
- No eligibility decision, candidate list, sample or audit count changes, because these filings cannot hold either qualifying statement.
- Audits from now on report wrongful-exclusion rates both with and without asset-backed trusts.
- For the by-hand audit, the NP result without the four trusts is 0 of 56 (exact 95% upper bound 6.38%).

## C11. A 10-K/A is not a separate issuer-event (clarification)

**The question.** The by-hand audit drew four 10-K/As (AQ 6, 7, 39 and 49) that carry only Part III information or updated exhibits.

**The rule as already applied.** The sample decisions of November 2, 2026 treat a 10-K/A as not a separate event ([sample-2026-11-02.md](sample-2026-11-02.md): Stran & Company, rank 13; Pangaea Logistics, rank 27). The anchor is the original annual report. The Arcadium decision applies the same rule ([S3-frozen-2026-11-04.md](S3-frozen-2026-11-04.md)).

**Decision.** This is stated as the rule for every stage:
- A 10-K/A is never its own issuer-event.
- When a screen, audit or reading meets a 10-K/A, the original 10-K for the same fiscal year is checked. This is what the investigator did for the four amendments.
- A 10-K/A that restates or adds management's ICFR report is read together with the original. It does not create a second event.

**How many.** The audit frames hold 521 (AQ) and 673 (NP) 10-K/As. Not all carry only Part III.

**Effect.** No published decision changes. Every eligible case in the sample and among the 31 AQ additions is an original 10-K ([AQ-frame-additions-2026-11-06.md](AQ-frame-additions-2026-11-06.md)).

## Timing

Both clarifications were decided after the by-hand reading had shown these filings. Neither alters a decision or a count. Each follows a rule already registered (X2) or already applied (the anchor rule).
