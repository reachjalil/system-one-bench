# Shared page state improved our first browser diagnostic

first-party · synthetic test · reviewed 2026-09-20

Jalil Laaraichi / System One; same maintainer as the product and companion.

## Evidence confidence

low. The first-party development diagnostic shows a concrete integration and failure modes. It leaves general task quality and savings untested.

## What was observed

Save exactly one preview with a requested name and mode on an original fixture.

Six tasks per arm, alternating order, fresh browsers and server-record verification. After the first run, we fixed shared control state and reran the same tasks. Both runs are retained.

## Baseline

An exact script with known fixture IDs; it skips fields that already match. No frontier-agent baseline.

## Finding

The first Jev run reached one correct saved state. The changed-code rerun reached four. Two rerun tasks stopped for uncertainty; the exact script reached six in both runs.

- Correct saved records: first Jev run 1/6; rerun 4/6; deterministic script 6/6 in each run.
- Rerun: 15 requests, 19,670 reported input tokens, 2,615 output tokens.
- Rerun all-attempt median: 1,095ms; exact script: 130.5ms. Browser setup and host review excluded.

## Limits

Development fixtures reused after a prompt/input fix. No held-out result, general reliability, host review time or complete-agent savings claim. Two first-run service errors remain failures.

## What we would test in System One

Supply current field values to every batched question. Keep an agent-visible stop and independent outcome check. Prefer code for known workflows.

This feature recommendation is our interpretation. Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

## Primary sources

- [All attempts, method and next test](https://github.com/reachjalil/system-one-bench/tree/main/findings/browser-companion)

