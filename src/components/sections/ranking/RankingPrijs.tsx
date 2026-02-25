import { Container } from '../../ui/Container'

const eenmaligGroepen = [
  {
    titel: 'Wat we doen',
    items: [
      'Volledige nulmeting en concurrentieanalyse',
      'Optimalisatie van je Google Business Profile',
      'Website- en on-page SEO voor dienst + plaats',
      'Technische fixes en lokale autoriteit opbouwen',
      'Inrichting van services- en locatiepagina\'s waar nodig',
    ],
  },
  {
    titel: 'Monitoring',
    items: [
      'Wekelijkse heatmaps tijdens de opstart',
      'Voortgangsrapportages met concrete acties',
    ],
  },
]

const maandelijksGroepen = [
  {
    titel: 'Wat we doen',
    items: [
      'Doorlopende lokale SEO-optimalisatie',
      'Positiebehoud en bescherming tegen concurrenten',
      'Uitbreiding naar nieuwe plaatsen en werkgebieden',
      'Verdere content- en pagina-uitbouw',
      'Autoriteit en reviews blijven opbouwen',
    ],
  },
  {
    titel: 'Inzicht',
    items: [
      'Maandelijkse rapportage met acties en groei',
      'Doorlopende heatmap-tracking per regio',
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

        <div className="ranking-prijs-grid">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Lokale Top 3 Ranking</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;1.499
            </div>
            <p className="ranking-prijs-subtekst">Eenmalig. Looptijd: eerste 90 dagen</p>

            <hr className="ranking-prijs-divider" />

            {eenmaligGroepen.map((groep) => (
              <div key={groep.titel} className="mt-4">
                <h3 className="heading-sub">{groep.titel}</h3>
                <PrijsLijst items={groep.items} />
              </div>
            ))}

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Behoud &amp; doorgroei</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              Vanaf &euro;&nbsp;499
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">
              Voor het vasthouden van je Top 3-positie en doorgroeien naar #1
            </p>

            <hr className="ranking-prijs-divider" />

            {maandelijksGroepen.map((groep) => (
              <div key={groep.titel} className="mt-4">
                <h3 className="heading-sub">{groep.titel}</h3>
                <PrijsLijst items={groep.items} />
              </div>
            ))}

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>

        {/* Garantie-blok */}
        <div className="mt-8 flex justify-center">
          <div className="ranking-garantie">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-garantie__icon">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="ranking-garantie__tekst">
              <strong>Top 3 binnen 90 dagen</strong> of we werken gratis door.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
