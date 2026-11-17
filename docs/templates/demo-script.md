# 🎬 ChatBuddy Demo Script

## Demo metadata

- Presenter:
- Audience:
- Date:
- Commit:
- Browser / environment:
- Duration:
- Learning objective:

## Required framing

Explain before the demo that ChatBuddy is a React application with hand-written local phrase matching. It does not connect to a generative AI model, remote conversation API, database, or persistent transcript store. Do not present canned replies as model reasoning.

## Preparation

- [ ] Install dependencies with npm ci.
- [ ] Start with npm run dev, or use a verified deployed build.
- [ ] Confirm the target URL and browser.
- [ ] Close unrelated tabs and private data.
- [ ] Prepare synthetic prompts.
- [ ] Confirm the app is in its initial state.

## Walkthrough

1. Show the initial greeting and explain the visible chat region.
2. Enter hello and show the fixed greeting response.
3. Enter tell me a joke and explain that the output is selected from a local array.
4. Enter high school physics to demonstrate that hi should not trigger a standalone greeting.
5. Enter an unmatched prompt and explain the scripted fallback.
6. Use the clear control and describe the in-memory reset.
7. Minimize and expand the panel.
8. Resize to a narrow viewport and point out the responsive layout.
9. Show the source helper and tests for a technical audience.

## Talking points

- React component separation.
- Ordered phrase matching and precedence.
- Node built-in test runner.
- Why user text is rendered as text.
- Difference between a scripted demo and an AI product.

## Contingency

If the live demo fails, explain the failure honestly and use a pre-recorded, clearly labelled capture or source walkthrough. Do not fabricate results or conceal a broken feature.

## Questions and follow-up

Record audience questions, misconceptions, and issues that should become tracked work:
