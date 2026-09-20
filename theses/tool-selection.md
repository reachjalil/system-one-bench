# Choose a tool from its description

With Jev, an agent can recommend the next tool from the currently available list.

Reviewed 2026-09-20. This is a bounded capability thesis, not a promise of general reliability.

## A human example

The user says to hide the left panel, but the command is named Toggle sidebar.

The caller supplies available command IDs, their descriptions and the current interface state.

Jev selects the command ID. The application checks permissions and asks for any required confirmation.

Illustrative example, not a recorded result.

## Potential value

medium. Useful for natural-language command menus and overlapping tools. It adds little when a rule or explicit user instruction already chooses the tool.

## Evidence confidence

moderate. A small command demo and tool prediction study report useful selections. End-to-end task success is still uncertain.

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

- [Select an editor command from an informal request](../records/command-palette.md). reported. An authored demo maps descriptions to commands better than its name matcher.
- [Choosing tools from real MCP inventories](../records/tool-sequence.md). reported. Better tool prediction can still take longer.
- [A personal app routes two recipe requests](../records/community-router.md). anecdotal. Descriptions can distinguish two plausible routes; reliability remains untested.

## Test plan

Status: planned. The protocol below has not run.

50 user phrasings over fixed tool inventories, including unavailable actions, ambiguous requests and no suitable tool.

Compare against:

- Command-name matching
- Direct agent selection

Measure:

- Correct next action
- Completed tasks
- Extra host turns
- Unnecessary calls

Require at least baseline task completion and a measured reduction in total time or host work.

Planned report path: `findings/tool-selection/README.md`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: `next-tool`, `command-match`. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
