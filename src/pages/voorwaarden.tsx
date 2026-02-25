import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { VoorwaardenHero } from '../components/sections/voorwaarden/VoorwaardenHero'
import { VoorwaardenToepasselijkheid } from '../components/sections/voorwaarden/VoorwaardenToepasselijkheid'
import { VoorwaardenOvereenkomst } from '../components/sections/voorwaarden/VoorwaardenOvereenkomst'
import { VoorwaardenBetaling } from '../components/sections/voorwaarden/VoorwaardenBetaling'
import { VoorwaardenAansprakelijkheid } from '../components/sections/voorwaarden/VoorwaardenAansprakelijkheid'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/voorwaarden'

export default function VoorwaardenPage() {
  return (
    <>
      <Helmet>
        <title>Algemene voorwaarden | Van Borg – Marketingbureau Veendam</title>
        <meta
          name="description"
          content="Algemene voorwaarden van Van Borg voor Local SEO, Google Ads en SEO-websites. Transparante voorwaarden voor marketingdiensten in Veendam en heel Nederland."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Algemene voorwaarden | Van Borg – Marketingbureau Veendam" />
        <meta
          property="og:description"
          content="Algemene voorwaarden van Van Borg voor Local SEO, Google Ads en SEO-websites. Transparante voorwaarden voor marketingdiensten in Veendam en heel Nederland."
        />
        <meta
          name="document-outline"
          content="h1: Algemene voorwaarden; h2: Toepasselijkheid, Aanbieding, Prijzen, Aansprakelijkheid; h3: subsecties; h4: content"
        />
      </Helmet>
      <Navbar />
      <main>
        <VoorwaardenHero />
        <VoorwaardenToepasselijkheid />
        <VoorwaardenOvereenkomst />
        <VoorwaardenBetaling />
        <VoorwaardenAansprakelijkheid />
        <ContactOptions
          background="bg-section-2"
          title="Vragen over onze voorwaarden?"
          lead="Neem contact op via de bedrijfsscan of boek een afspraak. Wij helpen u graag verder."
        />
      </main>
      <Footer />
    </>
  )
}
