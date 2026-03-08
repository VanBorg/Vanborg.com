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
      className="cookie-banner"
    >
      <div className="cookie-banner__row">
        <svg
          className="cookie-banner__icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent-green)"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
          <path d="M8.5 8.5v.01" />
          <path d="M16 15.5v.01" />
          <path d="M12 12v.01" />
        </svg>
        <div className="cookie-banner__text">
          <p className="cookie-banner__title">Wij gebruiken cookies</p>
          <p className="cookie-banner__desc">
            We gebruiken cookies om je ervaring te verbeteren en ons verkeer te analyseren.{' '}
            <a href="/privacy" style={{ color: 'var(--accent-green)', textDecoration: 'underline' }}>
              Meer informatie
            </a>
          </p>
        </div>
      </div>
      <div className="cookie-banner__actions">
        <button type="button" onClick={dismiss} className="cookie-banner__btn cookie-banner__btn--secondary">
          Alleen noodzakelijk
        </button>
        <button type="button" onClick={dismiss} className="cookie-banner__btn cookie-banner__btn--primary">
          Alles accepteren
        </button>
      </div>
    </div>
  )
}
