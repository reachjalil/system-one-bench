# Delegate routine browser decisions

With Jev, an agent can choose the next action from a fresh list of visible browser controls and review the resulting screen.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

You ask your coding agent to save a light-mode preview named Alpha in a web app.

The agent supplies the goal and exact values. The companion supplies Chrome-computed names, roles, group context, field states and a screenshot for the agent.

Jev recommends type, select or click with an observed target. The companion can perform a short authorized sequence and return the final screenshot.

Illustrative workflow. The linked original fixture records successful attempts and uncertainty stops.

## Potential value

high. Repeated interface choices may fit a small decision model and avoid a full main-agent turn for each click. The end-to-end benefit still needs measurement.

## Evidence confidence

low. External implementations and our six-task development diagnostic establish feasibility. They do not establish reliable completion or savings across unfamiliar websites.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Browser actions from observed control IDs](../records/browser-indexed-controls.md). reported. Less browser overhead helped a small matched comparison.
- [Mac actions from OCR and accessibility](../records/mac-screen-decisions.md). reported. Structured screen extraction is part of the workload.
- [Shared page state improved our first browser diagnostic](../records/sysone-browser-fixture.md). first-party. Four of six saved states after a shared-input fix.
- [What Jev needs from a computer-use adapter](../records/jev-computer-input-contract.md). reference. Supply explicit accessible controls and shared state.
- [Six accessibility-informed next-action choices](../records/sysone-accessibility-decisions.md). first-party. Six correct choices; complete-task benefit still untested.

## Test plan

Status: planned. The protocol below has not run.

At least 40 unfamiliar tasks across original forms, filters, item lists and changing layouts. Freeze tasks and verifiers before testing. Include missing controls, loading, duplicate labels and misleading page instructions.

Compare against:

- Calling agent with its normal browser tools
- Calling agent with System One single-step advice
- Calling agent with the bounded companion loop
- Known deterministic scripts where applicable
- Paired identical browser tasks with and without AX enrichment

Measure:

- Independently verified task completion
- Unintended writes and duplicate submissions
- Agent escalations and manual interventions
- Complete task median and p95 including startup and host review
- All model usage, provider errors and stopped attempts
- Screenshot and text volume sent to each model

Keep the companion opt-in. Require no unintended writes in the reviewed suite and an equal-quality complete-workflow benefit before a savings claim. Publish all attempts and confidence intervals.

Planned report path: `findings/browser-companion/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
