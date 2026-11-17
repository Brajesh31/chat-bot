# 🌐 Deployment Checklist

This checklist applies to a static Vite build. It does not assume a Node application server or database exists in production.

## Release metadata

- Release name / version:
- Source branch:
- Commit SHA:
- CI run:
- Build artifact:
- Deployment platform / project:
- Operator:
- Deployment window (UTC):
- Rollback owner:

## Pre-deployment

- [ ] Intended commit is on the release branch.
- [ ] CI passed for the exact commit.
- [ ] Install, lint, tests, audit, and production build completed.
- [ ] Build output path is dist/.
- [ ] Environment variables and Vite base path are understood.
- [ ] No secrets or local env files are included in the artifact.
- [ ] README, release notes, and known limitations are accurate.
- [ ] Rollback commit and artifact are available.

## Static-host configuration

| Setting | Expected / recorded value |
|---|---|
| Publish directory | dist/ |
| Build command | npm run build |
| Install command | npm ci |
| SPA fallback | Not required for the current single-page root route; reassess if routes are added |
| HTTPS | Enabled by host |
| Cache rules | Reviewed for HTML and fingerprinted assets |

## Deployment and post-deployment checks

- [ ] Deployment reports success.
- [ ] Correct release URL and commit are recorded.
- [ ] HTML and static assets return successfully.
- [ ] Fonts and favicon behave as expected.
- [ ] Chat input accepts ordinary text.
- [ ] Enter and send button submit once.
- [ ] Clear and minimize/expand work.
- [ ] Empty whitespace input does not create a message.
- [ ] Mobile viewport has no horizontal overflow.
- [ ] Browser console has no new errors.
- [ ] Privacy disclosure matches actual network behavior.

## Rollback and sign-off

Rollback trigger, previous artifact, execution owner, verification result, known issues, approver, and date:
