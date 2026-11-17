# 🗄️ Database and Persistence Status

## Current behavior

The project does not use a database or browser storage API. Submitted messages are held in the React state array in src/App.jsx. A page reload or remount discards the submitted conversation. There is no account, transcript export, analytics store, or application backend to receive prompt data.

## Clear behavior

The clear control resets the in-memory submitted message list. The initial greeting is rendered separately and remains visible. This is not a server-side deletion operation because no server-side transcript exists.

## Future persistence requirements

Before adding local or remote persistence, decide:
- Which fields need to be stored and why.
- Whether storage is necessary or optional.
- Whether user identity or authentication is required.
- How access is restricted.
- How long each data category is retained.
- How users view, export, and delete data.
- How backups and deletion requests interact.
- How migrations and recovery are tested.

Treat conversation text as potentially sensitive. Do not put database credentials or privileged tokens in a Vite client bundle. Store server secrets only in the backend's protected environment.

## Required documentation updates

A persistence feature requires architecture, privacy, security, data-retention, backup/recovery, operations, and user-guide updates before release. It also requires automated tests for storage lifecycle and deletion behavior.
