import { Container } from '../../ui/Container'

const bouwGroepen = [
  {
    titel: 'Wat we bouwen',
    items: [
      'Maatwerk websites en landingspagina\'s',
      'Services- en locatiepagina\'s voor lokale vindbaarheid',
    ],
  },
  {
    titel: 'SEO inbegrepen',
    items: [
      'Lokale SEO (dienst + plaats combinaties)',
      'Titels, H1/H2, meta-teksten en technische basis',
    ],
  },
  {
    titel: 'Technisch',
    items: [
      'Responsief op mobiel, tablet en desktop',
      'Integraties: maps, formulieren, reviews en meer',
    ],
  },
]

const hostingGroepen = [
  {
    titel: 'Hosting & beheer',
    items: [
      'Snelle, betrouwbare hosting',
      'Beveiligingsupdates en monitoring',
    ],
  },
  {
    titel: 'Onderhoud & groei',
    items: [
      '1 grote of 2 kleine wijzigingen per maand inbegrepen',
      'Doorlopende SEO-optimalisatie',
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

export function WebsitePrijs() {
  return (
    <section className="section bg-section-2" aria-labelledby="website-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="website-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Website</div>

            <div className="ranking-prijs-bedrag mt-4">
              Vanaf &euro;&nbsp;999
            </div>
            <p className="ranking-prijs-subtekst">eenmalig</p>

            <hr className="ranking-prijs-divider" />

            {bouwGroepen.map((groep) => (
              <div key={groep.titel} className="mt-4">
                <h3 className="heading-sub">{groep.titel}</h3>
                <PrijsLijst items={groep.items} />
              </div>
            ))}

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Hosting &amp; onderhoud</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;99
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">doorlopend</p>

            <hr className="ranking-prijs-divider" />

            {hostingGroepen.map((groep) => (
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
