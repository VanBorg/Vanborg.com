import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const websiteTypes = [
  { name: 'Webshop', price: 'vanaf €1.999' },
  { name: 'Portfolio & Foto/Video', price: 'vanaf €899' },
  { name: 'Boeking & Afspraken', price: 'vanaf €1.299' },
  { name: 'Crypto & Web3', price: 'vanaf €1.999' },
  { name: 'Maatwerk', price: 'prijs op aanvraag' },
]

export function WebsiteAndereTypes() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="website-andere-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div>
            <h2 id="website-andere-title" className="heading-section">
              Andere websites
            </h2>
            <p className="mt-3 text-section-body">
              Naast onze SEO-website bouwen wij volledig custom websites voor elk doel.
              Van webshops en portfoliosites tot boekingsplatformen en Web3-projecten —
              alles wordt op maat ontwikkeld met dezelfde snelle, moderne technologie.
            </p>
            <p className="mt-3 text-section-body">
              <strong>Let op:</strong> SEO is bij deze websites niet standaard inbegrepen.
              Wil je ook gevonden worden in Google? Dan kan lokale SEO-optimalisatie als
              extra worden toegevoegd aan elk websitetype.
            </p>
          </div>

          {/* Right: type + price list */}
          <div className="card card-bordered card-elevated" style={{ padding: 0, overflow: 'hidden' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {websiteTypes.map((type, i) => (
                <li
                  key={type.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    borderBottom: i < websiteTypes.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
                  }}
                >
                  <span className="heading-sub" style={{ fontSize: '1rem' }}>{type.name}</span>
                  <span className="text-section-body" style={{ color: 'var(--accent-green)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {type.price}
                  </span>
                </li>
              ))}
            </ul>
            <div style={{ padding: '0.75rem 1.5rem', background: 'rgba(45, 106, 79, 0.04)', fontSize: '0.8125rem', color: 'var(--color-neutral-700)' }}>
              Alle prijzen excl. btw
            </div>
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
