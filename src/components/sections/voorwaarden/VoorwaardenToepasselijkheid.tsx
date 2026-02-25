import { Container } from '../../ui/Container'

export function VoorwaardenToepasselijkheid() {
  return (
    <section className="section bg-section-2" aria-labelledby="voorwaarden-toepasselijkheid-title">
      <Container>
        <div className="legal-content">
          <div className="legal-section__header">
            <h2 id="voorwaarden-toepasselijkheid-title" className="heading-section">
              Toepasselijkheid en definities
            </h2>
            <p className="mt-3 text-section-lead">
              Deze algemene voorwaarden zijn van toepassing op alle offertes en overeenkomsten tussen Van Borg Limited en de opdrachtgever.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-section-body">
          <div>
            <h3 className="heading-sub mb-2">Van Borg Limited</h3>
            <p>
              Van Borg Limited (hierna: Van Borg) is een marketingbureau gevestigd aan Kieler Bocht 104, 9642 CE Veendam, Nederland. Wij leveren diensten op het gebied van{' '}
              <a href="/ranking" className="text-[var(--accent-green-light)] hover:underline">lokale SEO en Google ranking</a>,{' '}
              <a href="/ads" className="text-[var(--accent-green-light)] hover:underline">Google Ads</a> en{' '}
              <a href="/website" className="text-[var(--accent-green-light)] hover:underline">SEO-websites</a>.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Opdrachtgever</h3>
            <p>
              Onder opdrachtgever wordt verstaan: de natuurlijke persoon of rechtspersoon die met Van Borg een overeenkomst sluit tot het leveren van diensten en/of producten.
            </p>
          </div>

          <div>
            <h3 className="heading-sub mb-2">Toepasselijkheid</h3>
            <p>
              De algemene voorwaarden van de opdrachtgever worden uitdrukkelijk van de hand gewezen. Afwijkingen van deze voorwaarden zijn alleen geldig indien deze schriftelijk tussen Van Borg en de opdrachtgever zijn overeengekomen. Door het verstrekken van een opdracht verklaart de opdrachtgever op de hoogte te zijn van deze algemene voorwaarden. Van Borg behoudt zich het recht voor de voorwaarden te wijzigen; wijzigingen gelden na schriftelijke bekendmaking met inachtneming van een termijn van dertig dagen.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
