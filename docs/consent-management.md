# ✅ Consent Management Status

## Current implementation

The app does not implement a consent manager, account system, analytics tracking, or remote AI processing. It processes prompts locally in the browser. The page separately references Google Fonts.

## Why no consent control is currently configured

There is no app-level collection of conversation text by a remote provider that would require an in-app opt-in flow in the current architecture. This statement does not determine the legal status of all browser or third-party resource requests.

## Future data collection

Before adding analytics, cookies, storage, or remote inference:
1. Identify each processing purpose and data category.
2. Determine the appropriate notice and choice mechanism with legal review.
3. Avoid collecting data before required consent.
4. Store consent state only if necessary and securely.
5. Allow withdrawal and respect it consistently.
6. Document retention, deletion, and third-party recipients.
7. Test consent and refusal paths.

## Claim policy

Do not claim regulatory compliance or valid consent from the absence of a consent banner. Reassess when actual data flows change.
