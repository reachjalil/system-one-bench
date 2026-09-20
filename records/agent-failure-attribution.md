# Find the likely failure in an agent trace

reported · public-dataset study · reviewed 2026-09-20

TokenTrim; external author. We reviewed the report and did not rerun it.

## Evidence confidence

moderate. A described comparison supports a bounded conclusion. Workload transfer and independent reproduction remain unresolved.

## What was observed

Identify the responsible agent, step and error category in a failed run.

6,257 text traces from Who&When Pro. Jev answers three choice questions. The author uses the official scorer and compares with published paper baselines.

## Baseline

GPT-5.4 results from the original paper, not a fresh matched API run.

## Finding

Reported error-category macro-F1 was 23.7 for Jev and 15.3 for GPT-5.4 on the 100-point scale. Joint accuracy was 31.3% and 21.3%.

- Error-category macro-F1: Jev 23.7; paper GPT-5.4 baseline 15.3.
- All three labels correct: Jev 31.3%; paper GPT-5.4 baseline 21.3%.
- Reported Jev input-price estimate: $1.28 for 6,257 traces.

## Limits

Failures are injected. Jev selects enumerated agents and steps while paper baselines generate them. Mode-confidence ECE is 0.287. No latency comparison is reported.

## What we would test in System One

Try advisory trace triage with a fixed error taxonomy. A low joint success rate does not justify automatic repair or blame assignment.

This feature recommendation is our interpretation. Related Engine patterns: `tool-result`, `evidence-check`.

## Primary sources

- [Pinned method](https://github.com/TokenTrim/jev-agent-failure-benchmark/blob/4d46af795a4a4409940a65857da73e45abaea2db/README.md)
- [Pinned results and comparison limits](https://github.com/TokenTrim/jev-agent-failure-benchmark/blob/4d46af795a4a4409940a65857da73e45abaea2db/RESULTS.md)

Reviewed revision: `4d46af795a4a4409940a65857da73e45abaea2db`.
