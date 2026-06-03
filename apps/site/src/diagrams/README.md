# Project flowcharts

Optional [Mermaid](https://mermaid.js.org/) flowcharts shown on a project's
detail page. If a project has one or more diagrams, a **"View flowchart"**
button appears in the sidebar (below Tech) and opens a modal.

## Convention

Put `.mmd` files in a folder named after the project slug (the content
filename, e.g. `petsrs.md` → `petsrs/`):

```
src/diagrams/
  petsrs/
    default.mmd      # shown as the "Overview" tab
```

With multiple files each becomes a tab (e.g. `default.mmd`, `2024.mmd`,
`2026.mmd`) so you can show the project's evolution over time.

- A project with a single `default.mmd` opens straight into that diagram (no tabs).
- With multiple files, each becomes a **tab** so you can show the project's
  evolution over time. Order: `default` first, then the rest sorted naturally
  (so `2024` before `2026`).
- A `.mmd` file is just a Mermaid definition, for example:

  ```
  flowchart TD
    User -->|registers a pet| App[Strapi]
    App --> CDN[Cloudflare]
    CDN -.-> Site[petsrs.com.br]
  ```

Nodes can embed brand/actor icons via an `<img>` label pointing at an SVG in
`public/icons/mermaid/` (served from `/icons/mermaid/<name>.svg`). Because the
icon renders inside an `<img>`, give each SVG an explicit `fill`/`stroke`
color — `currentColor` resolves to black there and disappears on the dark
theme. See `petsrs/default.mmd` for a worked example.

Diagrams render client-side with the project's dark/violet theme. Mermaid is
loaded lazily, only when the modal is opened.
