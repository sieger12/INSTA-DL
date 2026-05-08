import Link from 'next/link';

export default function Footer() {
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
          {[
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms',   href: '/terms' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{
              fontSize: 12, color: '#888', textDecoration: 'none',
              letterSpacing: '0.04em', fontWeight: 600,
            }}>
              {label.toUpperCase()}
            </Link>
          ))}
        </div>
        <span style={{ fontSize: 11, color: '#888' }}>
          Not affiliated with Meta or Instagram.
        </span>
      </div>
    </footer>
  );
}
