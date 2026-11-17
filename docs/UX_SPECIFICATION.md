# 🎨 User Experience Specification

## Product purpose

ChatBuddy is a compact educational chat UI demonstration. It shows how a React form, local phrase matcher, component state, and message rendering work together. It is not a production support channel or generative AI assistant.

## Main screen

The page contains one centered chat panel:
- Header with icon, product name, local-demo status, clear control, and minimize/expand control.
- Message log with an initial greeting and subsequent user/bot message pairs.
- Footer with a single-line input, submit button, and local-processing disclosure.

## Interaction states

| State | Entry condition | Expected UI |
|---|---|---|
| Initial | Page mounted | Initial greeting and empty input |
| Prompt entered | User types | Text remains in input until submit |
| Submitted | Non-empty trimmed value | User message and local scripted reply appear |
| Empty | Value contains only whitespace | No new message pair |
| Cleared | Clear button activated | Submitted messages removed; initial greeting remains |
| Minimized | Minimize control activated | Message body and footer hidden |
| Expanded | Expand control activated | Existing in-memory conversation shown |
| Narrow viewport | Mobile breakpoint reached | Panel fills viewport width and adapts height |

## Content and behavior constraints

The input accepts plain text and is limited to 1,000 characters. Messages are handled in the browser. The response helper is an ordered phrase-matching function, and its first matching branch wins. Some branches select a random prewritten string. Weather language is a disclaimer rather than a forecast.

## Accessibility requirements

All controls need programmatic names and keyboard operation. Focus must remain visible. The message region uses a polite live log. The UI should honor reduced-motion preferences and reflow on narrow viewports. These design choices still require manual verification.

## Non-goals

The current design does not provide authentication, chat persistence, conversation export, multiple chat rooms, search, streaming, file upload, model configuration, live browsing, or human agent handoff.

## Change review

Changes to input length, form submission, message role, clear/minimize behavior, live announcements, external resources, or data flow must update this page and the manual browser verification plan.
