import React from 'react';

interface Props {
  topLine: string;
  bottomLine: string;
  /**
   * Indices in bottomLine to render solid (the "DL" treatment from home).
   * When omitted, every D and L in bottomLine is filled, matching INSTAGRAM
   * DOWNLOADER on the home page.
   */
  highlightIndices?: number[];
  /** Slightly smaller font for tool pages. */
  compact?: boolean;
}

const BRACKET_BASE: React.CSSProperties = {
  fontSize: '1em',
  display: 'inline-block',
  transform: 'translateY(-0.08em)',
  lineHeight: 1,
};

function buildOutline(text: string, highlights: Set<number>) {
  const out: React.ReactNode[] = [];
  let buffer = '';
  let key = 0;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (highlights.has(i)) {
      if (buffer) { out.push(buffer); buffer = ''; }
      out.push(
        <span key={`h-${key++}`} style={{ WebkitTextStroke: '0', color: '#0a0a0a' }}>{ch}</span>,
      );
    } else {
      buffer += ch;
    }
  }
  if (buffer) out.push(buffer);
  return out;
}

export default function BigHeadline({ topLine, bottomLine, highlightIndices, compact }: Props) {
  // Auto-pick D and L in bottomLine if no explicit indices are provided
  const auto: number[] = [];
  if (!highlightIndices) {
    [...bottomLine].forEach((c, i) => {
      if (c === 'D' || c === 'L') auto.push(i);
    });
  }
  const highlights = new Set(highlightIndices ?? auto);

  const fontSize = compact
    ? 'clamp(40px, 7.5vw, 100px)'
    : 'clamp(52px, 9vw, 120px)';

  return (
    <h1 style={{
      fontSize,
      fontWeight: 900,
      letterSpacing: '-0.045em',
      lineHeight: 0.92,
      margin: 0,
    }}>
      <span style={{ display: 'block' }}>
        <span style={{
          ...BRACKET_BASE,
          marginRight: '0.08em',
          WebkitTextStroke: '2px #0a0a0a',
          color: 'transparent',
        }}>[</span>
        {topLine}
      </span>
      <span style={{ display: 'block', WebkitTextStroke: '2px #0a0a0a', color: 'transparent' }}>
        {buildOutline(bottomLine, highlights)}
        <span style={{
          ...BRACKET_BASE,
          marginLeft: '0.08em',
          WebkitTextStroke: '0',
          color: '#0a0a0a',
        }}>]</span>
      </span>
    </h1>
  );
}
