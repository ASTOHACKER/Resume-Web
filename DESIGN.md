# Overview
Creative North Star: "The Digital Archive Zine." Minimalist content-first focus, disciplined typography, and a static-print-ready structure.

# Colors
- **Background**: `--background` (#faf9f6 / #09090b)
- **Foreground**: `--foreground` (#1a1a1a / #f4f4f5)
- **Primary**: `--primary` (#2563eb / #6366f1)
- **Accent**: `--accent` (#059669 / #10b981)

# Typography
Aa
Outfit (Body) · Prompt (Display/Thai)
- sans: `var(--font-outfit), var(--font-prompt), sans-serif`
- display: `var(--font-prompt), sans-serif`

# Elevation
Flat by default. No shadows on interactive elements. Border-based structure using single-pixel lines (`border-slate-200/60` or `border-zinc-800/60`).

# Components
- **Card**: `.glass-panel` (now `rounded-none`, border-only, transparent background).
- **Navbar**: Sticky, minimal, no-print.
- **Section**: `.section-spacing` (py-16).

# Do's and Don'ts
- Use `rounded-none` for all structural elements.
- Maintain high-contrast print-optimized state.
- Don't use heavy shadows or rounded corners.
- Tint neutrals toward the accent hue only in interactive highlights.
