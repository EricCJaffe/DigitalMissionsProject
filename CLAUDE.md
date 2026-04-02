# Project Collaboration Guide

Session start: run `bash .claude/hooks/session-start.sh` before substantive work so branch state, local changes, and task ownership are visible.
Mid-session sync: in Claude you can re-run a sync check by typing `! bash .claude/hooks/sync-check.sh` in the prompt.
Codex note: in Codex or a terminal, run `bash .claude/hooks/sync-check.sh` or `./prcheck`.

Active collaborators:

- `@eric` (Eric Jaffe)
- `@david` (David)

## Doc Maintenance

| Trigger | Update |
| --- | --- |
| New task created | `docs/TASKS.md` |
| Task completed or removed | `docs/TASKS.md` |
| Task assigned/reassigned | `docs/TASKS.md` - preserve `[@assignee]` format |

## Working Norms

- Keep `docs/TASKS.md` as the source of truth for shared task ownership
- Preserve assignee tokens exactly when editing task lines
- Run the sync check again before rebasing, merging, or committing after a long session

