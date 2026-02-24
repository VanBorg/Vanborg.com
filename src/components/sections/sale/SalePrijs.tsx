import { Container } from '../../ui/Container'

const bundelInbegrepen = [
  'Volledige ranking-analyse en optimalisatie voor een Top 3-positie',
  'SEO-website tot 5 pagina’s, ontworpen en gebouwd op maat',
  'Servicepagina’s inclusief, locatiepagina’s als extra onderdeel van lokale SEO',
  'Google Business Profile setup en optimalisatie',
  'Core Web Vitals geoptimaliseerde website',
  'Hosting van de website tijdens het traject',
  'Tot 3 grotere aanpassingen aan de website (bijvoorbeeld nieuwe secties/pagina’s)',
  'Daarnaast meerdere kleine wijzigingen en tekstupdates waar nodig',
]

const doorlopendInbegrepen = [
  'Doorlopend SEO- en beheerwerk voor je ranking',
  'Website hosting, beveiliging en updates',
  'Structurele optimalisaties richting de nummer 1-positie',
  'Uitbreiding werkgebied naar omliggende plaatsen',
  'Content-updates op aanvraag',
  'Wekelijkse updates en rapportages (o.a. heatmaps)',
  'Maandelijkse call om resultaten en strategie te bespreken',
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
            Bundelaanbieding
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Website + Top 3 in Google voor &euro;&nbsp;2.999 eenmalig + &euro;&nbsp;499 p/m (excl. btw).
            In deze bundel komt de website feitelijk neer op ongeveer &euro;&nbsp;1.500.
          </p>
        </div>

        <div className="ranking-prijs-grid">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Bundel &mdash; eenmalig</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;2.999
            </div>
            <p className="ranking-prijs-subtekst">
              Eenmalige investering voor Website + Top 3 traject (looptijd 90 dagen).
            </p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={bundelInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>

          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Bundel &mdash; doorlopend</div>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              &euro;&nbsp;499
              <span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">
              Maandelijks voor doorlopend ranking-werk, hosting en begeleiding.
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
