# Prioritize logs for deeper analysis

With Jev, an agent can suggest which supplied log records deserve closer inspection.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A diagnostic bundle contains repeated routine events and one unusual warning.

The caller marks protected records and supplies IDs, severities and bodies.

The service advises on inspection priority while the caller retains the full archive.

Illustrative example, not a recorded result.

## Potential value

low. May help some noisy workloads, but our conservative study added cost and simple severity protection explained an apparent win.

## Evidence confidence

low. The available first-party study does not demonstrate net savings.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Log triage: filtering is not automatically saving](../records/log-triage.md). first-party. Conservative triage can add cost; reuse may help more.

## Test plan

Status: planned. The protocol below has not run.

50 incident bundles with incident-level labels, repeated records and relevant low-severity clues.

Compare against:

- Severity rules
- Exact reuse
- Read all records

Measure:

- Incident recall
- Analysis volume
- Actual downstream cost
- Missed clues

Reject any policy that hides a critical clue. Require demonstrated downstream savings before selling it as a cost feature.

Planned report path: `findings/log-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `log-triage`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
