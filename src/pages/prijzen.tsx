import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { PrijzenHero } from '../components/sections/prijzen/PrijzenHero'
import { PrijzenTabel } from '../components/sections/prijzen/PrijzenTabel'
import { ProblemOutcome } from '../components/sections/ProblemOutcome'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/prijzen'

export default function PrijzenPage() {
  return (
    <>
      <Helmet>
        <title>Prijzen internetmarketing diensten | Van Borg</title>
        <meta
          name="description"
          content="Bekijk de services en prijzen die aansluiten op ons Google Bedrijfsprofiel: Lokale SEO, Google Ads, SEO Website en de combinatie-aanbieding. Extra categorie: Marketingconsultant."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Prijzen marketingdiensten | Van Borg"
        />
        <meta
          property="og:description"
          content="Services en tarieven volgens ons Google Bedrijfsprofiel, met Internetmarketing als primaire categorie."
        />
        <meta
          name="document-outline"
          content="h1: prijzen; h2: pakketten per dienst; h3: keuzehulp en contact"
        />
      </Helmet>
      <Navbar />
      <main>
        <PrijzenHero />
        <PrijzenTabel />
        <ProblemOutcome background="bg-section-1" />
        <ContactOptions />
      </main>
      <Footer />
    </>
  )
}
