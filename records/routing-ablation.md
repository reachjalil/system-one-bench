# Model routing: test whether Jev adds value

reported · independent experiment · reviewed 2026-09-20

TokenTrim; external author; not independently reproduced here.

## What was tested

Select a model for a user query.

Author reports offline scoring on 5,835 held-out LLMRouterBench queries across 13 models; answers are precomputed.

## Baseline

Best fixed model and identical retrieval router without Jev.

## Finding

Retrieval routing improved the accuracy-cost tradeoff, but the no-Jev ablation matched it. This does not establish that the Jev difficulty signal caused savings.

- Hybrid accuracy 62.4%; best fixed 60.3%.
- No-Jev ablation accuracy 62.4%.

## Limits

Cached downstream answers; no live end-to-end answer latency. Reported cost uses benchmark assumptions.

## What we would test in System One

Before adding a model router, compare a fixed default and a no-Jev retrieval policy. Ship a router only if the added signal earns its overhead.

This feature recommendation is our interpretation. Related Engine patterns: `next-tool`, `rubric`.

## Primary sources

- [Pinned report](https://github.com/TokenTrim/jev-routing-experiment/blob/bf088479c73220102f8bacd6b69d34021ca34e2e/README.md)

Reviewed revision: `bf088479c73220102f8bacd6b69d34021ca34e2e`.
