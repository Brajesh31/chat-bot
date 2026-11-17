# 💾 Backup and Recovery

## Current data model

The current app does not store conversations in an application database or server-side file store. Chat history exists in browser React memory and is not a durable record. A page refresh or remount discards the in-memory conversation.

The repository itself is maintained in GitHub. Source history and release artifacts are separate from any end-user conversation data.

## What should be recoverable

- Source code and documentation from Git history.
- Dependency installation from the committed package lockfile.
- A static build recreated from a known commit and supported Node/npm environment.
- Hosting configuration, where it is documented and backed up by the host owner.

## Recovery procedure

1. Identify the lost or corrupted resource.
2. Record the last known-good commit or artifact.
3. Confirm that the repository and deployment access are available.
4. Recreate dependencies using npm ci.
5. Run lint, tests, audit, and build.
6. Restore the static artifact or redeploy the known-good commit using the host's procedure.
7. Complete the post-deployment verification checklist.
8. Record the recovery time, evidence, and residual risks.

## If persistence is added

Create a separate backup design covering data classification, backup frequency, encryption, key ownership, access controls, retention, deletion, restore objectives, backup isolation, and restore-test cadence. Define RPO and RTO only after they are approved and measurable.

## Recovery record

Incident, resource, source commit, artifact, operator, start/end time, verification, data impact, and follow-up:
