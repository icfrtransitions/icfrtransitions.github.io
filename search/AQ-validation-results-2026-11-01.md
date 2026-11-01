# AQ search validation: results for query set Q2

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2 (DOI 10.17605/OSF.IO/JNPR2). Query set and sampling rules: [Q2-frozen-2026-11-01.md](Q2-frozen-2026-11-01.md).

**Status:** run on November 1, 2026, by the investigator with AI assistance (scripted EDGAR retrieval and first-pass reading). Every decision below is a first-pass decision pending the investigator's own verification against the filings. Nothing here is a confirmatory result.

## Result

| Measure | Value |
| --- | --- |
| Frame | 1,004 Form 8-K filings dated 2024 reporting Item 2.01 |
| Frame fingerprint | SHA-256 of the seeded adsh order: `eb7422ec8a6a1c0c0b42e569342cfada52a4f0446d79eca3b7b0abfe9b5dc4f8` |
| Filings read in seeded order | 91 (stopped at the 15th eligible positive) |
| Eligible positives | 15 |
| Positives returned by Q2 | 7 |
| **AQ recall of Q2** | **7 / 15 = 47%** (threshold 80%) |

**Consequence under protocol section 4:** Q2 fails for the AQ cohort. Q2 is not edited. A revised set, Q3, is written using development cases only, frozen in a new file, and validated on a new, separately drawn sample. The 15 cases below are not used to write Q3.

**Sensitivity.** Case 87 is counted as a positive with a flag: its exclusion sentence is placed in management's ICFR report but refers to "disclosure controls and procedures". If the investigator rejects it, the 15th positive becomes case 94 (Nicholas Financial), and recall is 7/15 or 8/15 (47–53%) depending on whether Q2 returns that report. The conclusion does not change.

Recall here counts a positive as found when any Q2 query returns its 10-K. The screening rules have not yet been applied to the 7 hits, so 7/15 is an upper bound on recall under the full definition.

## Eligible positives

| # | Company | CIK | 8-K date | Annual report (accession, filed) | Q2 queries that returned it |
| --- | --- | --- | --- | --- | --- |
| 4 | Ultralife Corp | 875657 | 2024-11-06 | 0001437749-25-010360, 2025-04-01 | none |
| 5 | Kewaunee Scientific | 55529 | 2024-11-01 | 0000055529-25-000026, 2025-07-02 (FY Apr 2025) | none |
| 13 | Standard Motor Products | 93389 | 2024-11-01 | 0000093389-25-000012, 2025-02-28 | none |
| 24 | Noble Corp plc | 1895262 | 2024-09-04 | 0001628280-25-006184, 2025-02-19 | AQ1 |
| 28 | First Advantage | 1210677 | 2024-10-31 | 0000950170-25-029067, 2025-02-27 | AQ1, AQ6 |
| 30 | VAALCO Energy | 894627 | 2024-04-30 | 0000894627-25-000014, 2025-03-17 | none |
| 40 | FREYR Battery | 1992243 | 2024-12-27 | 0001992243-25-000010, 2025-03-31 | none |
| 43 | Business First Bancshares | 1624322 | 2024-10-03 | 0001624322-25-000011, 2025-03-07 | none |
| 48 | American Shared Hospital Services | 744825 | 2024-05-13 | 0001437749-25-011052, 2025-04-04 | none |
| 50 | Collegium Pharmaceutical | 1267565 | 2024-09-04 | 0001558370-25-001801, 2025-02-27 | AQ6 |
| 52 | National Bankshares | 796534 | 2024-06-03 | 0000950170-25-046763, 2025-03-28 | AQ1 |
| 72 | Capital Bancorp | 1419536 | 2024-10-01 | 0001419536-25-000047, 2025-03-17 | AQ1 |
| 87 | National HealthCare (flagged, see Sensitivity) | 1047335 | 2024-08-06 | 0001437749-25-005690, 2025-02-28 | none |
| 90 | Enbridge | 895728 | 2024-10-01 | 0000895728-25-000006, 2025-02-14 | AQ1 |
| 91 | Resideo Technologies | 1740332 | 2024-06-18 | 0001740332-25-000010, 2025-02-20 | AQ1 |

Control check: a broad search for "internal control over financial reporting" restricted to each company and filing date returned all 15 annual reports, so the 8 misses are not indexing gaps.

**Wording seen in the missed reports** (recorded for the record only; under the protocol these cases may not be used to write Q3): "internal controls" in the plural; "excluded … from our assessment" with the business name between the words; "staff of the SEC" rather than the full agency name; "scope of management's report"; "within one year from the date of acquisition"; and, in case 87, an exclusion described as from the evaluation of disclosure controls.

## Every filing read, in seeded order

Decision codes: **P** eligible positive; **N** acquisition read, no exclusion; **D** dev-window skip (annual report filed March 3–6, 2025); **W** annual report outside the 2025 window; **R** needs review; **X** not kept, with reason.

