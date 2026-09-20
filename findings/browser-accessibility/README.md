# Accessibility input: September 20, 2026

Jev selected the expected operation and target in six of six original observations.
Each case had one request, with no retries or executed actions. All chosen answers
exceeded the existing 0.8 stopping threshold. That threshold is not an accuracy claim.

The cases exercise duplicate button labels with group context, a custom icon whose
name comes from ElementInternals, a required invalid field, open shadow-root controls,
checkbox state and a visible loading message. The target oracle uses a fixture-only
marker that is absent from the model input. Labels and scoring were committed in
`aa19fa2` before the first live request. The client was `b4c7253`.

[The full run](first-run-2026-09-20.json) includes all inputs, answers, usage and
observations. Six requests reported 5,267 input tokens and 524 output tokens. Median
request round trip was 343.5ms; median engine-reported latency was 292ms. These exclude
browser startup, initial observation and caller review. No billed-dollar estimate is
provided because the run records tokens rather than an invoice.

This is a first-party development diagnostic. No main-agent comparison, AX ablation,
full-task completion, held-out quality or savings was measured. The known fixture
marker is a trivial deterministic reference. The earlier browser form attempts,
including failures, remain in [their own report](../browser-companion/README.md).

## Observation overhead

The [before/after microbenchmark](observation-overhead-2026-09-20.json) records 15
screenshot-free observations per version on the original small form. The median was
1.40ms before and 2.71ms after enrichment. Runs were sequential and mostly warm, on
Chrome 153.0.8010.50 and Node 26.4.0. This does not represent large pages, native AX,
action admission checks or complete task latency.

## Native Mac limitation

The [native fixture check](native-ax-check-2026-09-20.json) compiled the helper and
reported Accessibility permission as granted, but did not expose a usable focused
AXWindow. The adapter returned `focused_window_unavailable`; successful native
control extraction is unverified. Earlier development attempts exposed an application
proxy where a window was expected. The adapter now validates the window role before
traversal and rejects that state. No desktop input action was attempted.

The fixture and manual check are in the public client. Native support remains
experimental and must pass an owned-window test before a general compatibility claim.
The browser AX tests and this Jev run do not establish native Mac support.

## Next comparison

Freeze unfamiliar tasks and independent result verifiers, including duplicate names,
misleading page text, overlays, changing destinations, closed shadow roots and missing
accessibility labels. Compare the same tasks with and without AX, keeping questions,
model, threshold and execution rules fixed. Then test the whole agent workflow and
report correct outcomes, unintended writes, stopped runs, retries, total time and all
model usage. Keep the deterministic baseline for tasks with a known control mapping.
