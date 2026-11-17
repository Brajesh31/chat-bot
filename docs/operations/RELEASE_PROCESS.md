# 📦 Release Process

## 1. Prepare

- Review the current roadmap and open blockers.
- Confirm scope and acceptance criteria.
- Update the changelog with user-visible changes and known limitations.
- Update documentation, response catalog, examples, and diagrams.
- Confirm the root LICENSE and third-party notices are accurate.

## 2. Verify

Run the complete local quality sequence:

1. npm ci
2. npm run lint
3. npm test
4. npm audit --audit-level=high
5. npm run build

Confirm the workflow is green for the exact commit. Automated tests do not replace browser and accessibility checks.

## 3. Build and publish

Create a release tag only after the release owner approves. Publish the dist output to the configured static host. Record the provider, release URL, source SHA, artifact, and operator. CI success alone is not proof of deployment.

## 4. Verify the release

Use the deployment checklist and post-deployment verification template. Check asset loading, chat submission, empty input, clear/minimize controls, mobile layout, keyboard operation, and browser console.

## 5. Roll back or close

If agreed rollback thresholds are met, use the rollback plan and verify the restored artifact. Otherwise, publish the release notes and retain the unresolved issue list.

## Release record

Version, date, commit, workflow run, artifact, deployment target, verification result, known issues, and approver:
