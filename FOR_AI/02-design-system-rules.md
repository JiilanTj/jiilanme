# Design System Rules
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## Spacing

Use an **8px base grid**. Only the following values are allowed — no exceptions.

| Token | Value |
|-------|-------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-12` | 48px |
| `space-16` | 64px |

> Never use arbitrary values like `10px`, `15px`, or `22px`. Stick to the scale.

---

## Typography

| Role | Size |
|------|------|
| Small / Caption | 12px |
| Body | 14px – 16px |
| Subheading | 20px |
| Heading | 24px – 32px |

**Rules:**
- Use a **maximum of 2 font weights** per section
- Never mix more than 3 font sizes in a single component
- Line height: 1.4–1.6 for body, 1.1–1.2 for headings

---

## Colors

- **1 Primary** — brand color (buttons, links, highlights)
- **1 Secondary** — neutral (gray scale, backgrounds, borders)
- **1 Accent** — for CTAs, alerts, or success states

**Rules:**
- Use **shades** of existing colors instead of introducing new ones
- Backgrounds should use very light tints (e.g., `primary-50`)
- Text should always meet WCAG AA contrast ratio

---

## Border Radius

| Size | Value | Use |
|------|-------|-----|
| Small | 8px | Inputs, tags, badges |
| Medium | 12px | Buttons, dropdowns |
| Large | 16px | Cards, modals, panels |

---

## Shadows

- Keep shadows **soft and subtle**
- Avoid harsh, heavy drop shadows
- Use shadow to imply **elevation**, not decoration

**Recommended scale:**
```
shadow-sm:  0 1px 3px rgba(0,0,0,0.06)
shadow-md:  0 4px 12px rgba(0,0,0,0.08)
shadow-lg:  0 8px 24px rgba(0,0,0,0.10)
```
