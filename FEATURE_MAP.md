# Connect evidence to Engine work

The existing recipes below use System One service contracts. These mappings are our
interpretation of related studies. The studies do not validate every recipe.

| Available recipe | Evidence | What to try | What to measure next |
| --- | --- | --- | --- |
| `context-relevance`, `rubric` | [Passage reranking](records/passage-reranking.md) | Rate a bounded set of retrieved snippets and retain the originals | Final answers, missing counterevidence and net token cost |
| `evidence-check`, `acceptance` | [Batch diagnostic](records/batched-evidence.md), [signal controls](records/phishing-signals.md) | Ask independent questions over one tool result | False confirmations, review rate and complete task time |
| `next-tool` | [Tool prediction](records/tool-sequence.md) | Recommend one available tool after permission filtering | Task completion and extra host turns |
| `tool-result` | [Failure attribution](records/agent-failure-attribution.md) | Classify a short failure description | Diagnosis accuracy on natural failures |
| `taxonomy` | [Choice cap](records/taxonomy-cap.md) | Select a category when the answer is not already in a field | Parser baseline, call budget and ambiguous paths |
| `log-triage` | [Log study](records/log-triage.md) | Rank records for inspection while keeping every original | Incident recall and actual downstream cost |
| `clarification`, `intent` | [Workflow guidance](records/workflow-design.md) | Identify a missing detail or a known request category | Human labels on representative requests |
| `narrator` | First-party game integration, no independent experience study | Advise on eligible recorded cues after repeat and timing checks | Playthroughs, interruptions and repeated lines |

## Proposals, not current dedicated tools

A context shortlist tool could accept stable snippet IDs and return keep/review lists.
The current `context-relevance` recipe evaluates candidate text; it is not a complete
retrieval pipeline. The next experiment should include omitted counterevidence and
measure the answer after selection.

A trace triage tool could return an error category and candidate step from a failed
run. The attribution study supports testing that idea. Its low joint accuracy argues
for review before any repair. The current `tool-result` recipe is much smaller than
that proposed trace reader.

An evidence checklist could collect claim IDs, source IDs and separate support and
contradiction signals. Today, `evidence-check` handles a short supplied claim. It does
not retrieve missing sources or certify a statement.

Add a dedicated tool only when the recipe has repeated users and a measured benefit.
The [routing ablation](records/routing-ablation.md) is a reason to compare no-model
alternatives before adding automatic model selection.
