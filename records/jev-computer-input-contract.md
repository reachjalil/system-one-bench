# What Jev needs from a computer-use adapter

reference · implementation · reviewed 2026-09-20

TypeSafe vendor documentation; Chrome DevTools and Apple platform APIs. System One mapping is our interpretation.

## Evidence confidence

moderate. The input contract is documented by its provider. The benefit of a particular adapter still needs a controlled task comparison.

## What was observed

Turn a screen observation into a bounded next-action question.

Review the official state, fan-out and Jev 1.13 limitation documentation alongside browser and Mac accessibility APIs.

## Baseline

No comparative experiment in this reference record.

## Finding

Jev currently accepts text. Questions in a batch evaluate independently. A computer-use adapter must supply the relevant labels, values and relationships to every question, with exact checks implemented in code.



## Limits

Documentation describes the model contract and known weaknesses, not reliable task completion. Accessibility coverage depends on the application. Page content can influence the model despite being labeled untrusted.

## What we would test in System One

Our inference: bind computed AX names to observed nodes, include group and field state, filter irrelevant text, keep exact comparisons outside the model and retain a review option.

This feature recommendation is our interpretation. Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

## Primary sources

- [TypeSafe state and supported modalities](https://docs.typesafe.ai/concepts/state)
- [TypeSafe independent fan-out questions](https://docs.typesafe.ai/patterns/fan-out)
- [Jev 1.13 known failure modes, reviewed September 17](https://docs.typesafe.ai/model-jaggedness/jev-1.13)
- [Chrome accessibility protocol](https://chromedevtools.github.io/devtools-protocol/tot/Accessibility/)
- [Apple accessibility model](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXmodel.html)

