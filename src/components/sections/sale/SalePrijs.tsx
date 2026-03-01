import { Container } from '../../ui/Container'

const aanbiedingInbegrepen = [
  'Lokale SEO voor betere zichtbaarheid in Google Maps',
  'SEO Website als sterke basis voor vindbaarheid en conversie',
  'Een gecombineerd traject met een aanspreekpunt',
  'Scherpe actieprijs door bundeling van beide services',
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

        <div className="ranking-prijs-grid !grid-cols-1">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Actieprijs</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;2.999
            </div>
            <p className="ranking-prijs-subtekst">
              Eenmalige bundelprijs voor Lokale SEO + SEO Website.
            </p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat je krijgt</h3>
            <PrijsLijst items={aanbiedingInbegrepen} />

            <p className="ranking-prijs-btw">Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
