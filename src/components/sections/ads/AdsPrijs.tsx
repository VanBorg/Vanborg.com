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

function KeyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0, color: 'var(--accent-green)', marginTop: '0.15rem' }}
    >
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="M21 2l-9.6 9.6M15.5 7.5l2 2"/>
    </svg>
  )
}

function PrijsLijst({ items }: { items: string[] }) {
  return (
    <ul className="ranking-prijs-lijst">
      {items.map((item) => (
        <li key={item} className="ranking-prijs-lijst__item">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ToegangsLijst({ items }: { items: string[] }) {
  return (
    <ul className="ranking-prijs-lijst">
      {items.map((item) => (
        <li key={item} className="ranking-prijs-lijst__item">
          <KeyIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function AdsPrijs() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="ads-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="ads-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1" style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'left' }}>

            {/* Header */}
            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">Google Ads</div>
              <div className="ranking-prijs-bedrag mt-4">
                Vanaf &euro;&nbsp;499 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}>excl. btw</span>
              </div>
              <p className="ranking-prijs-subtekst">Per maand, gebaseerd op ca. € 10 per dag advertentiebudget</p>
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat is inbegrepen */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat is inbegrepen</h3>
              <PrijsLijst items={[
                'Volledig campagnebeheer van zoekwoorden tot advertentieteksten',
                'Gerichte advertenties op klanten met directe zoekintentie',
                'Doorlopende optimalisatie en rapportage',
                'Wij zetten 1, 2 of 3 campagnes op afhankelijk van jouw budget',
                'Vanaf € 499 per maand, inclusief advertentiebudget én onze servicefee',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat wij nodig hebben */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat wij van jou nodig hebben</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Om te kunnen starten hebben we toegang nodig tot:
              </p>
              <ToegangsLijst items={[
                'Toegang tot je Google Ads account (of we maken er één aan)',
                'Akkoord op het maandelijkse advertentiebudget',
              ]} />
            </div>

          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
