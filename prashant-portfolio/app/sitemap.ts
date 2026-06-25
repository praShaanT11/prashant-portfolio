import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.endsWith('/')
    ? siteConfig.url.slice(0, -1)
    : siteConfig.url;

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
