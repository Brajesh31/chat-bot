# ✨ Animation and Motion Guidelines

## Current motion

The current stylesheet includes popup, fade-in, and message entrance effects, plus hover transitions for selected interactive elements. The enhancement stylesheet defines a prefers-reduced-motion override.

## Principles

- Motion should clarify state change rather than decorate every element.
- No core task may require animation to complete.
- Avoid large movement or repeated motion that distracts from reading.
- Keep hover feedback consistent and do not rotate controls in a way that obscures their meaning.
- Maintain usable behavior when animations are reduced.

## Reduced motion

The existing CSS sets very short animation and transition durations and disables smooth scrolling for users who request reduced motion. Verify this behavior in browser settings after any animation changes.

## Testing

Test first load, new message appearance, clear, minimize/expand, hover, keyboard focus, and reduced-motion mode. Record actual browser results. No animation performance benchmark is currently maintained.
