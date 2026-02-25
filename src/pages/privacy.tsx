import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { PrivacyHero } from '../components/sections/privacy/PrivacyHero'
import { PrivacyVerantwoordelijke } from '../components/sections/privacy/PrivacyVerantwoordelijke'
import { PrivacyGegevens } from '../components/sections/privacy/PrivacyGegevens'
import { PrivacyCookies } from '../components/sections/privacy/PrivacyCookies'
import { PrivacyRechten } from '../components/sections/privacy/PrivacyRechten'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/privacy'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacybeleid | Van Borg – AVG-conform</title>
        <meta
          name="description"
          content="Privacybeleid van Van Borg. Hoe wij uw persoonsgegevens verwerken, cookies gebruiken en uw AVG-rechten waarborgen. Transparant en conform de wet."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Privacybeleid | Van Borg – AVG-conform" />
        <meta
          property="og:description"
          content="Privacybeleid van Van Borg. Hoe wij uw persoonsgegevens verwerken, cookies gebruiken en uw AVG-rechten waarborgen. Transparant en conform de wet."
        />
        <meta
          name="document-outline"
          content="h1: Privacybeleid; h2: Verantwoordelijke, Gegevens, Cookies, Rechten; h3: subsecties; h4: content"
        />
      </Helmet>
      <Navbar />
      <main>
        <PrivacyHero />
        <PrivacyVerantwoordelijke />
        <PrivacyGegevens />
        <PrivacyCookies />
        <PrivacyRechten />
        <ContactOptions
          background="bg-section-2"
          title="Vragen over ons privacybeleid?"
          lead="Neem contact op via de bedrijfsscan of boek een afspraak. Wij helpen u graag verder."
        />
      </main>
      <Footer />
    </>
  )
}
