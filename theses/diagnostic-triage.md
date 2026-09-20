# Choose a useful diagnostic check

With Jev, an agent can rank proposed tests against current failure evidence.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A service is unreachable even though its processes look healthy.

The agent proposes candidate causes and read-only tests, with a current state snapshot.

Jev recommends a test or review. The agent runs the test, updates its hypothesis and verifies repair invariants.

Illustrative example, not a recorded result.

## Potential value

high. Repeated incident and debugging work contains many choices about which evidence to collect next.

## Evidence confidence

moderate. The SRE study measured more passing attempts overall, with regressions. Trace attribution also showed low joint diagnosis accuracy.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Choose diagnostic tests and review repair evidence](../records/sre-decision-support.md). reported. More attempts passed in one small study; some incidents regressed.
- [Find the likely failure in an agent trace](../records/agent-failure-attribution.md). reported. Trace classification is promising, but most full diagnoses were wrong.

## Test plan

Status: planned. The protocol below has not run.

30 reproducible local failures with known causes, misleading logs and cases where the correct hypothesis is omitted.

Compare against:

- Direct agent investigation
- Fixed diagnostic checklist

Measure:

- Successful repairs
- Diagnostic calls
- Time to a supported cause
- Durable repair tests

Require better task outcomes or fewer diagnostic calls without more incorrect repairs. Report omitted-hypothesis failures separately.

Planned report path: `findings/diagnostic-triage/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `diagnostic-test`, `repair-check`, `tool-result`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
