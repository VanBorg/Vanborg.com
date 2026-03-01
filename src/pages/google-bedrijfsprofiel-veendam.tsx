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
                We optimaliseren je profiel op inhoud, relevantie en lokale signalen zodat je meer kliks en aanvragen krijgt.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Wat we optimaliseren</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Categorieën en services</h3>
                <p className="mt-2 text-section-body">
                  We zorgen dat je categorieën en services exact kloppen en aansluiten op je doelgroep.
                </p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Profielinhoud</h3>
                <p className="mt-2 text-section-body">
                  Bedrijfsomschrijving, updates, foto&apos;s en posts worden geoptimaliseerd voor lokale relevantie.
                </p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Reviews en vertrouwen</h3>
                <p className="mt-2 text-section-body">
                  We helpen met review-aanpak en consistentie voor sterkere lokale signalen.
                </p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Conversie-focus</h3>
                <p className="mt-2 text-section-body">
                  Doel is niet alleen zichtbaarheid, maar vooral meer telefoontjes, berichten en aanvragen.
                </p>
              </article>
            </div>

            <h3 className="heading-sub mt-10">Aanvullende pagina&apos;s</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li><Link to="/locatie/veendam" className="link-primary">Werkgebied Veendam</Link></li>
              <li><Link to="/marketingbureau-veendam" className="link-primary">Marketingbureau Veendam</Link></li>
              <li><Link to="/prijzen" className="link-primary">Prijzenoverzicht</Link></li>
              <li><Link to="/contact" className="link-primary">Contact</Link></li>
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
