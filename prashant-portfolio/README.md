# Prashant Singh — Research Portfolio

A minimal, fast, academic portfolio for a machine learning researcher and
incoming PhD scholar. Built with **Next.js 15**, **TypeScript**,
**Tailwind CSS**, **Framer Motion**, and **Lucide** icons. Dark mode by
default, statically exported, and ready to deploy to **GitHub Pages** or
**Vercel**.

---

## Highlights

- **Single source of truth** — all content lives in [`lib/data.ts`](lib/data.ts). Edit one file to update the whole site.
- **Dark / light mode** with a toggle (defaults to dark, no flash on load).
- **Static export** (`output: 'export'`) — no server required.
- **SEO + Open Graph** metadata, generated `sitemap.xml` and `robots.txt`, and a social share image.
- **Accessible & responsive** — semantic landmarks, keyboard-friendly, reduced-motion aware, mobile-first.
- **Scroll progress bar**, smooth in-page navigation, and subtle section reveals.
- Sections: Hero, About, Education, Research, Publications (extensible), Projects, Experience, Leadership & Service, Skills, Achievements, Contact.

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion (minimal) |
| Icons | lucide-react |
| Theme | next-themes |
| Fonts | Inter, Newsreader, JetBrains Mono (via `next/font`) |

---

## Getting started

Requires **Node.js 18.18+** (Node 20 recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # static export to ./out
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

---

## Customizing the content

Almost everything is driven by **[`lib/data.ts`](lib/data.ts)**. Open it and edit the
exported objects — `siteConfig`, `education`, `research`, `projects`,
`experience`, `skills`, `achievements`, and so on. Fields marked `// TODO` are
placeholders to replace:

- `siteConfig.email` — your email address.
- `siteConfig.socials.github` / `linkedin` / `scholar` — your profile URLs.
- `siteConfig.url` — your final site URL (used for SEO/sitemap/OG). You can also set this at build time with the `NEXT_PUBLIC_SITE_URL` environment variable.

### Replace the placeholder files

These live in [`public/`](public/):

- **`Prashant_Singh_CV.pdf`** — swap in your real CV (keep the filename, or update `siteConfig.cvPath`).
- **`og.png`** — the 1200×630 social share image. Replace with your own to rebrand link previews.

### Add a profile photo (optional)

The About section ships with a tasteful monogram placeholder so nothing looks
broken out of the box. To use a real photo, drop an image at `public/profile.jpg`
and replace the `PortraitPlaceholder` in
[`components/sections/About.tsx`](components/sections/About.tsx) with a
`next/image` (or a plain `<img src={asset('profile.jpg')} … />`).

### Adding publications

`publications` in `lib/data.ts` starts empty, so the Publications section shows
a polished "coming soon" state. Add an entry and it renders automatically:

```ts
export const publications: Publication[] = [
  {
    title: 'Your Paper Title',
    authors: 'P. Singh, A. Coauthor',
    venue: 'NeurIPS',
    year: '2026',
    doi: '10.1234/xxxxx',      // optional
    pdf: 'https://…',          // optional
    code: 'https://github.com/…', // optional
  },
];
```

### Theming

Design tokens (colors for dark and light) are CSS variables in
[`app/globals.css`](app/globals.css), mapped to Tailwind names in
[`tailwind.config.ts`](tailwind.config.ts). Adjust the accent or surfaces there.

---

## Deployment

### Option A — Vercel (simplest)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Defaults work as-is.
3. (Recommended) add an env var `NEXT_PUBLIC_SITE_URL` = your production URL.

No sub-path handling is needed on Vercel.

### Option B — GitHub Pages (project site)

This repo includes a workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds the
static export and publishes it.

1. In [`next.config.mjs`](next.config.mjs), set `repoName` to your repository name (it controls the `basePath`).
2. In the workflow, update `NEXT_PUBLIC_SITE_URL` to `https://<username>.github.io/<repo>`.
3. In your repo settings → **Pages**, set **Source** to **GitHub Actions**.
4. Push to `main`. The action builds, adds `.nojekyll`, and deploys.

> **Why `basePath`?** Project sites are served from `https://<user>.github.io/<repo>/`.
> The build sets `GITHUB_PAGES=true`, which applies the sub-path so assets and
> the CV/OG links resolve correctly. For a custom domain or a user/org root site
> (`<user>.github.io`), leave `GITHUB_PAGES` unset and set `repoName` to `''`.

### Any other static host

`npm run build` emits a fully static site to `./out` — deploy that folder to
Netlify, Cloudflare Pages, S3, etc.

---

## Project structure

```
app/
  layout.tsx       # fonts, metadata (SEO/OG), theme provider, chrome
  page.tsx         # composes all sections in order
  globals.css      # design tokens + base/utility styles
  sitemap.ts       # generated sitemap.xml
  robots.ts        # generated robots.txt
  icon.svg         # favicon (monogram)
components/
  Hero, Navbar, Footer, ScrollProgress, ThemeToggle, Reveal, Section, …
  sections/        # About, Education, Research, Publications, Projects,
                   # Experience, Leadership, Skills, Achievements, Contact
lib/
  data.ts          # ← all site content
  asset.ts         # base-path-aware /public URL helper
public/
  og.png, Prashant_Singh_CV.pdf, .nojekyll
```

---

## Notes

- The contact form opens the visitor's email client via a `mailto:` link, so the
  site stays fully static. To collect submissions server-side instead, point the
  form handler in
  [`components/sections/Contact.tsx`](components/sections/Contact.tsx) at a
  service like [Formspree](https://formspree.io) or a serverless function.
- Fonts are fetched at build time by `next/font`. Building therefore requires
  network access to Google Fonts (this is automatic on Vercel and in the
  included GitHub Action).

---

Built with Next.js & Tailwind CSS.
