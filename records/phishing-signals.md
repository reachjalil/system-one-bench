# Separate signals from a final verdict

reported · synthetic-data study · reviewed 2026-09-20

anisselbd; external author. We reviewed the report and did not rerun it.

## Evidence confidence

moderate. A described comparison supports a bounded conclusion. Workload transfer and independent reproduction remain unresolved.

## What was observed

Classify phishing emails and extract five risk signals.

2,000 PhishNChips emails with generated bodies and sourced URLs. Jev 1.13.0 and Claude Haiku 4.5 answer verdict and signal questions. Later controls fit on 1,000 emails and test on the other 1,000.

## Baseline

Haiku verdicts, identical Haiku signal questions and URL/sender rules.

## Finding

The initial Jev verdict lost to Haiku. On the split evaluation, regression over Jev signals beat the rule baseline. Its accuracy difference from Haiku signals did not reach statistical significance.

- Initial verdict accuracy: Jev 62.6%; Haiku 81.3%.
- Split-test accuracy: Jev signal regression 95.0%; Haiku signal regression 93.2%; rule 91.8%.
- Jev versus Haiku signal-regression accuracy: McNemar p = 0.063.

## Limits

Signal design used knowledge of the dataset taxonomy. These synthetic messages do not establish protection for a real inbox. Accuracy and AUROC favor different signal models.

## What we would test in System One

Test separate, observable properties before a broad verdict. Compare the same decomposition in every model and include a rule baseline.

This feature recommendation is our interpretation. Related Engine patterns: `evidence-check`, `acceptance`.

## Primary sources

- [Pinned comparison and added controls](https://github.com/anisselbd/jev-phishing-bench/blob/1d56e8c64d029a9554a0874e2ef2901ed196e230/README.md)

Reviewed revision: `1d56e8c64d029a9554a0874e2ef2901ed196e230`.
