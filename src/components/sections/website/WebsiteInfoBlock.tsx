import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

const items = [
  {
    title: '100% maatwerk',
    text: 'Elke website wordt volledig op maat gebouwd. Geen templates, geen pagebuilders, geen beperkingen.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Nieuwste technologie',
    text: 'Gebouwd met Cursor.com en de snelste frameworks. Moderne tooling voor een toekomstbestendig resultaat.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9l6 6" />
        <path d="M15 9l-6 6" />
      </svg>
    ),
  },
  {
    title: 'React, TypeScript & Tailwind',
    text: 'Een razendsnelle stack die zorgt voor uitstekende prestaties, schaalbaarheid en onderhoudbaarheid.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Mobile-first',
    text: 'Elke website wordt standaard ontworpen en gebouwd vanuit mobiel. Perfect op elk scherm, zonder compromis.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Koppelingen & integraties',
    text: 'Koppel je website aan externe tools, API\'s en workflows. Van CRM tot boekingssysteem, alles is mogelijk.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: 'Design, bouw, hosting & onderhoud',
    text: 'Wij regelen alles: van ontwerp en ontwikkeling tot hosting en doorlopend onderhoud. Jij hoeft nergens naar om te kijken.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="ranking-voordelen__icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export function WebsiteInfoBlock() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="website-info-title">
      <Container>
        <div className="text-center">
          <h2 id="website-info-title" className="heading-section">
            Wat wij bouwen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
          Van SEO-website tot crypto website, alles volledig custom.
          </p>
        </div>

        <div className="mt-10 ranking-voordelen-grid">
          {items.map((item) => (
            <div
              key={item.title}
              className="card card-bordered card-elevated ranking-voordelen-card"
            >
              <div className="ranking-voordelen-card__header">
                {item.icon}
                <h3 className="heading-sub ranking-voordelen-card__title">{item.title}</h3>
              </div>
              <p className="text-section-body ranking-voordelen-card__text">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </FadeUpSection>
  )
}
