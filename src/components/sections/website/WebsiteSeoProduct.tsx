import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const CALENDLY_URL =
  'https://calendly.com/vanborglimited/van_borg_sales_call'

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="ranking-prijs-lijst__icon"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

const features = [
  'Lokale SEO-optimalisatie: dienst + plaatscombinaties die jouw klanten zoeken',
  'Gebouwd met React & Tailwind voor razendsnelle laadtijden',
  'Conversiegerichte indeling met duidelijke CTA\'s en leadcapture',
  'Technische SEO-basis: sitemap, metadata, canonical tags en interne links',
  'Hogere Google-posities voor lokale zoekopdrachten in jouw regio',
]

export function WebsiteSeoProduct() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="website-seo-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: price card */}
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'center' }}>
            <div className="ranking-prijs-badge">SEO Website</div>
            <div className="ranking-prijs-bedrag mt-4">
              Vanaf &euro;&nbsp;1.499
            </div>
            <p className="ranking-prijs-subtekst">Eenmalig &middot; excl. btw</p>
            <p className="text-section-body mt-4" style={{ fontSize: '0.9375rem' }}>
              Ons vlaggenschip: een website die gevonden wordt én bezoekers omzet in klanten.
            </p>
          </div>

          {/* Right: features */}
          <div>
            <h2 id="website-seo-title" className="heading-section">
              SEO Website
            </h2>
            <p className="mt-3 text-section-body">
              Onze SEO-website is speciaal gebouwd voor lokale vindbaarheid. Elke pagina is
              geoptimaliseerd om hoog te scoren in Google op de zoekcombinaties die jouw klanten
              gebruiken. Inclusief technische SEO, conversiegerichte opzet en snelle laadtijden.
            </p>

            <ul className="ranking-prijs-lijst mt-6">
              {features.map((item) => (
                <li key={item} className="ranking-prijs-lijst__item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Bespreek mijn website
              </a>
            </div>
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
