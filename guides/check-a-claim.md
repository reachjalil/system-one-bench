# Check a claim against tool output

Ask whether the evidence supports a statement before an agent repeats it as fact.

Reviewed 2026-09-20. Design guide. These examples are not independently validated Engine benchmarks.

## Use it when the wording needs interpretation

An agent has run a command or read a document and is about to describe the result. The useful question is narrow. Does this output support the exact claim?

Parse exit codes, test counts and HTTP status codes directly when those fields settle the answer. Jev is an option when the claim depends on the meaning of a passage. It cannot verify a test that never ran.

## Try the existing recipe

Start System One with npx sysone. Add your Vercel AI Gateway key in Settings. In Library, open Check a claim, replace the example and run it.

For the hosted MCP, run evidence-check with sysone_run and your evidence. The JSON below is an equivalent custom sysone_decide request. The current public stdio bridge still offers sysone_patterns for lookup. This is a teaching example, not a new benchmark.

```json
{
  "state": "Claim: the new release is live. Evidence: the build passed, but deployment stopped because the destination project was not selected.",
  "questions": {
    "supported": {
      "type": "boolean",
      "instructions": "Does the supplied evidence establish that the new release is live?"
    },
    "contradicted": {
      "type": "boolean",
      "instructions": "Does the supplied evidence explicitly contradict the claim that the new release is live?"
    }
  }
}
```

## Keep the original evidence with the result

This example should not support a successful deployment claim. Inspect both answers. Missing evidence and an explicit contradiction are different cases.

Choose review thresholds using labeled examples from your workflow. A high model probability is not a measured guarantee of correctness. Missing answers, conflicting signals and timeouts go back to the agent for review.

The calling agent writes the final response and cites the original command or document. System One does not approve a release or perform the deployment.

## Compare one batch with separate checks

Our 12-case diagnostic asked two questions per input. Batching used fewer requests but made one additional label error. The complete run is linked below.

Before adopting the recipe, include stale build output, canceled jobs, partial successes and contradictory reports. Score the final statement as well as the individual answers. Count any extra host turn needed to read the result.

## Evidence and limits

- [Batching two evidence checks](../records/batched-evidence.md). Fewer calls and tokens, with one extra error in this small test.
- [Separate signals from a final verdict](../records/phishing-signals.md). Question design helped, but a simple rule was a strong baseline.

Related Engine patterns: `evidence-check`, `acceptance`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
