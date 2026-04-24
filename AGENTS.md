# AGENTS.md

## Tech Stack

- **Framework**: Astro 5 with Starlight (docs site)
- **UI**: React 19 + Tailwind CSS 4
- **Deploy**: Cloudflare Pages (adapter: `@astrojs/cloudflare`)
- **Entry point**: `dist/_worker.js/index.js` (worker-based, not static)

## Dev Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Run Astro CLI directly
```

## Build & Deploy

- `wrangler.jsonc` deploys from `dist/` to Cloudflare Pages
- `astro.config.mjs` output is `static` with Cloudflare adapter; build format is `directory` (each route = folder/index.html)
- Deploy command: `npx wrangler pages deploy dist` (or CI handles it)

## Key Paths

- `src/content/docs/` — Documentation pages (auto sidebar from subdirectories)
- `src/content/i18n/` — Translation JSON files (en, zh-CN, fr)
- `src/styles/global.css` — Global styles
- `src/components/` — React components
- Path aliases: `@/*` → `./src/*`, `~/` → `./src/`

## Content Structure

Sidebar is auto-generated from `src/content/docs/` subdirectories:
- `getting-started/` → "入门" / "Getting Started"
- `nodes/` → "使用ERS材质节点" / "Using ERS Material Nodes"
- `advanced/` → "进阶指南" / "Advanced Guides"
- `faq/` and `changelog/` are static links

## i18n

Three locales: `en`, `zh-cn`, `fr`. Each page can have translations under the same slug via Starlight's i18n system.

## No lint/typecheck/test scripts

This repo has no `lint`, `typecheck`, or `test` scripts. The `.opencode/` folder uses a separate `bun.lock` for skills.
