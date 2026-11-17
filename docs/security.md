# 🔐 Security Overview

## Scope

This is a browser-only frontend demo. It has no application server, authentication, API authorization, database, or model provider. The primary security concerns are safe rendering of visitor text, dependency and workflow integrity, external resource references, and avoiding secrets in browser code.

## Current protections and practices

- React renders message text rather than injecting arbitrary HTML.
- The input element is bounded to 1,000 characters.
- No provider key is required or stored.
- Vite client variables are treated as public.
- npm lockfile, Dependabot, CI audit, and CodeQL are used.
- Security reports are directed to the private vulnerability reporting route where available.

## Known issues and limits

The current dependency graph has an unresolved picomatch 4.0.7 ReDoS advisory through Vite's build chain. CI's high-severity audit is therefore expected to fail until an official remediation is available. CodeQL success does not resolve dependency advisories. The application has not received a full security audit.

## Related guides

See SECURITY.md, docs/security/THREAT_MODEL.md, docs/security/SECURITY_CHECKLIST.md, DEPENDENCIES.md, and the incident-response procedure.
