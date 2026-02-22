import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

export function Hero() {
  return (
    <section className="section bg-section-1">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Het beste marketingbureau van Veendam
            </h1>
            <h2 className="mt-3 text-lg font-semibold leading-snug text-neutral-600 md:text-xl">
            Binnen 90 dagen een Top 3 positie in Google Maps.
            </h2>
            <h3 className="mt-2 text-sm font-normal text-neutral-500">
            Lokale SEO met focus op meetbare groei in klanten en omzet.
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary">
              Check mijn huidige ranking
              </a>
              <a href="#resultaten" className="btn-secondary">
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
