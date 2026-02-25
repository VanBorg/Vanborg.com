import { Container } from '../../ui/Container'

export function PrivacyGegevens() {
  return (
    <section className="section bg-section-1" aria-labelledby="privacy-gegevens-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="privacy-gegevens-title" className="heading-section">
              Welke gegevens en voor welk doel
            </h2>
            <p className="mt-3 text-section-lead">
              Welke persoonsgegevens wij verwerken en op basis van welke rechtgrond.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Categorieën persoonsgegevens</h3>
            <p>
              Wij verwerken onder meer: voor- en achternaam, e-mailadres, telefoonnummer, adresgegevens, bedrijfsgegevens, IP-adres en gegevens over uw activiteiten op onze website. Deze gegevens verkrijgen wij wanneer u contact met ons opneemt, een formulier invult, onze diensten afneemt of onze website bezoekt (met uw toestemming voor niet-noodzakelijke cookies).
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Doel van de verwerking</h3>
            <p>
              Wij verwerken uw gegevens voor: het uitvoeren van onze diensten (o.a. <a href="/ranking" className="text-[var(--accent-green-light)] hover:underline">Local SEO</a>, <a href="/ads" className="text-[var(--accent-green-light)] hover:underline">Google Ads</a>, <a href="/website" className="text-[var(--accent-green-light)] hover:underline">SEO-websites</a>), contact met u opnemen, het verbeteren van onze website en dienstverlening, en het nakomen van wettelijke verplichtingen.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Rechtgronden</h3>
            <p>
              De verwerking is gebaseerd op: (i) uitvoering van een overeenkomst, (ii) uw toestemming (bijv. voor marketing of analytische cookies), (iii) gerechtvaardigd belang (bijv. verbetering van onze diensten), en (iv) wettelijke verplichting. Wij verwerken alleen gegevens die noodzakelijk zijn voor deze doeleinden.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
