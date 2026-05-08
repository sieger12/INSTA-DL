import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { isLocale, DEFAULT_LOCALE, RTL_LOCALES, type Locale } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://igdown.dev';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'INSTADOWN — Instagram Downloader for Reels, Stories, Photos, Highlights',
    template: '%s | INSTADOWN',
  },
  description: 'Instagram downloader for Reels, Stories, photos, Highlights, profile pictures, IGTV, and audio. No login, no app, no watermark. Each format has its own focused page.',
  keywords: [
    'instagram downloader',
    'insta story viewer',
    'insta story download',
    'reels downloader',
    'instagram reels mp4 hd',
    'instagram highlight download online',
    'insta photo down',
    'instagram photo downloader hd',
    'insta profile viewer',
    'instagram reels to mp3 converter',
    'anonymous instagram story viewer',
  ],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    siteName: 'INSTADOWN',
    title: 'INSTADOWN — Instagram Downloader',
    description: 'Save Reels, Stories, Highlights, photos, audio, and profile pictures from Instagram. No login, no watermark.',
  },
  twitter: { card: 'summary_large_image' },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '/';
  const segment = pathname.split('/')[1] ?? '';
  const locale: Locale = isLocale(segment) ? segment : DEFAULT_LOCALE;
  const dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
  return (
    <html lang={locale} dir={dir}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        {children}
      </body>
    </html>
  );
}
