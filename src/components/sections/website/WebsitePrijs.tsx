import { Container } from '../../ui/Container'

const bouwInbegrepen = [
  'Volledig op maat ontworpen en gebouwd',
  'SEO-geoptimaliseerde structuur en content',
  'Responsief design voor mobiel en desktop',
  'Core Web Vitals geoptimaliseerd',
]

const hostingInbegrepen = [
  'Snelle en betrouwbare hosting',
  'Beveiligingsupdates en monitoring',
  'Content-updates op aanvraag',
  'Doorlopende SEO-optimalisatie',
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
            <div className="ranking-prijs-badge">Website bouw</div>

            <div className="ranking-prijs-bedrag mt-4">
              Vanaf &euro;&nbsp;999
            </div>
            <p className="ranking-prijs-subtekst">eenmalig</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={bouwInbegrepen} />

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

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <PrijsLijst items={hostingInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
