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

const eenmaligItems = [
  'Volledig optimaliseren van je Google Business Profiel',
  'Locatiepagina\'s aanmaken op je website met interne linkstructuur',
  'Servicepagina\'s optimaliseren voor lokale zoektermen in jouw regio',
  'Meta tags, headers en technische SEO-basis ingesteld',
  'Opbouwen van online vermeldingen (citations) voor meer autoriteit',
  'Werkgebied uitgebreid over meerdere plaatsen en postcodes',
  'Nulmeting met heatmap zodat je ziet waar je nu staat',
]

const retainerItems = [
  'Wekelijks nieuwe posts en foto\'s op je Google Business Profiel',
  'Doorlopend bijhouden van Google-algoritme updates',
  'Google Business Profiel actueel houden (openingstijden, categorieën, Q&A)',
  'Nieuwe zoekwoorden en locaties toevoegen naarmate je groeit',
  'Maandelijkse heatmap met rankings per zoekterm en locatie',
  'Bijsturen waar nodig zodat je positie stabiel blijft',
]

const whatWeNeed = [
  'Toegang tot je Google Business Profiel (beheerder)',
  'Toegang tot je website (CMS, WordPress of FTP)',
]

export function RankingPrijs() {
  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="ranking-prijs-title">
      <Container>
        <div style={{ textAlign: 'center', maxWidth: '38rem', margin: '0 auto 2.5rem' }}>
          <h2 id="ranking-prijs-title" className="heading-section">
            Investering
          </h2>
          <p className="mt-3 text-section-body">
            We werken in twee fases. Eerst zorgen we dat je in de top 3 komt. Daarna houden we je daar met een laag maandtarief.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 26rem), 1fr))', maxWidth: '56rem', margin: '0 auto' }}>

          {/* Fase 1 */}
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%' }}>
            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">Fase 1 &middot; Eenmalig</div>
              <div className="ranking-prijs-bedrag mt-4">&euro;&nbsp;1.499</div>
              <p className="ranking-prijs-subtekst">Eenmalig &middot; excl. btw</p>
              <p className="text-section-body mt-3" style={{ fontSize: '0.9rem' }}>
                We bouwen de volledige SEO-basis op en optimaliseren alles wat nodig is om in de top 3 van jouw regio te komen. Inclusief uitbreiding naar meerdere plaatsen en postcodes.
              </p>
            </div>

            <hr className="ranking-prijs-divider" />

            <div>
              <h3 className="heading-sub" style={{ marginBottom: '0.75rem' }}>Wat wij doen</h3>
              <ul className="ranking-prijs-lijst">
                {eenmaligItems.map((item) => (
                  <li key={item} className="ranking-prijs-lijst__item">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', border: '2px solid var(--accent-green)', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-0.75rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--accent-green)',
              color: '#fff',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.2rem 0.875rem',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}>
              Zo blijf je daar
            </div>

            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">Fase 2 &middot; Maandelijks</div>
              <div className="ranking-prijs-bedrag mt-4">&euro;&nbsp;499</div>
              <p className="ranking-prijs-subtekst">Per maand &middot; excl. btw</p>
              <p className="text-section-body mt-3" style={{ fontSize: '0.9rem' }}>
                Google verandert continu. Wij houden je profiel actief, reageren op algoritme-updates en zorgen dat je positie niet wegglipt naar een concurrent.
              </p>
            </div>

            <hr className="ranking-prijs-divider" />

            <div>
              <h3 className="heading-sub" style={{ marginBottom: '0.75rem' }}>Wat wij doen</h3>
              <ul className="ranking-prijs-lijst">
                {retainerItems.map((item) => (
                  <li key={item} className="ranking-prijs-lijst__item">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Wat wij nodig hebben + drie punten ernaast, gecentreerd */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <div style={{
            maxWidth: '28rem',
            padding: '1rem 1.25rem',
            background: 'rgba(45, 106, 79, 0.06)',
            borderLeft: '3px solid var(--accent-green)',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            lineHeight: '1.7',
          }}>
            <h3 className="heading-sub" style={{ marginBottom: '0.5rem' }}>Wij hebben 2 dingen nodig om te beginnen:</h3>
            <ul className="ranking-prijs-lijst" style={{ margin: 0 }}>
              {whatWeNeed.map((item) => (
                <li key={item} className="ranking-prijs-lijst__item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
            {['Alle prijzen excl. btw', 'Geen opstartkosten', 'Geen minimale looptijd'].map((item) => (
              <span key={item} style={{
                fontSize: '0.875rem',
                color: 'var(--color-neutral-600)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                lineHeight: 1.4,
              }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.8rem' }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}