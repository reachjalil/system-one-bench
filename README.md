# System One Bench

Useful decisions, measured honestly. A public evidence catalog for Jev and future
System One models, maintained alongside [System One Engine](https://systemoneengine.com).

Find a real workload, read what was actually measured, and follow the primary source.
This is a curated starting set—not an exhaustive survey or a leaderboard of incomparable scores.
We disclose our own work, preserve negative results, and distinguish reported findings
from reproductions. We have not independently rerun third-party benchmarks.

## Evidence library

| Scenario | Evidence | Practical finding |
| --- | --- | --- |
| [Model routing: test whether Jev adds value](records/routing-ablation.md) | reported · independent experiment | No-Jev ablation matched the hybrid frontier. |
| [Choosing tools from real MCP inventories](records/tool-sequence.md) | reported · independent experiment | Better tool prediction can still take longer. |
| [Separate questions for separate hazards](records/hazard-decomposition.md) | reported · synthetic test | Explicit checks helped; calibration and latency limits remain. |
| [Log triage: filtering is not automatically saving](records/log-triage.md) | first-party · public-dataset study | Conservative triage can add cost; reuse may help more. |
| [Navigating beyond a flat choice limit](records/taxonomy-cap.md) | first-party · synthetic test | Trees avoid truncation; structured data may need no model. |
| [Typed evaluation versus chat-model wrappers](records/vendor-workflows.md) | reported · vendor benchmark | A reason to test typed decisions, not a savings guarantee. |
| [Define ambiguity before evaluating a workflow](records/workflow-design.md) | reference · official guidance | Specify what uncertain and mixed cases should do. |
| [Batching two evidence checks](records/batched-evidence.md) | first-party · synthetic test | Fewer calls and tokens, with one extra error in this small test. |

## What this suggests building

- **Explicit finite choices:** tool and taxonomy recommendations over descriptions that match the current task. Keep permissions and actions in the host.
- **Independent checks over shared evidence:** batch separate questions; measure disagreement, total latency and host review overhead.
- **Context selection with a review path:** preserve uncertain evidence and test downstream answer quality. A relevance score alone does not prove token savings.
- **Deterministic gates and reuse first:** avoid a model call for known facts, repeated inputs, completed cues or easily parsed fields.
- **Observable fallbacks:** missing confidence, errors and deadlines must remain visible. Never turn a probability into authority.

These are design inferences. Each [record](records/) maps evidence to Engine patterns
and explains its limits. The Engine Library exposes editable recipes; not every recipe
has been independently benchmarked. [Feature evidence map](FEATURE_MAP.md).

## Reproduce and contribute

`npm test` validates the catalog without dependencies or model calls.
`npm run build` generates this index and the records.
`npm run check:sources` reports source-revision drift without changing findings.

[Contribution rules](CONTRIBUTING.md) · [Submit evidence](https://github.com/reachjalil/system-one-bench/issues/new/choose)

Original summaries and code are MIT licensed. Linked reports, datasets and model services
retain their own terms. We link upstream data instead of republishing it.
