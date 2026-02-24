import { Container } from '../../ui/Container'

const voordelen = [
  {
    title: 'Zichtbaar in de Top 3',
    text: 'We optimaliseren je Google Business Profile en lokale signalen zodat je binnen 90 dagen in de Top 3 staat van Google Zoeken en Maps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Website die converteert',
    text: 'Een snelle, SEO-geoptimaliseerde website met duidelijke CTA\u2019s en leadcapture. Gebouwd om bezoekers om te zetten in klanten.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    title: 'Alles uit \u00e9\u00e9n hand',
    text: 'Geen gedoe met losse leveranciers. Ranking en website worden als \u00e9\u00e9n geheel opgezet, zodat alles naadloos op elkaar aansluit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
    ),
  },
  {
    title: 'Meetbaar resultaat',
    text: 'Wekelijkse heatmaps, maandelijkse rapportages en concrete cijfers. Je ziet precies wat er verbetert en wat elke euro oplevert.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
]

export function SaleVoordelen() {
  return (
    <section className="section bg-section-2" aria-labelledby="sale-voordelen-title">
      <Container>
        <div className="text-center">
          <h2 id="sale-voordelen-title" className="heading-section">
            Waarom de bundel?
          </h2>
          <p className="mt-3 text-section-lead">
            Het beste van ranking en een professionele website, samen in &eacute;&eacute;n pakket.
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
