# Measure whether offloading helps

Compare completed tasks with and without System One, including review and fallback costs.

Reviewed 2026-09-20. Design guide. These examples are not independently validated Engine benchmarks.

## Compare the same work

Choose a repeated task you already perform. Save the inputs and write a completion rule before changing the workflow. Run the existing agent, the agent with System One and a deterministic alternative where one applies.

Keep model settings, permissions and starting state fixed. Alternate the order of repeated runs to reduce timing bias. Separate warm-cache and uncached results. Retain failures and canceled requests.

## Keep a task-level record

Studio records Engine activity. It does not know the full host conversation cost or whether the final task succeeded. Join the task outcome with receipts from both sides.

Use this CSV header as a starting point. Leave unknown amounts empty. Missing billing data is not zero cost. Record the price source and date separately.

```csv
task_id,variant,run_id,completed,quality_label,total_ms,host_input_tokens,host_output_tokens,decision_input_tokens,decision_calls,review_turns,fallback_calls,cache_hits,cost_usd,error
```

## Report the denominator



| Metric | What to include |
| --- | --- |
| Task quality | Completed tasks and the same acceptance criteria in every variant. |
| Elapsed time | The user request through the final result, including tool setup and review. Report median and p95 with sample count. |
| Cost | Host calls, decision calls, retries and fallbacks. Separate price estimates from invoice amounts. |
| Review burden | Uncertain answers and the human or agent turns needed to resolve them. |
| Coverage | The share handled without fallback, plus accuracy within that share. |
| Failures | Timeouts, provider errors, invalid responses and canceled work. Keep their usage. |

## Calculate savings for the whole task

Calculate the offloaded task cost as host cost plus decision cost plus review and fallback cost. Compare that total with the baseline task cost. Report the absolute difference and the number of tasks.

A fixed-price chat subscription does not become cheaper because a separate API used fewer tokens. For that user, the benefit may be shorter waits or better visibility. It may also be no benefit.

The Engine does not automatically invoke a more expensive model. Include any fallback chosen by the calling agent in your comparison.

## Keep the claim as narrow as the evidence

Our batching diagnostic measured two SDK call shapes on 12 synthetic inputs. It measured no host-agent overhead. The broader decision suite reports server processing times, which exclude the network. Those numbers answer different questions.

Record how many tasks were sampled and how they were selected. Publish unsuccessful variants. If quality falls, fewer tokens alone do not establish a better workflow.

## Evidence and limits

- [Model routing: test whether Jev adds value](../records/routing-ablation.md). No-Jev ablation matched the hybrid result.
- [Log triage: filtering is not automatically saving](../records/log-triage.md). Conservative triage can add cost; reuse may help more.
- [Batching two evidence checks](../records/batched-evidence.md). Fewer calls and tokens, with one extra error in this small test.
- [Compare decision types before choosing a model](../records/decision-suite.md). A broad comparison supports task-specific testing, not one universal winner.

Related Engine patterns: `evidence-check`, `context-relevance`, `next-tool`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
