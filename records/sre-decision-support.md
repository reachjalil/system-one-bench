# Choose diagnostic tests and review repair evidence

reported · application experiment · reviewed 2026-09-20

Jackson Clark, Saad Mohammad Rafid Pial, Yiming Su and Tianyin Xu; SREGym authors.

## Evidence confidence

moderate. A described comparison supports a bounded conclusion. Workload transfer and independent reproduction remain unresolved.

## What was observed

Help a coding agent investigate and repair a controlled incident.

Ten SREGym-Lite problems, five attempts per condition. The same Luna agent gets optional Jev planning and submission-review tools.

## Baseline

The same agent without Jev tools.

## Finding

The authors report 24/50 successful attempts with Jev versus 20/50 without it. Two problems regressed.

- Observed passes: 24/50 with Jev; 20/50 without Jev.

## Limits

A small experiment, without a diagnosis-time comparison. Jev sometimes accepted temporary recovery as a durable repair and could not rank an absent correct hypothesis.

## What we would test in System One

Evaluate diagnostic candidates and repair invariants separately. Keep executable checks and the agent responsible for the repair.

This feature recommendation is our interpretation. Related Engine patterns: `diagnostic-test`, `repair-check`, `evidence-check`.

## Primary sources

- [Original report, including regressions](https://sregym.com/blog/jev-sregym-lite)

