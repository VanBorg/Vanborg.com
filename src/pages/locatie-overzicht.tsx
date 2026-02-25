import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { LOCATION_PAGES } from '../data/locations'
import { LocationNetworkMap } from '../components/sections/locatie/LocationNetworkMap'

const BASE_URL = 'https://vanborg.com'

export default function LocatieOverzichtPage() {
  return (
    <>
      <Helmet>
        <title>Werkgebieden | Van Borg – Marketing in Veendam, Hoogezand en omstreken</title>
        <meta
          name="description"
          content="Van Borg werkt in heel Oost-Groningen: Veendam, Wildervank, Hoogezand, Sappemeer, Muntendam, Zuidbroek en meer. Google ranking, Google Ads en SEO-websites voor lokale bedrijven."
        />
        <link rel="canonical" href={`${BASE_URL}/locatie`} />
        <meta property="og:url" content={`${BASE_URL}/locatie`} />
        <meta
          property="og:title"
          content="Werkgebieden | Van Borg – Marketing in Oost-Groningen"
        />
        <meta
          property="og:description"
          content="Van Borg werkt in heel Oost-Groningen: Veendam, Wildervank, Hoogezand, Sappemeer en meer. Google ranking, Google Ads en SEO-websites."
        />
        <meta
          name="document-outline"
          content="h1: Werkgebieden; h2: Waar wij werken; h3: per locatie"
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-16">
          <Container>
            <div className="max-w-3xl">
              <h1 className="heading-hero">Werkgebieden in Oost-Groningen</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Wij werken in alle genoemde plaatsen uit onze footer. Klik op de kaart of op een locatie om direct naar de bijbehorende pagina te gaan.
              </h2>
              <p className="text-section-body mt-4 text-neutral-600">
                Van Borg is gevestigd in Veendam en helpt ondernemers in de regio met Google Top 3 ranking, Google Ads en SEO-websites.
                Alle locatiepagina&apos;s zijn onderling verbonden zodat bezoekers snel kunnen doorklikken naar omliggende werkgebieden.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-14" aria-labelledby="waar-wij-werken">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 id="waar-wij-werken" className="heading-section">
                  Waar wij werken
                </h2>
                <p className="mt-3 text-section-body">
                  Gebruik de interactieve kaart om direct te navigeren naar een locatiepagina.
                  Elke pagina bevat lokale context, diensten en links naar nabijgelegen plaatsen.
                </p>
                <h3 className="heading-sub mt-6">Snel naar populaire locaties</h3>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {LOCATION_PAGES.slice(0, 6).map((loc) => (
                    <li key={loc.slug}>
                      <Link to={`/locatie/${loc.slug}`} className="btn-secondary btn-sm">
                        {loc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <LocationNetworkMap locations={LOCATION_PAGES} minHeight={420} fitMode="bounds" maxAutoZoom={12} />
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {LOCATION_PAGES.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locatie/${loc.slug}`}
                    className="block rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors hover:border-[var(--accent-green)] hover:bg-neutral-50"
                  >
                    <h3 className="heading-sub">{loc.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500">{loc.regionHint}</p>
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                      {loc.shortDescription}
                    </p>
                    <span className="mt-2 inline-block text-sm text-[var(--accent-green)] font-medium">
                      Bekijk pagina →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
