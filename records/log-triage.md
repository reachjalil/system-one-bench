# Log triage: filtering is not automatically saving

first-party · public-dataset study · reviewed 2026-09-20

Jalil Laaraichi / jevlogs; same maintainer as System One Engine.

## What was tested

Select log records for deeper analysis while preserving originals.

2,500 HDFS and 2,500 BGL records; threshold, severity, cache and rule comparisons. Existing results inspected; no new rerun.

## Baseline

Severity-only, keyword and exact-cache policies.

## Finding

The conservative HDFS policy sent nearly everything for analysis. The modeled downstream bill increased rather than decreased. BGL recall was explained by deterministic FATAL protection.

- HDFS anomaly recall 99.33%; only 0.84% routed away from deeper analysis.
- Illustrative downstream cost change: +2.55%.
- HDFS exact-cache hit rate 96.48%.

## Limits

HDFS labels are block-level, not true line-level incident labels. The cost example assumes downstream token counts and prices, not actual billing. Upstream Loghub data has research/academic terms.

## What we would test in System One

Expose triage alongside exact reuse and visible bypass rates. Compare simple severity rules first; never sell universal savings or discard original records.

This feature recommendation is our interpretation. Related Engine patterns: `log-triage`.

## Primary sources

- [Pinned dataset and report](https://huggingface.co/datasets/reachjalil/jevlogs-log-triage-benchmark/tree/4c80b79c911ea166bddb290d9901f5bc7e03b603)
- [Library](https://github.com/reachjalil/jevlogs)

