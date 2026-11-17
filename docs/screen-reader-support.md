# 🗣️ Screen Reader Support

## Current semantics

The application labels the chat section and message log. The message body uses a polite live region with additions as the relevant change. The input and icon buttons include accessible labels. The minimize/expand button exposes expanded state and controls the chat body.

## Verification risks

Live-region behavior varies by browser and assistive technology. Re-rendering a long chat log may result in duplicated or missing announcements. Icon-font ligatures may also be announced differently across environments.

## Manual review

Test at least one supported browser and screen reader combination:
- Navigate to the chat region.
- Identify the input and each button by accessible name.
- Submit a short synthetic prompt.
- Confirm the new user and bot messages are announced appropriately.
- Clear the history and verify the resulting context.
- Minimize and expand the panel and verify state announcements.

## Status

No screen-reader matrix or formal assistive-technology certification has been completed. Record exact versions and observed results rather than claiming full screen-reader support.
