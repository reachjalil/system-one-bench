# Browser actions from observed control IDs

reported · independent experiment · reviewed 2026-09-20

Browser Use repository authors; external implementation, not rerun here.

## Evidence confidence

moderate. The comparison documents its method and limits. It does not establish performance across unfamiliar sites.

## What was observed

Complete one Google Flights search.

Three alternating pairs compare two runtimes using Jev and the same text helper. A separate checker verifies results.

## Baseline

The earlier runtime, also using Jev. This is not a frontier-agent comparison.

## Finding

The optimized reader reduced median task time and browser protocol calls on this one task.

- Reported medians: 9.450s versus 7.092s; 3/3 verified in each arm.
- Median browser protocol calls: 1,092 versus 101.

## Limits

Only three pairs. Initial navigation and independent verification are outside the task clock. Full task dollar cost is not reported.

## What we would test in System One

Our inference: batch operation and target selection over current control state, then verify the actual result.

This feature recommendation is our interpretation. Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

## Primary sources

- [Pinned method and measurements](https://github.com/browser-use/jev-ultrafast/blob/1231850a0bf1a0c0341fe408ef1668dbbfdfac46/docs/performance.md)

Reviewed revision: `1231850a0bf1a0c0341fe408ef1668dbbfdfac46`.
