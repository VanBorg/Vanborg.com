import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

export function Hero() {
  return (
    <section id="page-hero" className="section section--hero bg-section-1">
      <Container>
        <div className="hero__layout flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">

          <div className="hero__text max-w-lg">
            <h1 className="heading-hero" lang="nl">
              <span className="block md:hidden">
                Het nummer één internetmarketingbureau van Veendam en omgeving.
              </span>
              <span className="hidden md:block">
                Het nummer <strong> 1</strong> internet-
                <br />
                marketingbureau van Veendam en omgeving.
              </span>
            </h1>
            <p className="heading-hero-subtitle mt-3">
              Binnen 90 dagen een Top 3 positie op Google.
            </p>
            <p className="hero__lead text-section-body mt-2" style={{ color: 'var(--color-neutral-700)' }}>
              Op de kaart: links hoe het was, rechts is amper 3 maanden later.
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
              beforeWebp="/Afbeeldingen/heatmap-2.webp"
              afterWebp="/Afbeeldingen/heatmap-1.webp"
            />
          </div>

        </div>
      </Container>
    </section>
  )
}