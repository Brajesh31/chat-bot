# 🎨 UI and UX Guidelines

## Product character

ChatBuddy is a compact, friendly chat-interface demonstration. The UI should make the message loop obvious without implying that a human agent or generative AI model is responding.

## Layout

- Keep the chat panel centered on wider viewports.
- On narrow screens, use the available width and respect mobile viewport height.
- Keep header actions grouped and identifiable.
- Make the message area independently scrollable.
- Keep the footer visible without covering the latest message.
- Ensure long user and bot text can wrap inside its bubble.

## Interaction

- Use a native form and input for message entry.
- Enter and the send button should produce the same submission behavior.
- Blank or whitespace-only messages should not create history entries.
- Clear should remove submitted messages while retaining the initial greeting.
- Minimize/expand should change visibility without silently discarding state.
- Status and identity copy must describe local scripted behavior accurately.

## Accessibility

Provide visible focus, accessible labels, keyboard operation, appropriate live announcements, responsive reflow, readable contrast, and reduced-motion support. These behaviors require manual validation in real browser and assistive-technology combinations.

## Content and motion

Use concise, direct labels. Use animation as feedback, not as a required source of meaning. Respect prefers-reduced-motion. Do not make hover-only actions the sole way to access a control.

## Verification

Use BROWSER_VERIFICATION.md for desktop, mobile, keyboard, zoom, and reduced-motion checks. Do not claim a design-system certification or WCAG conformance without a documented review.
