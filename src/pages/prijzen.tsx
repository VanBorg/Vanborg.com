import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { PrijzenHero } from '../components/sections/prijzen/PrijzenHero'
import { PrijzenTabel } from '../components/sections/prijzen/PrijzenTabel'
import { ProblemOutcome } from '../components/sections/ProblemOutcome'
import { ContactOptions } from '../components/sections/ContactOptions'

export default function PrijzenPage() {
  return (
    <>
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
