# Layout System
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## Container

```
Max width:   1200px
Alignment:   Horizontally centered
Padding:     0 24px (mobile) / 0 48px (desktop)
```

> Never let content stretch edge-to-edge on wide screens. Always constrain to max-width.

---

## Grid

| Breakpoint | Min Width | Columns | Gutter |
|------------|-----------|---------|--------|
| Mobile | < 768px | 1 | 16px |
| Tablet | 768px+ | 6 | 24px |
| Desktop | 1024px+ | 12 | 32px |

**Rules:**
- Always design mobile-first
- Never break the column grid for individual elements
- Use column span purposefully — hero: full width, sidebar: 3–4 cols

---

## Section Spacing

```
Between major page sections: 64px – 80px
Between content groups:      32px – 48px
Between individual items:    16px – 24px
```

> Consistent vertical rhythm makes layouts feel professional and intentional.

---

## Page Structure

A well-structured page follows this hierarchy:

```
[ Navbar ]           → fixed or sticky, 64px
[ Hero / Header ]    → primary message, 480px – 640px height
[ Content Sections ] → spaced 64px–80px apart
[ Footer ]           → clear bottom boundary
```

---

## Common Layout Patterns

### Two-Column (Content + Sidebar)

```
Content:  8 columns (desktop)
Sidebar:  4 columns (desktop)
Gap:      32px
Stack:    Single column on mobile
```

### Dashboard Grid

```
Stat cards:  4 per row (desktop), 2 (tablet), 1 (mobile)
Main chart:  8–12 columns
Table:       Full width with horizontal scroll on mobile
```

### Centered Content (Articles, Auth pages)

```
Max width:   640px – 720px
Margin:      auto
Padding:     48px 24px
```

---

## Rules

- Avoid full-width clutter — always use the container
- Use **whitespace generously** — empty space is not wasted space
- Align everything to the grid — no "floating" elements
- Never stack more than 3 content zones without a visual separator (spacing, background change, or divider)
