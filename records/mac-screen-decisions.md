# Mac actions from OCR and accessibility

reported · independent experiment · reviewed 2026-09-20

Aaron Levin / awlevin; external project author, not rerun here.

## Evidence confidence

low. The implementation and one reported comparison motivate a test. They do not establish general cost or success rates.

## What was observed

Choose a next Mac action from screen text and accessibility controls.

The author compares one decision for the same screenshot and goal; OCR and accessibility build Jev inputs.

## Baseline

A frontier model reading the screenshot, with different preprocessing.

## Finding

The report shows a much cheaper individual decision. It also exposes the work needed to supply structured screen state.

- Reported decision cost: about $0.0002 versus $0.032.
- Reported full step: about 1.5s with OCR versus 5.5s.

## Limits

One decision does not measure complete-task reliability. Jev receives deterministic date processing; the comparator interprets pixels. Twelve-step costs are extrapolations.

## What we would test in System One

Our inference: a desktop adapter needs a local observation layer. Direct image input to Jev is not demonstrated.

This feature recommendation is our interpretation. Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

## Primary sources

- [Pinned implementation and author report](https://github.com/awlevin/typesafe-computer-use/blob/cc7b5066ae1a07b5e3182e8f87a9b5b6dfdcffc1/README.md)

Reviewed revision: `cc7b5066ae1a07b5e3182e8f87a9b5b6dfdcffc1`.
