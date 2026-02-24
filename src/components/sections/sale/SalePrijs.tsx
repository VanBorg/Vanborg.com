import { Container } from '../../ui/Container'

const bundelInbegrepen = [
  'Volledige ranking-analyse en optimalisatie voor een Top 3-positie',
  'SEO-website op maat ontworpen en gebouwd',
  'Google Business Profile setup en optimalisatie',
  'Wekelijkse heatmaps en rapportages',
  'Core Web Vitals geoptimaliseerde website',
  'Persoonlijke begeleiding gedurende het hele traject',
]

const doorlopendInbegrepen = [
  'Doorlopend SEO- en beheerwerk voor je ranking',
  'Website hosting, beveiliging en updates',
  'Structurele optimalisaties richting de nummer 1-positie',
  'Uitbreiding werkgebied naar omliggende plaatsen',
  'Content-updates op aanvraag',
  'Maandelijkse rapportage met concrete actiepunten',
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

export function SalePrijs() {
  return (
    <section className="section bg-section-2" aria-labelledby="sale-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="sale-prijs-title" className="heading-section">
            Bundelaanbieding
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Ranking + Website samen voordeliger. Bespaar &euro;&nbsp;499 op de eenmalige kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Bundel &mdash; eenmalig</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;1.999
            </div>
            <p className="ranking-prijs-subtekst">
              <span className="line-through text-neutral-400">&euro;&nbsp;2.498</span>
              {' '}eenmalig &mdash; bespaar &euro;&nbsp;499
            </p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={bundelInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Bundel &mdash; doorlopend</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;549
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">
              <span className="line-through text-neutral-400">&euro;&nbsp;598 p/m</span>
              {' '}ranking + hosting gebundeld
            </p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={doorlopendInbegrepen} />

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
