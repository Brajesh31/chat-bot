# 🛠️ Operations Guide

## Operational model

The current product is a static frontend. Chat responses run inside the visitor's browser, and there is no application server, message queue, database, or AI provider to operate. Hosting, TLS, static asset delivery, and source/CI maintenance are the operational responsibilities.

## Routine tasks

| Task | When | Evidence |
|---|---|---|
| Review failed CI | On every failed workflow | Job logs and linked issue |
| Review dependency advisories | During dependency updates and scheduled checks | npm audit output |
| Verify static build | Before releases | Build log and artifact |
| Inspect hosted page | After a deployment | URL, commit, smoke-test record |
| Review privacy boundary | Whenever network/storage behavior changes | Updated data inventory |
| Review docs and links | Before release | Passing repository integrity tests |

## Incident handling

Use the incident response guide for availability or security incidents. Capture the affected commit, observed symptom, time window, scope, and mitigation. Avoid collecting user chat content unless there is a documented and necessary reason.

## Operational limits

There is no application-level uptime endpoint, server log, database backup, autoscaling configuration, or provider failover. Do not create operational claims or dashboards that imply those services exist.

## Changes that expand operational scope

A backend, database, authentication, analytics, or model provider would introduce new operational responsibilities. Before implementation, document service ownership, secret rotation, logging, retention, monitoring, incident response, restore testing, and cost controls.
