# Compare decision types before choosing a model

reported · public-dataset and synthetic study · reviewed 2026-09-20

Omar Mujahid states no affiliation with TypeSafe. We reviewed the report and did not rerun it.

## Evidence confidence

moderate. A described comparison supports a bounded conclusion. Workload transfer and independent reproduction remain unresolved.

## What was observed

Classification, passage ranking, extraction by selection and short reasoning questions.

49 tasks, 8,225 items. Jev 1.13.0 versus GPT-5.6 Luna with reasoning off or low. Seeded public-data samples and code-generated probes; most tasks have 200 items.

## Baseline

The better Luna setting for each task; no deterministic baseline across the suite.

## Finding

Jev led or tied on 42 tasks by the report's rule. Only seven task leads had non-overlapping 95% bootstrap intervals, six for Jev and one for Luna.

- Reported median server time: Jev 105 ms; Luna 710 ms; Luna-low 808 ms.
- Banking77 accuracy: Jev 0.815; Luna 0.870.
- Counting accuracy: Jev 0.867; Luna-low 0.993.

## Limits

Public-data contamination is unknown. Reported time uses server headers and excludes network and agent overhead. Counting and 77-label classification exposed weaknesses.

## What we would test in System One

Match an evaluation to the question type. Do not turn aggregate task wins into a claim that an entire coding agent is faster or more accurate.

This feature recommendation is our interpretation. Related Engine patterns: `intent`, `context-relevance`, `rubric`.

## Primary sources

- [Pinned method and caveats](https://github.com/OmarMujahid/jev-decision-bench/blob/0883fa781729ab571005253f6b288ec67f49dd29/README.md)
- [Pinned task scores and intervals](https://github.com/OmarMujahid/jev-decision-bench/blob/0883fa781729ab571005253f6b288ec67f49dd29/RESULTS.md)

Reviewed revision: `0883fa781729ab571005253f6b288ec67f49dd29`.
