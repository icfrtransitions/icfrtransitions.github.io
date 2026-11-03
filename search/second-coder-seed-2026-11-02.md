# Second-coder subset: seed and selection rule

ICFR Transitions Study. Registered protocol v1.4: https://osf.io/jnpr2 (DOI 10.17605/OSF.IO/JNPR2), section 7.

**Committed on November 2, 2026, after the verified sample was published ([sample-2026-11-02.md](sample-2026-11-02.md)) and before any case was coded or drawn.** This file's GitHub commit date is the public timestamp.

## Rule

- **Frame:** for each cohort, the 30 eligible issuer-events in the published verified sample. The frames are fingerprinted in that file:
  - AQ: SHA-256 `712f15b26f699ea9f48240007909375ee77a1c9bdf9ef1ac65222c1acc3ec62c`;
  - NP: SHA-256 `87c698ee8465edaadbb3fd645cee08c8184c19414097373c26315664b4b33649`.
- **Size (section 7):** the larger of 10 cases or 15% of the cohort, rounded up. With 30 cases per cohort that is 10 per cohort.
- **Draw:**
  1. Sort each cohort's 30 accession numbers in ascending order.
  2. Shuffle with mulberry32 seed **20261105** (Fisher–Yates), separately per cohort, each from a fresh generator. This is the same implementation as the earlier seeds. Run on the published candidate lists, it reproduces their order under seed 20261103.
  3. The first 10 issuer-events in each shuffled list form the second-coder subset.
- **Publication:** the subset is published after this file is committed.

## Why it is drawn now

The subset is fixed before coding starts, so the cases chosen cannot depend on how easy or hard they turn out to be. The investigator codes all 30 cases in each cohort with the same procedure, whether or not they are in the subset. The second coder codes the subset without seeing the investigator's codes. Disagreements are reconciled after independent coding, and the reconciliation is logged.
