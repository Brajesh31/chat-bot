# 🔄 Migration Plan

## Migration metadata

- Change:
- Current version / state:
- Target version / state:
- Owner:
- Date:
- Related ADR / issue:
- Rollback owner:

## Scope and rationale

Explain why migration is needed, which users and components are affected, and what is out of scope.

## Inventory

| Item | Current state | Target state | Migration action |
|---|---|---|---|
| Source modules | | | |
| Configuration | | | |
| Dependencies | | | |
| User data, if any | | | |
| Deployment | | | |

For the current application, there is no database or persistent conversation store. Do not invent a data migration.

## Pre-migration checks

- [ ] Source and lockfile backed up through Git.
- [ ] Target versions and compatibility reviewed.
- [ ] Test plan prepared.
- [ ] Release owner and communication path assigned.
- [ ] Rollback method tested or documented.
- [ ] Privacy/security impact reviewed.

## Execution sequence

List ordered steps, command, expected result, owner, and failure condition.

## Verification and rollback

Define smoke tests, comparison criteria, rollback trigger, known-good artifact, and who can authorize rollback.

## Completion

Record actual migration date, resulting commit, CI evidence, unresolved issues, and sign-off.
