# 🏗️ Execution Plan — Premium Developer Portfolio

> **Goal**: Build a visually stunning, performance-optimized, SEO-friendly developer portfolio that impresses recruiters in 10 seconds and earns developer respect on deeper inspection.

---

## 1. Architecture Decision

### Candidates

| Criteria | React + Vite | Next.js (App Router) |
|---|---|---|
| **SEO** | Manual setup (react-helmet-async, prerender) | Built-in metadata API, automatic sitemap, robots.txt |
| **SSR / SSG** | No SSR; SSG requires plugin (vite-plugin-ssr) | Native SSG (`generateStaticParams`) + ISR out of the box |
| **Performance** | Fast dev server; manual code-splitting | Automatic code-splitting, image optimization (`next/image`), streaming |
| **Routing** | Manual (react-router-dom) | File-based routing with layouts, loading, and error boundaries |
| **Deployment** | Any static host | Vercel (zero-config), Netlify, Cloudflare, self-hosted |
| **Maintainability** | Lightweight, less abstraction | More conventions but less boilerplate for common patterns |
| **Scalability** | Good for SPA; requires effort for multi-page | Scales naturally from static site → full-stack app |
| **Bundle Size** | Minimal framework overhead | Slightly larger but offset by automatic optimizations |
| **Learning Curve** | Low — pure React | Moderate — App Router patterns, server/client components |

### ✅ Recommendation: **Next.js 15 (App Router) with Static Export**

**Why:**

1. **SEO is non-negotiable for a portfolio.** Next.js provides the Metadata API, automatic Open Graph image generation, sitemaps, and structured data — all critical for discoverability. With Vite, you'd rebuild all of this manually.
2. **Static Site Generation (SSG)** gives you the best of both worlds: blazing-fast static pages that can be hosted anywhere for free, with the option to add dynamic routes (ISR/SSR) later if you build an admin dashboard.
3. **Image optimization** via `next/image` handles responsive sizing, WebP/AVIF conversion, and lazy loading automatically — essential for a portfolio heavy on project screenshots.
4. **File-based routing with layouts** means adding a new project page is just creating a folder. No router configuration.
5. **Upgrade path**: when you decide to add a CMS or admin panel, you don't migrate frameworks — you just add API routes and server components.

> **Trade-off acknowledged**: Next.js adds framework complexity. But for a portfolio that must rank well, load fast, and eventually scale to dynamic content, the built-in infrastructure pays for itself immediately.

---

## 2. Static vs Dynamic

### ✅ Recommendation: **Static-first MVP** → Dynamic CMS in Phase 2

### MVP (Phase 1) — Static Content in Code

| Content | Storage Method |
|---|---|
| Bio, tagline, social links | TypeScript constants (`src/data/profile.ts`) |
| Projects | MDX files (`content/projects/*.mdx`) with frontmatter |
| Skills | TypeScript array (`src/data/skills.ts`) |
| Experience / timeline | TypeScript array (`src/data/experience.ts`) |
| Resume | Static PDF in `/public/resume.pdf` |
| Project screenshots | Optimized images in `/public/projects/` |

**Why static for MVP:**
- Zero backend complexity — ship in days, not weeks
- MDX lets you write rich project case studies with embedded components
- Git-based versioning — every content change is tracked
- Blazing fast (pure static HTML)
- Free hosting on Vercel/Netlify

### Future (Phase 2) — Admin Dashboard

Introduce a dynamic admin panel **only when** you find yourself updating projects more than 2–3 times per month, or when you want non-developers to contribute content.

When the time comes:
- Add a lightweight database (Supabase / PlanetScale)
- Build admin routes behind authentication
- Store images in cloud storage (Cloudflare R2 / Supabase Storage)
- Keep the public-facing portfolio as SSG with ISR for freshness

> **Rule of thumb**: If you're the only editor and update content monthly, stay static. If you need frequent updates or multiple editors, add a CMS.

---

## 3. Recommended Tech Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router, static export) | SSG, SEO, image optimization, file routing |
| **Language** | TypeScript 5.x (strict mode) | Type safety, better DX, self-documenting code |
| **Styling** | Tailwind CSS v4 | Utility-first, fast iteration, excellent responsive design, CSS-first config |
| **UI Components** | Custom components (no heavy library) | Portfolio needs a unique feel, not a component-library look |
| **Animations** | Framer Motion 12 | Declarative, performant, great scroll/layout animations |
| **Icons** | Lucide React | Clean, consistent, tree-shakeable, 1000+ icons |
| **Typography** | Google Fonts — **Inter** (body) + **JetBrains Mono** (code) | Professional, highly readable, developer-friendly |
| **Content** | MDX (via `next-mdx-remote` or `@next/mdx`) | Rich project pages with embedded React components |
| **Backend** | None (MVP) → Next.js API Routes (Phase 2) | No backend needed for static content |
| **Database** | None (MVP) → Supabase PostgreSQL (Phase 2) | Free tier, real-time, built-in auth |
| **File Storage** | `/public` directory (MVP) → Cloudflare R2 (Phase 2) | Zero cost static; cheap scalable storage later |
| **Authentication** | None (MVP) → NextAuth.js v5 (Phase 2, admin only) | Only needed when admin dashboard is built |
| **Analytics** | Vercel Analytics + Speed Insights | Zero-config, privacy-friendly, Core Web Vitals tracking |
| **Testing** | Vitest (unit) + Playwright (E2E) | Fast unit tests, reliable cross-browser E2E |
| **Linting** | ESLint (flat config) + Prettier | Code quality and consistency |
| **Deployment** | Vercel (primary) | Zero-config Next.js hosting, edge network, preview deployments |

### What's intentionally excluded:

| Technology | Why Not |
|---|---|
| Redux / Zustand | No complex state management needed — it's a portfolio |
| Prisma | Overkill for MVP; add only with Phase 2 database |
| Storybook | Solo project, visual testing via Playwright screenshots is sufficient |
| Docker | Vercel handles infrastructure; containerization adds unnecessary complexity |
| GraphQL | REST/server components are simpler for this scale |
| Heavy UI library (shadcn, MUI) | Portfolio must feel custom and unique, not template-ish |

---

## 4. UI/UX Direction

### 🎨 Design Philosophy

> **"Refined minimalism with purposeful motion."**
>
> Every element earns its place. Animations serve communication, not decoration. The design whispers premium — it doesn't shout.

### Color System

```
Background:     #0A0A0F (deep navy-black)
Surface:        #12121A (elevated cards)
Border:         #1E1E2E (subtle dividers)
Primary:        #6C63FF (electric indigo — CTAs, accents)
Primary Hover:  #7B73FF (lighter on interaction)
Text Primary:   #F0F0F5 (near-white, high contrast)
Text Secondary: #8888A0 (muted, supporting text)
Accent:         #00D4AA (teal-green — status, highlights)
Gradient:       #6C63FF → #00D4AA (hero backgrounds, hover states)
```

Provide a **light mode toggle** (cream/warm whites) for accessibility and preference.

### Typography Scale

| Element | Font | Size | Weight |
|---|---|---|---|
| H1 (Hero title) | Inter | 64–80px (clamp) | 800 |
| H2 (Section titles) | Inter | 36–48px (clamp) | 700 |
| H3 (Card titles) | Inter | 24px | 600 |
| Body | Inter | 16–18px | 400 |
| Code / tech tags | JetBrains Mono | 14px | 400 |
| Caption / meta | Inter | 13–14px | 400 |

Use `clamp()` for fluid typography across breakpoints.

### Page Sections & Layout

#### **Hero Section**
- Full viewport height
- Large animated headline: **Name** + **Role** (typed or fade-in)
- 1–2 line tagline describing your value proposition
- Subtle gradient mesh or noise texture background (not particle.js — overdone)
- Two CTA buttons: "View Projects" + "Download Resume"
- Floating tech stack icons with gentle parallax
- Scroll indicator at bottom

#### **About Me**
- Split layout: short bio paragraph (left) + profile photo with gradient border (right)
- 3–4 metric cards below: years of experience, projects completed, technologies, etc.
- Downloadable resume link
- Keep it concise — 3-4 sentences max

#### **Skills & Technologies**
- Categorized grid: Frontend, Backend, Tools & DevOps, Design
- Each skill as a card/badge with icon + name + proficiency indicator
- Hover reveals experience duration or a short note
- No progress bars (they're arbitrary) — use categories: Expert / Proficient / Familiar

#### **Experience Timeline**
- Vertical timeline with alternating left/right entries (desktop) → stacked (mobile)
- Each entry: role, company, duration, 2–3 bullet points of impact
- Scroll-triggered reveal animation (staggered fade-up)

#### **Featured Projects** (Grid/Bento)
- 4–6 projects in a responsive bento grid (2 large + 4 small, or asymmetric)
- Each card shows: screenshot, title, one-line description, tech badges
- Hover effect: subtle lift + gradient border glow
- Click opens a **dedicated project detail page** (not a modal)

#### **Project Detail Page** (`/projects/[slug]`)
- Hero banner with full-width screenshot
- Sections: Overview, Problem, Approach, Key Features, Architecture, Tech Stack, Results
- Live demo button + GitHub link
- Previous/Next project navigation
- This is where developers dig deeper — include architecture diagrams, challenges, and solutions

#### **Contact Section**
- Clean contact form: Name, Email, Message (use Formspree or Resend for zero-backend delivery)
- Social links row: GitHub, LinkedIn, Twitter/X, Email
- Availability badge: "Open to opportunities" (green dot)
- Optional: subtle map/location indicator

#### **Footer**
- Minimal: navigation links, copyright, "Built with Next.js & ❤️"
- Back-to-top button

### Animation Guidelines

| Element | Animation | Library |
|---|---|---|
| Hero headline | Staggered word fade-up | Framer Motion |
| Section entries | Fade-up on scroll (threshold 0.2) | Framer Motion `whileInView` |
| Project cards | Scale up + shadow on hover | CSS transitions (no JS needed) |
| Page transitions | Fade + slight Y-translate | Framer Motion `AnimatePresence` |
| Timeline items | Stagger reveal from alternating sides | Framer Motion variants |
| Buttons | Subtle scale (1.02) + glow on hover | CSS transitions |
| Tech badges | Gentle float/bob animation | CSS `@keyframes` |

**Rules:**
- All animations under **300ms** (400ms max for scroll reveals)
- Use `will-change` and `transform` only (avoid animating layout properties)
- Respect `prefers-reduced-motion` — disable all animations when set
- No scroll-jacking, no cursor trails, no loading screens — these hurt UX

---

## 5. Recruiter + Developer Experience

### 👔 Recruiter Path (10–20 Second Scan)

Recruiters scan in an **F-pattern**. Structure content for this:

```
[Hero]  Name + Role + CTA           → "Who is this person?" (2 sec)
[About] Photo + Key Metrics         → "Are they qualified?" (3 sec)  
[Skills] Visual skill grid          → "Do they know our stack?" (3 sec)
[Projects] Screenshot grid          → "Have they built real things?" (5 sec)
[Contact] Clear CTA                 → "How do I reach them?" (2 sec)
```

**Key recruiter-focused elements:**
- Role and seniority level visible **above the fold**
- Years of experience as a highlighted metric
- Skill badges matching common job description keywords
- "Download Resume" button accessible from hero AND nav
- LinkedIn and email in at least two locations
- Company logos in experience section (instant credibility)
- Green "Open to Opportunities" badge (if applicable)

### 👨‍💻 Developer Path (Deep Dive)

Developers who click through want substance:

- **Project detail pages** with:
  - Architecture diagrams (Excalidraw-style or Mermaid)
  - Technical challenge → solution narratives
  - Performance metrics or before/after comparisons
  - Code snippets (highlighted with syntax colors)
  - GitHub links with clear README
  - Live demo links that actually work
- **Tech stack** shown with specific versions and reasoning
- **Clean code** — the portfolio source code itself is a showcase. Keep it pristine.
- **GitHub profile link** prominently placed
- Optional: blog/writing section with technical deep-dives

---

## 6. SEO + Performance Strategy

### Metadata & Discovery

| Item | Implementation |
|---|---|
| **Title tags** | Dynamic via Next.js `metadata` export — unique per page |
| **Meta descriptions** | 150–160 chars, action-oriented, per page |
| **Open Graph** | `og:title`, `og:description`, `og:image` (auto-generated via `next/og`) |
| **Twitter Cards** | `twitter:card = summary_large_image` |
| **Canonical URLs** | Set on every page to prevent duplicate content |
| **Sitemap** | Auto-generated via `next-sitemap` or Next.js App Router `sitemap.ts` |
| **robots.txt** | Allow all, link to sitemap |
| **Structured data** | JSON-LD for `Person`, `WebSite`, `BreadcrumbList`, and `CreativeWork` (projects) |
| **SEO-friendly URLs** | `/projects/habit-tracker` not `/projects/123` |

### Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | 100 |
| LCP (Largest Contentful Paint) | < 1.5s |
| FID (First Input Delay) | < 50ms |
| CLS (Cumulative Layout Shift) | < 0.05 |
| INP (Interaction to Next Paint) | < 100ms |
| Total bundle size (initial) | < 150 KB (gzipped) |

### Performance Implementation

| Strategy | How |
|---|---|
| **Image optimization** | `next/image` with AVIF/WebP, responsive `sizes`, blur placeholder |
| **Font optimization** | `next/font/google` — self-hosted, `font-display: swap`, subset Latin |
| **Code splitting** | Automatic per-route; `dynamic()` for heavy components (e.g., contact form) |
| **Lazy loading** | Intersection Observer for below-fold images and animations |
| **Caching** | Immutable assets with hash filenames; `Cache-Control` headers via Vercel |
| **Prefetching** | Next.js `<Link>` auto-prefetches visible routes |
| **CSS** | Tailwind purges unused styles; critical CSS inlined automatically |
| **Bundle analysis** | `@next/bundle-analyzer` during development |

### Accessibility (WCAG 2.2 AA)

- Color contrast ratio ≥ 4.5:1 (text) and ≥ 3:1 (large text, UI elements)
- All images have descriptive `alt` text
- Keyboard navigable — visible focus indicators on all interactive elements
- Skip-to-content link
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- ARIA labels where semantics are insufficient
- `prefers-reduced-motion` respected — all animations disabled
- `prefers-color-scheme` detected for initial theme
- Form inputs with associated `<label>` elements
- Touch targets ≥ 44×44px on mobile

---

## 7. Project Architecture

### Folder Structure

```
portfolio/
├── public/
│   ├── fonts/                    # Self-hosted font files (if not using next/font)
│   ├── images/
│   │   ├── profile/              # Profile photos
│   │   └── projects/             # Project screenshots (optimized)
│   ├── resume.pdf
│   ├── favicon.ico
│   └── og-default.png            # Default Open Graph image
│
├── content/
│   └── projects/                 # MDX project files
│       ├── project-one.mdx
│       ├── project-two.mdx
│       └── ...
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, theme, analytics)
│   │   ├── page.tsx              # Home page (hero + all sections)
│   │   ├── globals.css           # Tailwind imports + CSS custom properties
│   │   ├── sitemap.ts            # Auto-generated sitemap
│   │   ├── robots.ts             # Robots configuration
│   │   ├── manifest.ts           # PWA manifest
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── projects/
│   │   │   ├── page.tsx          # All projects grid
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual project detail
│   │   └── og/
│   │       └── route.tsx         # Dynamic OG image generation
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Fixed navigation bar
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeToggle.tsx   # Dark/light mode switch
│   │   │   └── ScrollToTop.tsx
│   │   ├── sections/             # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/                   # Reusable primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Container.tsx
│   │   │   └── AnimatedSection.tsx  # Scroll-triggered wrapper
│   │   └── projects/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectGrid.tsx
│   │       └── ProjectNav.tsx    # Prev/Next navigation
│   │
│   ├── data/                     # Static content (typed constants)
│   │   ├── profile.ts            # Name, bio, tagline, social links
│   │   ├── skills.ts             # Skills array with categories
│   │   ├── experience.ts         # Timeline entries
│   │   └── navigation.ts        # Nav links
│   │
│   ├── lib/                      # Utilities
│   │   ├── mdx.ts                # MDX parsing helpers
│   │   ├── utils.ts              # cn() helper, formatDate, etc.
│   │   └── constants.ts          # Site-wide constants (URLs, metadata)
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── useTheme.ts
│   │   ├── useScrollspy.ts       # Active section detection
│   │   └── useMediaQuery.ts
│   │
│   └── types/                    # TypeScript type definitions
│       ├── project.ts
│       ├── skill.ts
│       └── experience.ts
│
├── tests/
│   ├── unit/                     # Vitest unit tests
│   └── e2e/                      # Playwright E2E tests
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

### Routes / Pages

| Route | Page | Rendering |
|---|---|---|
| `/` | Home — hero, about, skills, experience, projects, contact | SSG |
| `/projects` | All projects grid with filtering | SSG |
| `/projects/[slug]` | Project detail (from MDX) | SSG (`generateStaticParams`) |
| `/not-found` | Custom 404 | SSG |

### Component Organization Principles

1. **`sections/`** — one-time-use components that compose the home page. Each is a self-contained section.
2. **`ui/`** — reusable primitives shared across pages (Button, Card, Badge). No business logic.
3. **`layout/`** — structural components used in the root layout.
4. **`projects/`** — project-specific components for the detail page.
5. Every component is a **client component only if it uses hooks, event handlers, or browser APIs.** Default to server components.

### Data / Content Structure

#### `src/data/profile.ts`
```typescript
export const profile = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "Building performant web experiences with modern tools.",
  bio: "Short paragraph about yourself...",
  location: "City, Country",
  email: "your@email.com",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://x.com/username",
  },
} as const;
```

#### `content/projects/*.mdx` (Frontmatter)
```yaml
---
title: "Project Name"
slug: "project-name"
description: "One-line description for cards and SEO."
thumbnail: "/images/projects/project-name/thumb.webp"
images:
  - "/images/projects/project-name/hero.webp"
  - "/images/projects/project-name/detail-1.webp"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"]
liveUrl: "https://project.example.com"
githubUrl: "https://github.com/username/project"
featured: true
order: 1
date: "2026-06-15"
---
```

#### `src/data/skills.ts`
```typescript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react", level: "expert" },
      { name: "Next.js", icon: "nextjs", level: "expert" },
      { name: "TypeScript", icon: "typescript", level: "expert" },
      // ...
    ],
  },
  // Backend, DevOps, Design categories...
] as const;
```

#### `src/data/experience.ts`
```typescript
export const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Company Name",
    companyLogo: "/images/companies/company.svg",
    location: "Remote",
    startDate: "2024-01",
    endDate: null, // null = present
    highlights: [
      "Led frontend architecture for a product serving 50K+ users",
      "Reduced bundle size by 40% through code splitting and lazy loading",
    ],
  },
  // ...
] as const;
```

---

## 8. Execution Roadmap

### Phase 1 — Project Setup (Day 1)

| Task | Deliverable |
|---|---|
| Initialize Next.js 15 with TypeScript, Tailwind v4, ESLint, Prettier | Working dev server |
| Configure `tsconfig.json` with strict mode and path aliases (`@/`) | Clean imports |
| Set up project folder structure as defined in Section 7 | Organized codebase |
| Install core dependencies: `framer-motion`, `lucide-react`, `next-mdx-remote`, `clsx` | Package.json ready |
| Set up Google Fonts via `next/font` (Inter + JetBrains Mono) | Fonts loading optimally |
| Create `globals.css` with CSS custom properties for theme colors | Design tokens defined |
| Configure Vercel project for preview deployments | CI/CD pipeline active |

### Phase 2 — Design System & Layout (Days 2–3)

| Task | Deliverable |
|---|---|
| Build UI primitives: `Button`, `Card`, `Badge`, `SectionHeading`, `Container` | Reusable component library |
| Create `AnimatedSection` wrapper with Framer Motion `whileInView` | Scroll animation system |
| Build `Navbar` with scroll-spy active states + mobile hamburger menu | Responsive navigation |
| Build `Footer` component | Page structure complete |
| Implement `ThemeToggle` (dark/light) with `localStorage` persistence + system detection | Theme switching |
| Create `layout.tsx` composing Navbar + Footer + theme provider | Root layout done |
| Define all data files: `profile.ts`, `skills.ts`, `experience.ts`, `navigation.ts` | Content populated |

### Phase 3 — Portfolio UI Sections (Days 4–7)

| Task | Deliverable |
|---|---|
| **Hero section**: animated headline, tagline, CTAs, gradient background, scroll indicator | Above-the-fold impact |
| **About section**: bio, photo, metric cards, resume download | Personal introduction |
| **Skills section**: categorized grid with icons, hover interactions | Technical showcase |
| **Experience section**: animated vertical timeline with company details | Career narrative |
| **Featured Projects section**: bento grid with hover effects | Work showcase |
| **Contact section**: form (Formspree), social links, availability badge | Lead capture |
| Compose all sections into home page (`app/page.tsx`) | Complete landing page |
| Responsive testing: mobile (375px), tablet (768px), desktop (1280px+) | Mobile-first responsive |

### Phase 4 — Project Showcase System (Days 8–10)

| Task | Deliverable |
|---|---|
| Set up MDX pipeline with `next-mdx-remote` or `@next/mdx` | Content rendering |
| Write 4–6 project MDX files with full frontmatter | Portfolio content |
| Build project detail page (`/projects/[slug]`) with hero, content sections, navigation | Deep-dive pages |
| Build projects index page (`/projects`) with grid and optional tag filtering | Project browsing |
| Create custom MDX components (code blocks, callouts, image galleries) | Rich content |
| Optimize and add all project screenshots (WebP/AVIF, multiple sizes) | Visual assets |

### Phase 5 — Animations & Polish (Days 11–12)

| Task | Deliverable |
|---|---|
| Add scroll-triggered section animations (staggered fade-up) | Scroll engagement |
| Hero text animation (staggered word reveal) | First-impression impact |
| Project card hover effects (lift, border glow) | Interactive feel |
| Page transition animation (fade + Y-translate) | Smooth navigation |
| Navbar scroll behavior (background blur on scroll) | Polished navigation |
| `prefers-reduced-motion` fallbacks for all animations | Accessibility |
| Cross-browser testing (Chrome, Firefox, Safari, Edge) | Compatibility |

### Phase 6 — SEO & Performance (Days 13–14)

| Task | Deliverable |
|---|---|
| Configure metadata for all pages (title, description, OG, Twitter cards) | Search visibility |
| Implement `sitemap.ts` and `robots.ts` | Crawler guidance |
| Add JSON-LD structured data (`Person`, `WebSite`, project `CreativeWork`) | Rich search results |
| Set up dynamic OG image generation (`next/og`) | Social sharing cards |
| Run `next/bundle-analyzer` — optimize any oversized chunks | Bundle optimization |
| Lighthouse audit — target ≥95 on all categories | Performance validation |
| Verify Core Web Vitals with Vercel Speed Insights | Real-user metrics |
| Accessibility audit — keyboard navigation, screen reader, contrast checks | WCAG 2.2 AA |

### Phase 7 — Testing (Day 15)

| Task | Deliverable |
|---|---|
| Vitest unit tests for utility functions and data helpers | Logic correctness |
| Playwright E2E tests: navigation, theme toggle, contact form, project pages | User flow validation |
| Visual regression screenshots with Playwright | UI consistency |
| 404 page test | Error handling |
| Mobile responsiveness E2E tests (viewport simulation) | Cross-device confidence |

### Phase 8 — Deployment & Launch (Day 16)

| Task | Deliverable |
|---|---|
| Final Lighthouse audit on production build | Performance sign-off |
| Connect custom domain (if available) | Professional URL |
| Set up Vercel Analytics + Speed Insights | Monitoring active |
| Configure preview deployments for future PRs | Development workflow |
| Write project README with setup instructions | Documentation |
| Submit sitemap to Google Search Console | SEO indexing |
| Share on LinkedIn, Twitter/X, and relevant communities | Launch visibility |

### Phase 9 — Future: Admin/CMS (When Needed)

| Task | Deliverable |
|---|---|
| Set up Supabase project (PostgreSQL + Auth + Storage) | Backend infrastructure |
| Design database schema (projects, skills, experience tables) | Data model |
| Build admin routes with NextAuth.js authentication | Secure admin access |
| CRUD interface for projects, skills, experience | Content management |
| Image upload to Cloudflare R2 / Supabase Storage | Media management |
| Migrate static data to database, keep SSG with ISR | Dynamic content |

---

## 9. Final Recommendation

| Category | Recommendation |
|---|---|
| **Framework** | Next.js 15 (App Router, static export) |
| **Language** | TypeScript 5.x (strict mode) |
| **Styling** | Tailwind CSS v4 |
| **UI** | Custom components (no UI library) |
| **Animation** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Content** | MDX (via `next-mdx-remote`) |
| **Backend** | None (MVP) → Next.js API Routes (Phase 2) |
| **Database** | None (MVP) → Supabase PostgreSQL (Phase 2) |
| **Storage** | `/public` (MVP) → Cloudflare R2 (Phase 2) |
| **Auth** | None (MVP) → NextAuth.js v5 (Phase 2) |
| **Analytics** | Vercel Analytics + Speed Insights |
| **Testing** | Vitest + Playwright |
| **Deployment** | Vercel (free tier) |

---

### ✅ MVP Architecture Summary

**Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + MDX**, deployed on **Vercel**.

**Why this is the best balance:**

| Priority | How This Stack Delivers |
|---|---|
| **Visual Quality** | Custom components + Tailwind + Framer Motion = unique, premium design without library constraints |
| **Performance** | Static export + `next/image` + `next/font` + Tailwind purging = sub-1.5s LCP, tiny bundles |
| **SEO** | Native Metadata API + sitemap + structured data + OG generation = best-in-class discoverability |
| **Simplicity** | No backend, no database, no auth — content lives in TypeScript files and MDX. Ship in ~2 weeks |
| **Scalability** | When you need dynamic content, add Supabase + NextAuth without changing frameworks or rewriting code |
| **Recruiter Impact** | Fast load, strong visual hierarchy, clear CTAs, resume accessibility = 10-second comprehension |
| **Developer Credibility** | Clean architecture, typed code, MDX case studies, open-source repo = technical trust |

> **Bottom line**: This architecture lets you build a stunning portfolio in ~2 weeks with zero backend overhead, while keeping every door open for future growth. The portfolio source code itself becomes a showcase of your engineering standards.

---

*Ready to execute? Start with Phase 1.* 🚀
