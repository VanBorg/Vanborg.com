import { Container } from '../../ui/Container'

const stappen = [
  {
    nummer: 1,
    title: 'Strategie & zoekwoorden',
    text: 'We analyseren je markt, concurrentie en doelgroep. Op basis daarvan selecteren we de zoekwoorden met de hoogste kans op conversie.',
  },
  {
    nummer: 2,
    title: 'Campagne-opzet',
    text: 'We bouwen je campagnes op met gerichte advertentiegroepen, sterke advertentieteksten en geoptimaliseerde landingspagina\u2019s.',
  },
  {
    nummer: 3,
    title: 'A/B-tests',
    text: 'Continu testen we varianten van advertenties en biedstrategieën. Zo verlagen we de kosten per lead en verhogen we de conversie.',
  },
  {
    nummer: 4,
    title: 'Rapportage',
    text: 'Maandelijks ontvang je een helder rapport met resultaten, inzichten en concrete acties die we ondernemen om je ROI te verbeteren.',
  },
]

export function AdsWerkwijze() {
  return (
    <section className="section bg-section-1" aria-labelledby="ads-werkwijze-title">
      <Container>
        <div className="text-center">
          <h2 id="ads-werkwijze-title" className="heading-section">
            Hoe we het doen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Een bewezen aanpak in vier stappen. Van strategie tot doorlopende optimalisatie.
          </p>
        </div>

        <div
          className="ranking-werkwijze-timeline"
          aria-label="Tijdlijn met de vier stappen van onze Google Ads werkwijze"
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
