# Write a question Jev can evaluate

Define the evidence, possible answers and review policy before adjusting a threshold.

Reviewed 2026-09-20. Design guide. These examples are not independently validated Engine benchmarks.

## Write the label rule first

Choose one decision that changes what the caller does next. Write a sentence that lets a person label examples consistently. List missing information, conflicting evidence and mixed cases before calling the model.

For example, "Is this good?" leaves the standard undefined. "Does the supplied test output show a passing test for the changed behavior?" states both the evidence and the criterion.

## Choose the answer format



| Format | Use | Example |
| --- | --- | --- |
| Boolean | One property can be present or absent. | Does the passage explicitly support the claim? |
| Choice | One known option should win. Include review when needed. | Which available tool fits the next step? |
| Score | An ordered rubric describes increasing levels. | Unrelated, related, partly answers, fully answers. |

## Separate independent properties

A broad verdict can hide several judgments. Ask about each property you can label, then let the caller combine the results under a written policy.

For a status report, check whether a build completed and whether deployment completed separately. Put questions that share the same evidence into one request. The Engine accepts up to eight questions.

Questions in the same request do not read each other's answers. If one decision depends on another result, handle that dependency in the calling code or use a later request.

## Give uncertainty a concrete next step

Decide what the caller does with an absent answer, a low score, disagreement or a timeout. It might retain a passage, request missing evidence or defer to the agent. A threshold alone does not define that behavior.

Do not read a returned probability of 0.9 as proof of 90% accuracy in your workload. Check calibration and retained-answer accuracy on examples that were not used to choose the threshold.

## Keep wording and evaluation versions together

Save the question text, candidate descriptions, rubric order and model/provider version with the test results. Change one factor at a time when investigating a failure.

A better prompt on the same examples is a development result. Evaluate on fresh examples before claiming a quality improvement. Keep the failed prompt and first run available for comparison.

## Evidence and limits

- [Define ambiguity before evaluating a workflow](../records/workflow-design.md). Specify what uncertain and mixed cases should do.
- [Separate signals from a final verdict](../records/phishing-signals.md). Question design helped, but a simple rule was a strong baseline.
- [Separate questions for separate hazards](../records/hazard-decomposition.md). Explicit checks helped; calibration and latency limits remain.

Related Engine patterns: `clarification`, `acceptance`, `rubric`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
