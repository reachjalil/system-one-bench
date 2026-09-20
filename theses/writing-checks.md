# Check a draft against named writing rules

With Jev, an agent can flag specific writing issues before revising the text.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A product description uses vague claims and never says what the app does.

The caller supplies the draft and separate rules for clarity, specificity and actionability.

Jev returns advisory checks. The writing agent revises the draft and a reader reviews the result.

Illustrative example, not a recorded result.

## Potential value

medium. Repeated editorial checks may be useful when a team has explicit rules, including the Unslop rules used in this project.

## Evidence confidence

low. Official guidance proposes semantic linting. We have no blinded study of these writing checks.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [TypeSafe examples for decisions over supplied text](../records/official-cookbooks.md). reference. Official examples show how to frame the question; each adaptation needs testing.
- [Define ambiguity before evaluating a workflow](../records/workflow-design.md). reference. Specify what uncertain and mixed cases should do.

## Test plan

Status: planned. The protocol below has not run.

40 original paragraphs with blind human labels per rule, including intentional quotations and technical prose.

Compare against:

- Deterministic style checks
- Direct agent review

Measure:

- Agreement per rule
- Unnecessary revisions
- Blind preference after editing
- Time

Keep only rules with useful agreement and low false-positive rates. Do not combine them into an unexplained writing score.

Planned report path: `findings/writing-checks/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `writing-check`, `text-labels`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
