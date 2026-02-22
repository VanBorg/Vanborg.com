import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { ProblemOutcome } from '../components/sections/ProblemOutcome'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemOutcome />
      </main>
      <Footer />
    </>
  )
}
