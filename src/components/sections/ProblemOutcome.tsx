import { Container } from '../ui/Container'

const problemItems = [
  'Nauwelijks zichtbaar',
  'Afhankelijk van mond-tot-mond',
  'Concurrenten staan boven je',
  'Onvoorspelbare aanvragen',
]

const outcomeItems = [
  'Zichtbaar in de Top 3',
  'Meer lokale telefoontjes',
  'Constante stroom nieuwe aanvragen',
  'Voorsprong op concurrentie',
]

function IconProblem() {
  return (
    <svg className="problem-outcome-list__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  )
}

function IconOutcome() {
  return (
    <svg className="problem-outcome-list__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function ProblemOutcome() {
  return (
    <section className="section bg-section-1" aria-labelledby="problem-outcome-title">
      <Container>
        <div className="text-center">
          <h2 id="problem-outcome-title" className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Waarom je ons moet kiezen
          </h2>
          <p className="mt-3 text-lg text-neutral-600">
          Van afhankelijk zijn van mond-tot-mond naar bovenaan staan op Google.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="card card-bordered card-elevated problem-outcome-card">
            <h3 className="text-base font-bold text-neutral-900 text-center">
              Zonder ons
            </h3>
            <div className="problem-outcome-card__inner">
              <ul className="problem-outcome-list problem-outcome-list--problem">
                {problemItems.map((text) => (
                  <li key={text} className="problem-outcome-list__item">
                    <IconProblem />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="problem-outcome-card__media">
                <div className="image-doos">
                  <img
                    src="/Afbeeldingen/winst-tijd-grafiek-negatief.png"
                    alt="Grafiek: winst daalt over tijd zonder optimalisatie"
                    className="image-doos__img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card card-bordered card-elevated problem-outcome-card">
            <h3 className="text-base font-bold text-neutral-900 text-center">
              Met ons
            </h3>
            <div className="problem-outcome-card__inner">
              <ul className="problem-outcome-list problem-outcome-list--outcome">
                {outcomeItems.map((text) => (
                  <li key={text} className="problem-outcome-list__item">
                    <IconOutcome />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="problem-outcome-card__media">
                <div className="image-doos">
                  <img
                    src="/Afbeeldingen/winst-tijd-grafiek.png"
                    alt="Grafiek: winst groeit over tijd na onze aanpak"
                    className="image-doos__img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="problem-outcome-cta">
          <p className="problem-outcome-cta__text">
          Vul het formulier in en ontvang een gratis bedrijfsscan met je huidige positie.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbsa-4CWu9Rh0yBDLrVeXYbtXfHlcBJaxqYOQGWeKPDriaMg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Gratis bedrijfsscan aanvragen
          </a>
        </div>
      </Container>
    </section>
  )
}
