# Rank retrieved passages before reading them

reported · public-dataset study · reviewed 2026-09-20

Aness Belbati; external author. We reviewed the report and did not rerun it.

## Evidence confidence

moderate. A described comparison supports a bounded conclusion. Workload transfer and independent reproduction remain unresolved.

## What was observed

Reorder retrieved passages by relevance to a question.

Eight English datasets, 1,617 scored queries. Models see the same 30 BM25 candidates, each truncated to 2,000 characters. Jev 1.13.0 uses a four-level rubric.

## Baseline

BM25, Cohere Rerank 4 Pro and other published rerankers.

## Finding

Dataset-weighted nDCG@10 was 0.692 for Jev and 0.691 for Cohere Pro. The difference interval crosses zero. Weighting each query equally favors Cohere.

- Jev minus Cohere nDCG@10: 0.001; 95% interval -0.009 to 0.012.
- Query-weighted nDCG@10: Jev 0.738; Cohere 0.756.
- Mean of dataset median request times: Jev 422 ms; Cohere 844 ms.

## Limits

Scoring excludes queries without a relevant candidate. Providers use different routes. Times are means of dataset medians, not pooled medians. These rankings do not measure final answer quality.

## What we would test in System One

Test a context shortlist with original snippets still available. System One allows eight questions per request, so this 30-question setup needs adaptation and a new evaluation.

This feature recommendation is our interpretation. Related Engine patterns: `context-relevance`, `rubric`.

## Primary sources

- [Pinned method, results and limits](https://github.com/anessbelbati/jev-rerank-bench/blob/cd9a35b22aeb4187334f7018a0ee1960a7470586/README.md)

Reviewed revision: `cd9a35b22aeb4187334f7018a0ee1960a7470586`.
