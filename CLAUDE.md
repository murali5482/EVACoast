# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured yet.

## Next.js version warning

`AGENTS.md` states this is a newer Next.js (16.x, React 19.3) with breaking changes from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code, and heed deprecation notices. `next dev` rewrites the block in `AGENTS.md`, so leave it in place.

## Architecture

The repo is early-stage and still mostly the `create-next-app` scaffold (`app/page.tsx` is the default template page, and the layout metadata is still "Create Next App"). The structure below is already in place.

- **App Router** in `app/`. `app/layout.tsx` uses the globally typed `LayoutProps<"/">` helper, which needs no import, and loads the Geist fonts through CSS variables.
- **UI layer: shadcn/ui** (style `base-nova`, RSC enabled, icons from `lucide-react`), configured in `components.json`.
  - Components are built on `@base-ui/react`, not Radix. Don't assume Radix APIs when editing `components/ui/*`.
  - Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`. `tsconfig.json` maps `@/*` to the repo root.
  - Add components with `npx shadcn add <name>`. Eight are installed so far: avatar, button, card, dialog, dropdown-menu, input, label, sheet.
- **Styling: Tailwind CSS v4**, CSS-first with no `tailwind.config`. Theme tokens are CSS variables in `app/globals.css`, and `tw-animate-css` is used for animations.
- **`lib/utils.ts`** re-exports `cn` from the `cn` npm package. This differs from the usual shadcn `clsx` + `tailwind-merge` implementation, so check its merge behavior if class conflicts look wrong.
- **Supabase** (`@supabase/ssr`, `@supabase/supabase-js`) is installed but not yet wired up in app code. No client or env setup exists in the repo. A project-scoped Supabase MCP server is configured in `.mcp.json` (docs, database, functions, branching and debugging tools), and it needs Supabase authentication on first use via `/mcp`.
