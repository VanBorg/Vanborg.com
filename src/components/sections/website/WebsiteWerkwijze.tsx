import { Container } from '../../ui/Container'

const stappen = [
  {
    nummer: 1,
    title: 'Intake & strategie',
    text: 'We bespreken je doelen, doelgroep en concurrentie. Op basis daarvan bepalen we de structuur, content en zoekwoorden voor je website.',
  },
  {
    nummer: 2,
    title: 'Ontwerp & bouw',
    text: 'We ontwerpen en bouwen je website met React en Tailwind. Snel, responsief en volledig afgestemd op jouw huisstijl en boodschap.',
  },
  {
    nummer: 3,
    title: 'SEO & lancering',
    text: 'Voordat we live gaan optimaliseren we elke pagina voor zoekmachines: metadata, snelheid, structuur en interne links.',
  },
  {
    nummer: 4,
    title: 'Hosting & onderhoud',
    text: 'Na lancering hosten wij je website en zorgen we voor updates, beveiliging en doorlopende optimalisatie.',
  },
]

export function WebsiteWerkwijze() {
  return (
    <section className="section bg-section-1" aria-labelledby="website-werkwijze-title">
      <Container>
        <div className="text-center">
          <h2 id="website-werkwijze-title" className="heading-section">
            Hoe we het doen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Een bewezen aanpak in vier stappen. Van intake tot doorlopend onderhoud.
          </p>
        </div>

        <div
          className="ranking-werkwijze-timeline"
          aria-label="Tijdlijn met de vier stappen van onze website werkwijze"
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
