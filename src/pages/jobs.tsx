import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { JobsHero } from '../components/sections/jobs/JobsHero'
import { Vacatures } from '../components/sections/jobs/Vacatures'
import { ContactOptions } from '../components/sections/ContactOptions'

const CANONICAL = 'https://vanborg.com/jobs'

export default function JobsPage() {
  return (
    <>
      <Helmet>
        <title>Vacatures | Van Borg – Werken bij een groeiend internetmarketingbedrijf</title>
        <meta
          name="description"
          content="Bekijk onze openstaande vacatures: B2B Closer, Appointment Setter via koud bellen en koud email. Sluit je aan bij het salesteam van Van Borg."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vacatures | Van Borg – Werken bij een groeiend internetmarketingbedrijf"
        />
        <meta
          property="og:description"
          content="Bekijk onze openstaande vacatures: B2B Closer, Appointment Setter via koud bellen en koud email. Sluit je aan bij het salesteam van Van Borg."
        />
      </Helmet>

      <Navbar />

      <main>
        <JobsHero />
        <Vacatures />
        <ContactOptions
          background="bg-section-1"
          title="Interesse? Neem contact op"
          lead="Heb je vragen over een vacature of wil je direct solliciteren? Neem contact met ons op."
        />
      </main>

      <Footer />
    </>
  )
}
