import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const budgetTiers = [
  {
    daily: '€10',
    monthly: '€300',
    fee: '€249',
    total: '€549',
    campaigns: 1,
    label: 'Starten',
    description: 'Eén gerichte campagne op je belangrijkste dienst of locatie. Goed voor bedrijven die Google Ads willen uitproberen.',
  },
  {
    daily: '€20',
    monthly: '€600',
    fee: '€299',
    total: '€899',
    campaigns: 1,
    label: 'Groeien',
    description: 'Meer vertoningen, meer klikken. Geschikt voor bedrijven die al weten dat Google Ads werkt voor hun branche.',
  },
  {
    daily: '€30',
    monthly: '€900',
    fee: '€349',
    total: '€1.249',
    campaigns: 2,
    label: 'Schalen',
    featured: true,
    description: 'Twee campagnes: één op dienst, één op locatie. De sweet spot voor de meeste lokale bedrijven.',
  },
  {
    daily: '€40',
    monthly: '€1.200',
    fee: '€399',
    total: '€1.599',
    campaigns: 2,
    label: 'Domineren',
    description: 'Twee sterke campagnes met meer budget per klik. Voor bedrijven in een competitieve markt.',
  },
  {
    daily: '€50',
    monthly: '€1.500',
    fee: '€449',
    total: '€1.949',
    campaigns: 3,
    label: 'Marktleider',
    description: 'Drie campagnes op dienst, locatie en merk. Maximale zichtbaarheid in jouw regio.',
  },
]

export function AdsPrijs() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="ads-prijs-title">
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
          <h2 id="ads-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-body">
            De servicefee dekt het volledige campagnebeheer. Jij bepaalt het budget, wij zorgen dat elke euro zo goed mogelijk wordt besteed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 13rem), 1fr))', gap: '0.875rem', marginBottom: '2rem' }}>
          {budgetTiers.map((tier) => (
            <div
              key={tier.daily}
              className="card card-bordered"
              style={{
                padding: '1.25rem',
                border: tier.featured ? '2px solid var(--accent-green)' : undefined,
                position: 'relative',
              }}
            >
              {tier.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-0.75rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--accent-green)',
                  color: '#fff',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.75rem',
                  borderRadius: '999px',
                  whiteSpace: 'nowrap',
                }}>
                  Meest gekozen
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{tier.label}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-neutral-500)', fontWeight: 500 }}>{tier.daily}/dag</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--color-neutral-600)', lineHeight: '1.55', margin: '0 0 1rem' }}>
                {tier.description}
              </p>

              <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: '0.75rem', fontSize: '0.8rem', lineHeight: '1.9', color: 'var(--color-neutral-700)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Advertentiebudget</span>
                  <span>{tier.monthly}/mnd</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Servicefee</span>
                  <span>{tier.fee}/mnd</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Campagnes</span>
                  <span>{tier.campaigns}x</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginTop: '0.35rem', paddingTop: '0.35rem', borderTop: '1px solid var(--color-neutral-200)', color: 'var(--accent-green)' }}>
                  <span>Totaal</span>
                  <span>{tier.total}/mnd</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['Alle prijzen excl. btw', 'Geen opstartkosten', 'Geen minimale looptijd'].map((item) => (
            <span key={item} style={{
              fontSize: '0.8125rem',
              color: 'var(--color-neutral-500)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}>
              <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.75rem' }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </Container>
    </FadeUpSection>
  )
}