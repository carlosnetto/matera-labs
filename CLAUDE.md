# Matera Labs

Internal innovation hub landing page for Matera — showcases fintech experiments and prototypes.

## Tech Stack

- **React 19** + **TypeScript 5.8** — single-page app in `src/App.tsx`
- **Vite 6** — dev server and build tool
- **Tailwind CSS 4** — styling (via `@tailwindcss/vite` plugin)
- **Motion** (Framer Motion) — animations
- **Lucide React** — icons

## Project Structure

```
src/
  App.tsx       — entire app (single component, landing page)
  main.tsx      — React entry point
  index.css     — Tailwind imports
index.html      — HTML template
vite.config.ts  — Vite config (aliases @ to project root)
wrangler.toml   — Cloudflare Workers config (project name, account ID, assets)
metadata.json   — app metadata (name, description)
```

## Commands

```bash
npm run dev       # Dev server on port 3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run deploy    # Build + deploy to Cloudflare Workers
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run clean     # Remove dist/
```

## Deployment

Deployed to **Cloudflare Workers** (project `royal-bar-87c8`) on the `tic.cloud@matera.com` account. Config lives in `wrangler.toml`.

- **Domain**: materalabs.us (custom domain configured in Cloudflare Workers settings)
- **Workers URL**: royal-bar-87c8.tic-cloud.workers.dev
- `npm run deploy` builds with Vite then runs `wrangler deploy` which uploads static assets

## Version Workflow

A version string is displayed in the footer of the page in small text. Format: `Version YYYY-MM-DD-HH-MM` in **UTC**.

**Before every commit**, update the version in `src/App.tsx` (search for "Version 2026-") to the current UTC timestamp. This must happen as part of the staged changes — never commit without updating the version first.

## Key Details

- The entire UI is a single React component in `src/App.tsx` — no routing, no state management
- Static landing page with no backend API calls
- Digital Twin and Stablecoin Privacy are **Matera products**, not experiments — the experiments are the connectors and integrations around them
- `express` and `better-sqlite3` are installed but unused — leftover from the AI Studio template
- The `@` alias in imports resolves to the project root
