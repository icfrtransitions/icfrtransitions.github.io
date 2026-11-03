# Reproduction tools

`reproduce.js` re-derives, from the published Markdown files:
- the two candidate orders: seed 20261103, ascending accession sort, then a descending Fisher–Yates shuffle with mulberry32;
- the eligible-sample fingerprints;
- the two second-coder subsets: seed 20261105, first 10 of the shuffled eligible list.

Run it from the repository root:

```
node tools/reproduce.js .
```

Compare the output with `expected-output-2af58ae.json`, which was produced at commit 2af58ae.

**Hash convention.** SHA-256 over accession numbers in the stated order: UTF-8, one per line, LF separators, no trailing newline.

**What the script does not check.**
- whether the candidate frames are complete;
- any eligibility decision;
- the exclusion-audit and validation frames, which are not yet published (see [search/corrections-and-deviations-2026-11-03.md](../search/corrections-and-deviations-2026-11-03.md), O1–O2).

**Provenance.** Written with AI assistance (Claude), which also wrote the original draw code. A matching result is therefore not a clean-room reproduction. An earlier independent script by a different AI reviewer (ChatGPT) gave the same orders and fingerprints.

The CSV files in [data/](../data/) are converted from the published Markdown files. They are not separate records.
