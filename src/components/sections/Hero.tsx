import { Container } from '../ui/Container'
import { ImageComparison } from '../ui/ImageComparison'

const bullets = [
  'Voor lokale bedrijven',
  'Resultaatgericht traject',
  'Meetbare groei',
]

export function Hero() {
  return (
    <section className="section bg-section-1">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl">
              Binnen 90 dagen in de Top 3 van Google Maps
            </h1>
            <p className="mt-4 text-lg text-neutral-500 md:text-xl">
              Meer aanvragen. Meer telefoontjes. Structurele lokale dominantie.
            </p>
            <ul className="mt-6 space-y-2">
              {bullets.map((text) => (
                <li key={text} className="flex items-center gap-2 text-neutral-700">
                  <span className="text-emerald-500" aria-hidden="true">✔</span>
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#audit" className="btn-primary">
                Vraag je gratis audit aan
              </a>
              <a href="#resultaten" className="btn-secondary">
                Bekijk resultaten
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
