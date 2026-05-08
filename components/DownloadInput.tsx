'use client';

import { useState } from 'react';

export default function DownloadInput({ placeholder = 'Paste Instagram URL here...' }: { placeholder?: string }) {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setStatus('loading');
    // TODO: connect API
    setTimeout(() => setStatus('idle'), 1200);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 0 }}>
      <input
        className="url-input"
        type="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder={placeholder}
        style={{ flex: 1 }}
      />
      <button
        type="submit"
        className="dl-btn"
        disabled={status === 'loading'}
        style={{ opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? '···' : 'DOWNLOAD'}
      </button>
    </form>
  );
}
