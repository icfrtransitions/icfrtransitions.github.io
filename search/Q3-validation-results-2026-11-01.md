# Q3 search validation: results

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2 (DOI 10.17605/OSF.IO/JNPR2). Query set, screen and sampling rules: [Q3-frozen-2026-11-01.md](Q3-frozen-2026-11-01.md), committed before either sample was drawn.

**Status:** run on November 1, 2026, by the investigator with AI assistance (scripted EDGAR retrieval, automated screen and first-pass reading). On November 1, 2026, the investigator checked all 32 eligible positives against the filings: 32 confirmed, 0 rejected. Decisions on non-positive filings are first-pass. Nothing here is a confirmatory result.

## Result

| Cohort | Eligible positives | Found by Q3 and passed the screen (or R0) | Recall | Threshold | Outcome |
| --- | --- | --- | --- | --- | --- |
| AQ | 15 | 14 | **93%** | 80% (12 of 15) | Pass |
| NP | 17 | 17 | **100%** | 80% | Pass |

Q3 meets the protocol section 4 threshold in both cohorts and is the frozen query version for the main 2025 screen.

For comparison, Q2 (not used for the main screen) returned all 17 NP positives in this sample. It found 7 of 15 AQ positives in the first sample ([results](AQ-validation-results-2026-11-01.md)).

## AQ, second sample

- **Frame:** the 1,004 Item 2.01 filings, minus positions 1–100 of the first order and minus the 34 remaining development-window filings, leaving 870. They were shuffled with seed 20261102.
- **Fingerprint:** SHA-256 of the order `26ebf08663525fded1466521c7ced8be08de3deba771f01227a05213d280739c`.
- **Reading:** 185 filings were read in order to reach 15 eligible positives. The number of acquisitions read was below the 100 cap.
- **Independent reader:** each annual report was read for exclusion wording near both "internal control" and an acquisition term anywhere in the document, not only in Item 9A. The reader's term list is wider than the screen's, so screen misses can be seen.

### Eligible positives

| # | Company | Annual report | Q3 query | Screen |
| --- | --- | --- | --- | --- |
| 20 | Sonoco Products | 0000091767-25-000014 | returned | PASS |
| 34 | DT Midstream | 0001842022-25-000003 | returned | PASS |
| 52 | Atlas Energy Solutions | 0000950170-25-026740 | returned | PASS |
| 64 | Alaska Air Group | 0000766421-25-000009 | returned | PASS |
| 71 | Carrier Global | 0001783180-25-000008 | returned | PASS |
| 85 | Lyell Immunopharma | 0001628280-25-011978 | returned | PASS |
| 103 | Spruce Power | 0001628280-25-015702 | returned | PASS |
| 107 | RXO | 0001929561-25-000044 | returned | PASS |
| 110 | Lesaka Technologies | 0001562762-25-000245 | returned | PASS |
| 112 | Chord Energy | 0001486159-25-000005 | returned | PASS |
| 146 | Energy Fuels | 0001385849-25-000004 | returned | PASS |
| 159 | Universal Logistics | 0000950170-25-040283 | returned | PASS |
| 160 | Arcosa | 0001739445-25-000026 | returned | PASS |
| 171 | Waste Management | 0001558370-25-001132 | returned | PASS |
| 185 | ANI Pharmaceuticals | 0001023024-25-000015 | returned | **fail** |

**The one miss (case 185, ANI Pharmaceuticals).** The query returned the report. The screen did not pass it, because Item 9A states that the assessment "includes all of the Company's consolidated operations except for the operations of Alimera". "Except" is not in the frozen exclusion-term list. Under the protocol, Q3 is not changed in response to this sample. Whether to add the term in a later, separately validated version is a decision for the investigator.

**Not counted.** Three reports excluded an acquired business but were not eligible positives, because the drawn 8-K reported something else:
- case 79, Tenet: the 8-K reported a disposition;
- case 141, B. Riley: the 8-K reported a disposition;
- case 177, Liberty Global: the 8-K reported a spin-off.

