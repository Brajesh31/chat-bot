# 🔄 Migration Guide

## Current migration status

There is no formal released API, database schema, persistent transcript store, or multi-version public deployment contract. Most source changes are internal frontend changes.

## For contributors moving to the current setup

- Use npm rather than another package manager.
- Install from package-lock.json using npm ci.
- Use Node.js 20 or 22 as covered by CI.
- Run ESLint, Node tests, Vite build, and dependency audit.
- Follow the current React component and CSS ownership documented in PROJECT_STRUCTURE.md.

## If the architecture changes

A change introducing storage, API calls, routing, or provider integration requires a separate migration plan. Document data transfer, compatibility, user notice, rollback, testing, and any one-way operations.

## No fabricated migrations

Do not create SQL migration files or describe data migrations while the application has no database.
