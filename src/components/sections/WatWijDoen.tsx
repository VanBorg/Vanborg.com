import { Container } from '../ui/Container'

const services = [
  {
    id: 'lokale-ranking',
    title: 'Lokale Ranking',
    description:
      'Wij zorgen dat je bedrijf in de lokale Top 3 van Google verschijnt. Zo vindt je doelgroep je wanneer ze zoeken op diensten in jouw regio.',
    align: 'left' as const,
    image: '/Afbeeldingen/top-3-google-ranking.png',
    imageAlt: 'Lokale vindbaarheid in Google – Top 3 Google ranking',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description:
      'Met gerichte advertenties sta je direct bovenaan in Google. Ideaal voor snelle zichtbaarheid en campagnes voor specifieke zoektermen.',
    align: 'right' as const,
    image: '/Afbeeldingen/top-google-ads-campaigns.png',
    imageAlt: 'Top Google Ads campagnes',
  },
  {
    id: 'seo-websites',
    title: 'SEO-websites',
    description:
      'Een website die goed gevonden wordt: snel, duidelijk en geoptimaliseerd voor zoekmachines. De basis voor een sterke online aanwezigheid.',
    align: 'left' as const,
    image: '/Afbeeldingen/seo-sales-websites.png',
    imageAlt: 'SEO + Sales websites',
  },
]

export function WatWijDoen() {
  return (
    <section className="section bg-section-1" aria-labelledby="wat-wij-doen-title">
      <Container>
        <div className="wat-wij-doen-header text-center">
          <h2
            id="wat-wij-doen-title"
            className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"
          >
            Wat wij doen
          </h2>
          <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
            Wij helpen lokale bedrijven zichtbaar te worden met drie pijlers.
          </p>
        </div>

        <div className="wat-wij-doen-timeline">
          {/* Zigzag line (SVG) – visible on desktop */}
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
                        <h3 className="wat-wij-doen-timeline__title">{service.title}</h3>
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
                        <h3 className="wat-wij-doen-timeline__title">{service.title}</h3>
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
    </section>
  )
}
