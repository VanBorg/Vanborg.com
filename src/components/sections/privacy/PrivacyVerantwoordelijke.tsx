import { Container } from '../../ui/Container'

export function PrivacyVerantwoordelijke() {
  return (
    <section className="section bg-section-2" aria-labelledby="privacy-verantwoordelijke-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="privacy-verantwoordelijke-title" className="heading-section">
              Wie verwerkt uw gegevens
            </h2>
            <p className="mt-3 text-section-lead">
              Van Borg Limited is verantwoordelijk voor de verwerking van uw persoonsgegevens.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Verwerkingsverantwoordelijke</h3>
            <p>
              Van Borg Limited (hierna: Van Borg) is de verwerkingsverantwoordelijke in de zin van de Algemene Verordening Gegevensbescherming (AVG). Wij zijn gevestigd aan Kieler Bocht 104, 9642 CE Veendam, Nederland.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Contact</h3>
            <p>
              Voor vragen over dit privacybeleid of over de verwerking van uw gegevens kunt u contact opnemen via{' '}
              <a href="mailto:info@vanborglimited.com" className="text-[var(--accent-green-light)] hover:underline">info@vanborglimited.com</a> of{' '}
              <a href="tel:+31644732266" className="text-[var(--accent-green-light)] hover:underline">+31 6 44 73 22 66</a>. U kunt ook het{' '}
              <a href="#contact" className="text-[var(--accent-green-light)] hover:underline">contactgedeelte onderaan deze pagina</a> gebruiken of een afspraak maken via{' '}
              <a href="https://calendly.com/vanborglimited/book-a-call-vbl" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-green-light)] hover:underline">Calendly</a>.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
