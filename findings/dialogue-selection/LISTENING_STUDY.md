# Planned dialogue listening study

Status: protocol draft, September 20, 2026. No listening results have been collected.
The authors build both System One and The Infinite Parable. This study would test
whether selecting optional recordings improves the experience beyond deterministic
pacing. It does not test generated speech or autonomous changes to a game world.

## Comparison

Capture the same player-input path under three policies: the current authored
director, optional System One advice, and silence for every optional reaction.
Required recordings run normally under all three policies. Use the same starting
save, content version, audio settings and input schedule. Keep the current 0.8
speaking threshold fixed for the first study. Record the precise engine, fixture
and provider versions; an unknown upstream model revision remains unknown.

Select fresh paths before collecting model results. An editor should mark windows
where a remark would help, be redundant or interrupt attention before seeing any
condition's output. Mark ambiguous windows explicitly. These labels must include
useful speaking opportunities; a collection of silence cases favors the always-silent
baseline. Archive the path manifest and its hash before inference.

## Twenty paths to prepare

These are required situations for new paths, not completed trials or accuracy labels.
The first sixteen need paired listening. The last four are failure drills whose
primary outcome is delivery behavior.

| ID | Path | What to assess |
| --- | --- | --- |
| Q1 | Finish a room introduction, then remain still through two idle windows | Useful company versus repeated pressure to move |
| Q2 | Leave just before an idle remark becomes eligible | Whether speech follows the player out of its context |
| Q3 | Look at an object immediately after a required recording finishes | Whether the existing silence gap gives the thought time to land |
| Q4 | Act on a required instruction while a waiting remark is queued | Whether the incidental line is still relevant |
| A1 | Queue two different object observations during the same recording | Whether the selected observation fits the latest attention |
| A2 | Make an object observation and an idle remark ready together | Which remark, if any, adds useful information |
| A3 | Change an object before a remark describing its old state can play | Whether stale description is excluded |
| A4 | Supply two equally plausible observations with little context | Whether the result handles ambiguity without needless speech |
| M1 | Complete an introduction, leave and return | Whether exact repetition is prevented equally by all policies |
| M2 | Interrupt a recording by leaving, then revisit | Whether a whole-cue retry restores a useful thought |
| M3 | Hear a reassurance in one room and encounter different wording nearby | Whether semantic repetition is reduced beyond exact ID matching |
| M4 | Suppress or interrupt a setup before its dependent follow-up window | Whether the authored dependency prevents a broken reference |
| L1 | Pause while advice is pending, then resume | Whether the pause cancels obsolete advice without reviving speech |
| L2 | Cross a room boundary while advice is pending | Whether a late response remains outside the new scene |
| L3 | Change a relevant physical fact while advice is pending | Whether the selected cue still describes the current state |
| L4 | Trigger required dialogue during a pending optional choice | Whether the essential line proceeds without provider delay |
| F1 | Stop the service before an optional reaction | Whether authored ordering resumes without a stalled queue |
| F2 | Delay the provider beyond the host deadline | Whether fallback settles once and the late result is ignored |
| F3 | Exhaust the scoped consumer's configured allowance | Whether the unavailable service preserves deterministic behavior |
| F4 | Return an unoffered cue or mismatched context from a test transport | Whether the host rejects the response before playback |

Use the real input and media lifecycle for captures. Inject only the explicit test
transport faults in the failure drills. A test that inserts a narration event is
useful for the protocol but must not be described as physical play. Preserve every
attempt and failed capture; report replacement attempts separately.

## Listening and scoring

Hide policy labels, assign anonymous clip IDs and randomize condition order. Use
at least three listeners and collect ratings independently before discussion.
Compare identical windows from each path, including enough preceding context to
understand the spoken reference. Give listeners these questions:

- Was a useful remark missing? Record the window and what information was needed.
- Did a remark interrupt attention or repeat a recent idea? Record the timestamp.
- Did the words still fit the visible state and preceding speech?
- Which version would you keep, or was there no meaningful preference?

Report each path's votes and comments, along with the number of listeners. Do not
pool repeated ratings as independent gameplay trials. With twenty authored paths,
showing individual outcomes and disagreement is more informative than claiming a
general player-preference percentage.

Count protocol outcomes separately: stale admissions, overlapped recordings,
unsettled requests, failed fallbacks and exact repeats. Record candidate count,
decision, provider attempts, input/output tokens, service wall time, time from
eligibility to actual playback, cancellation and final playback completion.
Report cost only from an identified price or billing receipt; keep estimates separate.

## Decision after review

The first-run diagnostic chose silence throughout. A useful next result must show
where advice preserves worthwhile speech while reducing unwanted remarks relative
to the authored director. Compare against always-silent on missed useful remarks
as well as listener preference. Publish disagreements and regressions with successes.
Keep any prompt or threshold changes on a new revision and use fresh evaluation
paths. This protocol does not establish a release threshold or a commercial claim.
