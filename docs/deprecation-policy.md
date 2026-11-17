# 🗑️ Deprecation Policy

## Current state

The project has no formally versioned public API and no deprecation schedule. Current internal response rules and React component props should not be treated as stable third-party interfaces.

## When behavior must be retired

For a user-visible behavior or documented interface:
1. Identify users or contributors that depend on it.
2. Explain why the old behavior is being removed.
3. Provide a migration path where practical.
4. Update tests and documentation.
5. Record the decision and target release.
6. Remove the old behavior only after review.

## Security exceptions

A vulnerable dependency or unsafe behavior may require immediate removal. Document the risk and compatibility impact rather than preserving a dangerous path for convenience.

## Communication

Use changelog, release notes, roadmap, and migration documentation. Do not mark a proposed removal as completed until the relevant code is changed.
