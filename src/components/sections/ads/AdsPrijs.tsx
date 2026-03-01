import { Container } from '../../ui/Container'

const adsInbegrepen = [
  'Volledig campagnebeheer van zoekwoorden tot advertentieteksten',
  'Gerichte advertenties op klanten met directe zoekintentie',
  'Doorlopende optimalisatie en rapportage',
  'Je betaalt per klik aan Google, servicefee vanaf € 499',
]

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

export function AdsPrijs() {
  return (
    <section className="section bg-section-2" aria-labelledby="ads-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="ads-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Google Ads</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              Vanaf &euro;&nbsp;499
            </div>
            <p className="ranking-prijs-subtekst">Gerichte advertenties voor direct zichtbaar resultaat in Google.</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={adsInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
