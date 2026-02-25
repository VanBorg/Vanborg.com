import { Container } from '../../ui/Container'

export function PrivacyHero() {
  return (
    <section className="section bg-section-1 py-12 lg:py-20">
      <Container>
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="heading-hero">
            Privacybeleid
          </h1>
          <h2 className="heading-hero-subtitle mt-3">
            Hoe wij omgaan met uw persoonsgegevens – AVG-conform en transparant.
          </h2>
          <p className="text-section-body mt-3 text-neutral-500">
            Wij verwerken uw gegevens zorgvuldig en alleen voor de doeleinden die u mag verwachten. Vragen?{' '}
            <a href="#contact" className="text-[var(--accent-green-light)] hover:underline">
              Neem contact op
            </a>.
          </p>
        </div>
      </Container>
    </section>
  )
}
