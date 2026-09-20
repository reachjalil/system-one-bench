# System One Bench

Find a Jev use case, inspect the evidence and design a test for your own workflow.
This public catalog records what each experiment measured, which baseline it used
and where its conclusion stops. It supports development of [System One Engine](https://systemoneengine.com).

We maintain both projects. External results below are author-reported; we have not
independently rerun them. Our own work is labeled first-party. Documentation is
labeled reference and does not count as a benchmark.

## Start with a task

| Your task | Start here | What remains unproven |
| --- | --- | --- |
| Select context for a coding or research agent | [Passage reranking](records/passage-reranking.md) | Final answer quality and full task cost |
| Check a claim against a tool result | [Batched checks](records/batched-evidence.md) | Reliability on real agent conversations |
| Choose among available tools | [Tool prediction](records/tool-sequence.md) | Completed task success |
| Inspect a failed agent run | [Failure attribution](records/agent-failure-attribution.md) | Automatic diagnosis or repair |
| Define several checks over shared text | [Signal decomposition](records/phishing-signals.md) | Transfer to a different workload |
| Route calls to a cheaper model | [Routing ablation](records/routing-ablation.md) | Incremental benefit from Jev in that study |

## Evidence library

12 reviewed records. Scores from different tasks are not one leaderboard.

| Scenario | Evidence | Finding |
| --- | --- | --- |
| [Model routing: test whether Jev adds value](records/routing-ablation.md) | reported · independent experiment | No-Jev ablation matched the hybrid result. |
| [Choosing tools from real MCP inventories](records/tool-sequence.md) | reported · independent experiment | Better tool prediction can still take longer. |
| [Separate questions for separate hazards](records/hazard-decomposition.md) | reported · synthetic test | Explicit checks helped; calibration and latency limits remain. |
| [Log triage: filtering is not automatically saving](records/log-triage.md) | first-party · public-dataset study | Conservative triage can add cost; reuse may help more. |
| [Navigating beyond a flat choice limit](records/taxonomy-cap.md) | first-party · synthetic test | Trees avoid truncation; structured data may need no model. |
| [Typed evaluation versus chat-model wrappers](records/vendor-workflows.md) | reported · vendor benchmark | A reason to test typed decisions, not a savings guarantee. |
| [Define ambiguity before evaluating a workflow](records/workflow-design.md) | reference · official guidance | Specify what uncertain and mixed cases should do. |
| [Batching two evidence checks](records/batched-evidence.md) | first-party · synthetic test | Fewer calls and tokens, with one extra error in this small test. |
| [Rank retrieved passages before reading them](records/passage-reranking.md) | reported · public-dataset study | Ranking gains depend on the dataset and how scores are averaged. |
| [Find the likely failure in an agent trace](records/agent-failure-attribution.md) | reported · public-dataset study | Trace classification is promising, but most full diagnoses were wrong. |
| [Separate signals from a final verdict](records/phishing-signals.md) | reported · synthetic-data study | Question design helped, but a simple rule was a strong baseline. |
| [Compare decision types before choosing a model](records/decision-suite.md) | reported · public-dataset and synthetic study | A broad comparison supports task-specific testing, not one universal winner. |

## Practical guides

These guides turn research into experiments with the current Engine contracts. They
do not claim that the example recipes reproduce the upstream results.

- [Check a claim against tool output](guides/check-a-claim.md). Ask whether the evidence supports a statement before an agent repeats it as fact.
- [Shortlist context for an agent](guides/shortlist-context.md). Evaluate a small set of retrieved passages without losing the source material.
- [Choose the next available tool](guides/choose-a-tool.md). Give an agent a tool recommendation from a list it can actually use.
- [Write a question Jev can evaluate](guides/write-a-question.md). Define the evidence, possible answers and review policy before adjusting a threshold.
- [Measure whether offloading helps](guides/measure-a-workflow.md). Compare completed tasks with and without System One, including review and fallback costs.

[Feature evidence map](FEATURE_MAP.md) · [Metric definitions](METHODOLOGY.md) · [Review history](REVIEW_LOG.md)

## Reproduce and contribute

`npm test` checks the catalog, guide references and generated-file links without
model calls. `npm run build` generates this index, records and guides.
`npm run check:sources` reports changes to pinned source repositories without
rewriting findings.

The [agent-decision diagnostic](benchmarks/agent-decisions/) includes the input cases,
runner and complete first-run results. Running it against a provider is separate
from validation and may incur charges.

[Contribution rules](CONTRIBUTING.md) · [Submit evidence](https://github.com/reachjalil/system-one-bench/issues/new/choose)

Original summaries and code use the MIT license. Linked reports, datasets and model
services retain their own terms. We link upstream data instead of republishing it.
