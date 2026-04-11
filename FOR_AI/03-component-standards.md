# Component Standards
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## Button

```
Height:      40px
Padding:     16px horizontal
Radius:      12px
Font size:   14px – 15px
Font weight: 500 – 600
Transition:  150ms ease
Hover:       Slightly darker shade of primary color
```

**Variants:**
- `Primary` — filled, brand color background
- `Secondary` — subtle background, no border
- `Ghost` — transparent background, colored text
- `Destructive` — red tone for delete/danger actions

**Rules:**
- Never use borders on primary buttons
- Disabled state: 40% opacity, not clickable
- Loading state: replace label with spinner, keep same dimensions

---

## Input

```
Height:      40px
Padding:     12px horizontal
Radius:      10px
Border:      1px subtle (e.g., gray-200) or none
Font size:   14px – 15px
Focus ring:  2px solid, primary color
```

**Rules:**
- Always pair with a visible label above (not just placeholder)
- Error state: red border + error message below
- Never rely on placeholder as the only label

---

## Card

```
Padding:     16px – 24px
Radius:      16px
Shadow:      shadow-sm or shadow-md
Background:  white or surface color
Border:      Avoid — use shadow + background contrast instead
```

**Rules:**
- Cards should breathe — never cram content
- Use consistent padding across all cards in the same view
- Avoid nesting cards inside cards more than 1 level deep

---

## Navbar

```
Height:      64px
Padding:     24px horizontal
Background:  white or blurred surface (backdrop-blur)
Shadow:      Soft, only on scroll (optional)
```

**Rules:**
- Maximum 5–6 items in the main nav
- Logo on the left, actions (CTA, avatar) on the right
- Mobile: collapse to hamburger or bottom tab bar
- Avoid heavy borders — use subtle shadow or background differentiation

---

## Modal / Dialog

```
Width:       480px – 600px (centered)
Radius:      16px
Padding:     24px – 32px
Overlay:     black at 40–50% opacity
```

**Rules:**
- Always include a clear close action (X button + ESC key)
- Title at top, actions at bottom
- Avoid putting too much content in a modal — consider a drawer instead

---

## Badge / Tag

```
Height:      22px – 26px
Padding:     6px 10px
Radius:      6px – 8px
Font size:   12px
Font weight: 500
```

**Rules:**
- Use color sparingly — max 3 badge colors in one view
- Keep labels short (1–2 words max)
