import { Container } from '../../ui/Container'

const voorstarterInbegrepen = [
  '1 campagne met gerichte zoekwoorden',
  'Advertentieteksten en extensies',
  'Maandelijkse rapportage',
  'Persoonlijke begeleiding',
  '~€\u00a010 advertentiebudget per dag (1 maand)',
]

const groeiInbegrepen = [
  'Tot 3 campagnes met uitgebreide zoekwoorden',
  'A/B-tests op advertenties',
  'Conversietracking en optimalisatie',
  'Tweewekelijkse rapportage en bijsturing',
  '~€\u00a020 advertentiebudget per dag (1 maand)',
]

const dominantInbegrepen = [
  'Onbeperkt campagnes en zoekwoorden',
  'Geavanceerde biedstrategieën',
  'Landingspagina-optimalisatie',
  'Wekelijkse rapportage en dedicated accountmanager',
  '~€\u00a030 advertentiebudget per dag (1 maand)',
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
            Transparante prijzen, geen verborgen kosten. Advertentiebudget is inbegrepen.
          </p>
        </div>

        <div className="ranking-prijs-grid ranking-prijs-grid--3">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Google Ads - Klein</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;499
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">Ideaal om te starten met Google Ads</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={voorstarterInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Google Ads - Middel</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;899
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">Voor bedrijven die willen opschalen</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={groeiInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Google Ads - Groot</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;1.299
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">Maximale zichtbaarheid en dominantie</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={dominantInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
