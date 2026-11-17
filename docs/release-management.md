# 📦 Release Management

## Current release maturity

The package manifest uses a starter version value. No formal published release cadence is established in the repository. Release management should therefore remain evidence-based and avoid fabricated release numbers.

## Before release

- Confirm scope and acceptance criteria.
- Update CHANGELOG.md and release notes.
- Verify docs, assets, and diagrams.
- Run npm ci, lint, tests, build, and dependency audit.
- Verify CI for the exact commit.
- Complete manual browser checks relevant to the UI.
- Record known issues and rollback target.

## Tagging and publishing

Only create a tag and GitHub release when the maintainer has approved a versioning policy and the source commit is verified. The repository CI workflow does not publish releases or deploy the application.

## Known audit issue

The high-severity picomatch finding remains unresolved. A release must not be described as having a clean dependency audit while this issue remains.

## Evidence

Release record should contain version, date, commit, CI run, artifact, deployment URL if verified, changelog, known limitations, and approver.
