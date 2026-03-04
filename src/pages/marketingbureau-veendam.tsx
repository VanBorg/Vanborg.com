import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/marketingbureau-veendam'
const SCAN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog'

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
        <meta
          name="document-outline"
          content="h1: Internetmarketing in Veendam; h2: Waarom een marketingbureau in Veendam; h3: Onze diensten, Werkwijze, Veelgestelde vragen"
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Internetmarketing in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Voor bedrijven die beter zichtbaar willen worden op Google.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Van Borg werkt vanuit Veendam met als primaire categorie <strong>Internetmarketing</strong> en als extra
                categorie <strong>Marketingconsultant</strong>. We helpen ondernemers in Veendam en omliggende dorpen
                met meer zichtbaarheid, meer aanvragen en een betere online positie.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-medium text-neutral-700">
                <span className="rounded-full bg-neutral-100 px-3 py-1">Lokale SEO Veendam</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1">Google Ads campagnes</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1">SEO-websites</span>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={SCAN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Bedrijfsscan aanvragen
                </a>
                <Link to="/prijzen" className="btn-secondary">
                  Prijzen bekijken
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Waarom een marketingbureau in Veendam? */}
        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-section">Waarom een marketingbureau in Veendam?</h2>
              <p className="mt-3 text-section-body">
                Veendam en omgeving kennen veel lokale ondernemers: van dienstverleners en winkels tot specialisten die
                vooral op aanbevelingen draaien. Steeds meer klanten beginnen hun zoektocht echter in Google.
              </p>
              <p className="mt-3 text-section-body">
                Als marketingbureau in Veendam richten wij ons op drie dingen: beter gevonden worden, meer relevante
                aanvragen en inzicht in wat online wel en niet werkt. Geen vage rapporten, maar concrete stappen en
                meetbaar resultaat.
              </p>
              <p className="mt-3 text-section-body">
                We werken met korte lijnen: je hebt één aanspreekpunt die zowel je lokale SEO, Google Ads als website
                begrijpt en alles op elkaar afstemt.
              </p>
            </div>
          </Container>
        </section>

        {/* Onze diensten in Veendam */}
        <section className="section bg-section-1 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Onze diensten in Veendam</h2>
            <p className="mt-3 text-section-body max-w-2xl">
              We combineren Lokale SEO, Google Ads en SEO-websites tot één geheel. Hieronder zie je wat elke dienst
              concreet oplevert voor bedrijven in Veendam.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Lokale SEO</h3>
                <p className="mt-2 text-section-body">
                  Top 3 zichtbaarheid in Google Maps en lokale zoekresultaten.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Optimalisatie van je Google Bedrijfsprofiel</li>
                  <li>• Locatie- en servicepagina&apos;s voor Veendam en omgeving</li>
                  <li>• Sterke reviews en lokale signalen voor meer vertrouwen</li>
                </ul>
                <p className="mt-3 text-section-body">
                  <strong>Prijs:</strong> € 1.499 –{' '}
                  <Link to="/ranking" className="link-primary">
                    bekijk Lokale SEO
                  </Link>
                </p>
              </article>

              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Google Ads</h3>
                <p className="mt-2 text-section-body">
                  Gerichte advertenties voor directe zichtbaarheid in Veendam en omliggende plaatsen.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Campagnes gericht op jouw diensten en regio</li>
                  <li>• Doorlopende optimalisatie op kliks, kosten en aanvragen</li>
                  <li>• Inzicht in welke zoekwoorden nieuwe klanten opleveren</li>
                </ul>
                <p className="mt-3 text-section-body">
                  <strong>Prijs:</strong> Vanaf € 499 p/m –{' '}
                  <Link to="/ads" className="link-primary">
                    bekijk Google Ads
                  </Link>
                </p>
              </article>

              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">SEO Website</h3>
                <p className="mt-2 text-section-body">
                  Technisch sterke website die vertrouwen wekt en beter scoort in Google.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Maatwerk website of landingspagina&apos;s voor Veendam</li>
                  <li>• Geoptimaliseerde teksten, titels en koppen voor lokale zoektermen</li>
                  <li>• Snel en mobielvriendelijk, klaar voor conversie</li>
                </ul>
                <p className="mt-3 text-section-body">
                  <strong>Prijs:</strong> Vanaf € 999 –{' '}
                  <Link to="/website" className="link-primary">
                    bekijk SEO Website
                  </Link>
                </p>
              </article>

              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Aanbieding: Lokale SEO + Website</h3>
                <p className="mt-2 text-section-body">
                  Gecombineerd traject waarin we zowel je Google-ranking als website aanpakken.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Eén aanspreekpunt voor beide trajecten</li>
                  <li>• Website en Google-profiel sluiten perfect op elkaar aan</li>
                  <li>• Scherpe bundelprijs ten opzichte van losse diensten</li>
                </ul>
                <p className="mt-3 text-section-body">
                  <strong>Prijs:</strong> € 2.999 –{' '}
                  <Link to="/aanbieding" className="link-primary">
                    bekijk de aanbieding
                  </Link>
                </p>
              </article>
            </div>

            <h3 className="heading-sub mt-10">Directe routes</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li>
                <Link to="/locatie/veendam" className="link-primary">
                  Locatiepagina Veendam
                </Link>
              </li>
              <li>
                <Link to="/google-bedrijfsprofiel-veendam" className="link-primary">
                  Google Bedrijfsprofiel Veendam
                </Link>
              </li>
              <li>
                <Link to="/prijzen" className="link-primary">
                  Prijzenoverzicht
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </Container>
        </section>

        {/* Werkwijze */}
        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Werkwijze voor bedrijven in Veendam</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">1. Korte scan</h3>
                <p className="mt-2 text-section-body">
                  We bekijken je huidige zichtbaarheid in Google, je website en je Google Bedrijfsprofiel.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">2. Plan op maat</h3>
                <p className="mt-2 text-section-body">
                  Je ontvangt een concreet voorstel met focus op de snelste winst voor jouw bedrijf in Veendam.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">3. Uitvoering</h3>
                <p className="mt-2 text-section-body">
                  We richten campagnes, content en techniek in en stemmen alles af op jouw doelen.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">4. Rapportage</h3>
                <p className="mt-2 text-section-body">
                  Je krijgt inzicht in posities, kliks en aanvragen zodat je precies ziet wat het oplevert.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="section bg-section-1 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Veelgestelde vragen over internetmarketing in Veendam</h2>
            <div className="mt-6 space-y-6 max-w-3xl">
              <div>
                <h3 className="heading-sub">Voor welke bedrijven in Veendam is dit geschikt?</h3>
                <p className="mt-2 text-section-body">
                  We werken vooral voor lokale dienstverleners, specialisten en MKB-bedrijven die klanten uit Veendam
                  en omliggende dorpen aantrekken. Denk aan installateurs, adviseurs, zorg, retail en zakelijke
                  dienstverleners.
                </p>
              </div>
              <div>
                <h3 className="heading-sub">Hoe snel zie ik resultaat in Google?</h3>
                <p className="mt-2 text-section-body">
                  Bij sommige bedrijven zien we binnen enkele weken meer weergaven en kliks. Structurele stijging in
                  posities en aanvragen kost meestal 2–3 maanden, afhankelijk van concurrentie en huidige situatie.
                </p>
              </div>
              <div>
                <h3 className="heading-sub">Moet ik een lang contract afsluiten?</h3>
                <p className="mt-2 text-section-body">
                  Nee. We werken het liefst met duidelijke trajecten per fase. Je weet vooraf wat we doen, wat het
                  kost en wat we samen willen bereiken. Daarna kun je verlengen of afronden.
                </p>
              </div>
            </div>
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
