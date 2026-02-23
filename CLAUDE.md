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
metadata.json   — app metadata (name, description)
```

## Commands

```bash
npm run dev       # Dev server on port 3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run deploy    # Build + deploy to Cloudflare Pages
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run clean     # Remove dist/
```

## Deployment

Deployed to **Cloudflare Pages** via Wrangler. The `deploy` script builds and pushes to the `small-king-da11` project.

## Key Details

- The entire UI is a single React component in `src/App.tsx` — no routing, no state management
- Static landing page with no backend API calls
- `express` and `better-sqlite3` are installed but unused — leftover from the AI Studio template
- The `@` alias in imports resolves to the project root
