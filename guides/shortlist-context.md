# Shortlist context for an agent

Evaluate a small set of retrieved passages without losing the source material.

Reviewed 2026-09-20. Design guide. These examples are not independently validated Engine benchmarks.

## Start after retrieval

Repository search or document search has returned candidates. Several share the query words, but only some explain the problem. Jev can rate those candidates against a specific task.

Keep paths, document IDs and retrieval order. Remove exact duplicates and enforce access rules before inference. Jev cannot recover a file that search never found.

## Score a few passages at a time

Open Keep useful context in Library. Supply the task and candidate text. For the hosted MCP, run context-relevance with sysone_run and the passages you supply. The JSON below is a custom sysone_decide request. The current public stdio bridge still offers sysone_patterns for lookup.

For several passages, give each a stable ID and its own question in one request. The current Engine accepts at most eight questions. The published 30-passage study is evidence for an experiment, not a result reproduced by this smaller recipe.

```json
{
  "state": "Task: explain why a form submits twice. Passage A, SubmitButton.tsx: the button calls submitOrder in onClick. Passage B, CheckoutForm.tsx: the enclosing form also calls submitOrder in onSubmit. Passage C, styles.css: button border colors.",
  "questions": {
    "passageA": {
      "type": "boolean",
      "instructions": "Does passage A provide evidence that helps explain the duplicate submission?"
    },
    "passageB": {
      "type": "boolean",
      "instructions": "Does passage B provide evidence that helps explain the duplicate submission?"
    },
    "passageC": {
      "type": "boolean",
      "instructions": "Does passage C provide evidence that helps explain the duplicate submission?"
    }
  }
}
```

## Return IDs and preserve uncertain passages

Keep the original candidates accessible to the agent. Use relevance to order what it reads first. Keep uncertain passages in a review list rather than deleting them.

Adjacent files can explain each other, as passages A and B do here. Include tests where one apparently irrelevant passage contains the only counterexample. Also test batches with no useful result.

## Measure the answer after selection

Compare the existing retrieval order, deterministic deduplication and Jev selection on the same tasks. Record whether the final answer is correct and cites the right passage.

Count saved host input tokens, added decision tokens and the time spent fetching omitted context. The reranking study measures ranking quality. It does not establish that this coding workflow saves money or preserves answer quality.

## Evidence and limits

- [Rank retrieved passages before reading them](../records/passage-reranking.md). Ranking gains depend on the dataset and how scores are averaged.
- [Compare decision types before choosing a model](../records/decision-suite.md). A broad comparison supports task-specific testing, not one universal winner.

Related Engine patterns: `context-relevance`, `rubric`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
