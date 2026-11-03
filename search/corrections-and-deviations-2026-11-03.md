# Corrections, clarifications and protocol deviations: November 3, 2026

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2 (DOI 10.17605/OSF.IO/JNPR2).

**Status of this file.** It was prepared on November 3, 2026, after an outside AI-assisted audit of the public record (ChatGPT) and an AI re-check (Claude). It corrects and clarifies the earlier search/ files without editing them. Every earlier file stays as published, and the commit history shows what changed and when. None of the checks described here is a human independent review.

Each item is labeled as one of:
- **correction** (a factual error);
- **clarification** (wording or provenance);
- **deviation** (the registered protocol was not followed as written);
- **open** (unresolved).

---

## D1. Exclusion audit did not trigger the registered rule revision and re-screen (deviation)

**What the protocol says.** Protocol section 7: "Any wrongly excluded in-scope filing triggers a rule revision under a new query-set version and a re-screen of the affected window."

**What happened.** The exclusion audit ([exclusion-audit-2026-11-01.md](exclusion-audit-2026-11-01.md)) found one wrongful exclusion in each cohort. Both were excluded by rule X3 (qualifying statement not in Item 9A):
- Liberty Media Corp (AQ);
- TechTarget, Inc. (NP).

The two filings were added after the last ordered candidate, as the [seed file](sampling-seed-2026-11-01.md) provides. No rule revision was made and no re-screen was run. That is a departure from section 7.

**Likely cause, to be confirmed.** The screen reads the text between the "Item 9A" and "Item 9B" headings. When management's report sits elsewhere, for example in Item 8 with a cross-reference from Item 9A, the statement is not seen and the filing is excluded under X3.

**Correction planned, not yet run.**
- A revised screen (S2): when the Item 9A text has no qualifying statement, also apply the same proximity test to the section headed "Management's Report on Internal Control", wherever it appears.
- S2 will be frozen and published before it runs.
- It will re-screen every filing excluded under X3 in the 2025 frame: 4,497 AQ and 4,722 NP.
- It cannot be tested on the 2025 validation cases as if they were new.

**Effect on the sample.**
- The fixed sample of 30 per cohort was drawn from the original candidate order and is kept. Coding of the sample started on November 2, 2026.
- Filings that S2 adds were never in the random order, so they could not have been selected.
- **Decision (investigator, November 3, 2026):** keep the published sample. Report the S2 additions as a frame-completeness correction, with their count and a description, plus a descriptive comparison with the sample on the main fields.
- The full frame will not be re-randomized, because that would replace cases after coding began (section 5, no substitution).

This deviation will be reported in a dated OSF update.

## D2. Exclusion audit was an AI-assisted re-read, not a by-hand re-read (deviation)

**What the protocol says.** Protocol section 7: "the investigator re-reads by hand a random 10% of automatic exclusions".

**What happened.**
- The 541 AQ and 652 NP audited filings were re-read by an AI-assisted first pass.
- The investigator then confirmed the filings in which a statement was found: 7 found, 2 confirmed as wrongful exclusions.
- There is no record of the investigator re-reading the audited filings in which no statement was found.

**Effect.** The published rates (1 of 541; 1 of 652) rest on AI first-pass negatives. They may understate wrongful exclusions.

**Correction planned (investigator decision, November 3, 2026).**
- The investigator re-reads by hand a fixed seeded draw of 60 automatic exclusions per cohort from the same audit frames.
- Section 7 calls for 10% (about 1,200 filings, roughly 80–120 hours by hand), which is not feasible at the registered pace of about 6 hours a week. The smaller draw is therefore a protocol amendment, to be filed on OSF with this reason.
- The seed, the frames and the draw are published before any reading.
- Results are reported separately from the AI-assisted audit, which stays published as it is. Uncertainty is reported for 60 per cohort.

## C1. Audit additions are not in the candidate files (clarification)

