# 🧩 Response Rule Change

## Change summary
- Rule ID:
- Author:
- Date:
- Source file: `src/components/ChatbotResponse.js`

## Intent definition
What exact visitor intent should this rule recognize?

## Match contract
- Required phrases:
- Word-boundary or substring behavior:
- Case normalization:
- Priority / branch position:
- Expected response:
- Randomized response set, if any:

## Collision analysis
| Example input | Should match? | Reason |
|---|---|---|
| Positive example | Yes | |
| Negative example | No | |
| Ambiguous example | Explain | |

## Regression tests
- [ ] Positive phrase test
- [ ] Negative phrase test
- [ ] Earlier-rule precedence test
- [ ] Randomness controlled where needed

## Safety and UX
Could the reply be mistaken for professional advice, live information, or model output? Is the response transparent about the app's limitations?

## Verification
- [ ] `npm test`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Documentation updated
