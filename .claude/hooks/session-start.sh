#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$repo_root"

tasks_file="docs/TASKS.md"
current_branch="$(git branch --show-current 2>/dev/null || true)"

echo "== Session Sync =="

git fetch --prune origin >/dev/null 2>&1 || {
  echo "WARN: git fetch --prune origin failed"
  exit 0
}

if [[ -n "$current_branch" ]]; then
  upstream_ref=""
  if upstream_ref="$(git rev-parse --abbrev-ref "${current_branch}@{upstream}" 2>/dev/null)"; then
    counts="$(git rev-list --left-right --count "${upstream_ref}...HEAD" 2>/dev/null || echo "0 0")"
    behind_count="$(awk '{print $1}' <<<"$counts")"
    ahead_count="$(awk '{print $2}' <<<"$counts")"
    echo "Branch: ${current_branch}"
    echo "Upstream: ${upstream_ref}"
    echo "Status: ahead ${ahead_count}, behind ${behind_count}"
  else
    echo "Branch: ${current_branch}"
    echo "WARN: no upstream is configured for this branch"
  fi
else
  echo "WARN: could not determine current branch"
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "WARN: uncommitted changes detected"
else
  echo "Worktree: clean"
fi

gone_branches="$(git branch -vv | grep ': gone]' || true)"
if [[ -n "$gone_branches" ]]; then
  echo "WARN: local branches with stale upstreams:"
  echo "$gone_branches"
else
  echo "Remote branches: no stale upstream references detected"
fi

if [[ -f "$tasks_file" ]]; then
  eric_count="$(grep -E '^- \[[ xX]\].*\[@eric\][[:space:]]*$' "$tasks_file" | wc -l | tr -d ' ')"
  echo "Tasks assigned to @eric: ${eric_count}"
else
  echo "Tasks assigned to @eric: docs/TASKS.md not found"
fi

