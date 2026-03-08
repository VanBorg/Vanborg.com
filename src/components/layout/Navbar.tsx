import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from '../ui/Container'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useSmoothNav } from '../../hooks/useSmoothNav'

/** Show top bar when at top of page (scrollY below this). Generous zone to avoid jitter. */
const TOP_BAR_AT_TOP_THRESHOLD = 120
/** Min scroll delta to consider direction (avoid jitter when scrolling near threshold). */
const SCROLL_DIRECTION_THRESHOLD = 18

const navLinks = [
  { label: 'Ranking', href: '/ranking' },
  { label: 'Google Ads', href: '/ads' },
  { label: 'Websites', href: '/website' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Werkgebieden', href: '/locatie' },
  { label: 'Aanbieding', href: '/aanbieding', badge: 'Tijdelijk' },
  { label: 'Vacatures', href: '/jobs' },
]

const topBarEmail = 'Info@vanborglimited.com'
const topBarPhone = '+31 644732266'
const topBarTelHref = 'tel:+31644732266'
/** Gmail compose in new tab – meest gebruikte webmail, opent met Aan: vooringevuld. */
const topBarMailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(topBarEmail)}`

/** Open tel: by simulating a link click so the OS opens the dialer. */
function openProtocolLink(href: string) {
  const a = document.createElement('a')
  a.href = href
  a.rel = 'noopener noreferrer'
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

/** Google Business Profile / Google profile share link – gebruik deze overal waar naar het Google-profiel gelinkt wordt */
export const GOOGLE_PROFILE_URL = 'https://share.google/Eeexwb2nlD1chcOAo'

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/VanBorgLimited', ariaLabel: 'Van Borg op Twitter' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/van-borg/', ariaLabel: 'Van Borg op LinkedIn' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61580148003782', ariaLabel: 'Van Borg op Facebook' },
  { name: 'Google', href: GOOGLE_PROFILE_URL, ariaLabel: 'Van Borg op Google' },
]

const iconSize = 20
const topBarIconSize = 16

function IconClock() {
  return (
    <svg width={topBarIconSize} height={topBarIconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width={topBarIconSize} height={topBarIconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width={topBarIconSize} height={topBarIconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function IconGoogle() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

const socialIcons: Record<string, () => JSX.Element> = {
  Twitter: IconX,
  LinkedIn: IconLinkedIn,
  Facebook: IconFacebook,
  Google: IconGoogle,
}

function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, ariaLabel }) => {
        const Icon = socialIcons[name]
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 rounded p-1 min-w-[44px] min-h-[44px] flex items-center justify-center md:min-w-[36px] md:min-h-[36px]"
          >
            {Icon && <Icon />}
          </a>
        )
      })}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [topBarVisible, setTopBarVisible] = useState(true)
  const { pathname } = useLocation()
  const handleNavClick = useSmoothNav()
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const topBarVisibleRef = useRef(true)
  const lastScrollYRef = useRef(0)

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false)
  }, [])

  useEffect(() => {
    let ticking = false
    let rafId: number | null = null

    const updateTopBar = () => {
      ticking = false
      const scrollY = window.scrollY
      const lastScrollY = lastScrollYRef.current
      const delta = scrollY - lastScrollY
      lastScrollYRef.current = scrollY

      let nextVisible = topBarVisibleRef.current
      if (scrollY <= TOP_BAR_AT_TOP_THRESHOLD) {
        nextVisible = true
      } else if (Math.abs(delta) >= SCROLL_DIRECTION_THRESHOLD) {
        if (delta > 0) {
          nextVisible = false
        } else {
          nextVisible = true
        }
      }

      if (topBarVisibleRef.current !== nextVisible) {
        topBarVisibleRef.current = nextVisible
        setTopBarVisible(nextVisible)
      }
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafId = window.requestAnimationFrame(updateTopBar)
    }

    lastScrollYRef.current = window.scrollY
    updateTopBar()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId != null) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  useEffect(() => {
    closeMobileMenu()
  }, [pathname, closeMobileMenu])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) closeMobileMenu()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [closeMobileMenu])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    firstFocusable?.focus()
  }, [mobileOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!mobileOpen) return
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMobileMenu()
        mobileToggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || !mobileMenuRef.current) return

      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen, closeMobileMenu])

  return (
    <div className="navbar-shell sticky top-0 z-[200] w-full bg-[var(--bg-backdrop)] backdrop-blur-xl">
      <div className={`top-bar ${!topBarVisible ? 'top-bar--collapsed' : ''}`}>
        <Container>
          <div className="top-bar__inner">
            <div className="top-bar__contact">
              <span className="top-bar__item">
                <IconClock />
                <span>24/7 Bereikbaar</span>
              </span>
              <a
                href={topBarMailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="top-bar__item top-bar__link"
                onClick={(e) => e.stopPropagation()}
              >
                <IconMail />
                <span>{topBarEmail}</span>
              </a>
              <a
                href={topBarTelHref}
                className="top-bar__item top-bar__link"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  openProtocolLink(topBarTelHref)
                }}
              >
                <IconPhone />
                <span>{topBarPhone}</span>
              </a>
            </div>
            <SocialLinks className="top-bar__socials" />
          </div>
        </Container>
      </div>
      <header className="w-full border-b border-[var(--border-color)]/50 bg-[var(--bg-backdrop)] backdrop-blur-xl">
      <Container>
        <nav className="relative flex min-h-[4rem] items-center justify-between">
          <a href="/" className="nav-logo min-w-[100px] text-2xl text-[var(--text-primary)] md:min-w-[120px] md:text-3xl" onClick={(e) => handleNavClick(e, '/')}>
            <span className="nav-logo__line">Van</span>
            <span className="nav-logo__line nav-logo__line--2">Borg</span>
          </a>

          {/* Desktop: nav links op 1 regel, centraal in de navbar */}
            <div className="nav-links-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const hasBadge = 'badge' in link && link.badge
                return (
                  <div key={link.href} className="relative flex items-center">
                    {hasBadge && (
                      <span className="pointer-events-none absolute -top-3 -right-4 inline-flex items-center rounded border border-[var(--accent-green)] bg-[var(--accent-green)]/5 px-1.5 py-0.5 text-[10px] font-semibold leading-[1.1] text-[var(--accent-green)]">
                        {link.badge}
                      </span>
                    )}
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </div>
                )
              })}
            </div>

          {/* Rechts: CTA (desktop) of hamburger (mobile) */}
          <div className="flex items-center justify-end gap-1 min-w-[120px] md:min-w-[140px]">
            <ThemeToggle className="hidden md:inline-flex" />
            <a href="/contact" className="btn-primary hidden md:inline-flex" onClick={(e) => handleNavClick(e, '/contact')}>
              Contact
            </a>
            <ThemeToggle className="md:hidden" />
            <button
              ref={mobileToggleRef}
              type="button"
              className="flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] justify-center md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
            >
              <span className="block h-0.5 w-6 bg-[var(--text-secondary)]" />
              <span className="block h-0.5 w-6 bg-[var(--text-secondary)]" />
              <span className="block h-0.5 w-6 bg-[var(--text-secondary)]" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <>
            <button
              type="button"
              className="nav-mobile-backdrop md:hidden"
              aria-label="Sluit menu"
              onClick={() => {
                closeMobileMenu()
                mobileToggleRef.current?.focus()
              }}
            />
            <div
              id="mobile-nav-panel"
              ref={mobileMenuRef}
              className="nav-mobile-panel border-t border-[var(--border-color)] py-5 md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobiel navigatiemenu"
            >
              <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const hasBadge = 'badge' in link && link.badge
                return (
                  <div key={link.href} className="flex flex-col gap-1">
                    {hasBadge && (
                      <span className="inline-flex w-fit items-center rounded border border-[var(--accent-green)] bg-[var(--accent-green)]/5 px-1.5 py-0.5 text-[10px] font-semibold leading-[1.1] text-[var(--accent-green)]">
                        {link.badge}
                      </span>
                    )}
                    <a
                      href={link.href}
                      className="nav-mobile-link text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      onClick={(e) => {
                        closeMobileMenu()
                        handleNavClick(e, link.href)
                      }}
                    >
                      {link.label}
                    </a>
                  </div>
                )
              })}
                <a href="/contact" className="btn-primary w-fit" onClick={(e) => { closeMobileMenu(); handleNavClick(e, '/contact') }}>
                  Gratis audit
                </a>
              </div>

              {/* Contact info + socials in mobile menu */}
              <div className="mt-4 border-t border-[var(--border-color)] pt-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="inline-flex items-center gap-2">
                    <IconClock />
                    <span>24/7 Bereikbaar</span>
                  </span>
                  <a
                    href={topBarMailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <IconMail />
                    <span>{topBarEmail}</span>
                  </a>
                  <a
                    href={topBarTelHref}
                    className="inline-flex items-center gap-2 hover:text-[var(--text-primary)]"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      openProtocolLink(topBarTelHref)
                    }}
                  >
                    <IconPhone />
                    <span>{topBarPhone}</span>
                  </a>
                </div>
                <SocialLinks />
              </div>
            </div>
          </>
        )}
      </Container>
    </header>
    </div>
  )
}
