# Batching two evidence checks

first-party · synthetic test · reviewed 2026-09-20

**Affiliation:** System One Bench / Jalil Laaraichi; same maintainer as System One Engine.

## Decision and method

Check whether short tool evidence supports or explicitly contradicts a claim.

12 authored cases, 24 labels; batch versus two sequential SDK requests; alternating order, no cache or retries. Labels and corpus hash precede the first run. Live Jev via Vercel Gateway.

**Baseline:** The same questions in separate sequential requests; no expensive host-model comparison.

## Finding

Batching reduced calls, input tokens and median case latency, with one additional incorrect answer in this small run.

- Batch: 23/24 labels correct; 12 calls; 4,113 input tokens; case p50 256ms, p95 535ms.
- Separate: 24/24 correct; 24 calls; 7,530 input tokens; case p50 537ms, p95 685ms.
- Both modes flagged 3/24 answers for review; zero failed requests.

## Limits

Tiny synthetic diagnostic, not a held-out production benchmark. No host-agent tool overhead, final task success or invoice savings measured. One run is not a stable latency distribution.

## Implication for tools (our interpretation)

Batch independent checks when evidence is shared, but evaluate quality as well as request count. Preserve uncertainty and inspect contradictions rather than blindly accepting the cheaper configuration.

Engine patterns: `acceptance`, `evidence-check`

## Primary sources

- [Method and reproduction](https://github.com/reachjalil/system-one-bench/tree/main/benchmarks/agent-decisions)
- [Complete first-run results](https://github.com/reachjalil/system-one-bench/blob/main/benchmarks/agent-decisions/results-2026-09-20T04-06-31.559Z.json)

