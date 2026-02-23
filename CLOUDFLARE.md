# Cloudflare Setup

## Overview

This project is deployed as a **Cloudflare Worker** with static assets. The site is served from Cloudflare's edge network with no origin server — all files are uploaded directly to Cloudflare.

## Wrangler

Wrangler is Cloudflare's CLI tool for managing Workers and Pages projects. It handles building, deploying, and configuring projects.

### Key commands

```bash
npx wrangler whoami                  # Show logged-in accounts
npx wrangler deploy                  # Deploy the Worker (reads wrangler.toml)
npx wrangler pages project list      # List Pages projects
npx wrangler deployments list        # List recent deployments
```

### Configuration (wrangler.toml)

```toml
name = "royal-bar-87c8"                              # Worker project name
account_id = "45281eba1857e04d45fe46d31bdc2f0b"       # Cloudflare account ID

[assets]
directory = "./dist"                                   # Static files to upload
```

## Workers vs Pages

| | Workers | Pages |
|---|---|---|
| **What it is** | Serverless functions at the edge | Static site hosting (like Netlify/Vercel) |
| **Deploy command** | `wrangler deploy` | `wrangler pages deploy <dir>` |
| **Config file** | `wrangler.toml` | Mostly dashboard-based |
| **Static assets** | Supported via `[assets]` in wrangler.toml | Native — designed for this |
| **Custom domains** | Added via Workers project settings | Added via Pages project settings |
| **Subdomain** | `<name>.<account>.workers.dev` | `<name>.pages.dev` |
| **Server-side logic** | Yes (JavaScript/TypeScript at the edge) | Limited (Pages Functions) |

This project uses **Workers with static assets** (`[assets]` config). It behaves like a Pages project but is managed as a Worker, which gives more flexibility if server-side logic is needed later.

**Important**: `wrangler pages deploy` cannot deploy to a Workers project (and vice versa). They are separate project types.

## Accounts

Two Cloudflare accounts are available (see `npx wrangler whoami`):

| Account | ID | Usage |
|---|---|---|
| carlos.netto@matera.com | `b57de325eb89f1948551f4cada6d40c3` | Personal account (not used) |
| **tic.cloud@matera.com** | `45281eba1857e04d45fe46d31bdc2f0b` | Business account (active) |

The account ID in `wrangler.toml` determines which account is used for deployments.

## Authentication

Wrangler authenticates via **OAuth token**, stored locally at:

```
~/.wrangler/config/default.toml
```

To log in or switch accounts:

```bash
npx wrangler login        # Opens browser for OAuth flow
npx wrangler logout       # Revokes the current token
```

The OAuth token grants access to all accounts the user belongs to. The `account_id` in `wrangler.toml` selects which account to deploy to.

## Custom Domain

- **Domain**: materalabs.us
- **Setup**: Custom domain added through the Workers project settings in the Cloudflare dashboard (Workers & Pages > royal-bar-87c8 > Settings > Domains & Routes)
- **DNS**: Cloudflare manages the DNS automatically when adding a custom domain through Workers settings

**Do not** manually create CNAME records pointing to `.workers.dev` with proxy enabled — this causes 522 timeout errors because Cloudflare can't proxy to itself. Always add custom domains through the Workers/Pages project settings.

## Deploy Workflow

```bash
npm run deploy    # vite build && wrangler deploy
```

1. Vite builds the React app into `dist/`
2. Wrangler reads `wrangler.toml` and uploads changed files from `dist/` to Cloudflare
3. Cloudflare serves the static assets from the edge (no origin server)
