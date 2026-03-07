import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const websiteTypes = [
  {
    name: 'Webshop',
    description: 'Productpagina\'s, winkelwagen en betaalintegratie (Mollie/Stripe).',
    pages: 'Homepage · Productoverzicht · Productpagina\'s · Winkelwagen · Checkout · Contact',
    price: 'vanaf €1.999',
  },
  {
    name: 'Boeking & Afspraken',
    description: 'Voor coaches, kappers en klinieken die online afspraken willen aannemen.',
    pages: 'Homepage · Over ons · Diensten · Boekingspagina · Contact',
    price: 'vanaf €1.299',
  },
  {
    name: 'Horeca & Restaurants',
    description: 'Digitale menukaart, tafelreserveringen en optionele bestelmodule.',
    pages: 'Homepage · Menukaart · Reserveren · Over ons · Contact',
    price: 'vanaf €1.299',
  },
  {
    name: 'Portfolio & Presentatie',
    description: 'Voor fotografen, architecten en creatieve bureaus.',
    pages: 'Homepage · Portfolio · Over mij · Diensten · Contact',
    price: 'vanaf €799',
  },
  {
    name: 'Vastgoed & Makelaars',
    description: 'Woningaanbod met filters, foto-galerijen en aanvraagformulieren.',
    pages: 'Homepage · Aanbod · Woningdetailpagina\'s · Over ons · Contact',
    price: 'vanaf €1.999',
  },
  {
    name: 'Crypto & Web3',
    description: 'Wallet-integratie, token-pagina\'s en community-functies.',
    pages: 'Homepage · Project · Tokenomics · Roadmap · Community · Contact',
    price: 'vanaf €1.999',
  },
]

export function WebsiteAndereTypes() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="website-andere-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left: text */}
          <div>
            <h2 id="website-andere-title" className="heading-section">
              Andere websites
            </h2>
            <p className="mt-3 text-section-lead">
              Volledig custom gebouwd. Jouw branding, jouw stijl. Geen templates, geen pagebuilders.
            </p>
            <p className="mt-4 text-section-body">
              Elke website bouwen we van nul op met schone code en jouw huisstijl verwerkt door het hele ontwerp. De prijzen zijn minimumtarieven en gelden voor de standaardpagina's per type. Heb je meer pagina's nodig, dan rekenen we <strong>€200 tot €300 per extra pagina</strong> afhankelijk van de complexiteit.
            </p>

            <div className="mt-5 text-section-body">
              <p style={{ fontWeight: 700, marginBottom: '0.75rem' }}>Zo bouwen we elke website op:</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700, flexShrink: 0 }}>01</span>
                  <div>
                    <strong>Homepage</strong>
                    <p style={{ margin: 0, color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>Hero-sectie met jouw propositie, vertrouwenssignalen en een duidelijke call-to-action.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700, flexShrink: 0 }}>02</span>
                  <div>
                    <strong>Dienst- of productpagina's</strong>
                    <p style={{ margin: 0, color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>Specifiek voor jouw branche. Zie rechts welke pagina's standaard inbegrepen zijn.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700, flexShrink: 0 }}>03</span>
                  <div>
                    <strong>Contactpagina met leadformulier</strong>
                    <p style={{ margin: 0, color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>Zodat bezoekers direct contact opnemen of een aanvraag achterlaten.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5" style={{
              padding: '0.75rem 1rem',
              background: 'rgba(45, 106, 79, 0.06)',
              borderLeft: '3px solid var(--accent-green)',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              lineHeight: '1.7',
            }}>
              <p><strong>Lokale SEO toevoegen:</strong> eenmalig €650. Inclusief zoekwoordonderzoek, on-page optimalisatie en technische SEO-basis.</p>
            </div>
          </div>

          {/* Right: type list */}
          <div className="card card-bordered card-elevated" style={{ padding: 0, overflow: 'hidden' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {websiteTypes.map((type, i) => (
                <li
                  key={type.name}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderBottom: i < websiteTypes.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{type.name}</span>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-neutral-600)', margin: '0.15rem 0 0.25rem', lineHeight: '1.5' }}>
                        {type.description}
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--accent-green)', margin: 0, fontWeight: 500 }}>
                        {type.pages}
                      </p>
                    </div>
                    <span style={{ color: 'var(--accent-green)', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.875rem' }}>
                      {type.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ padding: '0.625rem 1.25rem', background: 'rgba(45, 106, 79, 0.04)', fontSize: '0.8rem', color: 'var(--color-neutral-600)' }}>
              Alle prijzen excl. btw &middot; Minimumtarieven &middot; Maatwerk altijd in overleg
            </div>
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}