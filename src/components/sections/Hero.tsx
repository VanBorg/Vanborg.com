import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

export function Hero() {
  return (
    <section className="section bg-section-1">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <h1 className="heading-hero">
              Het beste marketingbureau van Veendam en omstreken
            </h1>
            <h2 className="heading-hero-subtitle mt-3">
              Binnen 90 dagen een Top 3 positie op Google.
            </h2>
            <h3 className="text-section-body mt-2 text-neutral-500">
              Op de heatmap zie je mijn vestiging in Veendam over een periode van <strong>40 dagen.</strong>
              <br />
              <strong><span className="text-green-600">Groen</span>= is goed,</strong> zichtbaar in de Top 3.
              <br />
              <strong><span className="text-red-600">Rood</span> = is slecht,</strong> buiten de Top 3 en vrijwel onzichtbaar.
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbsa-4CWu9Rh0yBDLrVeXYbtXfHlcBJaxqYOQGWeKPDriaMg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Check mijn huidige ranking
              </a>
              <a href="https://calendly.com/vanborglimited/van_borg_sales_call" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Bespreek mijn kansen
              </a>
            </div>
          </div>

          <div className="shrink-0 lg:w-[560px]">
            <ImageComparison
              before="/Afbeeldingen/heatmap-1.png"
              after="/Afbeeldingen/heatmap-2.png"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
