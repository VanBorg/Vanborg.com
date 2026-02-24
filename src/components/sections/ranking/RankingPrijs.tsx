import { Container } from '../../ui/Container'

const inbegrepen = [
  'Volledige analyse en optimalisatie',
  'Google Business Profile setup',
  'Wekelijkse heatmaps en rapportages',
  'Persoonlijke begeleiding',
]

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

        <div className="mt-10 flex justify-center">
          <div className="card card-bordered card-elevated ranking-prijs-card">
            <div className="ranking-prijs-badge">Google Top 3 Ranking</div>

            <div className="ranking-prijs-bedrag mt-4">
              &euro;&nbsp;1.499
            </div>
            <p className="ranking-prijs-subtekst">eenmalig &mdash; eerste 90 dagen</p>

            <div className="ranking-prijs-bedrag ranking-prijs-bedrag--maand mt-4">
              Vanaf &euro;&nbsp;499<span className="ranking-prijs-per-maand"> p/m</span>
            </div>
            <p className="ranking-prijs-subtekst">doorlopend SEO- en beheerwerk</p>

            <hr className="ranking-prijs-divider" />

            <h3 className="heading-sub">Wat is inbegrepen</h3>
            <ul className="ranking-prijs-lijst">
              {inbegrepen.map((item) => (
                <li key={item} className="ranking-prijs-lijst__item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-prijs-lijst__icon">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

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
