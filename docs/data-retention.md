# 🗃️ Data Retention

## Current behavior

The app does not persist submitted messages to localStorage, IndexedDB, a database, or an application server. The conversation remains in React component state while the current page is active. Clear removes submitted messages. Refreshing or remounting discards the state.

## No server retention policy

Because the app does not receive chat text on a project server, it has no application-side transcript retention period or backup policy. The browser and third-party font provider may have their own independent behavior, which this repository does not control.

## If persistence is proposed

Define:
- Data fields and purpose.
- Storage location and access.
- Default retention and expiry.
- User reset and deletion behavior.
- Export and account closure behavior if accounts exist.
- Backup retention and restoration.
- Logging minimization.
- Legal and provider review.

## Policy rule

Never state a specific retention period for an external provider unless verified from its current terms.
