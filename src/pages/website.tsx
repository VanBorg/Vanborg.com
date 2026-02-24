import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { WebsiteHero } from '../components/sections/website/WebsiteHero'
import { WebsiteVoordelen } from '../components/sections/website/WebsiteVoordelen'
import { WebsiteWerkwijze } from '../components/sections/website/WebsiteWerkwijze'
import { WebsitePrijs } from '../components/sections/website/WebsitePrijs'
import { WebsiteCTA } from '../components/sections/website/WebsiteCTA'

export default function WebsitePage() {
  return (
    <>
      <Navbar />
      <main>
        <WebsiteHero />
        <WebsiteVoordelen />
        <WebsiteWerkwijze />
        <WebsitePrijs />
        <WebsiteCTA />
      </main>
      <Footer />
    </>
  )
}
