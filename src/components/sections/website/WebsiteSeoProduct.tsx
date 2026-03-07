import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

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
  'Geschikt voor: loodgieters, kappers, aannemers, therapeuten, coaches en andere lokale dienstverleners',
]

export function WebsiteSeoProduct() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="website-seo-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: price card + CTA */}
          <div style={{ textAlign: 'center' }}>
            <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'center' }}>
              <div className="ranking-prijs-badge">SEO Website</div>
              <div className="ranking-prijs-bedrag mt-4">
                Vanaf &euro;&nbsp;1.499
              </div>
              <p className="ranking-prijs-subtekst">Eenmalig &middot; excl. btw</p>
              <p className="text-section-body mt-4" style={{ fontSize: '0.9375rem' }}>
                Ons vlaggenschip: een website die gevonden wordt én bezoekers omzet in klanten.
              </p>
              <p className="text-section-body mt-3" style={{ fontSize: '0.9375rem' }}>
                Inclusief homepage, tot 4 servicepagina's en locatiepagina's voor jouw werkgebied.
                Extra pagina's vanaf €250 per pagina.
              </p>
            </div>
          </div>

          {/* Right: features */}
          <div>
            <h2 id="website-seo-title" className="heading-section">
              SEO Website
            </h2>
            <p className="mt-3 text-section-body">
              Onze SEO-website is speciaal gebouwd voor lokale bedrijven die gevonden willen worden in Google. Elke pagina is geoptimaliseerd op de zoekcombinaties die jouw klanten gebruiken, zoals &quot;loodgieter Amsterdam&quot; of &quot;kapper Utrecht centrum&quot;. Inclusief technische SEO, conversiegerichte opzet en razendsnelle laadtijden.
            </p>

            <ul className="ranking-prijs-lijst mt-6">
              {features.map((item) => (
                <li key={item} className="ranking-prijs-lijst__item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
