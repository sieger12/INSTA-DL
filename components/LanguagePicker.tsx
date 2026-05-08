'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from '@/lib/i18n';
import { Globe, ChevronDown } from 'lucide-react';

interface Props {
  locale: Locale;
}

export default function LanguagePicker({ locale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click / Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  function switchTo(target: Locale) {
    const segments = pathname.split('/');
    const first = segments[1];
    if (first && isLocale(first)) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    const next = segments.join('/') || `/${target}`;
    router.push(next);
    setOpen(false);
  }

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 10px',
          background: 'transparent',
          border: '1px solid #d4d4d4',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.04em',
          cursor: 'pointer',
          color: '#0a0a0a',
        }}
      >
        <Globe size={14} aria-hidden />
        <span>{LOCALE_LABELS[locale]}</span>
        <ChevronDown size={14} aria-hidden style={{ transform: open ? 'rotate(180deg)' : 'none' }} />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Languages"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            zIndex: 50,
            background: '#ffffff',
            border: '1px solid #0a0a0a',
            boxShadow: '0 6px 24px rgba(0,0,0,0.08)',
            padding: 8,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: 28,
            rowGap: 2,
            minWidth: 280,
            maxHeight: '70vh',
            overflowY: 'auto',
          }}
        >
          {LOCALES.map((code) => {
            const active = code === locale;
            return (
              <button
                key={code}
                type="button"
                onClick={() => switchTo(code)}
                role="option"
                aria-selected={active}
                style={{
                  background: 'transparent',
                  border: 0,
                  textAlign: 'start',
                  cursor: 'pointer',
                  padding: '8px 10px',
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  color: '#0a0a0a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                  fontFamily: 'inherit',
                }}
              >
                <span>{LOCALE_LABELS[code]}</span>
                {active && (
                  <span aria-hidden style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#1d4ed8',
                  }} />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
