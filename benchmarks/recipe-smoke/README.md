# Engine recipe smoke test

This first-party check exercises the 15 decision recipes added in System One 0.5.0
through the same HTTP route that `sysone_run` uses. The 21 short synthetic cases
include missing evidence, no matching candidate and incomplete repairs. Labels were
written before the first provider call. They are development cases, not held-out data.

Run with an installed System One 0.5+ engine and a private connection scoped to decide:

```sh
SYSONE_CONNECTION=/private/path/agent.json node benchmarks/recipe-smoke/run.mjs
```

This makes 21 billable requests, with no retries. The script records the dataset hash,
all attempts, answers, usage and network-inclusive elapsed time. It never records the
connection token. Keep the first result unchanged. Boolean labels use a 0.5 threshold;
probability below 0.8 for the selected answer is separately flagged for review.
Those thresholds do not establish calibration. The provider alias is recorded because
the current engine does not expose a resolved model revision.

A passing smoke case only confirms an expected answer to this particular input.
There is no other-model baseline, complete agent task or measured savings comparison.
The larger protocols in [the test plan](../../TEST_PLAN.md) remain planned.
