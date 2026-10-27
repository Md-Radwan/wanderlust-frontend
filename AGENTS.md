<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlust

Early-stage full-stack travel app (Next.js App Router). Scaffold + ~60 shadcn components installed; `src/app/page.tsx` is currently empty.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run lint` — ESLint flat config (`eslint-config-next`)
- `npm run build` — production build; also the only typecheck — there is no `typecheck` or `test` script, no tests, and no CI
- Standalone typecheck: `npx next typegen && npx tsc --noEmit` — `PageProps`/`LayoutProps` are **generated globals**; without typegen, `tsc` fails on unresolved route types

Package manager: npm (`package-lock.json` is committed). No env files exist yet.

## Stack quirks (not the defaults you may assume)

- **Next.js 16 Cache Components**: `cacheComponents: true` + `partialPrefetching: true` in `next.config.ts`. Caching uses the `"use cache"` directive + `cacheLife`, not the pre-v16 `fetch`/`revalidate` model. Read the bundled docs in `node_modules/next/dist/docs/` before assuming old APIs.
- **React Compiler is on** (`reactCompiler: true`): don't add `memo`/`useMemo`/`useCallback`, and keep components pure (no render-time mutation of props/state).
- **shadcn style is `base-nova`**: primitives are **Base UI** (`@base-ui/react`) — NOT Radix; a few components import from `@shadcn/react`. Never mix in Radix imports. Add or refresh components via `npx shadcn add <component>`; treat `src/components/ui/*` as generated code.
- **`cn` is the standalone `cn` package**, re-exported from `src/lib/utils.ts` — not clsx + tailwind-merge.
- **Tailwind CSS v4, CSS-first**: no `tailwind.config`; theme lives in `src/app/globals.css`, loaded via the `@tailwindcss/turbopack` rule in `next.config.ts`.
- Path alias `@/*` → `src/*` (matches tsconfig and shadcn aliases).
- Root layout uses Josefin Sans via `next/font/google`; the README's mention of Geist is stale boilerplate, as is the rest of the README.

## Layout of the code

- `src/app/` — routes. `layout.tsx` types props with the generated `LayoutProps<"/">` global; don't import it or hand-write the type.
- `src/components/ui/` — shadcn-generated only; don't hand-edit.
- `src/lib/highlighter.tsx` + `src/hooks/use-highlighted-code.ts` — shadcn code-block support (shiki); extend the `languages` map in `highlighter.tsx` to make more languages highlightable.
- `public/images/` — project assets (banner, CTA, destinations, etc.), not yet referenced by any page.
