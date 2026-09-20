# A user tries Jev to reduce a long agent history

anecdotal · firsthand Reddit report · reviewed 2026-09-20

A Reddit user describes using another author's compaction plugin. The plugin is by Tamara Tran.

## Evidence confidence

low. This source suggests a useful experiment but does not establish a reliable benefit in a real agent workflow.

## What was observed

Select old tool records to keep in a coding-agent session.

A user reports trying fast-jev-compaction during a server redeployment. The thread links its public implementation.

## Baseline

No controlled baseline reported.

## Finding

The user describes the plugin as useful during a long task. Commenters raise cache-cost and lost-context concerns.



## Limits

Anecdotal satisfaction, not measured task quality or net cost. The session and a matched baseline are unavailable.

## What we would test in System One

Test history selection on saved, consented sessions before automatic deletion. Keep an unmodified transcript and include cache rewrite costs.

This feature recommendation is our interpretation. Related Engine patterns: `memory-candidate`, `context-relevance`.

## Primary sources

- [Firsthand use and discussion](https://www.reddit.com/r/ClaudeCode/comments/1wkjnrz/instant_claude_code_compaction_is_my_favorite_use/)
- [Pinned implementation](https://github.com/tamaratran/fast-jev-compaction/blob/e3f262a7f4d42bd8dd32ced30d26176f7cb545b0/README.md)

