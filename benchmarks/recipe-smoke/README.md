# Engine recipe smoke test

This first-party check exercises the 15 decision recipes added in System One 0.5.0
through the same HTTP route that `sysone_run` uses. The 21 short synthetic cases
include missing evidence, no matching candidate and incomplete repairs. Labels were
written before the first provider call. They are development cases, not held-out data.

Run with an installed System One 0.5+ engine and a private connection scoped to decide:

```sh
SYSONE_CONNECTION=/private/path/agent.json node benchmarks/recipe-smoke/run.mjs
```

The script checks the engine version and verifies the saved question snapshot before
any inference. A changed recipe needs a new experiment revision. A valid run makes
21 billable requests, with no retries. The script records the dataset hash,
all attempts, answers, usage and network-inclusive elapsed time. It never records the
connection token. Keep the first result unchanged. Boolean labels use a 0.5 threshold;
probability below 0.8 for the selected answer is separately flagged for review.
Those thresholds do not establish calibration. The provider alias is recorded because
the current engine does not expose a resolved model revision.

A passing smoke case only confirms an expected answer to this particular input.
There is no other-model baseline, complete agent task or measured savings comparison.
The larger protocols in [the test plan](../../TEST_PLAN.md) remain planned.

## First run, September 20, 2026

The first run matched all author labels in 20 of 21 cases, with 29 of 30 individual
labels matched. All 21 requests completed, with one provider attempt each and no
cache hits. Client elapsed time, including the local HTTP route and Gateway round
trip, had a 239 ms median and 333 ms p95, using nearest-rank quantiles. These times
exclude an agent's planning and review. Two answers fell below the selected 0.8
review threshold. No calibrated confidence or dollar savings is established.

The incomplete-repair case asked whether current functionality had recovered while
a revoked token still authenticated. We labeled current functionality true because
the new token worked. Jev returned 0.28 for recovery, but correctly rejected the
invariant and detected the explicit contradiction. The term "recovered" can include
the security requirement, so this is also a question and label ambiguity. The first
labels and result remain unchanged. A future evaluation should distinguish successful
new-token authentication from complete restoration without tuning on this case.

The [cases](cases.json) were committed before execution at
`97e63f4`. The [question snapshot](recipes.json) records the fixed questions and
policies used by the engine; caller candidates replace the corresponding sample
choices. The [complete first result](results-2026-09-20T05-18-28.693Z.json) retains every
answer, reported token count, attempt and elapsed time. Dataset SHA-256 is recorded
inside that file. No broader thesis confidence rating changes after this smoke test.
