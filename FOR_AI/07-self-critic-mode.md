# Self-Critic Mode
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## Overview

After generating any UI, do not output it immediately. Run through this process first. The goal is to catch issues that are invisible during generation but obvious on review.

This is not optional — it is the last step before every output.

---

## Step 1 — Critique

Review your own output with fresh eyes. Ask every question below.

### Spacing & Layout
- [ ] Is spacing consistent throughout? (same component = same padding)
- [ ] Does the layout follow the 8px grid?
- [ ] Is there enough whitespace between sections?
- [ ] Does anything feel cramped or cluttered?

### Visual Hierarchy
- [ ] Is the primary action immediately obvious?
- [ ] Does the heading → subheading → body scale feel natural?
- [ ] Are there any elements competing for attention that shouldn't be?

### Color & Typography
- [ ] Are more than 3 colors used in this view? (if yes, reduce)
- [ ] Are font sizes consistent with the typography scale?
- [ ] Is there enough contrast between text and background?

### Components
- [ ] Do all interactive elements have hover and focus states?
- [ ] Are all four UI states handled? (loading, empty, error, success)
- [ ] Are buttons, inputs, and cards consistent in size and style?

### Overall Feel
- [ ] Does this look like it was designed, or generated?
- [ ] Is there anything that looks generic or template-like?
- [ ] Would a senior designer approve this without changes?

---

## Step 2 — Improve

For every "no" or "maybe" from the checklist above, make a concrete fix. Common improvements:

| Issue Found | Fix |
|-------------|-----|
| Inconsistent padding | Normalize all cards/components to the same value |
| Too many colors | Remove or replace with shades of existing colors |
| Cluttered layout | Add spacing, remove one element, or split into two sections |
| Weak hierarchy | Increase size/weight of the primary element, reduce others |
| Generic look | Replace default patterns with more specific, intentional choices |
| Missing states | Add skeleton for loading, empty state copy, error message |

---

## Step 3 — Output

Only output the **final improved version**.

Do not include:
- The original draft
- A comparison between versions
- Commentary on what was changed (unless the user asked)

Just ship the better version.

---

## Quick Checklist (For Fast Reviews)

When time is short, run at minimum:

```
□ Spacing consistent?
□ Hierarchy clear?
□ Colors within limit?
□ Interactive states handled?
□ Feels premium, not generic?
```

If all five pass → output. If any fail → fix first.
