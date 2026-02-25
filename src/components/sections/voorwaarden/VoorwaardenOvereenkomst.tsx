import { Container } from '../../ui/Container'

export function VoorwaardenOvereenkomst() {
  return (
    <section className="section bg-section-1" aria-labelledby="voorwaarden-overeenkomst-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="voorwaarden-overeenkomst-title" className="heading-section">
              Aanbieding, overeenkomst en uitvoering
            </h2>
            <p className="mt-3 text-section-lead">
              Hoe een overeenkomst tot stand komt en hoe wij deze uitvoeren.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Offerte en totstandkoming</h3>
            <p>
              Elke offerte en prijsopgave van Van Borg is vrijblijvend, tenzij uitdrukkelijk schriftelijk anders bepaald. Een overeenkomst komt tot stand op het moment dat de opdrachtgever een offerte of prijsopgave schriftelijk of per e-mail accepteert, tenzij Van Borg daarna verklaart de offerte niet te doen gestand. De offerte is gebaseerd op gegevens verstrekt door of namens de opdrachtgever.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Verantwoordelijkheid klantgegevens</h3>
            <p>
              Van Borg is niet aansprakelijk voor schade doordat wij zijn uitgegaan van door de opdrachtgever verstrekte onjuiste of onvolledige gegevens, tenzij deze onjuistheid voor Van Borg kenbaar was. De opdrachtgever draagt er zorg voor dat alle benodigde gegevens tijdig worden verstrekt. Bij vertraging door het niet tijdig verstrekken van gegevens kan Van Borg de uitvoering opschorten en extra kosten in rekening brengen.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Meerwerk en inschakelen derden</h3>
            <p>
              Meerwerk dat redelijkerwijs noodzakelijk is voor de uitvoering van de overeenkomst kan apart in rekening worden gebracht. Van Borg is gerechtigd (onderdelen van) de overeenkomst door derden te laten uitvoeren indien de uitvoering dit vereist. Van Borg voert de overeenkomst uit naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Beëindiging door opdrachtgever</h3>
            <p>
              Indien de opdrachtgever de samenwerking wil beëindigen, dient hij dit schriftelijk kenbaar te maken en Van Borg in de gelegenheid te stellen eventuele tekortkomingen binnen een redelijke termijn recht te zetten. Van Borg is niet aansprakelijk voor gevolgen van beëindiging indien de opdrachtgever deze verplichting niet is nagekomen.
            </p>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}
