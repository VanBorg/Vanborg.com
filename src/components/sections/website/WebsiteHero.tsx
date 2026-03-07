import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'

const CALENDLY_URL =
  'https://calendly.com/vanborglimited/van_borg_sales_call'

export function WebsiteHero() {
  return (
    <section id="page-hero" className="section bg-section-1 py-12 lg:py-20">
      <Container>
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="heading-hero">
            Website op maat
          </h1>
          <h2 className="heading-hero-subtitle mt-3">
          Volledig custom gebouwd. Geen templates, geen pagebuilders.
          </h2>
          <p className="text-section-body mt-3 text-neutral-500">
            Snelle, moderne code die precies doet wat jij nodig hebt.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Bespreek mijn project
            </a>
            <Link to="/prijzen#prijzen-tabel" className="btn-secondary">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
