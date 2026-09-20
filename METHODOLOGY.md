# How to read a result

Read the workload and baseline before comparing scores. A ranking score, an answer
accuracy and a tool-position match rate measure different things.

| Term | Meaning | Common mistake |
| --- | --- | --- |
| Accuracy | Correct labels divided by evaluated labels | Calling a set of correct labels a completed agent task |
| Macro-F1 | F1 averaged across classes with equal class weight | Reading it as the percentage of correct full diagnoses |
| nDCG@10 | Relevance near the top of a ten-result ranking relative to an ideal ranking | Calling 0.69 a 69% answer accuracy |
| AUROC | How well a score orders positive examples above negative examples across thresholds | Treating it as accuracy at the deployed threshold |
| ECE | A bin-based summary of the gap between confidence and observed correctness | Assuming it is a permanent property of a model |
| Coverage | Share of cases the policy handles without review or fallback | Reporting retained-case accuracy without the share discarded |
| Median and p95 | Middle and 95th-percentile observations in the stated sample | Mixing server time, network time and whole-task time |
| Confidence interval | Uncertainty under the report's sampling assumptions | Treating an interval crossing zero as proof of equivalence |

A mean of dataset medians is not the median of all requests. Dataset-weighted and
query-weighted averages answer different questions. Copy the aggregation rule when
quoting a number.

## Separate observation from inference

- `reported` means the original author measured it. We reviewed the linked artifact.
- `first-party` means our maintainer or project produced the result.
- `reproduced` requires a new documented run of the stated method. No external record
  currently has this status.
- `reference` means guidance, not a comparative experiment.

Every record names its affiliation, method, baseline, limitations and source revision
when available. A reviewed date is the date of our inspection, not the run date.
Feature recommendations are our interpretation. They require a new evaluation when
the input, request limits, model version or calling application changes.

## Preserve a comparison people can audit

Save all attempted cases, failed requests and fallback work. Define labels before
running inference. Keep prompt selection separate from evaluation. If you revise the
method after seeing failures, retain the original report and explain the change.

Count the entire workflow when claiming savings. List-price estimates, provider-reported
usage costs and invoices are different evidence. Fixed subscription fees require a
different argument from token-based API charges.

## Scope of this catalog

This is a curated set of primary reports, not a survey of every Jev repository.
A demo can establish that an integration exists. It cannot establish that the
integration is faster, cheaper or more accurate. A source update requires review;
we do not silently replace an old conclusion with a new README headline.
