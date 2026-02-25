import { Container } from '../../ui/Container'

export function PrivacyCookies() {
  return (
    <section className="section bg-section-2" aria-labelledby="privacy-cookies-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="privacy-cookies-title" className="heading-section">
              Cookies en Google Analytics
            </h2>
            <p className="mt-3 text-section-lead">
              Hoe wij cookies en website-analytics gebruiken.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Functionele cookies</h3>
            <p>
              Wij gebruiken functionele cookies die strikt noodzakelijk zijn voor het goed functioneren van de website, zoals het onthouden van uw cookievoorkeuren en thema-instellingen. Voor deze cookies is geen toestemming vereist.
            </p>
          </div>

          <div>
            <h4 className="heading-sub mb-2 mt-4">Google Analytics</h4>
            <p>
              Met uw toestemming plaatsen wij cookies van Google Analytics om bezoekersgedrag te analyseren en onze website te verbeteren. Google Analytics verwerkt onder meer IP-adres, apparaatinformatie en paginaweergaven. De gegevens worden geanonimiseerd waar mogelijk. Google kan deze gegevens verwerken conform hun{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-green-light)] hover:underline">privacybeleid</a>. U kunt cookies weigeren via onze cookiebanner of uw browserinstellingen aanpassen.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Uw keuze</h3>
            <p>
              U kunt uw browser zo instellen dat u een waarschuwing krijgt voordat cookies worden geplaatst, of dat cookies worden geweigerd. Dit kan ertoe leiden dat sommige onderdelen van de website minder goed werken. Meer informatie over cookies en de AVG vindt u bij de{' '}
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-green-light)] hover:underline">Autoriteit Persoonsgegevens</a>.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
