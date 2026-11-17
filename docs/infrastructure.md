# 🏗️ Infrastructure Overview

## Current infrastructure footprint

The application itself requires only a browser to run. Local development uses Node.js, npm, and Vite. Production output is static files in dist/ that can be served by a static hosting provider.

## Components not present

There is no application server, container, database, queue, object storage, authentication service, model provider, analytics service, or infrastructure-as-code deployment in this repository.

## Hosting responsibilities

A host owner is responsible for TLS, domain and DNS configuration, cache policy, asset availability, and deployment rollback. These settings are external to the application source unless separately captured in deployment configuration.

## Operational changes

If the project adds a backend or persistent service, document environment separation, network boundaries, secrets, access, backups, monitoring, cost, incident response, and restore testing. Do not add Docker or Terraform files without a defined deployment target.
