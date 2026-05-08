import Link from 'next/link';
import DownloadInput from '@/components/DownloadInput';

const TOOLS = [
  { num: '01', label: 'VIDEO',      href: '/video',      desc: '' },
  { num: '02', label: 'PHOTO',      href: '/photo',      desc: '' },
  { num: '03', label: 'REELS',      href: '/reels',      desc: '' },
  { num: '04', label: 'STORY',      href: '/story',      desc: '' },
  { num: '05', label: 'HIGHLIGHTS', href: '/highlights', desc: '' },
  { num: '06', label: 'DP',         href: '/dp',         desc: '' },
  { num: '07', label: 'AUDIO',      href: '/audio',      desc: '' },
  { num: '08', label: 'PRIVATE',    href: '/private',    desc: '' },
];

const MARQUEE_TEXT = '★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ';

export default function HomePage() {
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
          STORIES · REELS · PHOTOS · HIGHLIGHTS · DP · AUDIO — ONE PASTE, NO LOGIN
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
          {MARQUEE_TEXT.repeat(2).split('').map((ch, i) => (
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
            — ALL TOOLS
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}>
          {TOOLS.map(({ num, label, href, desc }, i) => (
            <Link key={href} href={href} style={{
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
              {desc && <span style={{ fontSize: 12, color: '#888', marginTop: 'auto' }}>{desc}</span>}
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', marginTop: 'auto' }}>
                USE FREE →
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
          — WHY USE THIS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
          {[
            {
              n: '①',
              title: 'No login, no app',
              body: 'Paste a public URL or username, hit save. Nothing to install, no Instagram credentials handed over, no follower graph polluted by your account checking competitors.',
            },
            {
              n: '②',
              title: 'Original quality, no watermark',
              body: 'Files come from Instagram\'s CDN as they were uploaded. MP4 video at source resolution, JPG photos at the public 1080px cap, MP3 audio at source bitrate. No re-encoding, no watermark glued on.',
            },
            {
              n: '③',
              title: 'Every post type covered',
              body: 'Reels, Stories, Highlights, photo carousels, profile pictures, IGTV, live replays, audio rips. One tool, eight focused pages, the same anonymous fetch behind each.',
            },
          ].map(({ n, title, body }, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              borderLeft: i > 0 ? '1px solid #d4d4d4' : 'none',
            }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{n}</div>
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
            — HOW IT WORKS
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              {
                step: '01',
                title: 'Paste the URL',
                body: 'Open the post or profile on Instagram, copy the link or the @username. Paste it into the field on whichever tool page matches what you want — Reels, Stories, Photos, Highlights, DP, Video, or Audio.',
              },
              {
                step: '02',
                title: 'Pick what to save',
                body: 'The page lists every available file in upload order. For carousels, each frame shows separately with the position. For Reels, you choose between full MP4 and audio-only MP3.',
              },
              {
                step: '03',
                title: 'Save to device',
                body: 'Hit save. The file lands in your default download location — Files on iOS, Downloads on Android, the regular browser folder on desktop. No account record, no follow-up.',
              },
            ].map(({ step, title, body }, i) => (
              <div key={step} style={{
                padding: '40px 32px',
                borderLeft: i > 0 ? '1px solid #333' : 'none',
              }}>
                <p style={{ fontSize: 48, fontWeight: 900, color: '#333', letterSpacing: '-0.04em', marginBottom: 20 }}>{step}</p>
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
          — FAQ
        </p>
        <div>
          {[
            {
              q: 'Do I need an Instagram account?',
              a: "No. The username is enough. The fetch runs through this site's servers, not your Instagram session, so no login is exchanged and no follow request goes out.",
            },
            {
              q: 'Is the insta stories viewer anonymous?',
              a: "Yes, for public accounts. The owner's viewer list never gets your username because the request doesn't carry one. Private accounts are off-limits to any third-party tool — including this one — by design.",
            },
            {
              q: 'What about download limits or watermarks?',
              a: "No daily cap, no premium tier, no watermark stamped on what you save. The MP4 or JPG is the original CDN file, exactly as Instagram serves it. We don't re-encode, we don't compress, we don't add anything.",
            },
            {
              q: 'Why are there separate pages for Reels, Stories, Photos, Highlights?',
              a: "Each format has its own quirks — Reels max out at 90 seconds and have audio-only export, Stories live for 24 hours, Highlights are the pinned ones that survive past expiry, photos can be carousels of up to ten images. Splitting the pages keeps the right options visible for each. Same backend behind all of them.",
            },
          ].map(({ q, a }, i) => (
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
