import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Plain-English terms for using INSTADOWN. What is allowed, what is not, what I will not promise.',
};

const SECTIONS = [
  {
    h2: 'What this site is',
    body: "INSTADOWN is a tool that reads public Instagram URLs and hands you back the file. There is no user account, no paid tier, no ongoing relationship between you and the site after you close the tab. By using it you agree to the rules below — they are short and they are written by a person, not a lawyer.",
  },
  {
    h2: 'Personal use only',
    body: "Use the tool for your own viewing, your own archiving, your own reference. Sharing what you save with friends is fine. Reposting somebody else's content as if it were yours is not, and the responsibility for that lands on you, not on me.\n\nDo not run scripts against this site. The endpoints are not built for automated traffic and the IP block is automatic and unforgiving. If you have a use case that needs that kind of throughput, write to me first instead of triggering rate limiting.",
  },
  {
    h2: 'No promises about uptime or accuracy',
    body: "Instagram changes things. Endpoints get rotated, response shapes get reshuffled, error codes get added without notice. When that happens parts of this site break for hours or days until I patch them. There is no SLA, no refund (the site is free), no support contract. If something stops working, the link in the footer goes to a real inbox and I will look.\n\nThe public files I pass through come from Instagram's CDN as-is. If they are wrong, missing, or different from what was uploaded, that is upstream of this site and there is nothing I can do about it.",
  },
  {
    h2: 'Whose content is whose',
    body: "Every post, story, Reel, and Highlight that this tool surfaces was uploaded by somebody else. They own it. Saving a copy for yourself does not transfer ownership, and reposting it commercially without their consent can land you in a copyright fight.\n\nIf you are an account owner and you do not want your content read here, send me a removal request. The contact link in the footer goes to my inbox.",
  },
  {
    h2: 'Things I will not pretend to do',
    body: "I will not say I can pull from private accounts. I can not. The [Private accounts](/private) page goes into the long version. Anyone telling you otherwise is selling something.\n\nI will not pretend the site has zero downtime, will not pretend the data is real-time perfect, will not promise any specific format will be supported next year. The honest answer is the floor, not the ceiling.",
  },
  {
    h2: 'Changes to these terms',
    body: 'If something here changes, the version on this page is the current one. If a change is significant — anything that affects what data is logged or who can use the tool — I will note it on the page and bump the date below.',
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

export default function TermsPage() {
  return (
    <article style={{ maxWidth: 760, margin: '0 auto', padding: '64px 24px' }}>
      <header style={{ borderBottom: '1px solid #0a0a0a', paddingBottom: 28 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 16 }}>
          — TERMS
        </p>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
          Terms of use
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
