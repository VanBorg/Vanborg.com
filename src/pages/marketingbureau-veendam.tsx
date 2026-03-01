import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/marketingbureau-veendam'

export default function MarketingbureauVeendamPage() {
  return (
    <>
      <Helmet>
        <title>Marketingbureau Veendam | Van Borg</title>
        <meta
          name="description"
          content="Van Borg is een marketingbureau uit Veendam voor lokale bedrijven. Wij helpen met Google Top 3 ranking, Google Ads en SEO-websites die meer aanvragen opleveren."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Marketingbureau Veendam | Van Borg" />
        <meta
          property="og:description"
          content="Lokaal marketingbureau in Veendam voor meetbare groei: ranking, advertenties en websites."
        />
        <meta
          name="document-outline"
          content="h1: marketingbureau veendam; h2: voor wie en aanpak; h3: bewijs en veelgestelde vragen"
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Marketingbureau in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Voor lokale ondernemers die zichtbaar willen zijn op het moment dat klanten zoeken.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Van Borg werkt vanuit Veendam en focust op drie dingen: lokale vindbaarheid, kwalitatieve leads en
                conversie op je website.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Voor wie wij werken</h2>
            <p className="mt-3 text-section-body">
              Wij werken vooral met lokale dienstverleners en mkb-bedrijven in Veendam en omgeving. Of je nu meer
              telefoontjes wilt, meer offerte-aanvragen of betere online zichtbaarheid: de aanpak is gericht op
              meetbaar resultaat.
            </p>

            <h3 className="heading-sub mt-8">Bewijsgerichte aanpak</h3>
            <div className="mt-3 space-y-4 text-section-body">
              <p><strong>Situatie:</strong> te weinig lokale zichtbaarheid in Maps en organisch.</p>
              <p><strong>Actie:</strong> combinatie van Local SEO, Google Ads en conversiegerichte pagina&apos;s.</p>
              <p><strong>Resultaat:</strong> hogere posities, meer relevante aanvragen en betere ROI-sturing.</p>
            </div>

            <h3 className="heading-sub mt-8">Directe routes</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li><Link to="/seo-veendam" className="link-primary">SEO Veendam</Link></li>
              <li><Link to="/google-bedrijfsprofiel-veendam" className="link-primary">Google Bedrijfsprofiel Veendam</Link></li>
              <li><Link to="/locatie/veendam" className="link-primary">Locatiepagina Veendam</Link></li>
            </ul>
          </Container>
        </section>

        <ContactOptions
          background="bg-section-1"
          title="Wil je lokaal groeien in Veendam?"
          lead="Vraag een korte scan aan en we laten zien waar de snelste winst zit."
        />
      </main>
      <Footer />
    </>
  )
}
