# 🗄️ Database Schema Template

> **Not applicable to the current ChatBuddy implementation.** There is no database, persistent transcript store, or database migration in this repository. Use this template only if a separately reviewed change adds persistence.

## Schema metadata

- Database engine and version:
- Schema version:
- Owner:
- Related ADR:
- Migration:
- Date:

## Entities and fields

| Entity / table | Field | Type | Nullable | Key / index | Sensitivity | Purpose |
|---|---|---|---|---|---|---|

## Relationships

Describe primary keys, foreign keys, cardinality, delete/update rules, and integrity constraints. Add a Mermaid ER diagram when appropriate.

## Data lifecycle

Document creation, update, retention, export, deletion, backup, and restoration behavior.

## Security

Access roles, least privilege, encryption requirements, secret storage, audit controls, and sensitive-field handling.

## Migration and rollback

Include forward/backward migration commands, backup requirements, data validation, rollback risks, and restore evidence.

## Testing and review

Schema validation, migration tests, access tests, retention/deletion tests, reviewers, and approval.

Do not populate this template with fictional tables for the current app.
