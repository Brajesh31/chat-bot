# 🗂️ Project Structure

```text
src/
├── App.jsx                    # Main layout and in-memory history
├── App.css                    # Chat panel styles
├── index.css                  # Global styling
├── main.jsx                   # React entry point
└── components/
    ├── ChatForm.jsx            # Prompt form and submit handler
    ├── ChatMessage.jsx         # Message renderer
    ├── ChatbotIcon.jsx         # Inline SVG icon
    └── ChatbotResponse.js      # Local phrase rules
```

Root configuration includes npm metadata/lockfile, Vite, ESLint, and HTML entry. `.env.example` is informational and source does not read environment values. Keep rendering, state, and response rules separate. Future remote inference must use a server-side boundary.
