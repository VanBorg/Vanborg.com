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
        <title>Prijzen marketingdiensten | Van Borg – SEO, Google Ads en websites</title>
        <meta
          name="description"
          content="Bekijk de prijzen van Van Borg voor Google Top 3 ranking, Google Ads beheer en SEO-websites. Duidelijke pakketten voor lokale bedrijven in Nederland."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta
          property="og:title"
          content="Prijzen marketingdiensten | Van Borg"
        />
        <meta
          property="og:description"
          content="Transparante tarieven voor lokale SEO, Google Ads en conversiegerichte websites."
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
