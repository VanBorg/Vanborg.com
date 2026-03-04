import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="ranking-prijs-lijst__icon"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0, color: 'var(--accent-green)', marginTop: '0.15rem' }}
    >
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="M21 2l-9.6 9.6M15.5 7.5l2 2"/>
    </svg>
  )
}

function PrijsLijst({ items }: { items: string[] }) {
  return (
    <ul className="ranking-prijs-lijst">
      {items.map((item) => (
        <li key={item} className="ranking-prijs-lijst__item">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ToegangsLijst({ items }: { items: string[] }) {
  return (
    <ul className="ranking-prijs-lijst">
      {items.map((item) => (
        <li key={item} className="ranking-prijs-lijst__item">
          <KeyIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function WebsitePrijs() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="website-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="website-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1" style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'left' }}>

            {/* Header */}
            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">SEO Website</div>
              <div className="ranking-prijs-bedrag mt-4">
                Vanaf &euro;&nbsp;999 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}>excl. btw</span>
              </div>
              <p className="ranking-prijs-subtekst">Eenmalig: inclusief ontwerp, bouw én SEO-optimalisatie</p>
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat we bouwen */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat we bouwen</h3>
              <PrijsLijst items={[
                'Maatwerk website of landingspagina op maat van jouw bedrijf',
                'Services- en locatiepagina\'s voor lokale vindbaarheid in Google',
                'Duidelijke structuur en overtuigende teksten die bezoekers omzetten in klanten',
                'Ontworpen om vertrouwen te wekken en leads te genereren',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* SEO inbegrepen */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>SEO inbegrepen</h3>
              <PrijsLijst items={[
                'Lokale SEO: dienst + plaatscombinaties die jouw klanten écht zoeken',
                'Geoptimaliseerde paginatitels, H1/H2-koppen en meta-beschrijvingen',
                'Technische SEO-basis: snelheid, sitemap, robots.txt en canonical tags',
                'Interne linkstructuur voor betere crawlbaarheid en autoriteit',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Technisch */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Technisch & integraties</h3>
              <PrijsLijst items={[
                'Volledig responsief: werkt perfect op mobiel, tablet en desktop',
                'Integratie van Google Maps, contactformulieren en reviewblokken',
                'Snel ladende pagina\'s voor betere gebruikerservaring én Google-ranking',
                'Veilige hosting-klare oplevering, direct live te zetten',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat wij nodig hebben */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat wij van jou nodig hebben</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Om direct van start te kunnen gaan hebben we het volgende nodig:
              </p>
              <ToegangsLijst items={[
                'Jouw wensen, diensten en doelgebied (via een kort intakegesprek)',
                'Eventueel logo, huisstijlkleuren of bestaand materiaal',
                'Toegang tot je huidige domein of hostingomgeving (indien van toepassing)',
              ]} />
            </div>

            <p className="ranking-prijs-btw" style={{ marginTop: '1.5rem' }}>Alle prijzen excl. btw · Exacte prijs afhankelijk van omvang en wensen</p>

          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
