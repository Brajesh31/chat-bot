# ❤️ Health Checks

## Current status

There is no application server or health endpoint. The app is a static frontend, and successful delivery of index.html and its assets is the relevant hosting-level availability signal.

## Manual smoke checks

- Open the root page.
- Confirm the initial greeting and branded favicon.
- Submit a known prompt.
- Submit an unknown prompt.
- Clear the conversation.
- Minimize and expand the panel.
- Confirm the browser console has no new release-related error.

## CI checks

GitHub Actions verifies lint, tests, build, and dependency audit. These checks do not establish uptime or verify a live deployment.

## Future deployment monitoring

If a deployment monitor is configured, document the URL, check interval, expected response, alert owner, and incident procedure. Do not add a fake /health endpoint to a static app.
