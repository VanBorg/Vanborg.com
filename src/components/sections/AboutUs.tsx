import { Container } from '../ui/Container'

export function AboutUs() {
  return (
    <section className="section bg-section-2" aria-labelledby="about-us-title">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-14">
          <div>
            <div className="about-us-photo">
              <img
                src="/Afbeeldingen/wie-wij-zijn-profielfoto.png"
                alt="Portretfoto van de oprichter van Van Borg"
                className="about-us-photo__img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-3xl space-y-8 text-neutral-700">
            <h2 id="about-us-title" className="heading-section">
              Wie wij zijn
            </h2>

            <div>
              <h3 className="heading-sub">Over de oprichter</h3>
              <p className="mt-2 text-section-body">
                Ik ben Nicolaas P. Sterenborg, eigenaar van Van Borg, gevestigd te Veendam.
              </p>
              <p className="mt-1 text-section-body">
                Sinds begin 2025 help ik lokale bedrijven hoger te komen op Google met als doel
                het binnenhalen van meer opdrachten.
              </p>
              <p className="mt-3 text-section-body">
                Wat ons kenmerkt is onze persoonlijke aanpak waarbij we elke klant op een unieke
                manier helpen, met altijd een focus op resultaat.
              </p>
            </div>

            <div>
              <h3 className="heading-sub">Werkgebied</h3>
              <p className="mt-2 text-section-body">
                <strong>Wij zijn actief in:</strong> Veendam, Meeden, Hoogezand, Muntendam, Sappemeer, Zuidbroek, Noordbroek, Wildervank, Tripscompagnie, Borgercompagnie, Hoogezand-Sappemeer, Bareveld (Nieuwediep) en Ommelanderwijk.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
