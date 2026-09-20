# Flag records that might describe the same item

With Jev, an agent can compare two descriptions and recommend match, different or review.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

Two catalogs list the same lamp under different names, but a second pair differs by voltage.

The caller supplies IDs and relevant attributes for one pair.

Jev gives a match recommendation. The app checks exact identifiers and preserves conflicting attributes before any merge.

Illustrative example, not a recorded result.

## Potential value

medium. Could reduce manual review when records use inconsistent names. False merges make review important.

## Evidence confidence

low. TypeSafe has a worked alignment example. We have not reproduced it or evaluated our generic recipe.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [TypeSafe examples for decisions over supplied text](../records/official-cookbooks.md). reference. Official examples show how to frame the question; each adaptation needs testing.

## Test plan

Status: planned. The protocol below has not run.

100 record pairs with human labels, near-duplicate variants and missing identifiers.

Compare against:

- Exact identifiers
- Normalized string similarity

Measure:

- False merges
- Missed matches
- Review volume
- Cost per resolved pair

Require no increase in false merges over the chosen baseline. Keep uncertain pairs separate.

Planned report path: `findings/entity-matching/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `entity-match`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
