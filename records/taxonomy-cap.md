# Navigating beyond a flat choice limit

first-party · synthetic test · reviewed 2026-09-20

Jalil Laaraichi / jev-tree; same maintainer as System One Engine.

## What was tested

Classify an incident into one of 320 authored categories.

180 synthetic cases; authored tree, automatic partitioning, truncated flat choice and keyword baseline. Existing recorded results inspected.

## Baseline

Deterministic keyword extraction and first-255 truncation.

## Finding

Hierarchical selection reached categories excluded by truncation. The deterministic parser also solved every case, so this is evidence about taxonomy coverage, not a need for AI.

- Authored tree: 180/180; automatic partition: 179/180.
- Truncation: 90/180; keyword baseline: 180/180 with zero model calls.

## Limits

Synthetic fields are easy to parse. Accuracy is not evidence of production robustness or calibrated confidence. Three tree steps add calls.

## What we would test in System One

Use semantic categories when a flat list is too large. First check whether structured input already identifies the answer without inference.

This feature recommendation is our interpretation. Related Engine patterns: `taxonomy`.

## Primary sources

- [Pinned dataset](https://huggingface.co/datasets/reachjalil/jev-tree-choice-cap/tree/6f7a325a301043679946bd2bc83900c17cceee09)
- [Benchmark method](https://github.com/reachjalil/jev-tree/tree/main/benchmarks)

