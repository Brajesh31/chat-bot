# ✍️ Input Format and Validation

## Current input contract
The chat form accepts a single plain-text message from the visitor.

| Property | Current behavior |
|---|---|
| Input type | HTML text input |
| Empty values | Rejected by the required field and trimmed in submit handler |
| Leading/trailing whitespace | Removed before matching |
| Maximum length | 1,000 characters |
| Transport | Local in-browser function call |
| Rich text / HTML | Not supported |
| Files / attachments | Not supported |
| Persistence | None |

## Response matching
The response helper lowercases the trimmed prompt and evaluates ordered conditions. Some conditions use word boundaries to avoid common false positives. Other multi-word phrase checks remain substring-based.

## Security and privacy
- User text is rendered as text by React, not inserted as HTML.
- Prompts are not sent to a model provider or app server.
- The message is held in React state until refresh or clear.
- Do not use real credentials, personal data, or private transcripts in public examples.

## Future validation requirements
A future remote API must validate request size and type on the server, reject malformed content, rate-limit abusive traffic, avoid logging raw prompts by default, and define cancellation and provider failure behavior.
