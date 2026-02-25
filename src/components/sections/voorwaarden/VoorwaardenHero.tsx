import { Container } from '../../ui/Container'

export function VoorwaardenHero() {
  return (
    <section className="section bg-section-1 py-12 lg:py-20">
      <Container>
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="heading-hero">
            Algemene voorwaarden
          </h1>
          <h2 className="heading-hero-subtitle mt-3">
            De voorwaarden voor onze diensten: Local SEO, Google Ads en SEO-websites.
          </h2>
          <p className="text-section-body mt-3 text-neutral-500">
            Wij werken transparant en volgens de Nederlandse wet- en regelgeving. Vragen?{' '}
            <a href="#contact" className="text-[var(--accent-green-light)] hover:underline">
              Neem contact op
            </a>.
          </p>
        </div>
      </Container>
    </section>
  )
}
