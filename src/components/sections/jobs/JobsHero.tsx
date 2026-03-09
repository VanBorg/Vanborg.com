import { Container } from '../../ui/Container'

export function JobsHero() {
  return (
    <section id="page-hero" className="section bg-section-1 py-12 lg:py-20">
      <Container>
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="heading-hero whitespace-nowrap">Verdien wat je waard bent</h1>
          <h2 className="heading-hero-subtitle mt-3">
            100% commissie. Geen plafond. Geen excuses.
          </h2>
          <p className="text-section-body mt-3 text-neutral-500">
            Elke deal die je binnenhaalt is recurring, je bouwt maandelijks passief inkomen op.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#vacatures" className="btn-primary">
              Bekijk vacatures
            </a>
            <a href="#contact" className="btn-secondary">
              Neem contact op
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}