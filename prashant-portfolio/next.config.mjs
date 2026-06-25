/**
 * Next.js configuration.
 *
 * The site is statically exported (`output: 'export'`) so it can be hosted on
 * GitHub Pages, Vercel, Netlify, Cloudflare Pages, or any static host.
 *
 * GitHub Pages note:
 *   When the site is served from https://<user>.github.io/<repo>/ you must set a
 *   basePath equal to the repo name. The included GitHub Action sets
 *   GITHUB_PAGES=true at build time. Update `repoName` below to match your repo.
 *   If you deploy to a custom domain or to Vercel, leave GITHUB_PAGES unset.
 */

const repoName = 'prashant-portfolio'; // <-- change to your GitHub repo name
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // The static export target cannot use the Next.js image optimizer.
    unoptimized: true,
  },
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : '',
  // Exposed so we can prefix links to files in /public (CV, images) correctly
  // whether the site is hosted at a domain root (Vercel) or a sub-path (Pages).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
