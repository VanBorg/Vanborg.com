import { Container } from '../../ui/Container'

const lokaleSeoGroepen = [
  {
    titel: 'Wat je krijgt',
    items: [
      'Optimalisatie van je Google Business Profiel',
      'Lokale SEO-optimalisatie voor website en content',
      'Verbetering van zichtbaarheid in Google Maps',
      'Focus op meer telefoontjes, leads en lokale aanvragen',
    ],
  },
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

export function RankingPrijs() {
  return (
    <section className="section bg-section-2" aria-labelledby="ranking-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="ranking-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Lokale SEO</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;1.499
            </div>
            <p className="ranking-prijs-subtekst">Eenmalig</p>

            <hr className="ranking-prijs-divider" />

            {lokaleSeoGroepen.map((groep) => (
              <div key={groep.titel} className="mt-4">
                <h3 className="heading-sub">{groep.titel}</h3>
                <PrijsLijst items={groep.items} />
              </div>
            ))}

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
