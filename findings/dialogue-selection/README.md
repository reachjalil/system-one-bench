# Recorded dialogue advice in The Infinite Parable

Using Jev, a game can ask which eligible recorded remark fits the current moment,
including the option to say nothing. The game retains playback and story authority.

A player looks at a window while an idle remark is queued. The game supplies both
recordings, the observation that triggered each one and recently completed speech.
One service request can recommend one recording or silence. Required story lines
never enter that choice. This is the implemented integration pattern; this example
is not a claim about a recorded player's preference.

Potential value is **medium**. Choosing among already eligible recordings may avoid
unnecessary interruptions without generating new speech. Confidence in an improved
listening experience is **low**. The first run chose silence in every case, including
four cases where an editor still needs to decide whether a remark would help.

## What we ran

On September 20, 2026, the authors sent eight authored diagnostic scenarios using
the installed game's cue text to the local System One dialogue API. The provider
reported `typesafe-ai/jev` through Vercel AI Gateway. The service used its existing
0.8 speaking threshold, which was not changed after this run. We did not request or
verify an immutable upstream model revision.

Four scenarios had explicit silence labels written before inference. Two checked
exact completion and a recent-speech gap. The other two checked a recent promise of
quiet and an unsupported claim that the rain had stopped. The game's deterministic
guards also exclude these cases; this is not evidence that a model is needed for
them. All four returned silence.

Four editorial scenarios asked about competing window/waiting remarks, garden
attention, a return to the now-quiet home and another reassurance after one in a
different room. All four returned silence. Those cases have no accuracy label.
Choosing silence throughout cannot establish useful positive selection or naturalness.

| Observation | First run |
| --- | --- |
| Authored diagnostic cases | 8 |
| Explicit silence expectations matched | 4 of 4 |
| Editorial cases awaiting listening review | 4 |
| Provider evaluations | 6 |
| Cases decided without a model | 2 |
| Reported input / output tokens | 3,758 / 180 |
| Model-backed request wall time, p50 / p95 | 254 / 512 ms |

Wall time includes local HTTP and provider work. It excludes game playback, host
reasoning and user reaction. Percentiles use the nearest rank over six requests.
No paid-cost comparison, full-task speedup or probability calibration was measured.
There were no automatic retries. The complete per-case results remain in
[the first-run receipts](results-2026-09-20.json).

The corpus uses private game content and is not redistributed here. Public receipts
omit cue text and facts and retain per-input hashes. The fixture hash identifies the
resolved private input. This limits independent reproduction. The fixture was a
small development diagnostic, not held-out player data.

## What the game implements

The narration director owns a single pending decision across up to eight equally
prioritized ready remarks. Selection admits only the selected reaction. Silence
marks nothing heard. Service failure restores authored ordering. A changed scene,
new event, pause, expiry or changed facts cancels the complete pending choice.

Two improvements also work with the model off. A home follow-up requires completion
of its earlier setup. The garden does not repeat a promise to wait after the earlier
promise completed. Exact no-repeat history and these authored dependencies belong
in deterministic game code.

The [public SDK example](https://github.com/reachjalil/sysone/blob/main/examples/recorded-dialogue.md)
shows a small host-side consumer with current-scene checks and cancellation. It does
not contain the private game director or execute audio. Its illustrative lamp scenario
is separate from the measured private corpus.

## The comparison still needed

Use twenty scripted paths that include ordinary waiting, object attention, fast
room changes, interrupted speech, revisits and service failure. Compare the same
paths with deterministic narration and optional advice. Randomize listening order.
Record useful remarks missed, unwanted interruptions, repeats, stale admissions,
provider attempts, full delay and listener preference. Include cases where speaking
is preferred so an always-silent policy cannot appear successful.

Keep any changed question policy on a new revision and use fresh labeled scenarios.
Ship a stronger claim only after it beats the deterministic and always-silent
baselines on listening quality without violating playback or story ownership.

The [planned listening study](LISTENING_STUDY.md) specifies twenty path situations,
three comparison policies, blinded review and the measurements to retain. It is a
protocol draft, not a completed experiment.
