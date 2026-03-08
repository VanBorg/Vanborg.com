import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'aanbieding-popup-v2'
const DELAY_MS = 7_000
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
      className="aanbieding-popup-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss() }}
    >
      <div className="aanbieding-popup-card">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Sluiten"
          className="aanbieding-popup-close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        <span className="aanbieding-popup-badge">Beperkte aanbieding</span>

        <h2 className="aanbieding-popup-title">Lokale SEO + SEO Website</h2>

        <p className="aanbieding-popup-lead">Samen voor slechts</p>

        <p className="aanbieding-popup-price">
          € 2.999 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}>excl. btw</span>
        </p>

        <Link
          to="/aanbieding"
          className="btn-primary btn-lg aanbieding-popup-cta"
          onClick={dismiss}
        >
          Bekijk de aanbieding
        </Link>

        <button type="button" onClick={dismiss} className="aanbieding-popup-dismiss">
          Nee, bedankt
        </button>
      </div>
    </div>
  )
}
