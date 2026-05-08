import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Email INSTADOWN for removal requests, DMCA notices, bug reports, or anything else that needs a human.',
};

const REASONS = [
  {
    title: 'Removal request',
    body: "You posted something on Instagram, somebody is reading it through this tool, and you want it stopped. Send me the username or post URL and a one-line reason. I block the handle within a working day. I do not ask for ID or paperwork — the request being credible is enough.",
  },
  {
    title: 'DMCA notice',
    body: "If a copyright holder has a formal takedown to file, the same email works. Include the work, the infringing URL on this site, and your contact info. Standard DMCA fields — I respond inside the legal window.",
  },
  {
    title: 'Bug report',
    body: "Something broke for a specific Instagram URL? Paste the URL, the page you tried to use, and what you saw. Screenshots are optional. The most useful thing is the exact handle or post link, so I can reproduce.",
  },
  {
    title: 'Anything else',
    body: "Press, partnership, weird question, somebody copied the design — write anyway. Worst case I do not reply for a week, best case it is fast.",
  },
];

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <article style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
      <header style={{ borderBottom: '1px solid #0a0a0a', paddingBottom: 28 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 16 }}>
          — CONTACT
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          Get in touch
        </h1>
      </header>

      <section style={{ borderBottom: '1px solid #d4d4d4', padding: '36px 0' }}>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, marginBottom: 14 }}>
          One inbox, one person reading it.
        </p>
        <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8, marginBottom: 14 }}>
          <a href="mailto:hello@insta-dl.com" style={{
            fontSize: 'clamp(28px, 4.5vw, 44px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#0a0a0a',
            textDecoration: 'underline',
            textUnderlineOffset: '0.12em',
            textDecorationThickness: '2px',
          }}>
            hello@insta-dl.com
          </a>
        </p>
        <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7 }}>
          Replies usually go out within a couple of working days. No autoresponder, no ticket queue. Sometimes weekends are quiet, sometimes not.
        </p>
      </section>

      {REASONS.map(({ title, body }, i) => (
        <section key={i} style={{ borderBottom: '1px solid #d4d4d4', padding: '36px 0' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 14 }}>{title}</h2>
          <p style={{ fontSize: 15, color: '#333', lineHeight: 1.8 }}>{body}</p>
        </section>
      ))}

      <section style={{ padding: '36px 0' }}>
        <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7 }}>
          Looking for what the site does or does not log? See the <Link href={`/${locale}/privacy`} style={{ color: '#0a0a0a', textDecoration: 'underline' }}>Privacy</Link> page. For the rules of the road, the <Link href={`/${locale}/terms`} style={{ color: '#0a0a0a', textDecoration: 'underline' }}>Terms</Link>.
        </p>
      </section>
    </article>
  );
}
