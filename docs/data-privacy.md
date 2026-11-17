# 🧾 Data Privacy and Processing

## Data categories

| Category | Current app behavior | Notes |
|---|---|---|
| Chat prompt | Temporarily stored in React state and rendered in the browser | Not sent to an application server |
| Local response | Stored in React state and rendered | Prewritten response selected locally |
| Browser clock/locale | Read for date/time response categories | Not separately persisted |
| Font request metadata | Browser may send normal resource request metadata to Google Fonts | Separate from message processing |

## Minimization

The application does not require identity data, account details, contact information, or payment information. Test fixtures must remain synthetic.

## Third-party processing

Google Fonts is referenced by the page. No model provider or application backend is integrated.

## Future processing changes

Before collecting additional data, document purpose, lawful basis where relevant, recipient, retention, user rights, deletion, access, security, region, and processor terms with appropriate legal review. This guide is technical documentation, not legal advice.
