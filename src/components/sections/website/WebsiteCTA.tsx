import { Container } from '../../ui/Container'

const SCAN_FORM_URL = 'https://forms.gle/s3cnmZ7PSuxdo4Yp9'
const CALENDLY_URL = 'https://calendly.com/vanborglimited/van_borg_sales_call'

const scanBullets = [
  'Analyse van je huidige online positie',
  'Inzicht in je concurrentie',
  'Concrete verbeterpunten',
]

const callBullets = [
  '15 minuten analyse',
  'Direct advies en strategie',
  'Bespreking van je websitewensen',
]

export function WebsiteCTA() {
  return (
    <section
      className="section section--contact bg-section-1 contact-options"
      aria-labelledby="website-cta-title"
    >
      <Container>
        <div className="contact-options__header">
          <h2 id="website-cta-title" className="heading-section">
            Klaar voor een website die werkt?
          </h2>
          <p className="contact-options__lead text-section-lead">
            Ontdek je mogelijkheden of bespreek direct je websiteproject met ons.
          </p>
        </div>

        <div className="contact-options__grid">
          <div className="contact-options__card contact-card">
            <div className="contact-card__body">
              <h3 className="heading-sub contact-card__title">
                Vraag je gratis bedrijfsscan aan
              </h3>
              <ul className="contact-card__list">
                {scanBullets.map((item) => (
                  <li key={item} className="contact-card__list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={SCAN_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary contact-card__cta"
              >
                Bedrijfsscan aanvragen
              </a>
            </div>
          </div>

          <div className="contact-options__card contact-card">
            <div className="contact-card__body">
              <h3 className="heading-sub contact-card__title">
                Plan een korte afspraak
              </h3>
              <ul className="contact-card__list">
                {callBullets.map((item) => (
                  <li key={item} className="contact-card__list-item">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary contact-card__cta"
              >
                Afspraak inplannen
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
