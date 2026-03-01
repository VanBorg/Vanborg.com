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

export function RankingPrijs() {
  return (
    <section className="section bg-section-2" aria-labelledby="ranking-prijs-title">
      <Container>
        <div className="text-center">
          <h2 id="ranking-prijs-title" className="heading-section">
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
              <div className="ranking-prijs-badge">Lokale SEO</div>
              <div className="ranking-prijs-bedrag mt-4">&euro;&nbsp;1.499</div>
              <p className="ranking-prijs-subtekst">Eenmalig: excl. btw</p>
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat we doen */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat wij doen</h3>
              <PrijsLijst items={[
                'Wekelijks posts en foto\'s plaatsen op je Google Business Profiel',
                'Volledig optimaliseren van je Google Business Profiel',
                'Locatiepagina\'s aanmaken op je huidige website met interne links',
                'Service pagina\'s optimaliseren voor lokale zoektermen',
                'Meta tags en headers verbeteren voor betere Google-ranking',
                'Opbouwen van online vermeldingen (citations) voor meer autoriteit',
                'Verbetering van zichtbaarheid in Google Maps en lokale zoekresultaten',
                'Focus op meer telefoontjes, leads en lokale aanvragen',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Wat wij nodig hebben */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Wat wij van jou nodig hebben</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Om te kunnen starten hebben we toegang nodig tot twee dingen:
              </p>
              <ToegangsLijst items={[
                'Toegang tot je Google Business Profiel (beheerder)',
                'Toegang tot je website (CMS, WordPress of FTP)',
              ]} />
            </div>

            <p className="ranking-prijs-btw" style={{ marginTop: '1.5rem', textAlign: 'center' }}>Alle prijzen excl. btw</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
