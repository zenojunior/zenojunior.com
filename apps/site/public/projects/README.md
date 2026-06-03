# Project preview screenshots

Drop a screenshot of each project's live site here to turn the sidebar
"Visit site" button into a visual preview card.

Naming convention: `<slug>.<ext>` where `<slug>` is the project's content
filename (e.g. `deadlock-ui.md` → slug `deadlock-ui`).

Supported extensions (first match wins): `png`, `jpg`, `jpeg`, `webp`.

Examples:

- `deadlock-ui.png`
- `deadlock-draft.png`
- `petsrs.webp`

If no matching file exists, the button falls back to a plain text button.
Images are shown in a 16:10 frame, anchored to the top — capture the top of
the page for the best result.

## Generating these automatically

You don't have to take screenshots by hand. The `project-screenshots` Claude
skill (`.claude/skills/project-screenshots/`) walks every project with a `url`,
screenshots the live site with Playwright, and writes the compressed webp here
following the naming convention above. Ask Claude to "run the project
screenshots skill", or run it directly:

```bash
node .claude/skills/project-screenshots/capture.mjs            # all projects
node .claude/skills/project-screenshots/capture.mjs petsrs     # one slug
```

See the skill's `SKILL.md` for prerequisites (Playwright/Chromium) and tuning.
