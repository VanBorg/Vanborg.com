import { Container } from '../../ui/Container'

const stappen = [
  {
    nummer: 1,
    title: 'Analyse',
    text: 'We brengen je huidige ranking, concurrentie en zoekwoorden in kaart. Je ontvangt een heatmap die laat zien waar je nu staat.',
  },
  {
    nummer: 2,
    title: 'Optimalisatie',
    text: 'Je Google Business Profile, website en lokale signalen worden geoptimaliseerd voor maximale zichtbaarheid in jouw regio.',
  },
  {
    nummer: 3,
    title: 'Monitoring',
    text: 'Wekelijkse heatmaps en rapportages zodat je de voortgang ziet. Transparant en meetbaar, geen verrassingen.',
  },
  {
    nummer: 4,
    title: 'Doorlopend beheer',
    text: 'We blijven optimaliseren zodat je positie stabiel blijft. Google verandert continu, wij passen ons aan om voor te blijven.',
  },
]

export function RankingWerkwijze() {
  return (
    <section className="section bg-section-1" aria-labelledby="ranking-werkwijze-title">
      <Container>
        <div className="text-center">
          <h2 id="ranking-werkwijze-title" className="heading-section">
            Hoe we het doen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Een bewezen aanpak in vier stappen. Van analyse tot doorlopend beheer.
          </p>
        </div>

        <div
          className="ranking-werkwijze-timeline"
          aria-label="Tijdlijn met de vier stappen van onze werkwijze"
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
