import { Container } from '../../ui/Container'

const voordelen = [
  {
    title: 'Direct zichtbaar',
    text: 'Met Google Ads sta je direct bovenaan de zoekresultaten. Geen maanden wachten, vanaf dag één zichtbaar voor je doelgroep.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Gericht op leads',
    text: 'We richten campagnes in op hoog-intentie zoekwoorden in jouw regio. Zo bereik je alleen mensen die op zoek zijn naar jouw dienst.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Schaalbaar budget',
    text: 'Je bepaalt zelf hoeveel je uitgeeft. Wij zorgen dat elke euro maximaal rendeert door continu te optimaliseren op conversie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M17 8a6 6 0 1 0 0 8M2 10h12M2 14h12" />
      </svg>
    ),
  },
  {
    title: 'Meetbare ROI',
    text: 'Je ziet precies wat elke campagne oplevert: kliks, conversies, kosten per lead. Geen vage beloftes, maar harde data waarop we bijsturen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
]

export function AdsVoordelen() {
  return (
    <section className="section bg-section-2" aria-labelledby="ads-voordelen-title">
      <Container>
        <div className="text-center">
          <h2 id="ads-voordelen-title" className="heading-section">
            Waarom Google Ads?
          </h2>
          <p className="mt-3 text-section-lead">
            Snel, gericht en meetbaar. De snelste weg naar meer klanten.
          </p>
        </div>

        <div className="mt-10 ranking-voordelen-grid">
          {voordelen.map((v) => (
            <div
              key={v.title}
              className="card card-bordered card-elevated ranking-voordelen-card"
            >
              <div className="ranking-voordelen-card__header">
                {v.icon}
                <h3 className="heading-sub ranking-voordelen-card__title">{v.title}</h3>
              </div>
              <p className="text-section-body ranking-voordelen-card__text">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
