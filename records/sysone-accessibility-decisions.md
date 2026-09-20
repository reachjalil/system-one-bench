# Six accessibility-informed next-action choices

first-party · synthetic test · reviewed 2026-09-20

Jalil Laaraichi / System One; product and benchmark share a maintainer.

## Evidence confidence

low. A reproducible first-party diagnostic establishes six concrete choices. It does not establish transfer to other sites or a causal advantage from AX.

## What was observed

Choose one operation and exact control from six original browser observations.

Labels and target oracle committed before inference. One request per case, no retries or actions. An unexposed fixture marker verifies the exact target. Cases cover duplicate labels, computed icon names, invalid fields, shadow controls, checked state and loading.

## Baseline

A known fixture marker and labeled operation supply an exact deterministic reference. No frontier-agent baseline or AX ablation.

## Finding

Jev selected the expected operation and target in all six cases. Every choice exceeded the existing 0.8 stopping threshold. This verifies those choices only; no action or complete task was tested in this run.

- Expected operation and target: 6/6; one attempt per case; zero actions executed.
- Six provider calls; 5,267 reported input tokens and 524 output tokens.
- Median decision request round trip: 343.5ms; median engine-reported latency: 292ms. Observation and host review excluded.
- Separate small-form observation median: 1.40ms before AX, 2.71ms after; 15 sequential observations per version.

## Limits

Six hand-authored development cases. Not held-out quality, calibration, end-to-end reliability or savings. The separate native Mac fixture check returned focused_window_unavailable despite a granted permission result. Native control extraction remains unverified.

## What we would test in System One

Keep computed labels and states in the browser adapter. Test paired AX removal and unfamiliar full tasks before claiming that accessibility improves completion or reduces agent cost.

This feature recommendation is our interpretation. Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

## Primary sources

- [All inputs, answers, method, observation timings and native limitation](https://github.com/reachjalil/system-one-bench/tree/main/findings/browser-accessibility)
- [Labels and oracle committed before the run](https://github.com/reachjalil/system-one-bench/tree/aa19fa2/benchmarks/browser-accessibility)

