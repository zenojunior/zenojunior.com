---
title: 'Deadlock UI'
description: 'An open-source library of Web Components for rendering Deadlock game items, with official React and Vue bindings.'
period:
  start: '2026-04-01'
tags: ['stencil', 'web-components', 'react', 'vue', 'typescript', 'open-source']
url: 'https://ui.deadlock-api.com/'
repo: 'https://github.com/deadlock-api/deadlock-ui'
---

Deadlock is a competitive multiplayer game by Valve. I helped found the Brazilian community around it, and as the scene grew, so did the demand for tooling. Deadlock UI was born from a recurring need across community projects: a consistent, framework-agnostic way to render game items. I open-sourced it so anyone building Deadlock tools could drop it in regardless of their stack.

It's a collection of Web Components built with StencilJS, with official bindings for React and Vue so it feels native in any of them.

Provides item card components with tooltips and a full shop panel with category tabs and tier sections. Item data and images are fetched directly from the Deadlock API, requiring no local assets. Supports 15+ languages.

Published as a monorepo with three packages: `@deadlock-api/ui-core`, `@deadlock-api/ui-react`, and `@deadlock-api/ui-vue`.
