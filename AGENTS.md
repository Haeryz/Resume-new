# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js portfolio app using TypeScript, Tailwind CSS, shadcn-style UI components, animation libraries, and Spline assets. Application routes live in `src/app`, including API handlers such as `src/app/api/send/route.ts`. Reusable React components are in `src/components`; section-level homepage content is under `src/components/sections`, shared UI primitives under `src/components/ui`, and realtime/chat UI under `src/components/realtime`. Site data and personal portfolio content are centralized in `src/data`, especially `src/data/config.ts`, `src/data/constants.ts`, and `src/data/projects.tsx`. Blog MDX content lives in `src/content/blogs`. Static assets, screenshots, sounds, and Spline scenes are in `public/assets`. The root `main.tex` and generated `main.pdf` are the LaTeX resume source and output.

## Build, Test, and Development Commands

- `pnpm install`: install dependencies from `pnpm-lock.yaml`.
- `pnpm dev`: start the local Next.js development server at `http://localhost:3000`.
- `pnpm build`: create a production build and run framework-level checks.
- `pnpm start`: serve the production build after `pnpm build`.
- `pnpm lint`: run Next.js ESLint rules.

Prefer `pnpm` because this repository includes a `pnpm-lock.yaml`. Avoid mixing package managers unless you intentionally update lockfiles.

## Coding Style & Naming Conventions

Write TypeScript and React components with strict typing. Use the `@/*` path alias for imports from `src`. Components should use PascalCase filenames when they export a named component, while route files and local utility files follow existing lowercase or kebab-case patterns such as `page.tsx`, `route.ts`, and `use-media-query.tsx`. Keep Tailwind classes readable and use shared helpers from `src/lib/utils.ts` where appropriate. Preserve existing SCSS module usage for header/preloader animation files instead of rewriting them into unrelated styling patterns.

## Testing Guidelines

There is currently no dedicated test framework configured. For changes, at minimum run `pnpm lint` and `pnpm build`. If adding tests, colocate them near the feature or use a clear `src/**/__tests__` structure, and name files with `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines

Git history currently only shows `init`, so no strict commit convention is established. Use short, imperative commit subjects, for example `Update project data` or `Fix contact form validation`. Pull requests should include a concise description, screenshots or screen recordings for visual changes, notes for any environment variables, and confirmation that `pnpm lint` and `pnpm build` passed.

## Security & Configuration Tips

Copy `.env.example` to `.env.local` for local secrets. Do not commit API keys. `RESEND_API_KEY` powers the contact form, while `NEXT_PUBLIC_WS_URL`, `UMAMI_DOMAIN`, and `UMAMI_SITE_ID` enable optional realtime and analytics features.
