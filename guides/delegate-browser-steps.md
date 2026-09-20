# Give an agent a short browser subtask

Use current control IDs, caller-supplied text and final-screen review with the System One browser companion.

Reviewed 2026-09-20. Preview integration guide. Six original fixture tasks do not establish general browser reliability or savings.

## Use a scoped engine connection

The public sysone 0.6.0 source preview adds the computer companion. Until npm publication completes, build the public repository and run node dist/cli.js computer --connection /private/path/agent.json. The connection can point to an invited cloud account or a local engine and needs the decide service.

Chrome or Chromium and Node 22.18+ must be installed. The helper starts a fresh browser when the agent calls sysone_computer_start. It does not attach to existing tabs. Web-only chat clients cannot launch this local helper.

## Check what the adapter can read

Run sysone computer doctor without a token. It checks the installed browser, a temporary profile, computed accessibility and a screenshot on its own test page. No model call is made. Browser operation needs Node 22.18+ and Chrome or Chromium, but no Mac desktop permission.

The optional --desktop flag adds an experimental Mac AX reader and permission check. It requires Apple Command Line Tools and Accessibility permission for the launching host or helper. It does not request Screen Recording or perform desktop input. Our first native fixture check did not produce a usable focused window; successful native control extraction remains unverified.

## Keep the screen and its controls together

sysone_computer_observe returns a JPEG to the agent and a list of current control IDs. sysone_computer_decide sends the goal, visible text and current control values to Jev through your engine. Jev receives no pixels.

For a single action, the agent reviews the proposal and calls sysone_computer_act. Exact text comes from the agent. The companion rejects stale observations and covered or incompatible controls.

Chrome computes control names, roles, descriptions, required/invalid/checked states and named group context. These attach to the retained DOM nodes, including open shadow roots. A changed AX name invalidates the old observation. The state marks accessibility fallback and truncation.

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

A separate accessibility diagnostic got all six expected next-action choices correct, with one request per case and no executed actions. That result does not replace the earlier full-task failures or establish savings.

These reused development tasks do not establish a general success rate. Compare unfamiliar tasks with the main agent, including review, failed attempts and fallback work. Prefer a direct API or known script when it already solves the task.

The browser handles common visible HTML controls and open shadow roots on one origin. Hosted noVNC, native desktop execution, canvas, frames, closed shadow roots, passwords, uploads and complex keyboard widgets remain unsupported.

## Evidence and limits

- [Browser actions from observed control IDs](../records/browser-indexed-controls.md). Less browser overhead helped a small matched comparison.
- [Mac actions from OCR and accessibility](../records/mac-screen-decisions.md). Structured screen extraction is part of the workload.
- [Shared page state improved our first browser diagnostic](../records/sysone-browser-fixture.md). Four of six saved states after a shared-input fix.
- [What Jev needs from a computer-use adapter](../records/jev-computer-input-contract.md). Supply explicit accessible controls and shared state.
- [Six accessibility-informed next-action choices](../records/sysone-accessibility-decisions.md). Six correct choices; complete-task benefit still untested.

Related Engine patterns: `computer-next-action`, `computer-target`, `computer-form-ready`, `computer-progress`, `computer-outcome`, `computer-recovery`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
