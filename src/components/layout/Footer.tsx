import { Container } from '../ui/Container'
import { LOCATION_PAGES } from '../../data/locations'
import { useSmoothNav } from '../../hooks/useSmoothNav'

const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76000!2d6.8674621999999985!3d53.098799899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7d7e71e51e1bb%3A0xbfc74e0471be7bfb!2sVan%20Borg!5e0!3m2!1snl!2suk!4v1771866305559!5m2!1snl!2suk'

const MAPS_URL = 'https://maps.google.com/?q=Kieler+Bocht+104+9642+CE+Veendam'


function FooterDivider() {
  return <div className="footer__divider" aria-hidden="true" />
}

const navPages = [
  { label: 'Home', href: '/' },
  { label: 'Google Ranking', href: '/ranking' },
  { label: 'Google Ads', href: '/ads' },
  { label: 'Websites', href: '/website' },
  { label: 'Prijzen', href: '/prijzen' },
  { label: 'Aanbieding', href: '/aanbieding' },
  { label: 'Werkgebieden', href: '/locatie' },
]

export function Footer() {
  const handleNavClick = useSmoothNav()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__main">
        <Container>
          <div className="footer__top">
            {/* 1. Helemaal links: Van Borg */}
            <div className="footer__company-info">
              <a href="/" className="footer__logo" aria-label="Van Borg – terug naar home" onClick={(e) => handleNavClick(e, '/')}>
                <span className="footer__logo-line">Van</span>
                <span className="footer__logo-line footer__logo-line--2">Borg</span>
              </a>
              <span className="footer__company-name">Van Borg Limited</span>
              <address className="footer__company-address">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Kieler Bocht 104
                </a>
                <br />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  9642 CE Veendam
                </a>
              </address>
              <p className="footer__company-hours">Ma–Zo 00:00–23:59</p>
              <div className="footer__company-contact">
                <a href="mailto:info@vanborglimited.com" className="footer__company-email">
                  info@vanborglimited.com
                </a>
                <a href="tel:+31644732266" className="footer__company-phone">
                  +31 6 44 73 22 66
                </a>
              </div>
            </div>

            <FooterDivider />

            {/* 2. Werkgebieden */}
            <div className="footer__werkgebieden">
              <h3 className="heading-sub">Werkgebieden</h3>
              <ul className="footer__werkgebieden-grid">
                {LOCATION_PAGES.map((loc) => (
                  <li key={loc.slug}>
                    <a href={`/locatie/${loc.slug}`}>{loc.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <FooterDivider />

            {/* 3. Google Maps embed */}
            <div className="footer__map-wrap">
              <iframe
                src={MAP_EMBED_SRC}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaart: Van Borg, Veendam – provincie Groningen"
              />
            </div>

          </div>
        </Container>
      </div>

      <Container>
        <nav className="footer__pages-bar" aria-label="Sitepagina's">
          {navPages.map((page) => (
            <a key={page.href} href={page.href} className="footer__pages-bar-link">
              {page.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container>
        <div className="footer__legal">
          <span className="footer__copyright">&copy; Van Borg Limited 2025</span>
          <div className="footer__legal-links">
            <a href="/voorwaarden">Algemene voorwaarden</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
