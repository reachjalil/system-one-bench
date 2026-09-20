# Separate questions for separate hazards

reported · synthetic test · reviewed 2026-09-20

**Affiliation:** AnshChoudhary; external project author; not rerun here.

## Decision and method

Flag hazards in proposed agent tool calls before execution.

600 authored records, 320 held out; full hazard battery compared with a broad dangerousness question.

**Baseline:** Single generic hazard question.

## Finding

Decomposed questions sharply reduced false blocks on hard negatives in this corpus. Calibration and latency targets still failed.

- Hard-negative block rate: full battery 0%; generic question 39.2%.
- Reported ECE 0.156; p95 added latency 595ms.

## Limits

Author-designed synthetic attacks are not evidence of adversarial security in production. Approval friction must be measured separately.

## Implication for tools (our interpretation)

Use independent, explicit checks as advisory signals. Keep authorization, execution safeguards and human approval outside Jev.

Engine patterns: `change-scope`, `acceptance`, `evidence-check`

## Primary sources

- [Pinned report](https://github.com/AnshChoudhary/typesafe-ai-firewall/blob/1b945790797651abedbfbafb9a21c293ba5c837e/report.md)

Reviewed revision: `1b945790797651abedbfbafb9a21c293ba5c837e`.
