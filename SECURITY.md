# Security Policy

## Supported versions

No release or support matrix is published. Reports should identify the affected commit or current default branch. This repository is a client-side prototype and has not received a security audit.

## Reporting a vulnerability

Do not publish exploit details, credentials, or private user data in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact method on the GitHub profile. Include the affected file, impact, reproduction steps, and a safe way to follow up. A maintainer will coordinate a response when possible; no response-time guarantee is made.

Ordinary UI defects can be reported publicly. Do not send real credentials as proof.

## Security and privacy notes

- The current app stores chat messages only in in-memory React state and does not transmit them to an application server.
- The HTML and stylesheet load fonts from Google Fonts, so browsers make requests to that external provider.
- Do not add credentials to frontend source or `VITE_*` variables; values included in a browser bundle are public.
- Keep any future provider API key on a server, not in the Vite client bundle.
- React renders message text as text in the current components. Preserve that behavior and avoid injecting untrusted markup.
- Review dependency and third-party asset licenses before distributing a build.
