# 🐙 GitHub Actions Reference

## Current workflows

| Workflow | Trigger | Purpose |
|---|---|---|
| CI | Push to main, pull request, manual | Install, lint, test, build, dependency audit |
| CodeQL | Push, pull request, weekly schedule, manual | JavaScript static analysis |
| README updater | Manual | Update configured README metadata only |

## Permissions

Keep permissions minimal. CI requires repository contents read. CodeQL requires security-events write and the permissions documented by the CodeQL action.

## Maintenance

- Review action major-version updates.
- Keep Node versions aligned with the support matrix.
- Avoid unpinned third-party actions from arbitrary branches.
- Inspect workflow logs after changes.
- Do not add deploy permissions to CI unless deployment is explicitly implemented.
- Keep status badges tied to actual workflows.

## Limits

A workflow run does not prove a production deployment. CodeQL success does not prove there are no vulnerable dependencies. Current CI audit failure must remain visible until a verified remediation is available.
