# 🖼️ Visual Regression Testing

## Current status

The repository has illustrative SVG wireframes and diagrams, but no screenshot baseline or automated visual-diff service. The illustrations must not be mistaken for browser-captured screenshots.

## Manual visual review

Review:
- Initial layout on desktop.
- Header buttons and local-demo status.
- User and bot message bubbles.
- Form and footer disclosure.
- Clear and minimized states.
- Long text wrapping.
- Narrow viewport layout.
- Reduced-motion behavior.

## Future visual test baseline

If a visual test tool is introduced, pin browser version, viewport, device scale, fonts, animation timing, and test data. Mask nondeterministic time text and random response content or make them deterministic.

## Acceptance

Compare meaningful UI differences, not antialiasing noise. Review screenshots for privacy before publishing them. Do not claim visual regression automation exists today.
