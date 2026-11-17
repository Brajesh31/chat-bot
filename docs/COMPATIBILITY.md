# 🌐 Compatibility Guidance

## Runtime target

The app is a modern browser-based React application using ES modules and modern CSS. Exact minimum browser versions are not formally pinned. The CI workflow tests Node.js 20 and 22 for development and build tasks; this does not certify browser versions.

## Browser test matrix

When a change affects layout, keyboard behavior, fonts, scrolling, or browser APIs, test representative current versions of Chromium, Firefox, and WebKit-based browsers where available. Record exact versions and operating systems.

| Area | Expected behavior | Manual evidence |
|---|---|---|
| Initial render | Chat panel and greeting display | |
| Form submit | Enter and send button work | |
| Long text | Message wraps within bubble | |
| Clear/minimize | Controls update the visible state | |
| Narrow viewport | Panel reflows without horizontal overflow | |
| Reduced motion | Non-essential animation is minimized | |
| Fonts unavailable | System fallback remains readable | |
| Zoom | Content remains operable at 200% | |

## Unsupported assumptions

Do not claim support for every browser, device, assistive technology, or embedded webview. No formal compatibility certification has been performed.

## Reporting

Use the [browser compatibility report](templates/browser-compatibility-report.md). Record browser/version, device, viewport, commit, steps, actual result, and sanitized evidence. Update this document when a real compatibility target is formally adopted.
