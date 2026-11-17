# 🧰 Maintainer Guide

## Repository responsibilities

Maintain source accuracy, review contributions, keep dependencies current, respond to ordinary issues when feasible, and coordinate security reports privately. This is a community project with no guaranteed support response time.

## Routine checks

- Review CI failures and CodeQL findings.
- Review Dependabot changes and npm audit results.
- Keep package.json and the lockfile aligned.
- Check internal Markdown links and SVG metadata.
- Ensure README and docs match current source.
- Preserve known limitations and pending manual checks.
- Keep release and rollback records evidence-based.

## Release discipline

CI must pass for the exact source commit except for explicitly documented security blockers. The active high-severity picomatch advisory remains a blocker for a fully green audit. Do not disable the gate or claim the issue is fixed without a verified patched dependency.

## Security reporting

Direct suspected vulnerabilities through the private route in .github/ISSUE_TEMPLATE/config.yml and SECURITY.md. Avoid requesting exploit details in public issue threads.

## Project direction

Keep the project useful as a small React learning demo. Review any request for backend, database, persistent chat, or model integration against user need, operating cost, privacy, security, and maintenance burden.

## Handover

A maintainer handover should include repository access ownership, workflow permissions, dependency status, open issues, release state, known risks, and the exact current commit.
