import { Container } from '../ui/Container'
import { FadeUpSection } from '../ui/FadeUpSection'

const services = [
  {
    id: 'lokale-ranking',
    title: 'Lokale Top 3 Google Ranking',
    description:
      'Kom bovenaan in Google Maps en lokale zoekresultaten voor jouw stad. We optimaliseren je Google Business Profiel, bouwen autoriteit op met citations en zorgen dat jouw bedrijf verschijnt op het moment dat klanten zoeken.',
    align: 'left' as const,
    image: '/Afbeeldingen/top-3-google-ranking.png',
    imageAlt: 'Lokale vindbaarheid in Google – Top 3 Google ranking',
    href: '/ranking',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description:
      'Direct bovenaan Google, nog voordat organische resultaten beginnen. We beheren je campagne volledig: van zoekwoorden en biedstrategie tot advertentieteksten die klikken omzetten in klanten.',
    align: 'right' as const,
    image: '/Afbeeldingen/top-google-ads-campaigns.png',
    imageAlt: 'Top Google Ads campagnes',
    href: '/ads',
  },
  {
    id: 'seo-websites',
    title: 'Websites',
    description:
      'Maatwerk websites gebouwd in Cursor met schone, snelle code. Geen templates, geen pagebuilders. Elke website is technisch geoptimaliseerd voor Google en ontworpen om bezoekers om te zetten in opdrachten.',
    align: 'left' as const,
    image: '/Afbeeldingen/seo-sales-websites.png',
    imageAlt: 'SEO + Sales websites',
    href: '/website',
  },
]

export function WatWijDoen() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="wat-wij-doen-title">
      <Container>
        <div className="wat-wij-doen-header text-center">
          <h2 id="wat-wij-doen-title" className="heading-section">
            Wat wij doen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Professionals in lokale zichtbaarheid op Google.
          </p>
        </div>

        <div className="wat-wij-doen-timeline">
          <div className="wat-wij-doen-timeline__line" aria-hidden>
            <svg
              className="wat-wij-doen-timeline__svg"
              viewBox="0 0 4 300"
              preserveAspectRatio="none"
            >
              <path
                className="wat-wij-doen-timeline__path"
                d="M 2 0 L 2 300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className={`wat-wij-doen-timeline__item wat-wij-doen-timeline__item--${service.align}`}
            >
              {service.align === 'left' ? (
                <>
                  <div className="wat-wij-doen-timeline__card">
                    <div className="wat-wij-doen-timeline__card-inner">
                      <div className="wat-wij-doen-timeline__media">
                        <div className="image-doos">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="image-doos__img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="wat-wij-doen-timeline__content">
                        <h3 className="heading-sub wat-wij-doen-timeline__title">
                          <a href={service.href} className="text-[var(--accent-green)] underline underline-offset-4">
                            {service.title}
                          </a>
                        </h3>
                        <p className="wat-wij-doen-timeline__description">{service.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="wat-wij-doen-timeline__dot" aria-hidden />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="wat-wij-doen-timeline__dot" aria-hidden />
                  <div className="wat-wij-doen-timeline__card">
                    <div className="wat-wij-doen-timeline__card-inner">
                      <div className="wat-wij-doen-timeline__media">
                        <div className="image-doos">
                          <img
                            src={service.image}
                            alt={service.imageAlt}
                            className="image-doos__img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="wat-wij-doen-timeline__content">
                        <h3 className="heading-sub wat-wij-doen-timeline__title">
                          <a href={service.href} className="text-[var(--accent-green)] underline underline-offset-4">
                            {service.title}
                          </a>
                        </h3>
                        <p className="wat-wij-doen-timeline__description">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </FadeUpSection>
  )
}