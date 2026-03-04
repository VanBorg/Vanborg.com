import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

export function Hero() {
  return (
    <section className="section bg-section-1">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
          <div className="max-w-lg">
            <h1 className="heading-hero">
            Het nummer één internetmarketing bureau van Veendam en e.o.
            </h1>
            <h2 className="heading-hero-subtitle mt-3">
              Binnen 90 dagen een Top 3 positie op Google.
            </h2>
            <h3 className="text-section-body mt-2" style={{ color: 'var(--color-neutral-700)' }}>
              Op de kaart zie je mijn eigen onderneming. Links hoe het was toen ik begon, rechts hoe het nu staat. Dit duurte amper 3 maanden.
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

          <div className="shrink-0 lg:w-[400px]" style={{ maxHeight: '380px' }}>
            <ImageComparison
              before="/Afbeeldingen/heatmap-2.png"
              after="/Afbeeldingen/heatmap-1.png"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
