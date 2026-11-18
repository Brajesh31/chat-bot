# 🤖 Dependabot Review, 2026-11-18

This is a dated maintenance record for the open Dependabot pull requests observed during the repository audit. It records review decisions, not a permanent dependency support policy.

## Summary

Nine Dependabot pull requests were open when reviewed. None were merged by this maintenance pass. The proposed Vite 8 upgrade was specifically checked because the current npm audit failure is caused by a transitive picomatch advisory.

## High-impact finding: Vite 8 upgrade does not remove the advisory

[PR #12: Vite 6.4.6 → 8.3.8](https://github.com/Brajesh31/chat-bot/pull/12) also updates the React Vite plugin. Its proposed lockfile still resolves `picomatch@4.0.7`. It therefore does not remediate GHSA-fc5q-39xc-vjpf. The pull request's Actions checks were reported as `action_required` during review, so there was no successful full CI evidence for this exact upgrade.

**Decision:** Do not merge PR #12 as a security fix. Re-review when the dependency tree no longer resolves the vulnerable version and the project passes the full test, lint, build, dependency-review, and audit gates.

## Other open updates

| PR | Proposed update | Review note | Decision |
|---|---|---|---|
| [#13](https://github.com/Brajesh31/chat-bot/pull/13) | eslint-plugin-react-hooks 7.1.1 | Legacy CI runs failed on the old Node 20/22 matrix. The PR does not address picomatch. | Leave open for refreshed validation |
| [#11](https://github.com/Brajesh31/chat-bot/pull/11) | eslint-plugin-react 7.37.5 | Legacy CI runs failed on the old Node 20/22 matrix. The PR does not address picomatch. | Leave open for refreshed validation |
| [#9](https://github.com/Brajesh31/chat-bot/pull/9) | React and React type packages | CodeQL, documentation, dependency review, and secret checks passed; full matrix remained red at the high-severity dependency audit. | Re-test against current CI |
| [#8](https://github.com/Brajesh31/chat-bot/pull/8) | eslint-plugin-react-refresh 0.5.7 | Legacy CI runs failed on the old Node 20/22 matrix. | Leave open for refreshed validation |
| [#7](https://github.com/Brajesh31/chat-bot/pull/7) | ESLint 9 → 10 | Full CI did not pass across the tested Node matrix during review. This is a major tooling change. | Require compatibility review and fresh CI |
| [#6](https://github.com/Brajesh31/chat-bot/pull/6) | globals 17.14.0 | A prior CI run passed, but this PR is based on an earlier main commit and does not resolve the current audit finding. | Rebase / retest before merge |
| [#2](https://github.com/Brajesh31/chat-bot/pull/2) | Grouped dependency updates | Older base and merge conflicts were reported; broad lockfile churn. | Leave open for a refreshed, focused update |
| [#1](https://github.com/Brajesh31/chat-bot/pull/1) | Grouped dependency updates | Older base and merge conflicts were reported; broad lockfile churn. | Leave open for a refreshed, focused update |

## Review policy

- Do not merge a dependency PR solely because Dependabot generated it.
- Check the exact PR head commit and all required workflow jobs.
- Review package changes, peer dependency ranges, Node.js support, lockfile graph, licensing, and advisory status.
- Keep the high-severity npm audit gate enabled.
- Prefer focused upgrades when grouped updates make regressions difficult to isolate.
- Record a new dated review when the PR status or advisory changes.

## Evidence boundary

This record captures the PR state and checks visible on 2026-11-18. Pull request status, base commits, CI results, and upstream advisories can change. The links above are the live source of truth for any later decision.
