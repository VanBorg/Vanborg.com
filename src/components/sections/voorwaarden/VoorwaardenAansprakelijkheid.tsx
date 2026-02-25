import { Container } from '../../ui/Container'

export function VoorwaardenAansprakelijkheid() {
  return (
    <section className="section bg-section-1" aria-labelledby="voorwaarden-aansprakelijkheid-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="voorwaarden-aansprakelijkheid-title" className="heading-section">
              Aansprakelijkheid, intellectueel eigendom en geschillen
            </h2>
            <p className="mt-3 text-section-lead">
              Beperking van aansprakelijkheid, eigendomsrechten en toepasselijk recht.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Aansprakelijkheid</h3>
            <p>
              De aansprakelijkheid van Van Borg is in alle gevallen beperkt tot het voor de betreffende overeenkomst geldende factuurbedrag. Van Borg is niet aansprakelijk voor gevolgschade, bedrijfsschade of andere indirecte schade. Van Borg is slechts aansprakelijk indien zij toerekenbaar tekortschiet in de nakoming van de overeenkomst en pas nadat zij door de opdrachtgever in gebreke is gesteld met inachtneming van een redelijke termijn.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Intellectueel eigendom en geheimhouding</h3>
            <p>
              Tenzij uitdrukkelijk anders overeengekomen, is Van Borg rechthebbende op alle intellectuele eigendomsrechten van in het kader van de overeenkomst ontwikkelde zaken en verrichte werkzaamheden. De opdrachtgever verkrijgt het gebruiksrecht na volledige betaling. De opdrachtgever is gehouden tot geheimhouding van bedrijfsinformatie en knowhow van Van Borg. Voor ons omgaan met persoonsgegevens verwijzen wij naar ons{' '}
              <a href="/privacy" className="text-[var(--accent-green-light)] hover:underline">privacybeleid</a>.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Toepasselijk recht en bevoegde rechter</h3>
            <p>
              Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter van het arrondissement Noord-Nederland, tenzij Van Borg uitdrukkelijk kiest voor de rechter van de woonplaats van de opdrachtgever.
            </p>
          </div>

          <p className="mt-8 text-section-body text-neutral-500">
            Heeft u vragen over deze voorwaarden?{' '}
            <a href="#contact" className="text-[var(--accent-green-light)] hover:underline">Neem contact op</a>.
          </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
