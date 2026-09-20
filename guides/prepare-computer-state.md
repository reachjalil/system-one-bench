# Give Jev useful accessibility evidence

Use labels, group context and exact field facts to turn a screen into a small decision.

Reviewed 2026-09-20. Implementation guide with a six-choice diagnostic. Broad task and savings validation remain planned.

## Distinguish two Save buttons

An agent is editing draft settings. The page has two buttons named Save, one in Draft settings and one in Live settings. Supply the group name with each observed ID so Jev can choose the intended target.

System One reads that context from Chrome accessibility and keeps the real DOM node behind each ID. The model does not invent a selector. The example is a decision input, not authority to submit a form.

```json
{
  "goal": "Save the draft settings. Leave the live settings alone.",
  "controls": [
    {
      "id": "t1",
      "role": "button",
      "name": "Save",
      "context": [
        "Draft settings"
      ]
    },
    {
      "id": "t2",
      "role": "button",
      "name": "Save",
      "context": [
        "Live settings"
      ]
    }
  ]
}
```

## Give every question the same required evidence

Operation and target questions run independently. Put current field values, expected values, group names and useful status messages in shared state. Do not assume one question can see another answer.

Compute exact equality, required-field emptiness and scroll limits in code. Preserve whitespace in field values. Mark truncated values as unknown for equality rather than comparing their prefixes.

## Keep the observation tied to the action

Read only the task scope and cap the candidates. Preserve whether a label came from Chrome accessibility or a DOM fallback. A missing or ambiguous target should lead to review.

Recheck node identity, visible state, destinations and accessibility properties before acting. The original screen and a model completion signal are not proof that the requested result was saved.

## Test the value of the extra context

Our six original cases produced six correct next-action choices with AX context. We did not run a paired ablation, so the result does not isolate its causal benefit.

Next, compare identical frozen tasks with and without AX enrichment, then compare complete tasks against the calling agent. Count observation, decisions, actions, review, failures and escalations. Preserve negative runs and use independently verified saved state.

## Evidence and limits

- [What Jev needs from a computer-use adapter](../records/jev-computer-input-contract.md). Supply explicit accessible controls and shared state.
- [Six accessibility-informed next-action choices](../records/sysone-accessibility-decisions.md). Six correct choices; complete-task benefit still untested.
- [Mac actions from OCR and accessibility](../records/mac-screen-decisions.md). Structured screen extraction is part of the workload.

Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
