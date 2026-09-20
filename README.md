# System One Bench

A reference for what Jev can help an agent do. Start with the value and a plain-language example, then inspect the evidence and the next test.
This public catalog records what each experiment measured, which baseline it used
and where its conclusion stops. It supports development of [System One Engine](https://systemoneengine.com).

We maintain both projects. We accept firsthand Reddit and X posts, builder demos, official examples and benchmarks. Anecdotes can suggest a useful task, but they do not prove its benefit. External results below are author-reported; we have not
independently rerun them. Our own work is labeled first-party. Documentation is
labeled reference and does not count as a benchmark.

## Capability theses

Potential value is our editorial priority for individual agent users. Evidence confidence describes the support for each bounded claim. Neither is a model probability or a savings promise.

| With Jev, an agent can... | Potential value | Evidence confidence |
| --- | --- | --- |
| [Choose a palette that fits a brief](theses/palette-choice.md) | medium | low |
| [Find the item described by the user](theses/item-selection.md) | high | low |
| [Give an agent a shorter reading list](theses/context-selection.md) | high | moderate |
| [Catch a claim the evidence does not support](theses/claim-checking.md) | high | moderate |
| [Choose a tool from its description](theses/tool-selection.md) | medium | moderate |
| [Keep useful parts of a long agent session](theses/history-selection.md) | high | low |
| [Choose a useful diagnostic check](theses/diagnostic-triage.md) | high | moderate |
| [Flag records that might describe the same item](theses/entity-matching.md) | medium | low |
| [Check a draft against named writing rules](theses/writing-checks.md) | medium | low |
| [Choose a category in a large catalog](theses/taxonomy-selection.md) | medium | low |
| [Prioritize logs for deeper analysis](theses/log-selection.md) | low | low |
| [Choose a recorded response or silence](theses/dialogue-selection.md) | medium | low |
| [Delegate routine browser decisions](theses/browser-control.md) | high | low |

Each thesis has an illustrative situation, a proposed input and result, supporting and conflicting sources, and a test plan. [Rating method](METHODOLOGY.md#value-and-confidence) · [Test backlog](TEST_PLAN.md).

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

25 reviewed records. Scores from different tasks are not one leaderboard.

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
| [A personal app routes two recipe requests](records/community-router.md) | anecdotal · firsthand Reddit report | Descriptions can distinguish two plausible routes; reliability remains untested. |
| [A user tries Jev to reduce a long agent history](records/community-compaction.md) | anecdotal · firsthand Reddit report | A user found history selection useful; quality and cache costs need a test. |
| [X posts disagree about compaction by filtering](records/x-compaction-discussion.md) | anecdotal · X anecdotes and criticism | Conflicting firsthand views identify a question to test, not a settled result. |
| [Choose a card design from a page description](records/design-selection.md) | anecdotal · builder report | A concrete design-selection integration exists; preference quality is unmeasured. |
| [Select an editor command from an informal request](records/command-palette.md) | reported · builder experiment | An authored demo maps descriptions to commands better than its name matcher. |
| [Choose diagnostic tests and review repair evidence](records/sre-decision-support.md) | reported · application experiment | More attempts passed in one small study; some incidents regressed. |
| [TypeSafe examples for decisions over supplied text](records/official-cookbooks.md) | reference · official examples | Official examples show how to frame the question; each adaptation needs testing. |
| [Parable dialogue advice chose silence in every first-run case](records/parable-dialogue.md) | first-party · synthetic test | Conservative silence is not evidence of better dialogue. |
| [Browser actions from observed control IDs](records/browser-indexed-controls.md) | reported · independent experiment | Less browser overhead helped a small matched comparison. |
| [Mac actions from OCR and accessibility](records/mac-screen-decisions.md) | reported · independent experiment | Structured screen extraction is part of the workload. |
| [Shared page state improved our first browser diagnostic](records/sysone-browser-fixture.md) | first-party · synthetic test | Four of six saved states after a shared-input fix. |
| [What Jev needs from a computer-use adapter](records/jev-computer-input-contract.md) | reference · implementation | Supply explicit accessible controls and shared state. |
| [Six accessibility-informed next-action choices](records/sysone-accessibility-decisions.md) | first-party · synthetic test | Six correct choices; complete-task benefit still untested. |

## Practical guides

These guides turn research into experiments with the current Engine contracts. They
do not claim that the example recipes reproduce the upstream results.

- [Check a claim against tool output](guides/check-a-claim.md). Ask whether the evidence supports a statement before an agent repeats it as fact.
- [Shortlist context for an agent](guides/shortlist-context.md). Evaluate a small set of retrieved passages without losing the source material.
- [Choose the next available tool](guides/choose-a-tool.md). Give an agent a tool recommendation from a list it can actually use.
- [Write a question Jev can evaluate](guides/write-a-question.md). Define the evidence, possible answers and review policy before adjusting a threshold.
- [Measure whether offloading helps](guides/measure-a-workflow.md). Compare completed tasks with and without System One, including review and fallback costs.
- [Give an agent a short browser subtask](guides/delegate-browser-steps.md). Use current control IDs, caller-supplied text and final-screen review with the System One browser companion.
- [Give Jev useful accessibility evidence](guides/prepare-computer-state.md). Use labels, group context and exact field facts to turn a screen into a small decision.

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
