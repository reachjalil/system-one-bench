# Typed evaluation versus chat-model wrappers

reported · vendor benchmark · reviewed 2026-09-20

TypeSafe AI, the Jev model vendor; not independently reproduced here.

## Evidence confidence

low. This source suggests a useful experiment but does not establish a reliable benefit in a real agent workflow.

## What was observed

Bounded decisions inside four application workflows.

Vendor launch comparison of typed Jev evaluations and chat-model decision wrappers.

## Baseline

Vendor-selected chat-model baselines.

## Finding

The launch report supports evaluating typed decisions as a separate operation. Its headline speed and cost ratios are vendor-specific workload results.

- Vendor advertises up to 193.6× speed and 444.6× cost improvements in its evaluation; not System One Engine results.

## Limits

Vendor-authored comparison, selected tasks and wrappers. Reported ratios do not predict a coding agent's total cost or time. Pricing and Gateway promotions change.

## What we would test in System One

Batch independent questions over shared evidence. Measure host tool overhead and final outcomes before promising savings.

This feature recommendation is our interpretation. Related Engine patterns: `acceptance`, `context-relevance`, `rubric`.

## Primary sources

- [Vendor report](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
- [Current Gateway model page](https://vercel.com/ai-gateway/models/jev)

