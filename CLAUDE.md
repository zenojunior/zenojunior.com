# CLAUDE.md

Personal site for Zeno Junior. pnpm + Turborepo monorepo.

## Structure

- `apps/site` is the Astro site (Tailwind CSS v4, content collections for projects and notes).
- `packages/cv` is the shared CV/resume package consumed by the site.

## Common commands

- `pnpm --filter @zenojunior/site build` builds the site.
- `pnpm --filter @zenojunior/site lint` / `lint:fix` runs ESLint (antfu config).
- Do not start the dev server; it is already running in the background.

## Conventions

- Project content lives in `apps/site/src/content/projects/*.md`.
- Project listing badge ("Open source" vs "Private") is derived from the `repo` field, overridable with the `source` frontmatter field.
- Brand icons for flowcharts go in `apps/site/public/icons/mermaid/`; project icons in `apps/site/public/projects/icons/`.
- Optimize raster images to webp with `sharp` before committing.

## Rules

- Never use the em dash ("—") in texts.
