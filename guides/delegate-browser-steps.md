# Give an agent a short browser subtask

Use current control IDs, caller-supplied text and final-screen review with the System One browser companion.

Reviewed 2026-09-20. Preview integration guide. Six original fixture tasks do not establish general browser reliability or savings.

## Use a scoped engine connection

The public sysone 0.6.0 companion runs as a local stdio MCP server with npx sysone computer --connection /private/path/agent.json. The connection can point to your invited cloud account or your local engine. It needs the decide service.

Chrome or Chromium and Node 22.18+ must be installed. The helper starts a fresh browser when the agent calls sysone_computer_start. It does not attach to existing tabs. Web-only chat clients cannot launch this local helper.

## Keep the screen and its controls together

sysone_computer_observe returns a JPEG to the agent and a list of current control IDs. sysone_computer_decide sends the goal, visible text and current control values to Jev through your engine. Jev receives no pixels.

For a single action, the agent reviews the proposal and calls sysone_computer_act. Exact text comes from the agent. The companion rejects stale observations and covered or incompatible controls.

## Delegate a bounded sequence

For an already authorized short task, sysone_computer_run can perform up to 12 decisions in one tool call. The agent supplies allowed operations and exact values by observed field labels.

Missing values, uncertainty, stale state and repeated lack of progress return control to the agent. The final trace and screenshot need review. A model completion signal is not a verified saved result.

```json
{
  "goal": "Save Alpha in light mode. Stop when its saved record is visible.",
  "maxSteps": 6,
  "minimumProbability": 0.8,
  "allowedOperations": [
    "type",
    "select",
    "click",
    "wait"
  ],
  "fields": [
    {
      "name": "Project name",
      "text": "Alpha"
    }
  ],
  "selections": [
    {
      "name": "Mode",
      "option": "light"
    }
  ]
}
```

## Count the work that returns to the agent

Our first original fixture run reached one correct saved state out of six. Sharing current control values across all questions improved the rerun to four out of six. Two stopped for uncertainty. The known script completed all six faster.

These reused development tasks do not establish a general success rate. Compare unfamiliar tasks with the main agent, including review, failed attempts and fallback work. Prefer a direct API or known script when it already solves the task.

The shipped companion handles common visible HTML controls on one origin. It does not support noVNC, desktop apps, canvas, frames, shadow roots, passwords, uploads or complex keyboard widgets. Those require separate adapters.

## Evidence and limits

- [Browser actions from observed control IDs](../records/browser-indexed-controls.md). Less browser overhead helped a small matched comparison.
- [Mac actions from OCR and accessibility](../records/mac-screen-decisions.md). Structured screen extraction is part of the workload.
- [Shared page state improved our first browser diagnostic](../records/sysone-browser-fixture.md). Four of six saved states after a shared-input fix.

Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
