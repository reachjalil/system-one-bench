# Parable dialogue advice chose silence in every first-run case

first-party · synthetic test · reviewed 2026-09-20

System One and The Infinite Parable share an author. This is our development diagnostic, not independent reproduction.

## Evidence confidence

low. The receipts establish this small development run. They do not establish improved pacing, useful positive selection or end-to-end savings.

## What was observed

Choose one eligible recorded game reaction or silence.

Eight authored scenarios resolve installed cue text into the local dialogue API using typesafe-ai/jev through Vercel AI Gateway. Four explicit silence labels precede the run; four editorial cases have no objective label. The 0.8 threshold remains unchanged.

## Baseline

Exact-completion and minimum-silence checks handle two cases without inference. Existing authored fact/heard guards can reject two other policy cases. No complete deterministic-versus-Jev listening comparison was run.

## Finding

All four explicit silence expectations matched. The four editorial cases also returned silence, so this run does not demonstrate useful positive selection or a more natural experience.

- 4 of 4 explicit silence expectations matched; 4 editorial cases require listening review.
- 6 provider evaluations; 3,758 input and 180 output tokens.
- Model-backed request wall time: p50 254 ms; p95 512 ms, nearest rank over six calls.
- All 8 service results were silence.

## Limits

Small private authored corpus; public receipts omit cue text and facts, limiting independent reproduction. No immutable provider model revision, listener ratings, whole-task savings or probability calibration. Six measured model requests are too few for latency generalization.

## What we would test in System One

Our inference: use one choice over currently eligible recordings and reject stale results in the host. Compare against deterministic and always-silent baselines before claiming better pacing.

This feature recommendation is our interpretation. Related Engine patterns: `narrator`.

## Primary sources

- [Pinned method and limits](https://github.com/reachjalil/system-one-bench/blob/cb7701a5ba830216eb0effee0f783ed6508f042a/findings/dialogue-selection/README.md)
- [Every first-run result](https://github.com/reachjalil/system-one-bench/blob/cb7701a5ba830216eb0effee0f783ed6508f042a/findings/dialogue-selection/results-2026-09-20.json)

