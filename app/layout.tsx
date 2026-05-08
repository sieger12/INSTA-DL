import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://insta-dl.vercel.app';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fafafa' }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
