import { Container } from '../ui/Container'

const problemBullets = [
  'Onzichtbaar in Google Maps',
  'Concurrenten boven je',
  'Te weinig reviews',
  'Geen lokale structuur',
]

const outcomeBullets = [
  'Top 3 zichtbaarheid',
  'Meer calls en leads',
  'Sterk Google profiel',
  'Dominantie in jouw regio',
]

export function ProblemOutcome() {
  return (
    <section className="section bg-section-1">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-hover rounded-xl bg-white p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-bold text-neutral-900">
              Waarom je nu geen aanvragen krijgt
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-600">
              {problemBullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>

          <div className="card-hover rounded-xl bg-white p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-bold text-neutral-900">Wat er verandert</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-600">
              {outcomeBullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#intake" className="btn-primary">
            Plan een intake
          </a>
        </div>
      </Container>
    </section>
  )
}
