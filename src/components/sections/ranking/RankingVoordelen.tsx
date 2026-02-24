import { Container } from '../../ui/Container'

const voordelen = [
  {
    title: 'Meer zichtbaarheid',
    text: 'Bedrijven op positie 4 of lager krijgen minder dan 5% van de kliks. In de Top 3 staan betekent dat het overgrote deel van de zoekers jou ziet — en niet je concurrent.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Meer telefoontjes en aanvragen',
    text: 'Wie in de Top 3 van Google Maps staat, wordt direct gebeld of aangevraagd via de bedrijfsvermelding. Zonder tussenkomst van een website — de lead komt rechtstreeks binnen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: 'Meer vertrouwen',
    text: 'Consumenten associëren een hoge Google-positie met betrouwbaarheid. Een Top 3-notering met sterke reviews werkt als sociaal bewijs en verlaagt de drempel om contact op te nemen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Meetbaar resultaat',
    text: 'Je ontvangt wekelijks een heatmap die per zoekwoord en locatie laat zien op welke positie je staat. Geen vage beloftes, maar harde data waarmee je precies ziet wat er verbetert.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
]

export function RankingVoordelen() {
  return (
    <section className="section bg-section-2" aria-labelledby="ranking-voordelen-title">
      <Container>
        <div className="text-center">
          <h2 id="ranking-voordelen-title" className="heading-section">
            Waarom een Top 3-positie op Google?
          </h2>
          <p className="mt-3 text-section-lead">
            Het verschil tussen gevonden worden en onzichtbaar blijven.
          </p>
        </div>

        <div className="mt-10 ranking-voordelen-grid">
          {voordelen.map((v) => (
            <div key={v.title} className="card card-bordered ranking-voordelen-card">
              {v.icon}
              <h3 className="heading-sub mt-3">{v.title}</h3>
              <p className="text-section-body mt-1">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
