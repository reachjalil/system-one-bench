# Catch a claim the evidence does not support

With Jev, an agent can check a specific claim against a supplied tool result or passage.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

An agent says a release is live, but the output only confirms a successful build.

The caller supplies the exact claim and current build and deployment evidence.

Jev returns separate support and contradiction signals. The agent checks missing evidence before stating success.

Illustrative example, not a recorded result.

## Potential value

high. A short check can catch premature completion claims in recurring agent workflows.

## Evidence confidence

moderate. Our small diagnostic and a controlled SRE study support testing the pattern. Both expose errors; neither establishes general reliability.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Batching two evidence checks](../records/batched-evidence.md). first-party. Fewer calls and tokens, with one extra error in this small test.
- [Choose diagnostic tests and review repair evidence](../records/sre-decision-support.md). reported. More attempts passed in one small study; some incidents regressed.
- [Separate signals from a final verdict](../records/phishing-signals.md). reported. Question design helped, but a simple rule was a strong baseline.

## Test plan

Status: planned. The protocol below has not run.

60 pre-labeled claims covering stale outputs, partial completion, missing evidence and explicit contradictions.

Compare against:

- Parse structured status fields
- Direct agent review
- Separate Jev questions

Measure:

- False confirmations
- Review rate
- Final response accuracy
- Additional latency

Do not default to automatic acceptance. A useful adviser must reduce false confirmations without hiding uncertain cases.

Planned report path: `findings/claim-checking/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `evidence-check`, `citation-check`, `repair-check`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
