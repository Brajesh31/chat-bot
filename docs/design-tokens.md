# 🎛️ Design Tokens and Current Style Values

This page records useful values observed in the current stylesheet. They are descriptive implementation references and may change with UI work.

| Token name | Current value / treatment | Use |
|---|---|---|
| Primary purple | #6D4FC2 / #6d4fc2 | Header, visitor bubble, bot icon |
| Dark purple | #593bab | Hover surface |
| Page background | Linear pale-lavender gradient | Browser page |
| Assistant bubble | #e5d9ff | Bot message |
| User bubble | #6d4fc2 | Visitor message |
| Input surface | White | Form shell |
| Focus outline | #34217f | Visible keyboard focus |
| Main panel radius | 15px | Chat popup |
| Mobile breakpoint | 480px | Full-width mobile layout |
| Main desktop width | 420px max | Chat popup |
| Outer container width | 460px max | Page shell |

## Typography

Inter is requested through the Google Fonts stylesheet. Fallback sans-serif fonts should remain available if the external stylesheet fails.

## Token governance

Do not copy these values into unrelated code when a shared selector can own them. When changing values, review contrast, hover/focus states, responsive layout, and the original visual assets. Contrast values must be measured; a visually similar color is not proof of sufficient contrast.
