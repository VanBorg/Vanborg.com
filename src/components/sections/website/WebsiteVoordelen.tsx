import { Container } from '../../ui/Container'

const voordelen = [
  {
    title: 'SEO-geoptimaliseerd',
    text: 'Elke pagina is technisch en inhoudelijk geoptimaliseerd voor zoekmachines. Van metadata tot interne linkstructuur, alles klopt.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Conversiegerichte opzet',
    text: 'Duidelijke CTA\u2019s, logische navigatie en leadcapture op de juiste plekken. Je website is ingericht voor maximale conversie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
  {
    title: 'Razendsnelle laadtijd',
    text: 'Gebouwd met React en Tailwind voor optimale Core Web Vitals. Een snelle website scoort hoger in Google en houdt bezoekers vast.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Toekomstbestendig',
    text: 'Moderne technieken (React, TypeScript, Tailwind, CSS) zorgen ervoor dat je website jarenlang meegaat en makkelijk uit te breiden is.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export function WebsiteVoordelen() {
  return (
    <section className="section bg-section-2" aria-labelledby="website-voordelen-title">
      <Container>
        <div className="text-center">
          <h2 id="website-voordelen-title" className="heading-section">
            Waarom een SEO-website?
          </h2>
          <p className="mt-3 text-section-lead">
            De basis voor een sterke online aanwezigheid die klanten oplevert.
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
