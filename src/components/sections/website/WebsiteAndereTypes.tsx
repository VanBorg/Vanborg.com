import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const websiteTypes = [
  {
    name: 'Webshop',
    description: 'Voor ondernemers die online producten of diensten verkopen. Inclusief productpagina\'s, winkelwagen en betaalintegratie.',
    price: 'vanaf €1.999',
  },
  {
    name: 'Portfolio & Foto/Video',
    description: 'Voor fotografen, videografen, artiesten en creatieve bureaus die hun werk willen presenteren.',
    price: 'vanaf €999',
  },
  {
    name: 'Boeking & Afspraken',
    description: 'Voor kappers, coaches, therapeuten, trainers en studio\'s die online afspraken willen aannemen.',
    price: 'vanaf €1.299',
  },
  {
    name: 'Crypto & Web3',
    description: 'Voor projecten, communities en bedrijven in de blockchain en crypto ruimte.',
    price: 'vanaf €1.999',
  },
  {
    name: 'Maatwerk',
    description: 'Alles wat buiten de standaardcategorieën valt. Denk aan ledenportalen, calculators of specifieke integraties.',
    price: 'prijs op aanvraag',
  },
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
            <p className="mt-3 text-section-lead">
              Van SEO-website tot crypto site, alles volledig custom. Geen templates, geen pagebuilders.
            </p>
            <p className="mt-3 text-section-body">
              Naast onze SEO-website bouwen we custom websites voor elk doel en elke branche. Of je nu producten wilt verkopen, je werk wilt tonen of afspraken wilt inplannen, we bouwen het op maat met dezelfde snelle, moderne techniek.
            </p>
            <p className="mt-3 text-section-body">
              <strong>Let op:</strong> SEO is niet standaard inbegrepen bij deze websites. Wil je ook gevonden worden in Google? Dan voegen we lokale SEO-optimalisatie toe als extra.
            </p>
          </div>

          {/* Right: type + description + price list */}
          <div className="card card-bordered card-elevated" style={{ padding: 0, overflow: 'hidden' }}>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {websiteTypes.map((type, i) => (
                <li
                  key={type.name}
                  style={{
                    padding: '1rem 1.5rem',
                    borderBottom: i < websiteTypes.length - 1 ? '1px solid var(--color-neutral-200)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <span className="heading-sub" style={{ fontSize: '1rem' }}>{type.name}</span>
                      <p className="text-section-body mt-1" style={{ fontSize: '0.875rem', color: 'var(--color-neutral-700)', margin: 0 }}>
                        {type.description}
                      </p>
                    </div>
                    <span className="text-section-body" style={{ color: 'var(--accent-green)', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {type.price}
                    </span>
                  </div>
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
