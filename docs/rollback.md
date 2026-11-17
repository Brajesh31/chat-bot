# ↩️ Rollback Guide

## Current rollback target

For a static Vite deployment, rollback means republishing a previously built, known-good static artifact or redeploying the corresponding commit. There is no database migration or server-side message store in the current architecture.

## Procedure

1. Confirm the rollback trigger and affected release.
2. Identify the exact previously verified commit and artifact.
3. Pause any pipeline that may overwrite the rollback.
4. Restore the known-good static build through the host's deployment mechanism.
5. Confirm asset paths, HTTPS, and cache behavior.
6. Run post-deployment smoke checks.
7. Record operator, time, result, and outstanding defects.

## Safety

Do not roll back to a commit with a known security issue without an explicit decision. The current picomatch advisory is a dependency/build-time concern and should be considered when selecting a build process.

## Detailed record

Use docs/templates/rollback-plan.md for triggers, impact, verification, ownership, and follow-up actions.
