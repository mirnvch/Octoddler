# Octoddler

Montessori preschool website built with Next.js, TypeScript, and TailwindCSS.

**Live:** [octoddler.vercel.app](https://octoddler.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion, GSAP, Lottie
- **Linting:** Biome, ESLint
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/about` | About the school |
| `/programs/[slug]` | Program details (Toddler, Preschool, Pre-K) |
| `/admissions` | Admissions info |
| `/locations/[slug]` | Location details |
| `/blog/[slug]` | Blog posts |
| `/team` | Staff & teachers |
| `/faq` | Frequently asked questions |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## Getting Started

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run Biome + ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run format` | Format with Biome |

## Project Structure

```
src/
├── app/            # Pages and routes (App Router)
├── components/
│   ├── blog/       # Blog components
│   ├── illustrations/ # SVG/animated illustrations
│   ├── layout/     # Header, Footer, MobileMenu
│   ├── sections/   # Page sections (Hero, Programs, etc.)
│   └── ui/         # Reusable UI components
├── data/           # Static data and content
├── hooks/          # Custom React hooks
├── lib/            # Utilities and helpers
└── styles/         # Global styles
```
