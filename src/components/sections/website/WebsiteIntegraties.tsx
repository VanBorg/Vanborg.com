import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const addons = [
  {
    name: 'API & Webhookkoppeling',
    description: 'Koppel je website aan Make, Zapier, je CRM of een extern systeem. Leads, formulieren en acties worden automatisch verwerkt.',
    price: '€150 – €300',
    unit: 'per koppeling',
  },
  {
    name: 'Maatwerk calculator',
    description: 'Een prijsopgave-, ROI- of configuratiecalculator op je website. Bezoekers vullen in wat ze nodig hebben en krijgen direct een uitkomst.',
    price: '€300 – €600',
    unit: 'eenmalig',
  },
  {
    name: 'Boekings- of afsprakensysteem',
    description: 'Kalenderintegratie zodat klanten zelf een moment inplannen. Inclusief automatische bevestigings- en herinneringsmail.',
    price: '€200 – €350',
    unit: 'eenmalig',
  },
  {
    name: 'Betaalintegratie',
    description: 'Mollie of Stripe gekoppeld aan je website. Geschikt voor producten, diensten, aanbetaling of abonnementen.',
    price: '€150 – €250',
    unit: 'eenmalig',
  },
  {
    name: 'CRM-koppeling',
    description: 'Leads van je website komen direct in Close, HubSpot, Pipedrive of een ander CRM. Inclusief veldmapping en testrun.',
    price: '€200 – €400',
    unit: 'eenmalig',
  },
  {
    name: 'Ledenportaal of loginomgeving',
    description: 'Een afgeschermd gedeelte van je website voor klanten, leden of medewerkers. Met eigen dashboard en content op maat.',
    price: 'vanaf €600',
    unit: 'eenmalig',
  },
]

export function WebsiteIntegraties() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="website-integraties-title">
      <Container>
        <div className="mb-12 text-center">
          <h2 id="website-integraties-title" className="heading-section">
            Uitbreidingen en koppelingen
          </h2>
          <p className="mt-3 text-section-body max-w-2xl mx-auto">
            Elke website die we bouwen kan worden uitgebreid met koppelingen, tools en slimme functies. Hieronder zie je wat we kunnen toevoegen en wat het kost.
          </p>
        </div>

        {/* Add-on grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="card card-bordered card-elevated"
              style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <span className="heading-sub" style={{ fontSize: '1rem' }}>{addon.name}</span>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{addon.price}</div>
                  <div style={{ color: 'var(--color-neutral-500)', fontSize: '0.75rem' }}>{addon.unit}</div>
                </div>
              </div>
              <p className="text-section-body" style={{ fontSize: '0.875rem', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.6' }}>
                {addon.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </FadeUpSection>
  )
}