# Find the item described by the user

With Jev, an agent can select a supplied item whose description fits a request.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A user needs a compact desk lamp with warm light and no subscription-dependent controls.

The app filters availability and exact constraints, then supplies IDs and descriptions for eligible items.

Jev chooses an item ID or no match. The agent checks the listed facts before recommending it.

Illustrative example, not a recorded result.

## Potential value

high. This selection pattern can serve asset libraries, templates, product catalogs and saved tools. One reusable contract covers several frequent tasks.

## Evidence confidence

low. The decision shape appears in demos and official examples. We have no representative item-selection study for the Engine.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Choose a card design from a page description](../records/design-selection.md). anecdotal. A concrete design-selection integration exists; preference quality is unmeasured.
- [TypeSafe examples for decisions over supplied text](../records/official-cookbooks.md). reference. Official examples show how to frame the question; each adaptation needs testing.
- [A personal app routes two recipe requests](../records/community-router.md). anecdotal. Descriptions can distinguish two plausible routes; reliability remains untested.

## Test plan

Status: planned. The protocol below has not run.

60 authored requests over fixed catalogs, including similar descriptions, missing facts and no-match cases.

Compare against:

- Exact filters and keyword ranking
- Direct agent selection

Measure:

- Human-labeled acceptable set
- Unsupported attribute claims
- No-match recall
- Total task cost

Require no invented attributes and at least the baseline acceptable-choice rate before making it a default.

Planned report path: `findings/item-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `item-match`, `semantic-search`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
