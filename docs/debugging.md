# 🐞 Debugging Guide

## Browser runtime issues

1. Open the browser developer tools.
2. Check the Console for the first error.
3. Check the Network panel for missing JavaScript, CSS, favicon, or font resources.
4. Reload and reproduce with a synthetic prompt.
5. Record browser/version, viewport, exact steps, and sanitized error text.

## Response mismatch

- Inspect the input after trimming.
- Find every branch that can match the prompt.
- Check earlier branches for precedence.
- Confirm whether the branch uses a word boundary or substring matching.
- Control Math.random in a test if the branch uses a local array.
- Compare expected and actual text against the response catalog.

## Build or install issues

- Check node --version and npm --version.
- Run npm ci from the repository root.
- Confirm package.json and package-lock.json are both present.
- Inspect the earliest actionable error in the terminal or Actions log.

## Common false assumptions

A fixed weather message is not a network forecast. A scripted story reply is not generated content. A local time/date response reflects the browser environment. An unknown prompt fallback does not mean an AI model is responding.

## Reporting

Use a public issue for ordinary defects and the private security reporting route for suspected vulnerabilities. Never attach secrets or private conversation transcripts.
