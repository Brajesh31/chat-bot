# 🧪 Test Case

Use one copy for one independently verifiable behavior. Keep test data synthetic. Automated tests should be deterministic and should not depend on the real clock, network, or uncontrolled random values.

## 1. Identification

- Test ID:
- Title:
- Related requirement / issue:
- Priority: P0 / P1 / P2 / P3
- Test type: unit / integration / browser manual / accessibility / compatibility
- Owner:
- Created / updated:
- Target commit:

## 2. Objective and scope

**Behavior being verified:**

**Why it matters:**

**In scope:**

**Out of scope:**

## 3. Preconditions and test data

- Browser and version, if relevant:
- Operating system:
- Node.js and npm versions, if relevant:
- Required app state:
- Synthetic input:
- Randomness or time control:
- Configuration:

The app uses the Node.js built-in test runner. The chatbot does not require a live API, provider key, account, or database.

## 4. Steps

| # | Action | Input / state | Expected observation |
|---|---|---|---|
| 1 | Open or initialize the app | | |
| 2 | Perform the behavior | | |
| 3 | Observe the result | | |
| 4 | Repeat with a boundary or invalid case | | |

## 5. Expected and actual results

**Expected result:**

**Actual result:**

**Pass / fail / blocked / not run:**

**Failure details:**

## 6. Evidence

- Test output or CI run:
- Screenshot or recording, if appropriate:
- Logs with secrets and personal data removed:
- Reproduction notes:

## 7. Cleanup and follow-up

- [ ] Test leaves no persistent user data.
- [ ] Randomness and time are restored after stubbing.
- [ ] Regression coverage is added or linked.
- [ ] Related docs and response catalog are updated.
- [ ] Failure is linked to an issue.

A test case is not evidence of a pass. Record the observed result and exact commit separately.
