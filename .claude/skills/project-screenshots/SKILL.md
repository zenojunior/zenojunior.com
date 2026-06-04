---
name: project-screenshots
description: Capture live-site screenshots of the portfolio projects with Playwright and save them as compressed webp files under apps/site/public/projects/<slug>.webp, feeding the "Visit site" preview cards. Use when the user wants to generate, refresh, or update project preview screenshots/thumbnails for zenojunior.com.
---

# Project screenshots

Generates the preview images shown on each project's detail page. For every
project in `apps/site/src/content/projects/*.md` that has a `url` in its
frontmatter, it screenshots the live site, compresses it, and writes
`apps/site/public/projects/<slug>.webp`. The detail page picks these up
automatically (see `apps/site/src/pages/projects/[...slug].astro`).

## How to run

1. **Ensure dependencies are available.** The script runs from the repo root,
   so Node resolves its imports from the **root** `node_modules` — not from
   `apps/site`. Install both `playwright` and `sharp` at the workspace root
   (idempotent; pnpm dedupes via the store), then download Chromium:

   ```bash
   pnpm add -Dw playwright sharp
   pnpm exec playwright install chromium
   ```

2. **Run the capture script** from the repo root:

   ```bash
   # All projects that have a url
   node .claude/skills/project-screenshots/capture.mjs

   # Or only specific projects (substring match on the slug)
   node .claude/skills/project-screenshots/capture.mjs deadlock petsrs
   ```

3. Report which slugs succeeded/failed and remind the user to review the new
   webp files before committing.

## What it does

- Reads each project's frontmatter; only projects with a `url` are captured.
- Renders at a **1280×800 (16:10)** viewport at **2x** scale (matches the card
  aspect ratio), screenshots the **top of the page** (viewport, not full page).
- Compresses to **webp** (`quality 80`, resized to **1024px** wide) via `sharp`.
- Writes to `apps/site/public/projects/<slug>.webp`.

## Tuning

Edit the constants at the top of `capture.mjs`: `VIEWPORT`, `DEVICE_SCALE_FACTOR`,
`OUT_WIDTH`, `WEBP_QUALITY`, `SETTLE_MS` (how long to wait after load for
fonts/animations to settle).

## Caveats

- The site must be **publicly reachable** — sites behind auth or not yet
  deployed will fail (logged, skipped, the run continues).
- Uses `waitUntil: 'load'` rather than `networkidle` because sites with
  persistent connections (e.g. Socket.IO) never reach network idle.
- The script overwrites existing `<slug>.webp` files.
