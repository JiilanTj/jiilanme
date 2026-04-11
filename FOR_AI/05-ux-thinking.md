# UX Thinking
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## Core Principles

Apply these at every design decision, not just at the end.

### 1. Prioritize the User's Goal
Ask: *What is the user trying to accomplish?*
Every screen should have one primary action. Everything else is secondary.

### 2. Reduce Steps
Every extra click is friction. Every extra field is resistance.
If an action takes 5 steps, ask if it can be done in 3.

### 3. Use Progressive Disclosure
Show only what's needed at the current stage.
Advanced options, filters, and settings should be hidden until the user opts in.

### 4. Simplify Before Adding
When the UI feels complex, the answer is almost never "add more UI."
Remove, combine, or hide things before reaching for new components.

### 5. Provide Clear Feedback
Users should always know what's happening. Every action must have a visible response.

---

## Required UI States

Every interactive component must handle all four states. Skipping any is a UX bug.

| State | When | How to Handle |
|-------|------|---------------|
| **Loading** | After user triggers an action | Skeleton, spinner, or disabled state — never freeze the UI |
| **Empty** | No data to show | Meaningful message + CTA, not a blank space |
| **Error** | Action failed | Clear error message + recovery path (retry, go back, contact) |
| **Success** | Action completed | Confirmation — toast, inline message, or state change |

---

## Interaction Patterns

### Forms
- Label above the field, always visible
- Validate on blur (not on every keystroke)
- Show errors inline, immediately after the related field
- One primary CTA per form — never two submit buttons

### Navigation
- Active state must be visually obvious
- Breadcrumbs for deep hierarchies
- Back navigation should always be predictable

### Destructive Actions
- Always require confirmation (modal or inline confirmation)
- Use red/destructive color only for actual destructive actions
- Never make "Delete" the default or most prominent button

### Loading & Async
- Show skeleton screens instead of spinners for content-heavy areas
- Optimistic UI for quick actions (like toggling, liking, saving)
- Never block the entire page for a partial data fetch

---

## Cognitive Load Rules

- Max **1 primary action per screen**
- Max **5–7 items** in any navigation or list before needing pagination or grouping
- Group related things together — proximity = relationship
- Use **visual weight** to indicate importance — biggest/boldest = most important
- Never use color as the **only** indicator of meaning (accessibility)
