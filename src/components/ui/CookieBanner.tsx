import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent-v1'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookiemelding"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9998,
        width: 'calc(100% - 2rem)',
        maxWidth: '640px',
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-strong)',
        border: '1px solid var(--color-neutral-200)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        gap: '1.25rem',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {/* Cookie icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent-green)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={{ flexShrink: 0 }}
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
        <path d="M8.5 8.5v.01" />
        <path d="M16 15.5v.01" />
        <path d="M12 12v.01" />
      </svg>

      {/* Text */}
      <div style={{ flex: 1, minWidth: '180px' }}>
        <p style={{
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'var(--color-neutral-900)',
          marginBottom: '0.2rem',
        }}>
          Wij gebruiken cookies
        </p>
        <p style={{
          fontSize: '0.8125rem',
          color: 'var(--color-neutral-700)',
          lineHeight: 1.5,
        }}>
          We gebruiken cookies om je ervaring te verbeteren en ons verkeer te analyseren.{' '}
          <a href="/privacy" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>
            Meer informatie
          </a>
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
        <button
          onClick={dismiss}
          style={{
            background: 'none',
            border: '1px solid var(--color-neutral-200)',
            borderRadius: 'var(--radius-md)',
            padding: '0.4rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-neutral-700)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Alleen noodzakelijk
        </button>
        <button
          onClick={dismiss}
          style={{
            background: 'var(--accent-green)',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            padding: '0.4rem 1rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#fff',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Alles accepteren
        </button>
      </div>
    </div>
  )
}
