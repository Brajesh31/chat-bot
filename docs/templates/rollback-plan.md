# ↩️ Rollback Plan

Use this plan when a change has a known failure mode and a reversible release path. A rollback is not automatically safe: identify irreversible effects before starting.

## 1. Change metadata

- Change / release:
- Related issue or pull request:
- Owner and decision-maker:
- Date and time (UTC):
- Current commit:
- Last known-good commit:
- Deployment / artifact identifier:
- Rollback trigger and threshold:

## 2. Scope and impact

Describe the user-visible behavior introduced by the change. Identify affected components, browser versions, assets, configuration, and third-party services.

| Area | Changed? | User impact | Reversal method |
|---|---|---|---|
| UI / interaction | | | |
| Response rules | | | |
| Build / dependencies | | | |
| Hosting / headers | | | |
| Data or persistence | | | |

The current ChatBuddy architecture has no application database or server-side conversation store. Do not invent a database migration. If persistence is added later, a tested data recovery plan is required before release.

## 3. Preconditions

- [ ] Previous known-good commit and artifact are available.
- [ ] Hosting platform rollback procedure is known.
- [ ] Required operator access is available.
- [ ] Errors and reproduction steps are recorded without private data.
- [ ] Irreversible side effects are identified.
- [ ] Rollback decision is approved by the owner.

## 4. Execution procedure

1. Notify the release owner and relevant collaborators.
2. Pause any failing deployment pipeline that could overwrite the known-good release.
3. Restore the exact known-good artifact or redeploy the recorded commit.
4. Verify the deployed commit, asset paths, HTTPS, and cache behavior.
5. Run the post-deployment verification checklist.
6. Check chat submission, empty input, clear/minimize controls, responsive layout, and browser console.
7. Record operator, timestamps, evidence, and residual issues.

## 5. Verification

| Check | Expected result | Evidence / result |
|---|---|---|
| Home page | Loads without blank page or missing assets | |
| Chat submission | User message and local response appear | |
| Unknown prompt | Scripted fallback appears | |
| Clear / minimize | Controls behave as documented | |
| Mobile layout | No horizontal overflow | |
| Console / network | No new release-related error | |

## 6. Follow-up

- Root-cause issue:
- Regression test:
- Documentation to correct:
- Communication owner:
- Re-release criteria:
- Review date:

Do not close the incident merely because the previous build is restored. Keep the defect tracked until its cause and prevention are addressed.
