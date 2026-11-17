# 🧪 Accessibility Testing

## Automated coverage

Current automated tests check repository integrity and response logic. They do not mount the React component tree in a browser, run a browser accessibility engine, or interact with a screen reader.

## Manual testing scope

- Keyboard-only use.
- Focus order and visible focus.
- Accessible labels and button states.
- Live-region announcements.
- 200% zoom and narrow viewport reflow.
- Text and non-text contrast.
- Reduced-motion preference.
- Long messages and empty form behavior.

## Test record

| Test | Browser / AT | Expected | Actual | Result |
|---|---|---|---|---|
| Keyboard submission | | | | |
| Clear/minimize controls | | | | |
| New message announcement | | | | |
| 200% zoom | | | | |
| Narrow viewport | | | | |
| Reduced motion | | | | |
| Contrast measurement | Tool / version | | | |

## Reporting

Use the accessibility issue form. Record exact versions and reproducible synthetic steps. Do not claim a full WCAG audit based only on automated tooling or a partial manual review.
