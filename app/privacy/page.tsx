import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What INSTADOWN does and does not log. Plain English, no fine-print games.',
};

const SECTIONS = [
  {
    h2: 'Short version',
    body: "I run INSTADOWN as a stateless tool. You paste a URL, the server fetches a public file from Instagram, the file goes to your browser. Nothing about you is saved beyond a 14-day server log used for spotting spam. No account, no profile of your habits, no email list.\n\nIf you stop using the site tomorrow there is nothing left of you here a month later.",
  },
  {
    h2: 'Server logs',
    body: "Every web server keeps a log. Mine writes one line per request: IP, timestamp, the path you hit, the status code. That line lives on the server for 14 days, then a cron job overwrites it. The reason is dumb but real — when somebody scripts a thousand requests a minute against a single endpoint, I need to see the IP to block it. Without that I can not run the site.\n\nThe logs are not joined to anything. They do not flow into Google Analytics, they do not get sold, they do not turn into shadow profiles. I look at them when something is on fire and ignore them otherwise.",
  },
  {
    h2: 'Analytics',
    body: 'Vercel Analytics is on, in cookie-less mode. It counts page views and gives me rough country-level geography so I can tell whether the German pages are doing anything yet. No cross-site tracking, no fingerprinting, no third-party ad SDK.\n\nIf I ever turn on Google AdSense to keep the lights on, this page is where the change shows up first. I am not going to slip ad cookies in by patch note.',
  },
  {
    h2: 'What Instagram sees',
    body: "The fetch goes from my server to Instagram with no Instagram session attached. From their side it is a logged-out reader hitting a public endpoint, the same endpoint anyone gets when they open instagram.com in a private window. The owner of the account you looked up gets nothing — no notification, no name on a viewer list, nothing.\n\nFor the long answer on how anonymous viewing actually works, see the [Story page](/story). It explains the mechanism in more detail than fits here.",
  },
  {
    h2: 'Children',
    body: "Instagram is thirteen-and-up. So is INSTADOWN. I do not knowingly collect data from anyone younger. If you are a parent and you find out your kid was using the site, send me an email and I will help with whatever cleanup is possible — usually that means nothing, because I do not have a profile to delete, but I will look.",
  },
  {
    h2: 'How to reach me',
    body: 'Removal requests, DMCA, privacy questions, anything that needs a human reply — write to [hello@insta-dl.com](mailto:hello@insta-dl.com). It is not a ticketing system. I read it.',
  },
];

function renderBody(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const [, label, href] = match;
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      parts.push(<a key={key++} href={href} style={{ color: '#0a0a0a', textDecoration: 'underline' }}>{label}</a>);
    } else {
      parts.push(<Link key={key++} href={href} style={{ color: '#0a0a0a', textDecoration: 'underline' }}>{label}</Link>);
    }
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export default function PrivacyPage() {
  return (
    <article style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
      <header style={{ borderBottom: '1px solid #0a0a0a', paddingBottom: 28 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 16 }}>
          — PRIVACY
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          Privacy
        </h1>
        <p style={{ fontSize: 12, color: '#888', marginTop: 18, letterSpacing: '0.04em' }}>
          LAST REVIEWED 2026-05-08
        </p>
      </header>

      {SECTIONS.map(({ h2, body }, i) => (
        <section key={i} style={{ borderBottom: '1px solid #d4d4d4', padding: '36px 0' }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 14 }}>{h2}</h2>
          {body.split('\n\n').map((para, j) => (
            <p key={j} style={{ fontSize: 15, color: '#333', lineHeight: 1.8, marginBottom: 14 }}>
              {renderBody(para)}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
