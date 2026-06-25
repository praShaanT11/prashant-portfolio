/**
 * Build a URL to a file in /public that works both at a domain root (Vercel)
 * and under a sub-path (GitHub Pages project sites).
 *
 *   asset('Prashant_Singh_CV.pdf')  ->  '/Prashant_Singh_CV.pdf'        (Vercel)
 *                                   ->  '/repo/Prashant_Singh_CV.pdf'   (Pages)
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  return `${BASE}/${path.replace(/^\//, '')}`;
}