Case 15 (AAR) excluded the acquired business, but its annual report was filed in July 2024, outside the 2025 window.

### Every filing read, in order

Decision codes:
- **P**: eligible positive.
- **N**: acquisition read, no exclusion.
- **O**: not an eligible positive (no exclusion found in the annual report); transaction type not classified.
- **W**: annual report outside the 2025 window.
- **X**: not kept, with the reason.

| # | Company | Decision | Reason |
| --- | --- | --- | --- |
| 1 | Startek | X | Registrant was the target; no next 10-K |
| 2 | PAVmed | X | Deconsolidation of a subsidiary |
| 3 | Provident Financial Services | N | Acquired Lakeland Bancorp; no exclusion |
| 4 | SL Investment Corp. | X | Fund/BDC; registrant was the target |
| 5 | Treasure Holdco | X | No next 10-K located |
| 6 | Range Impact | X | Disposition |
| 7 | RiceBran Technologies | X | Disposition; no next 10-K |
| 8 | micromobility.com | O | No exclusion found |
| 9 | Digital Utilities Ventures | X | No next 10-K located |
| 10 | Traws Pharma | N | Business combination; no exclusion |
| 11 | Moringa Acquisition Corp | X | SPAC business combination |
| 12 | Zeo Energy | N | Asset purchase; no exclusion |
| 13 | Immunome | N | Asset purchase; no exclusion |
| 14 | Pitney Bowes | O | No exclusion found |
| 15 | AAR Corp | W | Annual report filed July 2024 (outside 2025); it did exclude the acquired business |
| 16 | Phoenix Motor | N | Asset purchase; no exclusion |
| 17 | Power REIT | X | Disposition |
| 18 | AFC Gamma | X | Spin-off |
| 19 | DISH Network | X | Registrant was the target |
| 20 | Sonoco Products | P | Excluded Eviosys |
| 21 | Physicians Realty Trust | X | Registrant was the target |
| 22 | Turtle Beach | N | Acquisition; no exclusion |
| 23 | SharpLink Gaming | X | Disposition |
| 24 | Hubilu Venture | X | Property purchase |
| 25 | EngageSmart | X | Registrant was the target |
| 26 | Tectonic Therapeutic | N | Reverse merger; no exclusion |
| 27 | Acura Pharmaceuticals | X | No next 10-K located |
| 28 | Jingbo Technology | N | Acquisition; no exclusion |
| 29 | Alternus Clean Energy (Nov.) | X | Disposition |
| 30 | R1 RCM | X | Registrant was the target |
| 31 | Acadia Pharmaceuticals | N | Acquisition; no exclusion |
| 32 | Curbline Properties | X | Spin-off |
| 33 | Ferguson | X | Reorganization; no next 10-K |
| 34 | DT Midstream | P | Excluded the Midwest Pipeline Acquisition |
| 35 | Select Medical | X | Spin-off |
| 36 | Perspective Therapeutics | X | Disposition |
| 37 | Snap One | X | Registrant was the target |
| 38 | Cerevel Therapeutics | X | Registrant was the target |
| 39 | LAMF Global Ventures | X | SPAC business combination |
| 40 | EMCORE | O | No exclusion found |
| 41 | Xos | N | Acquisition; no exclusion |
| 42 | Air T | O | No exclusion found |
| 43 | iCoreConnect (Jan.) | N | Asset purchase; no exclusion |
| 44 | Eastside Distilling | N | Merger; no exclusion |
| 45 | Nuveen Churchill fund | X | Fund |
| 46 | NuStar Energy | X | Registrant was the target |
| 47 | Trilogy International | X | Disposition |
| 48 | La Rosa Holdings (Mar.) | N | Acquisition; no exclusion |
| 49 | Novavax | X | Disposition |
| 50 | Kinnate Biopharma | X | Registrant was the target |
| 51 | LSI Industries | W | Annual report filed September 2024 |
| 52 | Atlas Energy Solutions | P | Excluded Hi-Crush |
| 53 | Bluerock Homes (Dec.) | X | Property purchase |
| 54 | Zoomcar | X | SPAC business combination |
| 55 | Dominion Energy | X | Disposition |
| 56 | AtlasClear | X | SPAC business combination |
| 57 | Instructure | X | Registrant was the target |
| 58 | Q32 Bio | N | Reverse merger; no exclusion |
| 59 | reAlpha Tech | O | No exclusion found |
| 60 | Southern States Bancshares | N | Bank merger; no exclusion |
| 61 | Verde Bio | X | Disposition |
| 62 | REV Group | X | Disposition |
| 63 | Avalo Therapeutics | N | Acquisition; no exclusion |
| 64 | Alaska Air Group | P | Excluded Hawaiian Holdings |
| 65 | Renovaro | W | Annual report filed October 2024 |
| 66 | HCM Acquisition | X | SPAC business combination |
| 67 | Sigma Additive | W | Annual report filed September 2024 |
| 68 | Office Properties Income Trust | X | Property disposition |
| 69 | AleAnna | X | SPAC business combination |
| 70 | U.S. Energy | X | Asset purchase (farmout) |
| 71 | Carrier Global | P | Excluded the Viessmann climate solutions business |
| 72 | Mirati Therapeutics | X | Registrant was the target |
| 73 | Maison Solutions (Apr.) | W | Annual report filed August 2024 |
| 74 | Astra Space | X | Registrant was the target |
| 75 | Singing Machine | N | Acquisition; no exclusion |
| 76 | DIH Holding | X | SPAC business combination |
| 77 | NGM Biopharmaceuticals | X | Registrant was the target |
| 78 | Cambridge Bancorp | X | Registrant was the target |
| 79 | Tenet Healthcare | X | Disposition (an unrelated acquisition was excluded) |
| 80 | Cincinnati Bell | X | Disposition |
| 81 | Hallmark Venture | N | Acquisition; no exclusion |
| 82 | Fusion Pharmaceuticals | X | Registrant was the target |
| 83 | SIFCO Industries | X | Disposition |
| 84 | Uranium Energy | N | Acquisition; no exclusion |
| 85 | Lyell Immunopharma | P | Excluded ImmPACT |
| 86 | N2OFF | O | No exclusion found |
| 87 | EBET | X | No next 10-K located |
| 88 | MDWerks | O | No exclusion found |
| 89 | Global Technologies | X | Property disposition |
| 90 | Delek US | X | Disposition |
| 91 | Bluerock Homes (Nov.) | X | Property purchase |
| 92 | Spectral Capital (Dec. 19) | X | IP purchase |
| 93 | LM Funding America | N | Acquisition; no exclusion |
| 94 | Vericity | X | Registrant was the target |
| 95 | Blum Holdings (June) | O | No exclusion found |
| 96 | Stericycle | X | Registrant was the target |
| 97 | Societal CDMO | X | Registrant was the target |
| 98 | Healthier Choices | X | Spin-off |
| 99 | Future FinTech | O | No exclusion found |
| 100 | NIKA Pharmaceuticals | O | No exclusion found |
| 101 | Lightstone Value Plus REIT V | X | Property purchase |
| 102 | Cardinal Ethanol | X | No next 10-K located by the rule |
| 103 | Spruce Power | P | Excluded NJR |
| 104 | Golden Minerals | X | Disposition |
| 105 | Medalist Diversified REIT | X | Property transaction |
| 106 | DZS (June) | X | No next 10-K located |
| 107 | RXO | P | Excluded Coyote |
| 108 | Pathward Financial | X | Disposition |
| 109 | Flex | X | Spin-off |
| 110 | Lesaka Technologies | P | Excluded Adumo (FY June 2025 report) |
| 111 | Can B Corp | X | Disposition |
| 112 | Chord Energy | P | Excluded Enerplus |
| 113 | Titan Environmental | N | Acquisition; no exclusion |
| 114 | Golub Capital BDC 3 | X | Fund/BDC; registrant was the target |
| 115 | Selectis Health | X | Disposition |
| 116 | Babcock & Wilcox | X | Disposition |
| 117 | Lakeland Bancorp | X | Registrant was the target |
| 118 | Marvion | O | No exclusion found |
| 119 | Inpixon | X | Disposition |
| 120 | NightFood Holdings | O | No exclusion found |
| 121 | Immersion | W | Annual report filed 2026 |
| 122 | DZS (Dec.) | X | Disposition |
| 123 | Ashford Hospitality Trust | X | Property disposition |
| 124 | Connexa Sports | N | Acquisition; no exclusion |
| 125 | Advance Auto Parts | X | Disposition |
| 126 | Twin Vee PowerCats | X | Merger with a subsidiary (reorganization) |
| 127 | Rekor Systems | O | No exclusion found |
| 128 | Blum Holdings (May) | O | No exclusion found |
| 129 | Bellicum Pharmaceuticals | X | Disposition |
| 130 | La Rosa Holdings (Aug.) | N | Acquisition; no exclusion |
| 131 | Golden Matrix (Aug.) | O | No exclusion found |
| 132 | Troika Media | X | Sale in bankruptcy |
| 133 | Consolidated Water | O | No exclusion found |
| 134 | Spectral Capital (Dec. 27) | X | IP purchase |
| 135 | 180 Life Sciences | X | Asset purchase |
| 136 | Sterling Check | X | Registrant was the target |
| 137 | Hess Midstream | X | Unit repurchase |
| 138 | Inhibrx | X | Registrant was the target |
| 139 | Eagle Bulk Shipping | X | Registrant was the target |
| 140 | CERo Therapeutics | X | SPAC business combination |
| 141 | B. Riley Financial | X | Disposition (Great American); an unrelated acquisition was excluded |
| 142 | Veea | X | SPAC business combination |
| 143 | TRxADE Health | O | No exclusion found |
| 144 | Renalytix | X | No next 10-K located |
| 145 | Sino Green Land | W | Annual report filed September 2024 |
| 146 | Energy Fuels | P | Excluded Base Resources |
| 147 | Rennova Health | X | No next 10-K located |
| 148 | Alternus Clean Energy (Dec.) | O | No exclusion found |
| 149 | Tattooed Chef | X | Sale in bankruptcy |
| 150 | Vivakor | N | Acquisition; no exclusion |
| 151 | Equitrans Midstream | X | Registrant was the target |
| 152 | Unusual Machines | N | Acquisition; no exclusion |
| 153 | TransMedics (Mar.) | N | Acquisition; no exclusion |
| 154 | Hibbett | X | Registrant was the target |
| 155 | Squarespace | X | Registrant was the target |
| 156 | Sonic Foundry | X | Disposition |
| 157 | Enservco | X | No next 10-K located |
| 158 | Inseego | X | Disposition |
| 159 | Universal Logistics | P | Excluded Parsec |
| 160 | Arcosa | P | Excluded Stavola (and Ameron) |
| 161 | Nu-Med Plus | O | No exclusion found |
| 162 | TransMedics (Jan.) | N | Acquisition; no exclusion |
| 163 | Lionsgate Studios | X | SPAC business combination |
| 164 | Cohen & Steers Income Opportunities REIT | X | Property purchase |
| 165 | DLT Resolution | X | Unwinding of a prior transaction |
| 166 | Realty Income | N | Spirit merger; no exclusion |
| 167 | First Foods | X | Disposition |
| 168 | Yuenglings Ice Cream | X | Disposition |
| 169 | eXp World | X | Disposition |
| 170 | Near Intelligence | X | Sale in bankruptcy |
| 171 | Waste Management | P | Excluded Stericycle |
| 172 | HMN Financial | X | Registrant was the target |
| 173 | Maison Solutions (Oct.) | O | No exclusion found |
| 174 | 2seventy bio | X | Disposition |
| 175 | Hawaiian Holdings | X | Registrant was the target |
| 176 | SRM Entertainment | N | Asset acquisition; no exclusion |
| 177 | Liberty Global | X | Spin-off (an unrelated acquisition was excluded) |
| 178 | Yoshiharu Global | N | Acquisition; no exclusion |
| 179 | TransMedics (Sept.) | N | Acquisition; no exclusion |
| 180 | Kingfish Holding | N | Reverse merger; no exclusion |
| 181 | Regis | O | No exclusion found |
| 182 | Evome Medical | X | No next 10-K located |
| 183 | Consolidated Communications | X | Registrant was the target |
| 184 | LL Flooring | X | Disposition |
| 185 | ANI Pharmaceuticals | P | Excluded Alimera; 15th positive, reading stops |

