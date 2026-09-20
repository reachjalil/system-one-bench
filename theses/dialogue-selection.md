# Choose a recorded response or silence

With Jev, an application can recommend a prerecorded reaction from the currently eligible cues.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

A player returns to a room after hearing its introduction.

The game removes completed cues and supplies current facts, timing and remaining recordings.

Jev recommends a cue or silence. The game rejects stale advice and owns playback.

Illustrative example, not a recorded result.

## Potential value

medium. Could improve the timing and variety of authored reactions without generating new dialogue.

## Evidence confidence

low. The optional game integration exists, but no independent playthrough study establishes a better experience.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Define ambiguity before evaluating a workflow](../records/workflow-design.md). reference. Specify what uncertain and mixed cases should do.

## Test plan

Status: planned. The protocol below has not run.

20 scripted playthrough paths plus human review, covering return visits, waiting, interruptions and scene changes.

Compare against:

- Current deterministic director
- Optional Jev advice

Measure:

- Repeated lines
- Interruptions
- Stale recommendations rejected
- Player preference
- Added delays

Keep narration optional. Require no repeat or stale-playback regression and a clear preference in reviewed playthroughs.

Planned report path: `findings/dialogue-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `narrator`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
