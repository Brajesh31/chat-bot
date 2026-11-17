# 📝 Accessible Forms

## Current message form

The input is a single-line text field with a programmatic label and a maximum length of 1,000 characters. The form has a submit button with an accessible name. It trims whitespace and ignores empty values.

## Interaction guidance

- Keep the input label available to assistive technology.
- Do not rely on placeholder text as the only label.
- Ensure the send button has a clear accessible name.
- Preserve native Enter submission behavior.
- Make focus visible on input and button.
- Keep error or validation feedback understandable if new validation states are added.
- Do not clear input until the message is accepted for the current submission path.

## Future form changes

If asynchronous APIs are introduced, define pending, success, failure, timeout, and retry states. Announce relevant state changes without overwhelming the live region.

## Testing

Manually test keyboard submission, blank input, maximum length, zoom, screen reader labels, and focus. The current automated suite does not render the React form in a browser.
