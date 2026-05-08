import Link from 'next/link';

const TOOLS = [
  { label: 'Video',      href: '/video' },
  { label: 'Photo',      href: '/photo' },
  { label: 'Reels',      href: '/reels' },
  { label: 'Story',      href: '/story' },
  { label: 'Highlights', href: '/highlights' },
  { label: 'DP',         href: '/dp' },
  { label: 'Audio',      href: '/audio' },
  { label: 'Private',    href: '/private' },
];

export default function Header() {
  return (
    <header style={{ borderBottom: '1px solid #0a0a0a' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontWeight: 900, fontSize: 18, letterSpacing: '-0.04em',
          textDecoration: 'none',
          color: '#0a0a0a',
        }}>
          INSTADOWN
        </Link>

        {/* Nav */}
        <nav style={{ display: 'flex', gap: 0 }}>
          {TOOLS.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
              textDecoration: 'none',
              padding: '0 14px', height: 52, display: 'flex', alignItems: 'center',
              borderLeft: '1px solid #d4d4d4',
            }}
            className="invert-hover"
            >
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
