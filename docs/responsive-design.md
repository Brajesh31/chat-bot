# 📱 Responsive Design

## Current behavior

The main panel is constrained to a 420px width inside a container capped at 460px. At the mobile breakpoint of 480px, the outer container removes padding, the panel fills the viewport width, the panel uses dynamic viewport height where supported, and the footer accounts for the bottom safe-area inset.

## Responsive concerns

- Header labels and action buttons must remain visible.
- Long message content must wrap rather than overflow.
- The message log must remain independently scrollable.
- The footer must not obscure the latest message.
- Browser address-bar changes should not leave avoidable blank space on mobile.
- Virtual keyboards must not make the input unusable.

## Test matrix

| Viewport class | Example width | Key checks |
|---|---:|---|
| Small phone | 320px | No horizontal overflow, controls remain usable |
| Typical phone | 375px | Message bubbles wrap and footer fits |
| Large phone | 430px | Header actions do not collide |
| Tablet | 768px | Centered panel and adequate page spacing |
| Desktop | 1280px | Panel remains capped and centered |

## Verification

Use browser emulation and at least one physical mobile device where possible. Record browser/version, device, viewport, zoom, keyboard state, and commit. The table is a test plan, not a statement that every size has already been tested.
