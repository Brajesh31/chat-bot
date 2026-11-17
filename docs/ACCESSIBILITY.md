# ♿ Accessibility Guidance

## Current implementation signals

The chat interface includes labelled controls, an explicitly named chat region, a polite live message log, keyboard-operable form controls, visible focus styling, responsive layout rules, and reduced-motion CSS. These are implementation measures, not proof of conformance.

## Required manual review

- Use the entire interaction without a mouse.
- Verify logical focus order and visible focus.
- Submit with Enter and activate each button with the keyboard.
- Confirm the live log announces new messages without repeatedly reading the full history.
- Confirm clear and minimize/expand buttons expose meaningful names and expanded state.
- Test 200% browser zoom and narrow viewports.
- Check contrast with a measurement tool.
- Test browser reduced-motion preference.
- Use at least one screen reader/browser combination and record versions.

## Known limitations

There is no automated browser accessibility test or full WCAG audit in the current suite. The use of an aria-live log, visual contrast, focus order, and icon fonts should be validated in real browsers and assistive technologies.

## Contribution expectations

Any new control requires a programmatic name, keyboard operation, visible focus, and a state announcement where needed. Avoid using color alone to convey status. Keep motion optional and respect reduced-motion preferences.

## Reporting

Use the accessibility issue form or template. Include the browser, assistive technology, steps, expected result, and sanitized evidence. Do not claim WCAG conformance without a documented assessment against the applicable criteria.
