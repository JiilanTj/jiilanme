# FOR_AI — Senior UI Agent Skill Pack

Drop this folder into your codebase and reference these files as context, rules, or knowledge for your AI agent.

---

## Files

| File | Purpose |
|------|---------|
| `02-design-system-rules.md` | Spacing scale, typography, colors, radius, shadows |
| `03-component-standards.md` | Button, Input, Card, Navbar, Modal, Badge specs |
| `04-layout-system.md` | Container, grid, section spacing, page structure |
| `05-ux-thinking.md` | Core UX principles, required UI states, interaction patterns |
| `06-anti-vibe-coding-rules.md` | What to never do, what to always do |
| `07-self-critic-mode.md` | Post-generation review checklist before outputting |

---

## How to Use

### Cursor / Windsurf
Add to `.cursor/rules/` or `.windsurf/rules/` and enable as context for AI features.

### OpenAI / LangChain Agent
Inject file contents as system message or knowledge documents before the user task.

### Claude Projects
Upload files to the project knowledge base. They will be available in every conversation.

### Any Custom Agent
Pass file contents as part of the system prompt or context window on each request.

---

## System Prompt

The main system prompt (the "Core Brain") is in the parent file `senior-ui-agent-kit.md`, Section 1. Set that as your agent's system prompt, then inject these files as supporting knowledge.

---

*Part of the Senior UI Agent Kit.*