The exclusion audit says Liberty Media becomes AQ rank 330 and TechTarget NP rank 119. The candidate files end at ranks 329 and 118, and their SHA-256 fingerprints cover those ranks only. The two additions are listed here so the record is complete:

| Cohort | Rank | Company | Filing | Source |
| --- | --- | --- | --- | --- |
| AQ | 330 | Liberty Media Corp | [0001558370-25-001830](https://www.sec.gov/Archives/edgar/data/1560385/000155837025001830/0001558370-25-001830-index.htm) | Exclusion audit, appended after the last ordered candidate |
| NP | 119 | TechTarget, Inc. | [0000950170-25-078416](https://www.sec.gov/Archives/edgar/data/2018064/000095017025078416/0000950170-25-078416-index.htm) | Exclusion audit, appended after the last ordered candidate |

Neither addition was reached: each cohort had 30 eligible issuer-events by rank 43. The core candidate orders and their fingerprints are unchanged. D1 deals with the missing re-screen; this listing does not solve it.

## C2. OSF update said investigator verification was pending (clarification)

- The OSF update was submitted at 21:24:10 UTC on November 1, 2026 and approved at 21:25:56 UTC. Its text says "investigator verification of the positives is pending and any change will be reported".
- The investigator's confirmation of all 32 Q3 positives (32 confirmed, 0 rejected) was recorded 23 minutes later in commit 953f8f5, at 21:49:21 UTC.

Both records were accurate when made. A follow-up OSF update will report that verification was completed with no change. The original update stays as filed.

## C3. Seed-file wording about prior eligibility checks (clarification)

**The wording.** The seed file says it was committed "before any candidate's eligibility was checked".

**What it overstates.** Some main-frame candidates had already been read as search-validation cases. This is expected under section 4, which aligns the AQ validation sample with the main window. The overlap, matched by accession for AQ and by company name for NP:

| Cohort | Overlap with the candidate list | Overlap with the 60-case sample | In the second-coder subset |
| --- | --- | --- | --- |
| AQ | 27 candidates | 4: VAALCO (#1), RXO (#22), National Bankshares (#41), Resideo (#42) | none |
| NP | 13 candidates | 4: Ibotta (#5), Alumis (#19), KinderCare (#28), zSpace (#40) | Ibotta, Alumis |

**Why the overlap could not change the sample.** The random order was fixed by the published seed. Eligibility follows written rules.

**Correction.** The seed file's wording is too absolute. It should read: "before the main candidate lists were put in random order and before main-sample eligibility checks began; some candidates had already been read as search-validation cases."

## C4. Sonida (AQ rank 16): acquisition dates in the investigator's note (correction)

**The error.** The eligibility note says the excluded acquisitions were made "Oct to Nov 2024".

**What the filing says.** The FY2024 10-K lists:
- the Atlanta Acquisition (November 2024);
- the Palm Acquisition (October 2024);
- the Macedonia Acquisition (May 2024);
- the acquisitions by the consolidated Palatine JVs (July 2024).

**Effect.** The decision (Not eligible) rests on how the businesses are named, not on dates, so the date correction does not change it. C6 deals with the naming rule.

## C5. Labels "S1", "P1" and "event test" in the eligibility notes (clarification)

These labels appear only in the investigator's eligibility notes; where they come from is not recorded. They are not defined in protocol v1.4. Mapping:

| Label in notes | Registered provision |
| --- | --- |
| "P1 requires a name" | Section 3, Cohort AQ: excludes "one or more named, recently acquired businesses" |
| "S1 event test" | Section 3, Cohort AQ: "recently acquired"; section 1: one year and one report (SEC ICFR FAQ Question 3) |
| "S1 significance requirement" | Section 1: management must identify the business and state its significance (FAQ Question 3) |

Disclosure of significance was **not** applied as an eligibility condition. Three cases were found eligible although the first pass found no size disclosure for them: Abacus (#26), GoHealth (#40) and Intelligent Protection Management (#14). The labels therefore appear to add no unregistered eligibility requirement; the investigator should confirm.

## C6. Naming rule as applied (clarification; sensitivity planned)

**The rule as applied.** Section 3 requires "named" businesses but does not define naming. The decisions in [sample-2026-11-02.md](sample-2026-11-02.md) apply this rule:

> Eligible when the exclusion statement, read with the text it expressly cross-references or the adjacent sentence it relies on, identifies at least one excluded business by a legal name, trade name or a recognized short form of one. A label built only from a place name, or a generic description, does not qualify.

**How the decisions fit the rule:**

| Case | How the business is identified | Decision |
| --- | --- | --- |
| Surgery Partners #3 | "this facility", with the hospital named in the preceding sentence | Eligible |
| DNOW #19 | names in adjacent text | Eligible |
| Patrick #31 | Note 3 cross-reference that names Sportech and RecPro | Eligible |
| Intelligent Protection Management #14 | short form "NTS" | Eligible |
| Abacus #26 | short forms "Carlisle" and "FCF" | Eligible |
| National Bankshares #41 | short form "FCB" | Eligible |
| Sonida #16 | place-based labels for community purchases | Not eligible |
| Camping World #32 | a generic description ("tire rescue roadside assistance business") | Not eligible |

**Status.** The investigator confirmed this wording on November 3, 2026 as the rule applied. It was written after selection, so it is a clarification of the rule as applied, not a new rule. The sample does not change.

**Sensitivity planned.** Under a broader rule (any identifiable acquired business), Sonida and Camping World would be eligible. The 30th eligible AQ candidate would then fall at rank 41, and Resideo (#42) and Addus (#43) would fall outside. A sensitivity table will report results both ways.

## C7. Q3 validation: retrieval and screening reported separately (clarification)

For the AQ second sample, Q3 retrieved all 15 eligible positives (retrieval recall 15/15). The automated screen passed 14 (pipeline recall 14/15). The miss, ANI Pharmaceuticals, was a screen failure ("except for" wording), not a retrieval failure. Manual review (R0) could not recover it, because the filing failed the screen rather than going to R0. For NP, retrieval and pipeline recall were both 17/17.

## C8. Research brief label (correction)

The brief's header read "reviewed October 31, 2026". That was the investigator's own revision, not an independent review. The label now reads "last revised by the investigator October 31, 2026; pre-data draft; independent practitioner review pending".

## C9. Returning issuers in the NP sample (clarification)

Two sampled NP companies had filed annual reports in earlier years. FRM 4310.6 looks at the prior fiscal year, so earlier reports alone do not disqualify a company. EDGAR filing histories, re-checked November 3, 2026:

| Case | Earlier history | Prior fiscal year (FY2023) |
| --- | --- | --- |
| Capstone Holding Corp. #14 | Annual reports through FY2018; Form 15-12G deregistration on Sept 25, 2019; no filings until the S-1 of Dec 31, 2024 | No annual report filed. No reporting obligation is evident from the filing record. |
| Smithfield Foods #35 | Annual reports through the fiscal year ended Jan 3, 2016; no annual or quarterly reports from mid-2016 until the S-1 of Jan 6, 2025 | No annual report filed. No reporting obligation is evident. |

Both remain eligible. The absence of an obligation is inferred from the filing record; it is not stated in a filing.

## O1. Validation records not fully published (open)

- **NP:** the Q3 NP validation results list the 20 issuers kept but summarize the others considered.
- **AQ:** the Q3 AQ results include 21 rows coded O (no exclusion found; transaction type not classified). The stopping rule counts acquisitions read, so those rows affect whether the 100-acquisition cap was applied correctly.

The underlying records are held in the project's automation tables. They will be exported and published as they were recorded, not reconstructed. Until then, these points are open.

## O2. Exclusion-audit frames not yet published (open)

The audit file gives SHA-256 fingerprints of the frames and the audited lists, but not the lists themselves. Those fingerprints cannot be reproduced until the lists are exported and published.
