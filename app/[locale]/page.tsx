import Link from 'next/link';
import DownloadInput from '@/components/DownloadInput';
import { isLocale, DEFAULT_LOCALE, type Locale } from '@/lib/i18n';
import { getDict } from '@/lib/dict';

const TOOLS = [
  { num: '01', label: 'VIDEO',      slug: 'video' },
  { num: '02', label: 'PHOTO',      slug: 'photo' },
  { num: '03', label: 'REELS',      slug: 'reels' },
  { num: '04', label: 'STORY',      slug: 'story' },
  { num: '05', label: 'HIGHLIGHTS', slug: 'highlights' },
  { num: '06', label: 'DP',         slug: 'dp' },
  { num: '07', label: 'AUDIO',      slug: 'audio' },
  { num: '08', label: 'PRIVATE',    slug: 'private' },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const d = getDict(locale);
  // Marquee intentionally stays English across all locales
  const marquee = '★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ';
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section style={{
        maxWidth: 1200, margin: '0 auto', padding: '80px 24px 0',
      }}>
        {/* Big headline — user fills in */}
        <div style={{
          fontSize: 'clamp(52px, 9vw, 120px)',
          fontWeight: 900,
          letterSpacing: '-0.045em',
          lineHeight: 0.92,
          marginBottom: 48,
        }}>
          <span style={{ display: 'block' }}>
            <span style={{
              fontSize: '1em',
              display: 'inline-block',
              transform: 'translateY(-0.08em)',
              marginRight: '0.08em',
              lineHeight: 1,
              WebkitTextStroke: '2px #0a0a0a',
              color: 'transparent',
            }}>[</span>
            INSTAGRAM
          </span>
          <span style={{ display: 'block', WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>
            <span style={{ WebkitTextStroke: '0', color: '#0a0a0a' }}>D</span>{'OWN'}<span style={{ WebkitTextStroke: '0', color: '#0a0a0a' }}>L</span>{'OADER'}<span style={{
              fontSize: '1em',
              display: 'inline-block',
              transform: 'translateY(-0.08em)',
              marginLeft: '0.08em',
              lineHeight: 1,
              WebkitTextStroke: '0',
              color: '#0a0a0a',
            }}>]</span>
          </span>
        </div>

        {/* Download input */}
        <div style={{ maxWidth: 720, marginBottom: 16 }}>
          <DownloadInput />
        </div>
        <p style={{ fontSize: 11, color: '#888', letterSpacing: '0.05em', fontWeight: 600 }}>
          {d.tagline}
        </p>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────── */}
      <div style={{
        borderTop: '1px solid #0a0a0a',
        borderBottom: '1px solid #0a0a0a',
        margin: '72px 0 0',
        padding: '12px 0',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}>
        <div className="marquee-track">
          {marquee.repeat(2).split('').map((ch, i) => (
            <span key={i} style={{
              color: '#fafafa',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.12em',
            }}>{ch}</span>
          ))}
        </div>
      </div>

      {/* ─── TOOLS GRID ───────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 0' }}>
        <div style={{ borderBottom: '1px solid #0a0a0a', padding: '40px 24px 20px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888' }}>
            {d.ui.allTools}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {TOOLS.map(({ num, label, slug }, i) => (
            <Link key={slug} href={`/${locale}/${slug}`} style={{
              textDecoration: 'none',
              borderRight: i % 4 !== 3 ? '1px solid #d4d4d4' : 'none',
              borderBottom: i < 4 ? '1px solid #d4d4d4' : 'none',
              padding: '32px 24px',
              display: 'flex', flexDirection: 'column', gap: 12,
              minHeight: 160,
            }}
            className="invert-hover"
            >
              <span className="tool-num">{num}</span>
              <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.03em' }}>{label}</span>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', marginTop: 'auto' }}>
                {d.ui.useFree}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section style={{
        maxWidth: 1200, margin: '0 auto', padding: '80px 24px',
        borderTop: '1px solid #0a0a0a',
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 40 }}>
          {d.ui.whyUseThis}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {d.home.features.map(({ title, body }, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderLeft: i > 0 ? '1px solid #d4d4d4' : 'none',
            }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{['①','②','③'][i]}</div>
              <p style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>{title}</p>
              <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────── */}
      <section style={{
        borderTop: '1px solid #0a0a0a', borderBottom: '1px solid #0a0a0a',
        background: '#0a0a0a', color: '#fafafa',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 40 }}>
            {d.ui.howItWorks}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {d.home.steps.map(({ title, body }, i) => (
              <div key={i} style={{
                padding: '40px 32px',
                borderLeft: i > 0 ? '1px solid #333' : 'none',
              }}>
                <p style={{ fontSize: 48, fontWeight: 900, color: '#333', letterSpacing: '-0.04em', marginBottom: 20 }}>{['01','02','03'][i]}</p>
                <p style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 12 }}>{title}</p>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 40 }}>
          {d.ui.faq}
        </p>
        <div>
          {d.home.faq.map(({ q, a }, i) => (
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
        </div>
      </section>
    </>
  );
}
