# Choose a category in a large catalog

With Jev, an agent can navigate a described category tree to select a known label.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

An incident needs one of hundreds of service and issue categories.

The caller supplies a meaningful hierarchy, a question and the incident description.

Jev selects a path within a call budget or requests review.

Illustrative example, not a recorded result.

## Potential value

medium. Useful when categories are semantic and the input does not already contain a usable ID.

## Evidence confidence

low. The current 320-category experiment is synthetic, and a deterministic parser solved every case.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Navigating beyond a flat choice limit](../records/taxonomy-cap.md). first-party. Trees avoid truncation; structured data may need no model.

## Test plan

Status: planned. The protocol below has not run.

60 natural descriptions over a fixed hierarchy, with ambiguous siblings and no category fit.

Compare against:

- Structured parser
- Keyword rules
- Flat selection where it fits

Measure:

- Correct leaf
- Review rate
- Calls per case
- Latency

Keep the hierarchy only if it beats the parser or rules on natural descriptions within the same call budget.

Planned report path: `findings/taxonomy-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `taxonomy`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
