# ⚡ Performance

The current workload is a small synchronous client UI. There is no model request, server call, streaming, or database query. Potential concerns include unbounded in-memory history, long-list rendering, third-party font requests, and future SDK bundle size.

Measure before optimizing. Record device, browser, build, and method. Do not publish unmeasured claims.
