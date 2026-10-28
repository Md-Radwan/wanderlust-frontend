<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlust

Travel-app UI in progress (Next.js App Router). The home page is a stack of static marketing sections; there is **no data layer, API, auth, or database yet** — don't look for one, and don't invent one unless the task asks.

## Commands

- `npm run dev` — dev server (Turbopack).
- `npm run build` — production build and the only full typecheck; passes on current `main`.
- `npm run lint` — bare `eslint`, so it lints the whole repo. **It currently exits 1** on `src/components/ui/carousel.tsx` and `src/hooks/use-mobile.ts`, both `react-hooks/set-state-in-effect` in shadcn-generated code. Treat those as pre-existing and leave `src/components/ui/*` alone (generated). To verify your own work: `npx eslint src/path/file.tsx`.
- Standalone typecheck: `npx next typegen && npx tsc --noEmit`. `PageProps`/`LayoutProps` are **generated globals** (pulled in by `next-env.d.ts` from `.next/dev/types`); plain `tsc` fails on a fresh checkout until typegen/dev/build has generated them.
- No test script, tests, CI, or formatter config. npm only (`package-lock.json` committed). No env files exist.

## Stack quirks (not the defaults you may assume)

- **Next.js 16 Cache Components**: `cacheComponents: true` + `partialPrefetching: true` in `next.config.ts`. Caching uses the `"use cache"` directive + `cacheLife`, not the pre-v16 `fetch`/`revalidate` model.
- **React Compiler is on** (`reactCompiler: true`): don't add `memo`/`useMemo`/`useCallback`, and keep components pure.
- **shadcn style is `base-nova`**: primitives are **Base UI** (`@base-ui/react`), not Radix — never mix in Radix. `src/components/ui/questionnaire.tsx` and `message-scroller.tsx` additionally import from `@shadcn/react`. Add/refresh components with `npx shadcn add <component>`; treat `src/components/ui/*` as generated.
- **Base UI button semantics**: components that act as buttons (`Button`, `SheetClose`, `DialogClose`, `*Trigger`) render a native `<button>` unless told otherwise. Passing a non-button via `render` (e.g. `render={<Link />}`) requires `nativeButton={false}`; otherwise Base UI logs a runtime error and the element loses button semantics.
- **`cn` is the standalone `cn` package**, re-exported from `src/lib/utils.ts` — not clsx + tailwind-merge.
- **Tailwind CSS v4, CSS-first**: no `tailwind.config`; theme lives in `src/app/globals.css` (imports `shadcn/tailwind.css`), wired in via the `@tailwindcss/turbopack` rule in `next.config.ts`.
- Project tokens in `globals.css`: `brand` (`#15a1bf` → `bg-brand`/`text-brand`) and `font-system` (system-UI stack). Section components deliberately wrap in `font-system` to opt out of the global Josefin Sans (the README's Geist mention is stale boilerplate, as is the rest of the README).
- Path alias `@/*` → `src/*` (matches tsconfig and shadcn aliases).

## Layout of the code

- `src/app/layout.tsx` — Josefin Sans, `Navbar` + `main` + `Footer`; types props with the generated `LayoutProps<"/">` global (don't import or hand-write it).
- `src/app/page.tsx` — orders the home sections: `Banner`, `WhyChooseUs`, `Testimonials`, `CTA`.
- Only `/` and `/add-destination` routes exist. Links in `navbar.tsx`/`Footer.tsx` to `/destinations`, `/admin`, `/profile`, `/login`, `/sign-up`, etc. are placeholders that 404 today — expected, not a routing bug.
- `src/components/*.tsx` — page sections live flat here (mixed naming: `banner.tsx`/`navbar.tsx` lowercase, `CTA.tsx`/`Footer.tsx` PascalCase; file comments referencing `components/sections/` are stale).
- `src/components/ui/` — shadcn-generated only; don't hand-edit.
- `src/lib/highlighter.tsx` + `src/hooks/use-highlighted-code.ts` — shadcn code-block support (shiki); extend the `languages` map in `highlighter.tsx` to make more languages highlightable.
- `public/images/` — section art referenced as `/images/...` via `next/image` (a couple are also imported statically in `Testimonials.tsx`).
