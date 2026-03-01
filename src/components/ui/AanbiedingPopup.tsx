import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'aanbieding-popup-v2'
const DELAY_MS = 3_000
const DISMISS_HOURS = 24

export function AanbiedingPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const until = localStorage.getItem(STORAGE_KEY)
    if (until && Date.now() < Number(until)) return
    const t = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    const until = Date.now() + DISMISS_HOURS * 60 * 60 * 1000
    localStorage.setItem(STORAGE_KEY, String(until))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Aanbieding"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(4px)',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
    >
      <div
        style={{
          position: 'relative',
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-strong)',
          borderTop: '4px solid var(--accent-green)',
          maxWidth: '420px',
          width: '100%',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* Sluit-knop */}
        <button
          onClick={dismiss}
          aria-label="Sluiten"
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-neutral-700)',
            padding: '0.25rem',
            lineHeight: 1,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Badge */}
        <span style={{
          display: 'inline-block',
          background: 'rgba(45,106,79,0.1)',
          color: 'var(--accent-green)',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          borderRadius: '999px',
          padding: '0.25rem 0.875rem',
          marginBottom: '1rem',
        }}>
          Beperkte aanbieding
        </span>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--color-neutral-900)',
          lineHeight: 1.2,
          marginBottom: '0.75rem',
        }}>
          Lokale SEO + SEO Website
        </h2>

        <p style={{
          fontSize: '1rem',
          color: 'var(--color-neutral-700)',
          lineHeight: 1.6,
          marginBottom: '0.5rem',
        }}>
          Samen voor slechts
        </p>

        <p style={{
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'var(--accent-green)',
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
        }}>
          € 2.999 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}>excl. btw</span>
        </p>

        <Link
          to="/aanbieding"
          className="btn-primary btn-lg"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={dismiss}
        >
          Bekijk de aanbieding
        </Link>

        <button
          onClick={dismiss}
          style={{
            marginTop: '0.875rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.875rem',
            color: 'var(--color-neutral-700)',
            textDecoration: 'underline',
          }}
        >
          Nee, bedankt
        </button>
      </div>
    </div>
  )
}
