import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getDict } from '@/lib/dict';

interface Props {
  locale: Locale;
}

export default function Footer({ locale }: Props) {
  const d = getDict(locale);
  const items = [
    { label: d.footer.privacy, href: 'privacy' },
    { label: d.footer.terms,   href: 'terms' },
    { label: d.footer.contact, href: 'contact' },
  ];
  return (
    <footer style={{ borderTop: '1px solid #0a0a0a', marginTop: 120 }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '32px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{ fontSize: 13, fontWeight: 900, letterSpacing: '-0.03em' }}>
          INSTADOWN
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {items.map(({ label, href }) => (
            <Link key={href} href={`/${locale}/${href}`} style={{
              fontSize: 12, color: '#888', textDecoration: 'none',
              letterSpacing: '0.04em', fontWeight: 600,
            }}>
              {label}
            </Link>
          ))}
        </div>
        <span style={{ fontSize: 11, color: '#888' }}>
          {d.footer.disclaimer}
        </span>
      </div>
    </footer>
  );
}
