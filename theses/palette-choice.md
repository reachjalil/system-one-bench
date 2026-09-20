# Choose a palette that fits a brief

With Jev, an agent can recommend one of your described color palettes for a design brief.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A creator asks for a calm, readable workspace with one restrained accent.

The agent supplies three approved palettes with names, hex values and plain-language descriptions.

Jev returns a palette ID or review. The app renders a preview and checks contrast in code.

Illustrative example, not a recorded result.

## Potential value

medium. Useful when a person already has approved designs and wants a relevant starting point. It does not create a palette or judge an unseen image.

## Evidence confidence

low. A builder documents design and palette selection, but no blinded preference comparison is available.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Choose a card design from a page description](../records/design-selection.md). anecdotal. A concrete design-selection integration exists; preference quality is unmeasured.

## Test plan

Status: planned. The protocol below has not run.

40 original briefs with three to eight approved palettes, including conflicting preferences and no suitable option.

Compare against:

- Fixed default
- Keyword matching
- Direct agent selection

Measure:

- Blind human preference
- No-match recognition
- Total time and calls
- Deterministic contrast failures

Keep as an optional recommendation only if blind reviewers prefer it to the default without increasing contrast failures.

Planned report path: `findings/palette-choice/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `palette-match`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
