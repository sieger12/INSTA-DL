import { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://insta-dl.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = ['video', 'photo', 'reels', 'story', 'highlights', 'dp', 'audio', 'private'];
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    ...tools.map(t => ({
      url: `${BASE}/${t}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ];
}
