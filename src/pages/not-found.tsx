import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'

const CANONICAL = 'https://vanborg.com/404'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Pagina niet gevonden | Van Borg</title>
        <meta
          name="description"
          content="De opgevraagde pagina bestaat niet of is verplaatst. Ga terug naar de homepagina of bekijk onze diensten."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Pagina niet gevonden | Van Borg" />
        <meta
          property="og:description"
          content="De opgevraagde pagina bestaat niet of is verplaatst."
        />
      </Helmet>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-20">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <h1 className="heading-hero">Pagina niet gevonden</h1>
              <p className="mt-4 text-section-body text-neutral-600">
                Deze URL bestaat niet. Ga terug naar{' '}
                <Link to="/" className="text-[var(--accent-green)] underline underline-offset-2">
                  de homepage
                </Link>{' '}
                of bekijk onze{' '}
                <Link to="/locatie" className="text-[var(--accent-green)] underline underline-offset-2">
                  werkgebieden
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

