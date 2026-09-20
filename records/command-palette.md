# Select an editor command from an informal request

reported · builder experiment · reviewed 2026-09-20

dabit3/jev-experiments; community demo repository, not a TypeSafe benchmark.

## Evidence confidence

low. This source suggests a useful experiment but does not establish a reliable benefit in a real agent workflow.

## What was observed

Map an informal description to a command and allowed arguments.

NL Palette lists 66 commands and reports a 30-phrase comparison with its fuzzy matcher. Six questions share a request.

## Baseline

The demo's fuzzy command-name matcher.

## Finding

The author reports 30/30 top choices for Jev versus 6/30 for fuzzy matching.



## Limits

Small authored phrase set, not a production study. This is a command palette, not a color-palette experiment.

## What we would test in System One

Provide an action-menu recipe that returns existing command IDs. The application handles availability, confirmation and execution.

This feature recommendation is our interpretation. Related Engine patterns: `command-match`, `next-tool`.

## Primary sources

- [Pinned demo and test method](https://github.com/dabit3/jev-experiments/blob/c469e5bfdc73eb3e1999bba2569e66b579a970fd/nl-palette/README.md)

Reviewed revision: `c469e5bfdc73eb3e1999bba2569e66b579a970fd`.
