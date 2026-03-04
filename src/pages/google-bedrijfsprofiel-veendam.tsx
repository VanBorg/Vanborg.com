import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/google-bedrijfsprofiel-veendam'
const SCAN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog'

export default function GoogleBedrijfsprofielVeendamPage() {
  return (
    <>
      <Helmet>
        <title>Google Bedrijfsprofiel Veendam | Van Borg</title>
        <meta
          name="description"
          content="Google Bedrijfsprofiel laten optimaliseren in Veendam? Van Borg helpt met categorieën, services, reviews, posts en lokale zichtbaarheid in Maps."
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
          content="h1: Google Bedrijfsprofiel in Veendam; h2: Wat we optimaliseren, Hoe verloopt een GBP-traject, GBP + website + lokale SEO, Veelgestelde vragen"
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Google Bedrijfsprofiel in Veendam</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Laat je bedrijf beter opvallen in Google Maps en lokale zoekresultaten.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                We optimaliseren je profiel op inhoud, relevantie en lokale signalen zodat je meer weergaven, kliks en
                aanvragen uit Veendam en omgeving krijgt.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-medium text-neutral-700">
                <span className="rounded-full bg-neutral-100 px-3 py-1">Google Maps</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1">Reviews</span>
                <span className="rounded-full bg-neutral-100 px-3 py-1">Lokale vindbaarheid</span>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={SCAN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  GBP-audit aanvragen
                </a>
                <Link to="/ranking" className="btn-secondary">
                  Meer over Lokale SEO
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Wat we optimaliseren */}
        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Wat we optimaliseren</h2>
            <p className="mt-3 text-section-body max-w-2xl">
              Een sterk Google Bedrijfsprofiel zorgt ervoor dat je bedrijf vaker en prominenter wordt getoond in Google
              Maps en lokale zoekresultaten. We pakken alle belangrijke onderdelen in één traject mee.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Categorieën en services</h3>
                <p className="mt-2 text-section-body">
                  We zorgen dat je hoofdcategorie en extra categorieën exact aansluiten op je diensten.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Juiste hoofd- en nevencategorieën voor Veendam</li>
                  <li>• Duidelijke services die je aanbod scherp omschrijven</li>
                  <li>• Structuur die Google helpt je bedrijf beter te plaatsen</li>
                </ul>
              </article>
              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Profielinhoud</h3>
                <p className="mt-2 text-section-body">
                  Teksten, foto&apos;s en posts stemmen we af op lokale zoekintentie en vertrouwen.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Heldere bedrijfsomschrijving met lokale zoekwoorden</li>
                  <li>• Consistente foto&apos;s en visuele stijl</li>
                  <li>• Regelmatige posts met nieuws, acties of cases</li>
                </ul>
              </article>
              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Reviews en vertrouwen</h3>
                <p className="mt-2 text-section-body">
                  We helpen je aan een aanpak voor meer én betere reviews uit Veendam.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Review-strategie die bij jouw bedrijf past</li>
                  <li>• Antwoordtemplates voor een professionele indruk</li>
                  <li>• Focus op consistente, lokale signalen richting Google</li>
                </ul>
              </article>
              <article className="card card-bordered card-elevated p-5">
                <h3 className="heading-sub">Conversie-focus</h3>
                <p className="mt-2 text-section-body">
                  Niet alleen gezien worden, maar vooral meer telefoontjes, route-aanvragen en berichten.
                </p>
                <ul className="mt-3 space-y-1 text-section-body">
                  <li>• Duidelijke call-to-actions en openingstijden</li>
                  <li>• Juiste contactmogelijkheden (bellen, route, website)</li>
                  <li>• Meting van wat daadwerkelijk aanvragen oplevert</li>
                </ul>
              </article>
            </div>

            <h3 className="heading-sub mt-10">Aanvullende pagina&apos;s</h3>
            <ul className="mt-3 space-y-2 text-section-body">
              <li>
                <Link to="/locatie/veendam" className="link-primary">
                  Werkgebied Veendam
                </Link>
              </li>
              <li>
                <Link to="/marketingbureau-veendam" className="link-primary">
                  Marketingbureau Veendam
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

        {/* Traject */}
        <section className="section bg-section-1 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Hoe verloopt een GBP-traject?</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">1. Scan</h3>
                <p className="mt-2 text-section-body">
                  We analyseren je huidige profiel, posities en zichtbaarheid in Google Maps.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">2. Plan</h3>
                <p className="mt-2 text-section-body">
                  Je krijgt een concreet verbeterplan met acties voor profiel, content en reviews.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">3. Implementatie</h3>
                <p className="mt-2 text-section-body">
                  We voeren de optimalisaties uit en begeleiden je bij het verzamelen van reviews.
                </p>
              </div>
              <div className="card card-bordered p-4">
                <h3 className="heading-sub">4. Monitoring</h3>
                <p className="mt-2 text-section-body">
                  We volgen weergaven, kliks en acties en sturen bij waar nodig voor blijvend resultaat.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* GBP + website + lokale SEO */}
        <section className="section bg-section-2 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">GBP, website en lokale SEO werken samen</h2>
            <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="space-y-3 text-section-body">
                <p>
                  Je Google Bedrijfsprofiel is vaak het eerste wat iemand ziet, maar je website en lokale SEO bepalen
                  hoe sterk je totale online positie is. Daarom kijken we altijd naar het geheel.
                </p>
                <p>
                  Voor bedrijven in Veendam combineren we GBP-optimalisatie met een sterke website en lokale
                  landingspagina&apos;s. Zo vergroot je niet alleen je zichtbaarheid, maar ook het aantal aanvragen dat
                  daaruit voortkomt.
                </p>
              </div>
              <div>
                <h3 className="heading-sub">Gerelateerde diensten</h3>
                <ul className="mt-3 space-y-2 text-section-body">
                  <li>
                    <Link to="/ranking" className="link-primary">
                      Google Top 3 ranking (Lokale SEO)
                    </Link>
                  </li>
                  <li>
                    <Link to="/website" className="link-primary">
                      SEO Website
                    </Link>
                  </li>
                  <li>
                    <Link to="/aanbieding" className="link-primary">
                      Aanbieding: Lokale SEO + SEO Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="section bg-section-1 py-10 lg:py-14">
          <Container>
            <h2 className="heading-section">Veelgestelde vragen over GBP in Veendam</h2>
            <div className="mt-6 space-y-6 max-w-3xl">
              <div>
                <h3 className="heading-sub">Blijf ik zelf eigenaar van mijn Google Bedrijfsprofiel?</h3>
                <p className="mt-2 text-section-body">
                  Ja. Jij blijft altijd eigenaar van het profiel. We vragen alleen beheerderstoegang zodat we
                  optimalisaties kunnen doen en meten wat er gebeurt.
                </p>
              </div>
              <div>
                <h3 className="heading-sub">Heb ik een website nodig om dit te laten werken?</h3>
                <p className="mt-2 text-section-body">
                  Een goede website helpt, maar is geen harde eis. Wel zien we dat bedrijven met een sterke website meer
                  uit hun zichtbaarheid in Maps halen. Daarom bieden we ook SEO-websites en een gecombineerde
                  aanbieding.
                </p>
              </div>
              <div>
                <h3 className="heading-sub">Hoe snel zie ik effect in Google Maps?</h3>
                <p className="mt-2 text-section-body">
                  Vaak zien we binnen enkele weken meer weergaven en acties. Structurele groei naar een hogere positie
                  hangt af van concurrentie, review-historie en hoe compleet je profiel is.
                </p>
              </div>
            </div>
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
