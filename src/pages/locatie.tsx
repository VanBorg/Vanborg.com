import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'
import {
  getLocationBySlug,
  LOCATION_PAGES,
  type LocationPage,
} from '../data/locations'
import { LocationNetworkMap } from '../components/sections/locatie/LocationNetworkMap'

const BASE_URL = 'https://vanborg.com'
const SCAN_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdbAT6P9ocdaXFZhqNxdgLOvTUBGpv02TAS9LpT6xJmux7wuw/viewform?usp=dialog'

function LocatieContent({ location }: { location: LocationPage }) {
  return (
    <>
      <Helmet>
        <title>Marketing in {location.name} | Van Borg – Google Ranking, Ads &amp; Websites</title>
        <meta
          name="description"
          content={`Van Borg werkt in ${location.name}. ${location.shortDescription} Lokale SEO, Google Ads en conversiegerichte websites voor bedrijven in ${location.name} en omstreken.`}
        />
        <link rel="canonical" href={`${BASE_URL}/locatie/${location.slug}`} />
        <meta property="og:url" content={`${BASE_URL}/locatie/${location.slug}`} />
        <meta
          property="og:title"
          content={`Marketing in ${location.name} | Van Borg`}
        />
        <meta
          property="og:description"
          content={`Van Borg werkt in ${location.name}. ${location.shortDescription}`}
        />
        <meta
          name="document-outline"
          content={`h1: Marketing in ${location.name}; h2: Wij helpen bedrijven in ${location.name}; h3: Onze diensten`}
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl">
              <h1 className="heading-hero">Marketing in {location.name}</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Van Borg werkt hier actief met lokale ondernemers aan zichtbaarheid, aanvragen en omzet.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                {location.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={SCAN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Bedrijfsscan aanvragen
                </a>
                <Link to="/locatie" className="btn-secondary">
                  Alle werkgebieden
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Tekst + kaart */}
        <section className="section bg-section-2 py-10 lg:py-14" aria-labelledby="diensten-title">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Linker kolom: diensten */}
              <div className="space-y-8">
                <div>
                  <h2 id="diensten-title" className="heading-section">
                    Wij helpen bedrijven in {location.name}
                  </h2>
                  <p className="mt-3 text-section-body">
                    Wij ondersteunen bedrijven in {location.name} met lokale SEO,
                    Google Ads en conversiegerichte websites. Zo ben je beter zichtbaar in Google en
                    krijg je meer kwalitatieve aanvragen uit de regio.
                  </p>
                </div>

                <div>
                  <h3 className="heading-sub">Onze diensten</h3>
                  <ul className="mt-3 space-y-2 text-section-body">
                    <li>
                      <Link to="/ranking" className="link-primary font-medium">
                        Google Top 3 ranking
                      </Link>
                      {' – Lokale zichtbaarheid in Google Maps en zoekresultaten.'}
                    </li>
                    <li>
                      <Link to="/ads" className="link-primary font-medium">
                        Google Ads
                      </Link>
                      {' – Gerichte campagnes met focus op kwalitatieve leads.'}
                    </li>
                    <li>
                      <Link to="/website" className="link-primary font-medium">
                        SEO-websites
                      </Link>
                      {' – Snelle websites die vertrouwen opbouwen en converteren.'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Rechter kolom: kaart */}
              <div>
                <p className="text-section-body mb-3 text-neutral-500">
                  Klik op een locatie op de kaart om door te gaan naar die pagina.
                </p>
                <LocationNetworkMap
                  locations={LOCATION_PAGES}
                  activeSlug={location.slug}
                  minHeight={400}
                  fitMode="bounds"
                  maxAutoZoom={12}
                />
              </div>
            </div>
          </Container>
        </section>

        <ContactOptions
          background="bg-section-1"
          title={`Start in ${location.name}`}
          lead="Vraag een gratis bedrijfsscan aan of plan een korte afspraak. Wij helpen je graag verder."
        />
      </main>
      <Footer />
    </>
  )
}

function LocatieNotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-20">
          <Container>
            <div className="max-w-xl mx-auto text-center">
              <h1 className="heading-hero">Locatie niet gevonden</h1>
              <p className="mt-4 text-section-body text-neutral-600">
                De opgevraagde locatiepagina bestaat niet. Bekijk onze{' '}
                <Link to="/locatie" className="text-[var(--accent-green)] underline underline-offset-2">
                  werkgebieden
                </Link>{' '}
                of ga terug naar{' '}
                <Link to="/" className="text-[var(--accent-green)] underline underline-offset-2">
                  home
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function LocatiePage() {
  const { slug } = useParams<{ slug: string }>()
  const location = slug ? getLocationBySlug(slug) : undefined

  if (!location) {
    return <LocatieNotFound />
  }

  return <LocatieContent location={location} />
}
