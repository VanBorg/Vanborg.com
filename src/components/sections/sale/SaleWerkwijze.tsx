import { Container } from '../../ui/Container'

const stappen = [
  {
    nummer: 1,
    title: 'Analyse & intake',
    text: 'We brengen je huidige ranking, concurrentie en doelgroep in kaart. Tegelijk bespreken we je wensen en doelen voor de website en bepalen we samen de opzet van je (maximaal 5) pagina’s en eventuele locatiepagina’s.',
  },
  {
    nummer: 2,
    title: 'Bouw & optimalisatie',
    text: 'We bouwen je SEO-geoptimaliseerde website en optimaliseren tegelijkertijd je Google Business Profile, lokale signalen en technische SEO. Tijdens deze fase verwerken we je feedback en grotere aanpassingen aan de site.',
  },
  {
    nummer: 3,
    title: 'Lancering & ranking',
    text: 'Je website gaat live binnen de afgesproken 90 dagen en de ranking-optimalisatie draait op volle kracht. Je ontvangt wekelijkse heatmaps en updates over de voortgang richting de Top 3.',
  },
  {
    nummer: 4,
    title: 'Doorlopend beheer',
    text: 'We hosten je website, houden je positie stabiel en blijven optimaliseren. Je krijgt wekelijks inzicht in de cijfers en één keer per maand een vaste call om resultaten en vervolgstappen te bespreken.',
  },
]

export function SaleWerkwijze() {
  return (
    <section className="section bg-section-2" aria-labelledby="sale-werkwijze-title">
      <Container>
        <div className="text-center">
          <h2 id="sale-werkwijze-title" className="heading-section">
            Hoe we het doen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Een gecombineerde aanpak in vier stappen. Website en ranking parallel, met een looptijd van 90 dagen naar de Top 3.
          </p>
        </div>

        <div
          className="ranking-werkwijze-timeline"
          aria-label="Tijdlijn met de vier stappen van de bundel-werkwijze"
        >
          <div className="ranking-werkwijze-timeline__line" aria-hidden />
          <div className="ranking-werkwijze-timeline__steps">
            {stappen.map((stap) => (
              <div key={stap.nummer} className="ranking-werkwijze-step">
                <div className="ranking-werkwijze-step__marker-wrap" aria-hidden>
                  <div className="ranking-werkwijze-nummer">{stap.nummer}</div>
                </div>
                <div className="card card-bordered ranking-werkwijze-step__card">
                  <h3 className="heading-sub">{stap.title}</h3>
                  <p className="text-section-body mt-1">{stap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