| # | Company | Decision | Reason |
| --- | --- | --- | --- |
| 1 | Energy Services of America | N | Acquisition; annual report has no exclusion |
| 2 | Abpro Holdings | X | SPAC business combination |
| 3 | Tidal Commodities Trust I | X | Fund/trust |
| 4 | Ultralife | P | |
| 5 | Kewaunee Scientific | P | |
| 6 | Ayala Pharmaceuticals | X | Disposition (asset sale) |
| 7 | Ambac Financial | D | Development window |
| 8 | Atlantic International | N | No exclusion; possible reverse acquisition |
| 9 | Kinetik Holdings | X | Disposition (GCX interest) |
| 10 | ZeroFox Holdings | X | Registrant was the target |
| 11 | PharmaCyte Biotech | X | Securities purchase, not a business acquisition |
| 12 | Ilustrato Pictures | X | Sale of subsidiaries to its own majority-owned subsidiary |
| 13 | Standard Motor Products | P | |
| 14 | INVO Bioscience | N | Acquisition; no exclusion |
| 15 | Cidara Therapeutics | X | Disposition (rezafungin assets) |
| 16 | Innovative Food Holdings | X | Disposition (warehouse) |
| 17 | Zeo Energy | X | SPAC business combination |
| 18 | La Rosa Holdings | N | Acquisition; no exclusion |
| 19 | Agiliti | X | Registrant was the target |
| 20 | Applied Digital | X | Disposition (facility sale) |
| 21 | Rafael Holdings | W | Annual report outside the 2025 window |
| 22 | Splunk | X | Registrant was the target |
| 23 | Babcock & Wilcox | X | Disposition |
| 24 | Noble Corp | P | |
| 25 | Seres Therapeutics | X | Disposition (VOWST business) |
| 26 | California BanCorp | X | Registrant was the target |
| 27 | Ankam | X | Formed a new subsidiary; no acquisition |
| 28 | First Advantage | P | |
| 29 | GameSquare Holdings | X | Disposition |
| 30 | VAALCO Energy | P | |
| 31 | Wheels Up | X | Disposition |
| 32 | Green Plains Partners | X | Registrant was the target |
| 33 | Masonite International | X | Registrant was the target |
| 34 | Calumet, Inc. | X | Reorganization |
| 35 | Oportun Financial | X | Disposition (receivables portfolio) |
| 36 | Eiger BioPharmaceuticals | X | Disposition in bankruptcy |
| 37 | RiceBran Technologies | X | Disposition (secured-party asset sale) |
| 38 | First Financial Corp (IN) | D | Development window |
| 39 | Fathom Digital Manufacturing | X | Registrant was the target |
| 40 | FREYR Battery | P | |
| 41 | AIG | X | Disposition (Corebridge) |
| 42 | TruGolf Holdings | X | SPAC business combination |
| 43 | Business First Bancshares | P | |
| 44 | Amylyx Pharmaceuticals | D | Development window |
| 45 | Resideo Technologies (Nov. 2024) | X | No acquisition: the item reports an advisor agreement |
| 46 | Cannabist Co | X | Disposition |
| 47 | Hudson Pacific Properties | X | Property disposition |
| 48 | American Shared Hospital Services | P | |
| 49 | Hasbro | X | Disposition (eOne) |
| 50 | Collegium Pharmaceutical | P | |
| 51 | TechTarget | X | Registrant was the combining target |
| 52 | National Bankshares | P | |
| 53 | Inrad Optics | X | Registrant was the target |
| 54 | Mobivity Holdings | X | Disposition (SMS accounts) |
| 55 | Dominion Energy | X | Disposition |
| 56 | OnKure Therapeutics | N | Reverse merger; no exclusion |
| 57 | Fortress Net Lease REIT | X | Property purchase |
| 58 | Southwestern Energy | X | Registrant was the target |
| 59 | Xperi | X | Disposition (Perceive assets) |
| 60 | California Resources | D | Development window |
| 61 | Macatawa Bank | X | Registrant was the target |
| 62 | Thoughtworks | X | Registrant was the target |
| 63 | Flora Growth | N | Acquisition; no exclusion |
| 64 | Overseas Shipholding Group | X | Registrant was the target |
| 65 | Sphere 3D | X | Disposition (HVE subsidiary) |
| 66 | BlackRock Capital Investment | X | BDC; registrant was the target |
| 67 | PAVmed | X | Distribution of shares in a subsidiary |
| 68 | iCoreConnect | X | Disposition |
| 69 | North Haven Private Income Fund | X | Fund/BDC |
| 70 | Hyperscale Data | X | Property disposition |
| 71 | Deep Green Waste & Recycling | X | Disposition |
| 72 | Capital Bancorp | P | |
| 73 | Strategic Realty Trust | X | Property dispositions |
| 74 | Talos Energy | N | Acquisition; no exclusion |
| 75 | ConnectM (Aug. 2024) | R | August 2024 purchase; needs review |
| 76 | Calumet Specialty Products Partners | X | Reorganization |
| 77 | NightFood Holdings | W | Annual report outside the 2025 window |
| 78 | Planet 13 Holdings | X | Disposition |
| 79 | U.S. Silica | X | Registrant was the target |
| 80 | Nature's Miracle | X | SPAC business combination |
| 81 | Unrivaled Brands | X | Reorganization |
| 82 | NAPC Defense | X | Acquired product rights, not a business (verify) |
| 83 | Perspective Therapeutics | X | Equipment purchase |
| 84 | ConnectM (July 2024) | X | SPAC business combination |
| 85 | Braemar Hotels | X | Property disposition |
| 86 | Cohen & Steers Income Opportunities REIT | X | Property purchase |
| 87 | National HealthCare | P | Flagged (see Sensitivity) |
| 88 | Acura Pharmaceuticals | X | No business acquisition found in the text read (verify) |
| 89 | BigBear.ai | N | Acquisition; no exclusion |
| 90 | Enbridge | P | |
| 91 | Resideo Technologies (June 2024) | P | 15th positive; reading stops |

Totals: 15 P, 8 N, 4 D, 2 W, 1 R, 61 X.

## Open items for the investigator

1. Verify each P decision and the Q2 result from the filings.
2. Decide case 87 (and, if rejected, read case 94).
3. Resolve case 75 and confirm the two "(verify)" X decisions (82, 88).
4. Apply the screening rules to the 7 Q2 hits.
