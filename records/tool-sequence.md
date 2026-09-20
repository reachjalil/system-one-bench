# Choosing tools from real MCP inventories

reported · independent experiment · reviewed 2026-09-20

BillionsBobby/JevRouter; external project author; not rerun here.

## What was tested

Predict the first five tool calls for Toolathlon tasks.

Ten tasks; inventories from nine live MCP servers. Serial and decomposed Jev routing compared with DeepSeek V4.1 Flash.

## Baseline

DeepSeek tool predictions; serial versus decomposed Jev.

## Finding

Serial Jev was faster in this report; decomposition increased position-wise matches but also increased latency.

- Position-wise hits: serial Jev 38%, decomposed 44%, DeepSeek 24%.
- Per-task latency: 1.58s, 10.6s and 8.65s respectively.

## Limits

Only ten tasks and predicted sequences; this is not demonstrated task completion. Provider, prompts and mode affect the tradeoff.

## What we would test in System One

Offer a next-tool recommendation over explicit candidates. Do not market a predicted multi-step sequence as a reliable autonomous plan.

This feature recommendation is our interpretation. Related Engine patterns: `next-tool`, `intent`.

## Primary sources

- [Pinned report](https://github.com/BillionsBobby/JevRouter/blob/3c558a78edf57934790f50480d8f9ac468977853/README.md)
- [Method and per-task discussion](https://github.com/BillionsBobby/JevRouter/issues/2)

Reviewed revision: `3c558a78edf57934790f50480d8f9ac468977853`.
