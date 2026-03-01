import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/seo-veendam'

export default function SeoVeendamPage() {
  return (
    <>
      <Helmet>
        <title>SEO Veendam | Lokale SEO specialist | Van Borg</title>
        <meta
          name="description"
          content="Zoek je een SEO specialist in Veendam? Van Borg helpt lokale bedrijven met Local SEO, Google Maps zichtbaarheid en content die converteert."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="SEO Veendam | Van Borg" />
        <meta
          property="og:description"
          content="Lokale SEO voor Veendam: betere posities, meer zichtbaarheid in Google Maps en meer aanvragen."
        />
        <meta
          name="document-outline"
          content="h1: seo veendam; h2: local seo aanpak; h3: bewijs en route naar top 3"
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">SEO in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Meer lokale zichtbaarheid in Google Zoeken en Google Maps.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Met Local SEO zorgen we dat jouw bedrijf vaker verschijnt op zoekopdrachten met lokale koopintentie.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Onze Local SEO aanpak</h2>
            <ul className="mt-3 space-y-2 text-section-body">
              <li>Optimalisatie van Google Bedrijfsprofiel en lokale relevantie-signalen.</li>
              <li>Landingspagina&apos;s per dienst/locatie met duidelijke lokale context.</li>
              <li>Doorlopende content- en autoriteitsverbetering met rapportage.</li>
            </ul>

            <h3 className="heading-sub mt-8">Situation → Action → Result</h3>
            <div className="mt-3 space-y-4 text-section-body">
              <p><strong>Situation:</strong> bedrijf is online aanwezig, maar niet zichtbaar in lokale topresultaten.</p>
              <p><strong>Action:</strong> technische en inhoudelijke SEO + versterking van lokale entiteitssignalen.</p>
              <p><strong>Result:</strong> hogere lokale rankings en meer kwalitatieve aanvragen uit de regio.</p>
            </div>

            <h3 className="heading-sub mt-8">Gerelateerde pagina&apos;s</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li><Link to="/google-bedrijfsprofiel-veendam" className="link-primary">Google Bedrijfsprofiel Veendam</Link></li>
              <li><Link to="/marketingbureau-veendam" className="link-primary">Marketingbureau Veendam</Link></li>
              <li><Link to="/ranking" className="link-primary">Google Top 3 ranking</Link></li>
            </ul>
          </Container>
        </section>

        <ContactOptions
          background="bg-section-1"
          title="SEO-scan voor Veendam aanvragen"
          lead="We laten zien welke stappen de grootste impact hebben op zichtbaarheid en leads."
        />
      </main>
      <Footer />
    </>
  )
}
