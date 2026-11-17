# 🧭 Manual Browser Verification Plan

## Purpose

The automated Node.js tests validate response rules and repository integrity. They do not render the React interface in a browser. This plan records the manual checks required to assess the visible product without overstating automated coverage.

## Verification record

- Commit:
- Build / deployment:
- Tester:
- Date and time:
- Browser and version:
- Operating system:
- Device / viewport:
- Zoom:
- Reduced-motion preference:
- Screen reader and version, if used:

## Core interaction

- [ ] Page loads with the initial greeting.
- [ ] Plain text prompt can be entered.
- [ ] Enter submits exactly one message pair.
- [ ] Send button submits exactly one message pair.
- [ ] Leading and trailing whitespace are trimmed.
- [ ] Whitespace-only input is ignored.
- [ ] Input length limit is applied.
- [ ] A known trigger returns the expected scripted category.
- [ ] An unknown trigger returns a fallback response.
- [ ] New messages scroll into view.
- [ ] Clear removes submitted messages and the initial greeting remains.
- [ ] Minimize hides the message panel and footer.
- [ ] Expand restores the existing conversation.

## Responsive and visual checks

- [ ] Desktop layout is centered and has no unintended overflow.
- [ ] Narrow mobile viewport uses the full available width.
- [ ] Long user text wraps without escaping the bubble.
- [ ] Footer does not cover the latest message.
- [ ] Browser zoom at 200% remains usable.
- [ ] Font loading failure has a readable fallback.

## Accessibility checks

- [ ] All controls can be used with keyboard alone.
- [ ] Focus indicator is visible.
- [ ] Chat region has an understandable accessible name.
- [ ] New messages are announced without reading the whole history repeatedly.
- [ ] Button names and expanded state are announced.
- [ ] Reduced-motion preference is respected.
- [ ] Contrast is measured rather than guessed.

## Results and defects

For every check, record pass / fail / blocked / not run, evidence, and a linked issue. A blank checkbox is not a pass. Record untested combinations and avoid claiming full browser or WCAG coverage.
