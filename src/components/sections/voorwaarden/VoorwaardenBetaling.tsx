import { Container } from '../../ui/Container'

export function VoorwaardenBetaling() {
  return (
    <section className="section bg-section-2" aria-labelledby="voorwaarden-betaling-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="voorwaarden-betaling-title" className="heading-section">
              Prijzen, betaling en levering
            </h2>
            <p className="mt-3 text-section-lead">
              Onze prijsstelling, betalingsvoorwaarden en levertijden.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
            <div>
              <h3 className="heading-sub mb-2">Prijzen</h3>
              <p>
                Alle prijzen zijn in euro&apos;s en exclusief btw en overige heffingen, tenzij uitdrukkelijk anders vermeld. Actuele prijzen vindt u op onze{' '}
                <a href="/prijzen" className="text-[var(--accent-green-light)] hover:underline">prijzenpagina</a>. Wijzigingen in tarieven worden minimaal 30 dagen van tevoren schriftelijk bekendgemaakt; de opdrachtgever is dan gerechtigd de overeenkomst te beëindigen met ingang van de wijzigingsdatum.
              </p>
            </div>

            <div>
              <h3 className="heading-sub mb-2">Voorafbetaling</h3>
              <p>
                Betaling dient vooraf plaats te vinden voordat wij met de uitvoering van onze diensten beginnen. Wij werken online en niet voor niets: indien betaling uitblijft, wachten wij maximaal drie (3) werkdagen alvorens wij de uitvoering staken. Betaling kan via bankoverschrijving, creditcard, contant of Bitcoin ($BTC). Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is wettelijke handelsrente verschuldigd.
              </p>
            </div>

            <div>
              <h3 className="heading-sub mb-2">Levertijd en opzegging</h3>
              <p>
                De levertijd is een indicatie en geen fatale termijn, tenzij uitdrukkelijk anders overeengekomen. Eenmalige opdrachten of opdrachten met vaste looptijd kunnen niet tussentijds worden opgezegd. Opdrachten zonder vaste looptijd kunnen worden opgezegd tegen het eind van de maand met inachtneming van een opzegtermijn van één maand.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
