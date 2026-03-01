import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/google-bedrijfsprofiel-veendam'

export default function GoogleBedrijfsprofielVeendamPage() {
  return (
    <>
      <Helmet>
        <title>Google Bedrijfsprofiel Veendam | Van Borg</title>
        <meta
          name="description"
          content="Google Bedrijfsprofiel laten optimaliseren in Veendam? Van Borg helpt met categorieen, services, reviews, posts en lokale zichtbaarheid in Maps."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Google Bedrijfsprofiel Veendam | Van Borg" />
        <meta
          property="og:description"
          content="Optimalisatie van je Google Bedrijfsprofiel voor meer zichtbaarheid en aanvragen uit Veendam en omgeving."
        />
        <meta
          name="document-outline"
          content="h1: google bedrijfsprofiel veendam; h2: optimalisatiepunten; h3: bewijs en vervolgstappen"
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Google Bedrijfsprofiel in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Laat je bedrijf beter opvallen in Google Maps en lokale zoekresultaten.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Een sterk bedrijfsprofiel helpt niet alleen ranking, maar ook vertrouwen en conversie.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Wat we optimaliseren</h2>
            <ul className="mt-3 space-y-2 text-section-body">
              <li>Categorieen, services en bedrijfsomschrijving met lokale relevantie.</li>
              <li>Foto&apos;s, updates en posts voor actualiteit en betrokkenheid.</li>
              <li>Review-aanpak en NAP-consistentie voor sterkere lokale signalen.</li>
            </ul>

            <h3 className="heading-sub mt-8">Situation → Action → Result</h3>
            <div className="mt-3 space-y-4 text-section-body">
              <p><strong>Situation:</strong> profiel staat online maar genereert weinig zichtbaarheid of kliks.</p>
              <p><strong>Action:</strong> profielstructuur, content, reviews en lokale signalen worden aangescherpt.</p>
              <p><strong>Result:</strong> betere zichtbaarheid in Maps, meer profielinteracties en meer aanvragen.</p>
            </div>

            <h3 className="heading-sub mt-8">Aanvullende pagina&apos;s</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li><Link to="/seo-veendam" className="link-primary">SEO Veendam</Link></li>
              <li><Link to="/marketingbureau-veendam" className="link-primary">Marketingbureau Veendam</Link></li>
              <li><Link to="/locatie/veendam" className="link-primary">Werkgebied Veendam</Link></li>
            </ul>
          </Container>
        </section>

        <ContactOptions
          background="bg-section-1"
          title="GBP-audit voor Veendam"
          lead="Ontvang een concrete verbeterlijst voor je Google Bedrijfsprofiel."
        />
      </main>
      <Footer />
    </>
  )
}
