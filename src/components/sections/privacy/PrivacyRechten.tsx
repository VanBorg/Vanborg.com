import { Container } from '../../ui/Container'

export function PrivacyRechten() {
  return (
    <section className="section bg-section-1" aria-labelledby="privacy-rechten-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="privacy-rechten-title" className="heading-section">
              Uw rechten en contact
            </h2>
            <p className="mt-3 text-section-lead">
              U heeft rechten met betrekking tot uw persoonsgegevens. Wij helpen u graag.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Uw rechten onder de AVG</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u verwerken.</li>
              <li><strong>Recht op rectificatie:</strong> U kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
              <li><strong>Recht op wissing:</strong> U kunt verzoeken om verwijdering van uw gegevens.</li>
              <li><strong>Recht op beperking:</strong> U kunt verzoeken om beperking van de verwerking.</li>
              <li><strong>Recht op overdraagbaarheid:</strong> U kunt uw gegevens in een gestructureerd formaat ontvangen.</li>
              <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang.</li>
            </ul>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Klacht indienen</h3>
            <p>
              Als u een klacht heeft over de verwerking van uw gegevens, neem dan eerst contact met ons op. U kunt ook een klacht indienen bij de{' '}
              <a href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-green-light)] hover:underline">Autoriteit Persoonsgegevens</a>, de bevoegde toezichthouder in Nederland.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Contact</h3>
            <p>
              Om uw rechten uit te oefenen of vragen te stellen: mail naar{' '}
              <a href="mailto:info@vanborglimited.com" className="text-[var(--accent-green-light)] hover:underline">info@vanborglimited.com</a> of bel{' '}
              <a href="tel:+31644732266" className="text-[var(--accent-green-light)] hover:underline">+31 6 44 73 22 66</a>. Wij reageren binnen vier weken. Voor identificatie kan om een kopie van een geldig legitimatiebewijs worden gevraagd (u mag pasfoto en MRZ afschermen).
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Bewaartermijn</h3>
            <p>
              Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of dan wettelijk vereist is.
            </p>
          </div>

          <p className="mt-8 text-section-body text-neutral-500">
            Dit privacybeleid kan worden gewijzigd. De actuele versie staat op deze pagina. Lees ook onze{' '}
            <a href="/voorwaarden" className="text-[var(--accent-green-light)] hover:underline">algemene voorwaarden</a>.
          </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
