# 🌐 Third-Party Services

## Verified external reference

The project references Google Fonts through its stylesheet. A visitor's browser may request stylesheet and font resources from Google's infrastructure. This is separate from local message matching.

## Services not integrated

There is no configured AI provider, database host, analytics platform, authentication provider, payment service, or remote chat API in the current source.

## Review requirements

Maintain an inventory containing service name, purpose, requested data, domains, credentials, retention, region where confirmed, user notice, and owner. Do not guess service regions or retention periods.

## Self-hosting fonts

Self-hosting may reduce the browser's external font dependency, but font license terms must be checked before copying font files. Any change should preserve reasonable fallbacks and be tested for layout.

## Change trigger

Any new request origin or SDK requires a data-flow, privacy, security, performance, and license review.
