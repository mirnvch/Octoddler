# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Octoddler is a Montessori preschool website built with Next.js 16 (App Router) and React 19. It uses static site generation for all pages, markdown-based blog content, and rich animations (Framer Motion, GSAP, Lottie).

## Commands

```bash
npm run dev         # Start dev server on localhost:3000
npm run build       # Production build (also validates all pages via SSG)
npm run lint        # Run ESLint (next lint) + Biome checks
npm run lint:fix    # Auto-fix with Biome (biome check --write .)
npm run format      # Format with Biome (biome format --write .)
```

There is no test suite configured. `npm run build` is the primary validation step — it catches TypeScript errors and ensures all statically generated pages render successfully.

## Code Style

Enforced by Biome (`biome.json`):
- **Tabs** for indentation (width 2), 100-char line width
- **Single quotes**, no semicolons, trailing commas, arrow parens always
- Import organization enabled

TypeScript strict mode is on. Path alias `@/*` maps to `./src/*`.

## Architecture

### Content Model

- **Static data**: TypeScript objects in `src/data/` (programs, locations, team, FAQ, etc.)
- **Blog posts**: Markdown files in `content/blog/` with frontmatter parsed by `gray-matter`
- **Markdown rendering**: Custom parser in `src/lib/markdown.ts` (not a library — hand-rolled with XSS protection)

### Page Structure (App Router)

All pages are React Server Components using `async` functions. Dynamic routes (`/programs/[slug]`, `/blog/[slug]`, `/locations/[slug]`) use `generateStaticParams()` for SSG and `generateMetadata()` for per-page SEO.

Key page composition pattern: pages import section components from `src/components/sections/` and compose them declaratively. The homepage (`src/app/page.tsx`) demonstrates this.

### Component Organization

- `src/components/layout/` — Header, Footer, MobileMenu, Breadcrumbs (layout shell)
- `src/components/sections/` — Full page sections (Hero, Testimonials, ContactForm, etc.)
- `src/components/ui/` — Primitives (Button, Card, Input, FadeIn, Container, etc.)
- `src/components/illustrations/` — Animation wrappers (Lottie, GSAP sun logo)

### Animation Approach

Three animation systems are used:
1. **Framer Motion** — Scroll-triggered fade/slide via `FadeIn` component (uses `useInView`)
2. **GSAP** — Complex timeline animations (e.g., `AnimatedSunLogo`)
3. **Lottie** — Pre-rendered JSON animations in `public/animations/`

All animations respect `prefers-reduced-motion`.

### SEO & Structured Data

- `src/lib/metadata.ts` — `createMetadata()` helper generates consistent page metadata
- `src/lib/schema.ts` — JSON-LD generators (Organization, Article, FAQPage, BreadcrumbList)
- `src/app/robots.ts` and `src/app/sitemap.ts` — Auto-generated

### Design System

Defined in `src/app/globals.css` via CSS custom properties. Primary color: `#9fc7aa` (soft green). Four Google Fonts loaded in root layout: Josefin Sans (headings), DM Sans (body), Playfair Display (display), Abril Fatface (decorative).

### Utilities

- `src/lib/utils.ts` — General helpers (className merging via `clsx` + `tailwind-merge`)
- `src/lib/constants.ts` — Site-wide config, route definitions, program/location constants
- `src/lib/blog.ts` — Blog post file I/O, metadata extraction, sorting
