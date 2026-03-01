import { Container } from '../../ui/Container'

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

export function SalePrijs() {
  return (
    <section className="section bg-section-1" aria-labelledby="sale-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="sale-prijs-title" className="heading-section">
            Top Aanbieding
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Deze aanbieding is voor bedrijven die klaar willen zijn voor de toekomst.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1" style={{ maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'left' }}>

            {/* Header */}
            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">Actieprijs</div>
              <div className="ranking-prijs-bedrag mt-4">
                &euro;&nbsp;2.999 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}>excl. btw</span>
              </div>
              <p className="ranking-prijs-subtekst">Eenmalig · bespaar <strong style={{ color: 'var(--accent-green)' }}>€ 499</strong> ten opzichte van losse diensten</p>
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Lokale SEO */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Lokale SEO</h3>
              <PrijsLijst items={[
                'Volledig optimaliseren van je Google Business Profiel',
                'Wekelijkse posts en foto\'s op je Google-profiel',
                'Locatie- en servicepagina\'s voor lokale zoektermen',
                'Opbouwen van online vermeldingen (citations) voor meer autoriteit',
                'Zichtbaarheid in Google Maps en lokale zoekresultaten',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* SEO Website */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>SEO Website</h3>
              <PrijsLijst items={[
                'Maatwerk website of landingspagina op maat van jouw bedrijf',
                'Lokale SEO verwerkt in titels, H1/H2-koppen en meta-beschrijvingen',
                'Volledig responsief op mobiel, tablet en desktop',
                'Integraties: Google Maps, contactformulieren en reviewblokken',
                'Snel ladende pagina\'s voor betere Google-ranking en gebruikerservaring',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Voordeel bundel */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Voordeel van de bundel</h3>
              <PrijsLijst items={[
                'Één aanspreekpunt voor beide trajecten, geen gedoe met meerdere partijen',
                'Website en SEO zijn op elkaar afgestemd voor maximaal resultaat',
                'Snellere uitvoering door gecombineerde aanpak',
                'Scherpe prijs door bundeling: bespaar € 499 ten opzichte van los',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat wij nodig hebben */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat wij van jou nodig hebben</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Om direct van start te gaan hebben we het volgende nodig:
              </p>
              <ToegangsLijst items={[
                'Toegang tot je Google Business Profiel (beheerder)',
                'Jouw wensen, diensten en doelgebied (via een kort intakegesprek)',
                'Eventueel logo, huisstijlkleuren of bestaand materiaal',
                'Toegang tot je huidige domein of hostingomgeving (indien van toepassing)',
              ]} />
            </div>

            <p className="ranking-prijs-btw" style={{ marginTop: '1.5rem' }}>Alle prijzen excl. btw · Eenmalige investering, geen doorlopende kosten</p>

          </div>
        </div>
      </Container>
    </section>
  )
}
