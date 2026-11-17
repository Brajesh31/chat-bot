# 🏷️ Versioning and Release Numbers

## Current state

The package manifest currently carries a starter version value. The repository has not established a formal public release cadence in the project configuration. Do not infer a stable release from the presence of a version field.

## Recommended semantic versioning

When maintainers begin publishing tagged releases, use MAJOR.MINOR.PATCH:

- **MAJOR:** incompatible changes to an explicitly supported public interface, usage contract, or deployment requirement.
- **MINOR:** backward-compatible user-facing functionality.
- **PATCH:** backward-compatible bug fixes, documentation corrections, and dependency/security updates that do not alter the public contract.

A pre-1.0 project may use 0.MINOR.PATCH while APIs and behavior remain unstable. Agree and document the policy before publishing.

## Release requirements

- Tag the exact reviewed commit.
- Update changelog and release notes.
- Record migration and compatibility notes.
- Link passing CI for the release SHA.
- Record a deployment only after it is verified.
- Keep unsupported capabilities and known limitations visible.

## Dependency versions

Use the committed npm lockfile for reproducible installation. Updating a dependency requires reviewing the manifest and lockfile together, checking peer compatibility, and running lint, tests, audit, and build.

## Changes to version policy

Document a decision, update package metadata and release automation consistently, and state whether existing tags or versions are affected.
