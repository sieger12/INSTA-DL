import Link from 'next/link';
import DownloadInput from './DownloadInput';
import Bracketed from './Bracketed';

const ALL_TOOLS = [
  { label: 'Video',      href: '/video' },
  { label: 'Photo',      href: '/photo' },
  { label: 'Reels',      href: '/reels' },
  { label: 'Story',      href: '/story' },
  { label: 'Highlights', href: '/highlights' },
  { label: 'DP',         href: '/dp' },
  { label: 'Audio',      href: '/audio' },
  { label: 'Private',    href: '/private' },
];

interface Section { h2: string; body: string; }
interface FAQItem  { q: string; a: string; }

interface Props {
  num:       string;
  title:     string;
  subtitle?: string;
  sections:  Section[];
  faq:       FAQItem[];
  currentHref: string;
}

export default function ToolPageLayout({ num, title, subtitle, sections, faq, currentHref }: Props) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ borderBottom: '1px solid #0a0a0a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 48px' }}>
          {/* Tool number + title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, marginBottom: 40 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
              color: '#888', paddingTop: 10,
            }}>{num}</span>
            <h1 style={{
              fontSize: 'clamp(40px, 7vw, 96px)',
              fontWeight: 900, letterSpacing: '-0.045em',
              lineHeight: 0.9,
              whiteSpace: 'pre-line',
              margin: 0,
            }}><Bracketed text={title} /></h1>
          </div>

          {subtitle && (
            <p style={{ fontSize: 16, color: '#555', maxWidth: 560, marginBottom: 36, lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}

          {/* Input */}
          <div style={{ maxWidth: 720 }}>
            <DownloadInput />
          </div>

          <p style={{ fontSize: 11, color: '#888', marginTop: 12, letterSpacing: '0.05em', fontWeight: 600 }}>
            FREE · NO LOGIN · NO WATERMARK
          </p>
        </div>
      </section>

      {/* ─── CONTENT SECTIONS ─── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {sections.map(({ h2, body }, i) => (
          <section key={i} style={{
            borderBottom: '1px solid #d4d4d4',
            padding: '56px 0',
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: 48,
          }}>
            <h2 style={{
              fontSize: 18, fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.3,
            }}>{h2}</h2>
            <div>
              {body.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: 14, color: '#444', lineHeight: 1.8, marginBottom: 16 }}>
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ─── FAQ ─── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 40 }}>
          — FAQ
        </p>
        {faq.map(({ q, a }, i) => (
          <div key={i} style={{
            borderTop: '1px solid #d4d4d4',
            padding: '24px 0',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}>
            <p style={{ fontSize: 15, fontWeight: 700 }}>{q}</p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>{a}</p>
          </div>
        ))}
        <div style={{ borderTop: '1px solid #d4d4d4' }} />
      </section>

      {/* ─── OTHER TOOLS ─── */}
      <section style={{
        borderTop: '1px solid #0a0a0a',
        background: '#0a0a0a',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#555', marginBottom: 24 }}>
            — OTHER TOOLS
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
            {ALL_TOOLS.filter(t => t.href !== currentHref).map(({ label, href }) => (
              <Link key={href} href={href} style={{
                textDecoration: 'none',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
                padding: '10px 20px',
                border: '1px solid #333',
                marginRight: -1, marginBottom: -1,
              }}
              className="chip-invert"
              >
                {label.toUpperCase()} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
