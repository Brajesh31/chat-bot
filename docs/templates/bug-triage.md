# 🐛 Bug Triage

Use this record to classify a reported defect before assigning implementation work. Do not infer severity only from how strongly the report is worded.

## Report metadata

- Issue:
- Triage date:
- Triage owner:
- Affected commit / release:
- Reporter environment:
- Reproduction: confirmed / intermittent / not reproduced / insufficient information

## Severity

| Severity | Meaning | Example in this project |
|---|---|---|
| Critical | App unavailable or serious security/privacy impact | Release exposes secrets or prevents all use |
| High | Core chat flow broken for a meaningful group | Valid messages cannot be submitted |
| Medium | Important interaction degraded, workaround exists | Clear or minimize behaves incorrectly |
| Low | Cosmetic or narrow edge case | Minor spacing issue without loss of function |

Priority is work order and may differ from severity. Record the reason for an exception.

## Reproduction and scope

1. Record exact steps with synthetic prompts.
2. Identify the smallest input or UI state that reproduces the bug.
3. Compare expected behavior with actual behavior.
4. Check the default branch and supported browsers.
5. Search tests and issue history for related regressions.

## Findings

- Root cause, if known:
- Affected components:
- First known affected commit:
- User impact:
- Accessibility / responsive impact:
- Security / privacy impact:
- Workaround:
- Confidence level:

## Resolution plan

| Action | Owner | Due date | Evidence |
|---|---|---|---|
| Immediate mitigation | | | |
| Code fix | | | |
| Regression test | | | |
| Documentation update | | | |
| Release verification | | | |

## Triage decision

- [ ] Confirmed defect, schedule fix
- [ ] Needs more reproduction evidence
- [ ] Duplicate, link canonical issue
- [ ] Not a bug, explain documented behavior
- [ ] Out of scope, explain why

Never request passwords, API keys, private transcripts, or unnecessary personal information.
