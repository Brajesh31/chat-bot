# Database and Persistence

## Current behavior

The project does not use a database or browser storage API. `chatHistory` is a React state array in `App.jsx`; a page reload clears the conversation. No account, transcript, analytics, or prompt data is sent to an application backend.

## Future persistence

Before adding persistence, decide what the user expects to retain and provide a clear reset/delete control. Document the stored fields, retention period, access controls, export/deletion behavior, and migration plan. Treat conversation text as potentially sensitive. Do not add a database credential to the Vite client bundle.
