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
        <title>Internetmarketing Veendam | Van Borg</title>
        <meta
          name="description"
          content="Van Borg helpt bedrijven in Veendam met internetmarketing: Lokale SEO, Google Ads en SEO Website. Focus op zichtbaarheid, leads en groei."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Internetmarketing Veendam | Van Borg" />
        <meta
          property="og:description"
          content="Internetmarketing in Veendam met focus op Lokale SEO, Google Ads en SEO Website."
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Internetmarketing in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Voor bedrijven die beter zichtbaar willen worden op Google.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Van Borg werkt vanuit Veendam met als primaire categorie <strong>Internetmarketing</strong> en als extra categorie <strong>Marketingconsultant</strong>.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Onze diensten in Veendam</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Lokale SEO</h3>
                <p className="mt-2 text-section-body">Top 3 zichtbaarheid in Google Maps en lokale zoekresultaten.</p>
                <p className="mt-2 text-section-body"><strong>Prijs:</strong> € 1.499</p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Google Ads</h3>
                <p className="mt-2 text-section-body">Gerichte advertenties voor directe zichtbaarheid.</p>
                <p className="mt-2 text-section-body"><strong>Prijs:</strong> Vanaf € 499</p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">SEO Website</h3>
                <p className="mt-2 text-section-body">Technisch sterke website die beter scoort in Google.</p>
                <p className="mt-2 text-section-body"><strong>Prijs:</strong> Vanaf € 999</p>
              </article>
              <article className="card card-bordered p-5">
                <h3 className="heading-sub">Aanbieding</h3>
                <p className="mt-2 text-section-body">Lokale SEO + SEO Website in één gecombineerd traject.</p>
                <p className="mt-2 text-section-body"><strong>Prijs:</strong> € 2.999</p>
              </article>
            </div>

            <h3 className="heading-sub mt-10">Directe routes</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li><Link to="/locatie/veendam" className="link-primary">Locatiepagina Veendam</Link></li>
              <li><Link to="/google-bedrijfsprofiel-veendam" className="link-primary">Google Bedrijfsprofiel Veendam</Link></li>
              <li><Link to="/prijzen" className="link-primary">Prijzenoverzicht</Link></li>
              <li><Link to="/contact" className="link-primary">Contact</Link></li>
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
