import { Container } from '../../ui/Container'

const SCAN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfbsa-4CWu9Rh0yBDLrVeXYbtXfHlcBJaxqYOQGWeKPDriaMg/viewform?usp=publish-editor'
const CALENDLY_URL =
  'https://calendly.com/vanborglimited/van_borg_sales_call'

export function AdsHero() {
  return (
    <section className="section bg-section-1 py-12 lg:py-20">
      <Container>
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="heading-hero">
            Google Ads
          </h1>
          <h2 className="heading-hero-subtitle mt-3">
            Direct bovenaan in Google met gerichte advertenties.
          </h2>
          <p className="text-section-body mt-3 text-neutral-500">
            Ideaal voor snelle zichtbaarheid en campagnes voor specifieke zoektermen.
            Leadgerichte campagnes afgestemd op jouw regio en diensten.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={SCAN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check mijn huidige ranking
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Bespreek mijn kansen
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
