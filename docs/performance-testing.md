# ⚡ Performance Testing

## Current performance profile

The application performs synchronous local matching and renders a relatively small message list. It makes no model request, application API call, or database query. Google Fonts is an external resource.

## What to measure

- Initial page load and Largest Contentful Paint.
- JavaScript and CSS bundle sizes.
- Interaction latency when sending a prompt.
- Scroll behavior as history grows.
- Memory use during long sessions.
- Layout stability when messages are appended.
- Effect of external font loading or fallback.

## Reproducible method

Record commit, device, browser, viewport, network conditions, cache state, build mode, measurement tool, and sample count. Run multiple trials and report variance.

## Current coverage

No automated Lighthouse budget, bundle-size threshold, load-test suite, or performance benchmark is configured. Use the performance measurement template for manual investigations.

## Optimization policy

Measure first. Do not add virtualization, a worker, caching, or a framework solely on speculation.
