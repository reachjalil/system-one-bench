# Choose the next available tool

Give an agent a tool recommendation from a list it can actually use.

Reviewed 2026-09-20. Design guide. These examples are not independently validated Engine benchmarks.

## Use it for overlapping tool descriptions

An agent can search a repository, look up public documentation or run a test. The next step depends on the current task. A finite choice lets Jev recommend one of those operations.

Filter out unavailable or unauthorized tools before creating the question. If the user named a tool, or a deterministic rule identifies it, follow that instruction without another model call.

## Include a way to decline the choice

Open Choose the next tool in Library. For the hosted MCP, run next-tool with sysone_run and the available choices. The JSON below is a custom sysone_decide request. The current public stdio bridge still offers sysone_patterns for lookup.

Use IDs the caller already knows. Describe what each tool does and add a review option. The example chooses a tool category, not a command or its arguments.

```json
{
  "state": "Task: find the source definition of handleRequest in this checkout. The available tools are listed in the question.",
  "questions": {
    "tool": {
      "type": "choice",
      "instructions": "Choose the available tool that directly helps with the next step. Use review if none fits or more context is required.",
      "criteria": {
        "repo": "Search source files in the current checkout",
        "web": "Look up public documentation on the internet",
        "tests": "Run the existing automated tests",
        "review": "No listed tool is suitable, or the task is ambiguous"
      }
    }
  }
}
```

## Let the calling agent prepare the action

The calling agent checks the recommendation, supplies arguments and follows its existing approval rules. System One returns advice. It does not execute the selected tool.

After the real tool returns, use its actual result for the next decision. Predicting an entire sequence before execution ignores information that later steps may need.

## Score completed tasks

The public tool study compares predicted positions in short sequences. It does not report complete agent task success. A correct first recommendation can still lead to a failed task.

Compare direct agent selection, a simple tool-description rule and the Jev recipe. Record completion quality, wrong-tool calls, host turns and total time. Do not substitute a model router for this experiment. The routing study found no incremental benefit from its Jev signal.

## Evidence and limits

- [Choosing tools from real MCP inventories](../records/tool-sequence.md). Better tool prediction can still take longer.
- [Model routing: test whether Jev adds value](../records/routing-ablation.md). No-Jev ablation matched the hybrid result.

Related Engine patterns: `next-tool`, `clarification`.

[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)
