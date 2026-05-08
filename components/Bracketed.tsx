import React from 'react';

const BASE: React.CSSProperties = {
  fontWeight: 'inherit',
  fontSize: '1em',
  display: 'inline-block',
  transform: 'translateY(-0.08em)',
  lineHeight: 1,
};

interface Props {
  text: string;
}

export default function Bracketed({ text }: Props) {
  const m = text.match(/^\[([\s\S]+)\]$/);
  if (!m) return <>{text}</>;
  return (
    <>
      <span style={{ ...BASE, marginRight: '0.08em' }}>[</span>
      {m[1]}
      <span style={{ ...BASE, marginLeft: '0.08em' }}>]</span>
    </>
  );
}
