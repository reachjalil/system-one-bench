# Keep useful parts of a long agent session

With Jev, an agent can propose which old tool records to retain for the next task step.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A long debugging session contains repeated file reads alongside one failed attempt that must not be forgotten.

The caller supplies bounded records and the current goal while preserving the original session.

Jev recommends keep or review. The agent can recover all records and retains instructions through deterministic rules.

Illustrative example, not a recorded result.

## Potential value

high. Context pressure is common for frequent coding-agent users. A reliable selector could make long tasks easier to continue.

## Evidence confidence

low. Firsthand Reddit enthusiasm and conflicting X previews establish interest, not successful compaction or lower total cost.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [A user tries Jev to reduce a long agent history](../records/community-compaction.md). anecdotal. A user found history selection useful; quality and cache costs need a test.
- [X posts disagree about compaction by filtering](../records/x-compaction-discussion.md). anecdotal. Conflicting firsthand views identify a question to test, not a settled result.
- [Model routing: test whether Jev adds value](../records/routing-ablation.md). reported. No-Jev ablation matched the hybrid result.

## Test plan

Status: planned. The protocol below has not run.

20 consented or purpose-authored long sessions, each with later questions about decisions, constraints and failed attempts.

Compare against:

- Existing agent compaction
- Deterministic deduplication
- No selection

Measure:

- Later task success
- Lost constraints
- Repeated failed actions
- Cache rewrite cost
- Recovery reads

Do not automate destructive history edits. Retain the experiment only if task continuity matches the baseline and total cost or time improves.

Planned report path: `findings/history-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `memory-candidate`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
