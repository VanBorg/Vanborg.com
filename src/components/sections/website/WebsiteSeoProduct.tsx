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
  'Lokale SEO-optimalisatie op dienst + plaatscombinaties die jouw klanten dagelijks zoeken',
  'Gebouwd met React & Tailwind voor razendsnelle laadtijden en hoge PageSpeed-scores',
  'Conversiegerichte indeling met duidelijke CTA\'s, trustsignalen en leadcapture',
  'Volledige technische SEO-basis: sitemap, metadata, canonical tags en interne linkstructuur',
  'Hogere Google-posities voor lokale zoekopdrachten in jouw regio én omliggende plaatsen',
  'Mobiel geoptimaliseerd: meer dan 70% van jouw klanten zoekt via smartphone',
  'Geschikt voor loodgieters, kappers, aannemers, therapeuten, coaches en andere lokale dienstverleners',
  'Inclusief oplevering met instructies zodat je zelf eenvoudig tekst kunt aanpassen',
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
                Vanaf &euro;&nbsp;1.999
              </div>
              <p className="ranking-prijs-subtekst">Eenmalig &middot; excl. btw</p>

              <p className="text-section-body mt-5" style={{ fontSize: '0.9375rem' }}>
                <strong>Ons vlaggenschip:</strong> website die gevonden wordt én klanen genereert.
              </p>

              <div className="mt-5" style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <p><strong>Wat zit er standaard in?</strong></p>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'disc' }}>
                  <li>Homepage met sterke propositie en CTA</li>
                  <li>Tot 3 servicepagina's geoptimaliseerd op zoekopdrachten</li>
                  <li>Locatiepagina's voor jouw werkgebied</li>
                  <li>Contactpagina met leadformulier</li>
                </ul>
              </div>

              <div className="mt-5" style={{ textAlign: 'left', fontSize: '0.9rem', lineHeight: '1.7' }}>
                <p><strong>Uitbreiden?</strong></p>
                <p style={{ marginTop: '0.25rem' }}>Extra pagina's zijn beschikbaar <strong>vanaf €250 per pagina</strong>.</p>
              </div>

              <div className="mt-5" style={{
                background: 'var(--color-neutral-100)',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                fontSize: '0.875rem',
                textAlign: 'left',
              }}>
                <strong>Gemiddeld resultaat:</strong> klanten zien binnen <strong>30–60 dagen</strong> een merkbare stijging in organisch verkeer vanuit Google.
              </div>
            </div>
          </div>

          {/* Right: features */}
          <div>
            <h2 id="website-seo-title" className="heading-section">
              SEO Website
            </h2>
            <p className="mt-3 text-section-body">
              Onze SEO-website is speciaal gebouwd voor lokale bedrijven die gevonden willen worden in Google. Elke pagina is geoptimaliseerd op de zoekcombinaties die jouw klanten gebruiken, zoals <strong>&quot;loodgieter Amsterdam&quot;</strong> of <strong>&quot;kapper Utrecht centrum&quot;</strong>. Inclusief technische SEO, conversiegerichte opzet en razendsnelle laadtijden.
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