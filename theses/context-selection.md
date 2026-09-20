# Give an agent a shorter reading list

With Jev, an agent can rank supplied passages by their relevance to its task.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

Repository search returns several files for a duplicate-submission bug.

The agent supplies the bug description and candidate snippets with stable source IDs.

Jev rates relevance. The agent reads the shortlist first and can retrieve every omitted snippet.

Illustrative example, not a recorded result.

## Potential value

high. Repeated large tool results can consume a substantial share of a coding conversation. Better ordering could reduce unnecessary reading.

## Evidence confidence

moderate. Two independent studies support testing passage ranking. They do not establish final coding-task quality or cost savings.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Rank retrieved passages before reading them](../records/passage-reranking.md). reported. Ranking gains depend on the dataset and how scores are averaged.
- [Compare decision types before choosing a model](../records/decision-suite.md). reported. A broad comparison supports task-specific testing, not one universal winner.

## Test plan

Status: planned. The protocol below has not run.

50 debugging or research tasks with labeled relevant passages and counterevidence; keep a fresh evaluation split.

Compare against:

- Original retrieval order
- Deduplication only
- Direct agent selection

Measure:

- Final answer quality
- Relevant evidence recall
- Host tokens
- Cache writes
- Full task time

Adopt only if final answer quality is no worse within a prespecified tolerance and complete task cost or time improves.

Planned report path: `findings/context-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `context-relevance`, `semantic-search`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
