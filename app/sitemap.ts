import { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/i18n';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://igdown.dev';

const PATHS = [
  { path: '', priority: 1.0 },
  { path: '/video', priority: 0.9 },
  { path: '/photo', priority: 0.9 },
  { path: '/reels', priority: 0.9 },
  { path: '/story', priority: 0.9 },
  { path: '/highlights', priority: 0.9 },
  { path: '/dp', priority: 0.9 },
  { path: '/audio', priority: 0.9 },
  { path: '/private', priority: 0.7 },
  { path: '/privacy', priority: 0.4 },
  { path: '/terms', priority: 0.4 },
  { path: '/contact', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const out: MetadataRoute.Sitemap = [];
  for (const { path, priority } of PATHS) {
    for (const locale of LOCALES) {
      out.push({
        url: `${BASE}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE}/${l}${path}`]),
          ),
        },
      });
    }
  }
  return out;
}
