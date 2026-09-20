# Tests to run next

These are planned protocols, not completed studies or scheduled jobs. Prioritize the
high-value cases with a clear comparison. Save original inputs and predefine labels
before using the provider. Keep proposed protocols separate from existing results.

| Thesis | Value | Confidence | Status |
| --- | --- | --- | --- |
| [Choose a palette that fits a brief](theses/palette-choice.md#test-plan) | medium | low | planned |
| [Find the item described by the user](theses/item-selection.md#test-plan) | high | low | planned |
| [Give an agent a shorter reading list](theses/context-selection.md#test-plan) | high | moderate | planned |
| [Catch a claim the evidence does not support](theses/claim-checking.md#test-plan) | high | moderate | planned |
| [Choose a tool from its description](theses/tool-selection.md#test-plan) | medium | moderate | planned |
| [Keep useful parts of a long agent session](theses/history-selection.md#test-plan) | high | low | planned |
| [Choose a useful diagnostic check](theses/diagnostic-triage.md#test-plan) | high | moderate | planned |
| [Flag records that might describe the same item](theses/entity-matching.md#test-plan) | medium | low | planned |
| [Check a draft against named writing rules](theses/writing-checks.md#test-plan) | medium | low | planned |
| [Choose a category in a large catalog](theses/taxonomy-selection.md#test-plan) | medium | low | planned |
| [Prioritize logs for deeper analysis](theses/log-selection.md#test-plan) | low | low | planned |
| [Choose a recorded response or silence](theses/dialogue-selection.md#test-plan) | medium | low | planned |

## Record an outcome

Use the [finding template](templates/finding.md). Include the case hash, provider and
model version, prompt revision, baseline, failures, complete-task time and cost basis.
State whether the result supports, narrows or rejects the thesis. Do not change the
original hypothesis or overwrite the first run. Update the thesis confidence with a
dated reason and link the new report.

Existing completed work: [12-case batching diagnostic](benchmarks/agent-decisions/).
That diagnostic does not complete the broader claim-checking protocol above.
