import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { AboutUs } from '../components/sections/AboutUs'
import { WatWijDoen } from '../components/sections/WatWijDoen'
import { ProblemOutcome } from '../components/sections/ProblemOutcome'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <WatWijDoen />
        <ProblemOutcome />
      </main>
      <Footer />
    </>
  )
}
