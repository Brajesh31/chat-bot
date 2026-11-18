# 🌿 Branching and Commit Strategy

## Default branch

The repository's default branch is `main`. It contains the current maintained application, documentation, configuration, and workflows.

## Recommended contributor branches

Use short-lived focused branches:
- `feat/<short-description>` for user-visible behavior.
- `fix/<short-description>` for defects.
- `docs/<short-description>` for documentation changes.
- `test/<short-description>` for test-only work.
- `ci/<short-description>` for workflow changes.
- `chore/<short-description>` for maintenance.

## Commit messages

Recommended prefixes:
- `feat:`
- `fix:`
- `docs:`
- `test:`
- `ci:`
- `refactor:`
- `chore:`

A commit should describe one coherent change. Keep dependency manifest and lockfile changes together.

## Review and merge

Contributors should open a focused pull request against `main`, link acceptance criteria, and provide test evidence. Maintainers should inspect the diff and workflow results before merge.

The repository-owner maintenance workflow may make explicitly requested, reviewed updates directly on `main`. This does not change the contribution process for other contributors.

## Release branches and tags

No release branch strategy or public release cadence is established. Use tags only after a versioning policy is approved and the exact release commit has passed its required checks.

## Safety

Do not force-push shared work without an agreed recovery plan. Preserve history needed to investigate regressions and dependency incidents.
