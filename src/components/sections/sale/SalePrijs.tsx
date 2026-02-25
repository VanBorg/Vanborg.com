import { Container } from '../../ui/Container'

const bundelInbegrepen = [
  'Ranking-analyse en optimalisatie gericht op Top 3',
  'Maatwerk SEO-website (max. 5 pagina\u2019s), schone geoptimaliseerde code',
  'Core Web Vitals geoptimaliseerd + moderne code-standaarden',
  'Hosting via Netlify gedurende het traject',
  'Google Business Profile setup en optimalisatie',
  'Tot 7 locatiepagina\u2019s inbegrepen (los van de 5 standaard)',
  'Voorstel ter goedkeuring v\u00f3\u00f3r uitvoering van aanpassingen',
  'Tot 3 grotere of 5 kleine wijzigingen na goedkeuring',
  'Doorlooptijd: 90 dagen | websitebouw + lokale SEO parallel',
]

const doorlopendInbegrepen = [
  'Doorlopend SEO-werk voor behoud van Top 3-posities',
  'Verdere optimalisatie richting #1',
  'Uitbreiding naar omliggende werkgebieden',
  'Content-updates op aanvraag',
  'Hosting, beveiliging en technische updates van de website',
  'Wekelijkse rapportages (o.a. heatmaps en positie-tracking)',
  'Maandelijkse call voor resultaten en strategie',
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
    <section className="section bg-section-1" aria-labelledby="sale-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="sale-prijs-title" className="heading-section">
            Top Aanbieding
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
           Deze aanbieding is voor bedrijven die klaar willen zijn voor de toekomst.
          </p>
        </div>

        <div className="ranking-prijs-grid">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Eenmalig</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;2.999
            </div>
            <p className="ranking-prijs-subtekst">
              Eenmalige investering voor Website + Top 3 traject (looptijd 90 dagen).
            </p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat je krijgt</h3>
            <PrijsLijst items={bundelInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Doorlopend</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;499
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">
              Maandelijks voor behoud, groei en beheer na het 90-dagen traject.
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
