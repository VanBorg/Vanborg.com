import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'

export default function VoorwaardenPage() {
  return (
    <>
      <Navbar />
      <main className="section bg-section-1">
        <Container>
          <h1 className="heading-section">Algemene voorwaarden</h1>
          <p className="mt-3 text-section-lead">Deze pagina wordt binnenkort ingevuld.</p>
        </Container>
      </main>
      <Footer />
    </>
  )
}
