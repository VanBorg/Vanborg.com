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

export function SalePrijs() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="sale-prijs-title">
      <Container>

        <div className="text-center">
          <h2 id="sale-prijs-title" className="heading-section">
            Gevonden worden én bezoekers omzetten
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Eén pakket. Lokale SEO én een website die scoort in Google.
            Alles op elkaar afgestemd, door één partij uitgevoerd.
          </p>
        </div>

        <div className="ranking-prijs-grid !grid-cols-1" style={{ maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="card card-bordered card-elevated ranking-prijs-card" style={{ maxWidth: '100%', textAlign: 'left' }}>

            {/* Header */}
            <div style={{ textAlign: 'center' }}>
              <div className="ranking-prijs-badge">Beperkt beschikbaar</div>
              <div className="ranking-prijs-bedrag mt-4">
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-neutral-500)', verticalAlign: 'middle', marginRight: '0.25rem' }}>Vanaf</span>
                &euro;&nbsp;2.999
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-neutral-700)' }}> excl. btw</span>
              </div>
              <p className="ranking-prijs-subtekst">
                Eenmalig &middot; normaal <s style={{ color: 'var(--color-neutral-400)' }}>&euro; 3.498</s> &middot; bespaar{' '}
                <strong style={{ color: 'var(--accent-green)' }}>&euro; 499</strong>
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.875rem', textAlign: 'left', border: '1px solid var(--color-neutral-200)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                <div style={{ padding: '0.625rem 0.875rem', background: 'var(--color-neutral-50)' }}>
                  <p style={{ fontWeight: 600, color: 'var(--color-neutral-700)', marginBottom: '0.375rem', fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Inbegrepen pagina&apos;s</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {['Homepage', '3 dienstenpagina\'s', 'Contactpagina', 'Locatiepagina\'s'].map((p) => (
                      <span key={p} style={{ background: 'var(--color-neutral-100)', border: '1px solid var(--color-neutral-200)', borderRadius: '999px', padding: '0.2rem 0.625rem', color: 'var(--color-neutral-700)', fontSize: '0.8125rem', fontWeight: 500 }}>{p}</span>
                    ))}
                  </div>
                </div>
                <div style={{ borderTop: '1px solid var(--color-neutral-200)', padding: '0.625rem 0.875rem', background: 'white' }}>
                  <p style={{ color: 'var(--color-neutral-500)', fontSize: '0.8125rem', margin: 0 }}>
                    Meer pagina&apos;s nodig? Elke extra pagina is beschikbaar <strong style={{ color: 'var(--color-neutral-700)' }}>vanaf &euro; 200</strong> p.p.
                  </p>
                </div>
              </div>
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Lokale SEO */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Lokale Top 3 Ranking</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Jouw bedrijf bovenaan in Google Maps en lokale zoekresultaten, voor de zoekopdrachten die klanten in jouw stad intypen.
              </p>
              <PrijsLijst items={[
                'Google Business Profiel volledig geoptimaliseerd',
                'Wekelijkse posts en foto\'s voor meer zichtbaarheid',
                'Locatie- en servicepagina\'s gericht op lokale zoektermen',
                'Opbouwen van citations voor meer domeinautoriteit',
                'Zichtbaar in Google Maps en de lokale 3-pack',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* SEO Website */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>SEO Website</h3>
              <p className="text-section-body" style={{ marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
                Geen template, geen pagebuilder. Elke website bouwen we op maat in Cursor met schone, snelle code. Gebouwd om te ranken en te converteren.
              </p>
              <PrijsLijst items={[
                'Maatwerk ontwerp afgestemd op jouw bedrijf en doelgroep',
                'Schone code gebouwd in Cursor, geen bloat, geen onnodige scripts',
                'SEO verwerkt in structuur, koppen en meta-beschrijvingen',
                'Volledig responsief op mobiel, tablet en desktop',
                'Google Maps, contactformulieren en reviewintegraties',
                'Snel ladend voor hogere ranking en minder wegklickers',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* Waarom bundel */}
            <div className="mt-2">
              <h3 className="heading-sub" style={{ marginBottom: '0.25rem' }}>Waarom dit samen werkt</h3>
              <PrijsLijst items={[
                'Website en SEO zijn op elkaar afgestemd vanaf dag één',
                'Resultaat sneller zichtbaar doordat beide gelijktijdig live gaan',
                'Één aanspreekpunt, geen gedoe met meerdere bureaus',
                'Eenmalige investering, geen verborgen maandelijkse kosten',
              ]} />
            </div>

            <hr className="ranking-prijs-divider" />

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <a href="/contact" className="btn-primary" style={{ display: 'inline-block', width: '100%' }}>
                Aanbieding aanvragen
              </a>
              <p style={{ marginTop: '0.875rem', fontSize: '0.875rem', color: 'var(--color-neutral-500)' }}>
                Geen verplichtingen &middot; Wij nemen binnen 1 werkdag contact op
              </p>
            </div>

          </div>
        </div>

      </Container>
    </FadeUpSection>
  )
}