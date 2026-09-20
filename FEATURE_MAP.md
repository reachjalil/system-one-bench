# From evidence to useful tools

These mappings are design interpretations, not claims that every Engine recipe is
independently benchmarked. Engine recipes use real service contracts and remain editable.

| Engine recipe / MCP surface | Evidence | Product consequence | Next validation |
| --- | --- | --- | --- |
| `next-tool`, `sysone_decide` | [Tool prediction](records/tool-sequence.md) | One finite next-tool choice, with host authority retained | Closed-loop task success and host overhead |
| `acceptance`, `evidence-check` | [Question decomposition](records/hazard-decomposition.md) | Independent checks with explicit criteria | Representative coding evidence, contradiction and missing-info cases |
| `taxonomy`, `sysone_tree` | [Choice cap](records/taxonomy-cap.md) | Semantic hierarchy, call budget and abstention | Natural descriptions; deterministic parser baseline |
| `log-triage`, `sysone_logs` | [Log triage](records/log-triage.md) | Preserve records; expose cache and filtering rate | Actual downstream bill and incident recall |
| `context-relevance` | [Typed workflows](records/vendor-workflows.md) | Candidate checks before filling host context | Answer quality with uncertain context retained |
| `clarification`, `intent` | [Workflow design](records/workflow-design.md) | Explicit unknown/review path | Human labels on real consenting-user tasks |
| `narrator`, `sysone_dialogue` | First-party game integration; no independent experience study | Completed cues and deterministic spacing precede inference | Playthrough and listening review, repeat and interruption rates |
| `sysone_patterns` | This evidence catalog | Discover compact recipes, then fetch one editable input | Whether discovery reduces host prompt work |

## Feature proposals worth investigating

1. **Context shortlist:** evaluate relevance independently for a bounded set of file
   snippets, returning keep/review rather than irreversibly deleting context.
2. **Evidence checklist:** test individual assertions against cited tool outputs,
   reporting contradictions and unknowns separately.
3. **Attention queue:** advise whether a background result interrupts the current task,
   preserving mandatory failure notifications and user preferences.
4. **Tool choice with availability filters:** deterministic candidate filtering first,
   finite semantic selection second; never allow the model to invent a tool or permission.

These proposals can start as `sysone_decide` recipes. Dedicated tools should earn
extra API surface through representative evaluations and repeated user demand.
Automatic expensive-model switching is not a default: the routing ablation shows why.