Totals: 15 P, 32 N, 21 O, 7 W, 110 X.

## NP sample

- **Frame:** 318 companies with a 2024 Form 424B4 returned for "initial public offering". They were shuffled with seed 20261101.
- **Fingerprint:** SHA-256 prefix `9c1c5992b05deed2`.
- **Reading:** 78 companies were taken in order to keep 20. The other 58 were skipped:
  - prior periodic reports (follow-on offerings and uplistings);
  - SIC 6770, or a blank-check company;
  - no 10-K filed;
  - first 10-K filed in the development window (Contineum, Silvaco, Ingram Micro, GigCapital7).

| # | Company | First 10-K filed | Decision | Q3 screen | Q3 query | Q2 query |
| --- | --- | --- | --- | --- | --- | --- |
| 5 | Guardian Pharmacy Services | 2025-03-26 | P | PASS | yes | yes |
| 7 | Waystar Holding | 2025-02-18 | P | PASS | yes | yes |
| 9 | CG Oncology | 2024-03-26 | P | PASS | yes | yes |
| 11 | Reddit | 2025-02-13 | P | PASS | yes | yes |
| 14 | Alumis | 2025-03-19 | P | PASS | yes | yes |
| 15 | ArriVent Biopharma | 2024-03-28 | P | PASS | yes | yes |
| 17 | BKV Corp | 2025-03-31 | P | PASS | yes | yes |
| 18 | Lakeside Holding | 2024-09-30 | N: management assessed ICFR (not effective) | fail | yes | no |
| 27 | CleanCore Solutions | 2024-09-20 | P | PASS | yes | yes |
| 29 | Loar Holdings | 2025-03-31 | P | PASS | yes | yes |
| 36 | Ibotta | 2025-02-27 | P | PASS | yes | yes |
| 38 | Legacy Education | 2024-10-01 | P | PASS | yes | yes |
| 46 | Boundless Bio | 2025-03-27 | P | R0 (manual review) | yes | yes |
| 56 | zSpace | 2025-03-28 | P | PASS | yes | yes |
| 69 | KinderCare Learning | 2025-03-21 | P | PASS | yes | yes |
| 70 | Heritage Distilling | 2025-04-28 | N (flagged): Item 9A has no management report and no transition statement | fail | yes | no |
| 72 | Nano Nuclear Energy | 2024-12-30 | N: management assessed ICFR (effective) | fail | yes | no |
| 74 | Camp4 Therapeutics | 2025-03-27 | P | PASS | yes | yes |
| 75 | Septerna | 2025-03-27 | P | PASS | yes | yes |
| 78 | TWFG | 2025-03-27 | P | PASS | yes | yes |

**Flag (case 70, Heritage Distilling).** Item 9A gives no management report and no transition statement. Because there is no transition statement, it is recorded as not an eligible positive under the definition. If the investigator counts it as a positive, NP recall is 17 of 18 (94%), still above the threshold. Under the codebook, this filing is coded "not disclosed".

## Investigator decisions (November 1, 2026)

1. All 32 eligible positives (15 AQ, 17 NP) were verified against the filings and confirmed.
2. Case 70 (Heritage Distilling) is not an eligible positive, as recorded above.
3. "Except" is not added. Q3 stays as frozen.
4. Q3 is the frozen query version for the main 2025 screen. A dated update to the OSF registration was filed on November 1, 2026.
