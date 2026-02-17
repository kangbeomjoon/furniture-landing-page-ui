# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + TypeScript landing page for a furniture brand ("BASE WOOD"), converted from a [Figma design](https://www.figma.com/design/Ns5lQnfrIPd34X98nH5EUZ/furniture-Landing-Page-UI). Single-page application with no routing, no backend, and minimal state.

## Commands

```bash
npm i              # Install dependencies
npm run dev        # Start dev server on port 3000 (auto-opens browser)
npm run build      # Production build to /build directory
```

There are no lint, test, or format commands configured.

## Architecture

**Entry flow**: `index.html` → `src/main.tsx` → `App.tsx` → `LandingPage.tsx`

The app is essentially one large component (`LandingPage.tsx`, ~370 lines) containing all page sections inline: TopBar, Header, Hero, Intro, GridGallery, Products (carousel), FeatureSplit, RoomGrid, Stories, and Footer. Product/room/story data is defined as constant arrays at the top of this file.

### Component Library

46 pre-built shadcn/ui components live in `src/components/ui/`. These wrap Radix UI primitives with Tailwind styling and use `class-variance-authority` for variant management. The `cn()` utility in `src/components/ui/utils.ts` merges classes via `clsx` + `tailwind-merge`.

`src/components/figma/ImageWithFallback.tsx` handles image loading errors with an SVG placeholder.

### Styling

Hybrid approach — Tailwind CSS v4 utilities plus custom CSS:

- `src/index.css`: Tailwind v4 import and base resets
- `src/LandingPage.css`: Custom CSS with design tokens (colors, fonts, spacing), button/typography utility classes, responsive grid layouts, and section-specific styles
- `src/styles/globals.css`: Tailwind theme overrides using oklch color space, dark mode support, sidebar/chart theming

**Design tokens** (defined as CSS custom properties in `LandingPage.css`):
- Fonts: `Playfair Display` (serif headings), `Inter` (sans-serif body) — loaded via Google Fonts in `index.html`
- Colors: earthy/neutral palette (`#F9F9F7` backgrounds, `#E0E8D0` accent, `#1A1A1A` text)
- Spacing scale: `xs(4px)` through `4xl(96px)`
- Container max-width: `1400px`

**Responsive breakpoints**: 1024px (3→2 column grids), 768px (single column mobile)

### Build Configuration

Vite with SWC-based React plugin for fast compilation. `vite.config.ts` defines a `@` path alias to `./src` and extensive module resolution aliases. Build target is ESNext, output goes to `/build`.

### Key Dependencies

- **UI**: Radix UI primitives, shadcn/ui components, lucide-react icons
- **Carousel**: embla-carousel-react
- **Forms**: react-hook-form, react-day-picker, input-otp
- **Other**: recharts (charts), cmdk (command palette), vaul (drawer), sonner (toasts), next-themes (dark mode)

### Conventions

- PascalCase for React components, kebab-case for CSS classes
- All images are remote Unsplash URLs (no local image assets)
- State management is local only (useState for TopBar visibility)
- TypeScript strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
