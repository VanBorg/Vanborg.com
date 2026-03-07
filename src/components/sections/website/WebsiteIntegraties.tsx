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

const integrations = [
  'Webhooks en API-koppelingen (Make, Zapier, CRM\'s, boekingssystemen)',
  'Leadcapture direct naar CRM of e-mail',
  'Workflow triggers en automatische notificaties',
  'Boeking- en betaalintegraties',
  'Google Maps, reviewblokken, chatwidgets',
]

function IntegrationVisual() {
  return (
    <div className="card card-bordered card-elevated" style={{ padding: '2.5rem', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {/* Webhook icon */}
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(45, 106, 79, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 28, height: 28 }}>
            <path d="M18 16.98h1.67c1.47 0 2.66-1.19 2.66-2.66v0c0-1.47-1.19-2.66-2.66-2.66H18" />
            <path d="M6 16.98H4.33c-1.47 0-2.66-1.19-2.66-2.66v0c0-1.47 1.19-2.66 2.66-2.66H6" />
            <path d="M6 11.66h12" />
            <path d="M6 16.98h12" />
          </svg>
        </div>
        {/* API icon */}
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(45, 106, 79, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 28, height: 28 }}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        {/* Connection/link icon */}
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(45, 106, 79, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 28, height: 28 }}>
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        </div>
        {/* Workflow/gear icon */}
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'rgba(45, 106, 79, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 28, height: 28 }}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', color: 'var(--color-neutral-700)', fontSize: '0.875rem' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ width: 16, height: 16 }}>
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
        <span>Verbonden met jouw werkproces</span>
      </div>
    </div>
  )
}

export function WebsiteIntegraties() {
  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="website-integraties-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: visual */}
          <IntegrationVisual />

          {/* Right: text */}
          <div>
            <h2 id="website-integraties-title" className="heading-section">
              API &amp; Webhooks
            </h2>
            <p className="mt-3 text-section-body">
              Wij koppelen je website aan de tools en systemen die je dagelijks gebruikt.
              Van automatische leadverwerking tot boekingsintegraties — alles wordt naadloos
              verbonden met jouw workflow.
            </p>

            <ul className="ranking-prijs-lijst mt-6">
              {integrations.map((item) => (
                <li key={item} className="ranking-prijs-lijst__item">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-section-body" style={{ fontStyle: 'italic', color: 'var(--color-neutral-700)' }}>
              &ldquo;We bouwen niet alleen websites, we koppelen ze aan jouw werkproces.&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}
