# 🧯 Disaster Recovery

## Current service model

The application is a static frontend with no project backend or server-side user data store. Disaster recovery is therefore focused on source control, build reproducibility, and static hosting recovery.

## Recoverable assets

- Source and documentation from Git history.
- Dependencies from package-lock.json.
- Static build output recreated from a verified commit.
- Hosting configuration backed up by the deployment owner.

## Recovery sequence

1. Identify whether the failure is source, CI, artifact, or hosting related.
2. Record the affected commit and release.
3. Select the last known-good commit.
4. Run npm ci, lint, tests, build, and dependency review.
5. Redeploy the known-good static bundle using the host's supported procedure.
6. Complete post-deployment smoke tests.
7. Record recovery evidence and residual risk.

## No database restore

There is no application database or persistent conversation data to restore. Do not publish invented RPO or RTO targets.

## Future expansion

If persistence or a backend is added, define backup scope, encryption, access, frequency, retention, restore testing, RPO, RTO, and user-data deletion before launch.
