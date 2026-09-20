# Batch independent evidence checks

This is a small synthetic diagnostic, not proof of coding-agent savings. Twelve
short claims are paired with confirming, contradicting or missing tool evidence.
Labels are written before the initial live run. Two boolean questions share the
same state: is the claim established, and is it explicitly contradicted?

Compare one batched call against two sequential calls. Order alternates per case.
There are no retries or cache. Latency is total SDK wall time per case, including
network. p50/p95 use nearest rank. Accuracy uses p >= 0.5; the separate review signal
covers 0.2 < p < 0.8 or missing probabilities. This threshold is not calibrated.
Errors remain in the denominator, with missing usage reported rather than invented.

```sh
pnpm install --frozen-lockfile
# Set AI_GATEWAY_API_KEY privately in your shell or secret manager.
pnpm bench:agent
```

A run makes 36 provider requests. It writes a uniquely named JSON report with the
corpus hash, prompts, every result, errors and aggregate metrics. Do not overwrite a
first run or tune these cases and then call them held-out. No expensive baseline model
is called. Provider prices and promotions are intentionally excluded from results.
