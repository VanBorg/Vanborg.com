import { Container } from '../ui/Container'
import { FadeUpSection } from '../ui/FadeUpSection'
import { LOCATION_PAGES } from '../../data/locations'
import { Link } from 'react-router-dom'

export function AboutUs() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="about-us-title">
      <Container>
        {/* Twee kolommen: foto + tekst */}
        <div className="grid items-start gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">

          <div>
            <div className="about-us-photo">
              <picture>
                <source srcSet="/Afbeeldingen/wie-wij-zijn-profielfoto.webp" type="image/webp" />
                <img
                  src="/Afbeeldingen/wie-wij-zijn-profielfoto.png"
                  alt="Portretfoto van de oprichter van Van Borg"
                  className="about-us-photo__img"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div className="space-y-8 text-neutral-700">
            <h2 id="about-us-title" className="heading-section">
              Wie wij zijn
            </h2>

            <div>
              <h3 className="heading-sub">Van Borg</h3>
              <p className="mt-2 text-section-body">
                Van Borg is een internetmarketingbureau gevestigd in Veendam. We helpen lokale
                bedrijven meer klanten binnenhalen via Google, met diensten als lokale SEO,
                Google Ads, maatwerk websites en AI-oplossingen.
              </p>
              <p className="mt-3 text-section-body">
                Geen groot bureau met accountmanagers die je doorsturen. Je werkt rechtstreeks
                met de mensen die het werk doen, en het resultaat staat altijd centraal.
              </p>
            </div>

            <div>
              <h3 className="heading-sub">Over de oprichter</h3>
              <p className="mt-2 text-section-body">
                Ik ben Nico Sterenborg, eigenaar van Van Borg. Sinds begin 2025 help ik lokale
                ondernemers zichtbaar te worden op Google en die zichtbaarheid om te zetten in
                echte opdrachten.
              </p>
              <p className="mt-3 text-section-body">
                Ik geloof in directe communicatie en concrete resultaten. Geen vage rapporten,
                maar gewoon laten zien wat werkt.
              </p>
            </div>
          </div>

        </div>

        {/* Werkgebied: volle breedte onder de twee kolommen, links naar locatiepagina's */}
        <div className="mt-12 pt-10" style={{ borderTop: '1px solid var(--color-neutral-200)' }}>
          <h3 className="heading-sub text-center" style={{ marginBottom: '0.75rem' }}>
            <Link to="/locatie" className="about-us-werkgebied-title">
              Werkgebied
            </Link>
          </h3>
          <p className="text-section-body text-center">
            We zijn actief door heel Nederland maar werken veel voor bedrijven in:{' '}
            {LOCATION_PAGES.map((loc, i) => (
              <span key={loc.slug}>
                <Link to={`/locatie/${loc.slug}`} className="about-us-locatie-link">
                  {loc.name}
                </Link>
                {i < LOCATION_PAGES.length - 1 ? ', ' : ''}
              </span>
            ))}
            .{' '}
            <Link to="/locatie" className="about-us-locatie-link about-us-locatie-link--alle">
              Alle locaties
            </Link>
          </p>
        </div>
      </Container>
    </FadeUpSection>
  )
}