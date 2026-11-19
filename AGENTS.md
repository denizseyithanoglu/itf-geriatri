# Agent instructions — İTF Geriatri

These rules apply to all future AI-assisted changes in this repository.

1. Read only files directly relevant to the requested modification.
2. Do not reanalyze the entire repository unless necessary.
3. Preserve existing functionality unless explicitly instructed otherwise.
4. Make minimal, targeted changes.
5. Do not reproduce full source files in responses.
6. Keep explanations short; do not repeat instructions.
7. Run relevant checks and report only the changes, test results, and remaining issues. If checks cannot run, say so.
8. Keep `PROJECT_CONTEXT.md` concise and current for future sessions; update it only when meaningful project information changes.
9. Never modify unrelated files.
10. Batch closely related edits into one task to avoid repeatedly inspecting the same files.

## Starting a task
- Read `PROJECT_CONTEXT.md` first, then only the files needed for that task.
- Check for existing behavior and tests before editing.
- Protect the Turkish/English site, clinical scoring, print reports, and data-export behavior from regressions.
- Do not alter clinical thresholds or interpretation without explicit instruction and appropriate verification.
- For documentation-only changes, verify the written files; code tests are not required unless executable behavior changes.

## Finishing a task
Respond briefly with: files changed, what changed, checks passed/not run, and any unresolved issues.
