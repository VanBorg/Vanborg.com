import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

export function Hero() {
  return (
    <section id="page-hero" className="section section--hero bg-section-1">
      <Container>
        <div className="hero__layout flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">

          <div className="hero__text max-w-lg">
            <h1 className="heading-hero" style={{ hyphens: 'auto' }} lang="nl">
              Het nummer één internet&shy;marketingbureau in Veendam en omgeving.
            </h1>
            <p className="heading-hero-subtitle mt-3">
              Binnen 90 dagen een Top 3 positie op Google.
            </p>
            <p className="hero__lead text-section-body mt-2" style={{ color: 'var(--color-neutral-700)' }}>
              Op de kaart: links hoe het was, rechts hoe het nu staat. Amper 3 maanden.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfbsa-4CWu9Rh0yBDLrVeXYbtXfHlcBJaxqYOQGWeKPDriaMg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Check mijn huidige ranking
              </a>
              <a
                href="https://calendly.com/vanborglimited/van_borg_sales_call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Bespreek mijn kansen
              </a>
            </div>
          </div>

          <div className="w-full min-w-0 max-w-full shrink-0 lg:w-[400px]" style={{ maxHeight: '380px' }}>
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