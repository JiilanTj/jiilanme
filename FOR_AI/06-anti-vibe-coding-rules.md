# Anti "Vibe Coding" Rules
> Part of the Senior UI Agent Kit — inject this as knowledge or context into your AI agent.

---

## What is "Vibe Coded" UI?

Vibe coded UI is what happens when you generate interface code without a structured design system — things that look roughly right individually but feel inconsistent, cluttered, or cheap as a whole.

The goal of this document is to prevent that.

---

## Never Do This

### Colors
- ❌ Use more than 3 distinct colors in a single view
- ❌ Introduce a new color just because a component "needs" one
- ❌ Use pure black (`#000000`) for text — use near-black (`#111`, `#1a1a1a`)
- ❌ Use pure white (`#ffffff`) backgrounds without considering surface hierarchy

### Spacing
- ❌ Use inconsistent padding across similar components (e.g., some cards at `12px`, others at `20px`)
- ❌ Use arbitrary values (`10px`, `15px`, `22px`) outside the 8px grid
- ❌ Collapse whitespace to "fit more content" — this always makes things worse

### Typography
- ❌ Mix more than 3 font sizes in a single component
- ❌ Use both bold AND large text to emphasize the same thing — pick one
- ❌ Use `font-weight: 400` for headings
- ❌ Use ALL CAPS for body text

### Layout
- ❌ Allow content to stretch edge-to-edge on wide screens
- ❌ Create asymmetric layouts without intention
- ❌ Stack too many elements without breathing room between them
- ❌ Center-align long body text (fine for headlines, bad for paragraphs)

### Borders
- ❌ Use borders everywhere as "separators" — use spacing instead
- ❌ Mix border styles (`solid`, `dashed`) without clear semantic reason
- ❌ Use heavy borders (`2px+`) on cards or containers

### Icons & Images
- ❌ Mix icon libraries (Heroicons + Lucide + FontAwesome in the same view)
- ❌ Use icons without labels when the action is not immediately obvious
- ❌ Scale images non-uniformly

---

## Always Do This

### Alignment
- ✅ Align every element to the grid — no "eyeballed" positioning
- ✅ Use consistent left-alignment for content, center-alignment only for hero sections
- ✅ Ensure text, icons, and buttons are vertically centered within their containers

### Spacing
- ✅ Use the 8px spacing scale exclusively
- ✅ Give every component room to breathe — whitespace is a design element
- ✅ Be consistent — if one card has `24px` padding, all cards should

### Visual Hierarchy
- ✅ Make the primary action the most visually prominent element
- ✅ Use size, weight, and color to establish hierarchy — not all three at once
- ✅ Ensure one thing stands out per section — not everything can be important

### Polish
- ✅ Add transitions to interactive elements (hover, focus, open/close)
- ✅ Use consistent border radius across the same component type
- ✅ Check the design at 80% zoom and on mobile — if it breaks, it's not done

---

## The Smell Test

Before finalizing any UI, ask:

> "Does this look like it was built by a team with a design system, or does it look like it was generated?"

If the answer is the latter — simplify, align, and clean up before shipping.
