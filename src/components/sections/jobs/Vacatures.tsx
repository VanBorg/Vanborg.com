import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

interface Vacature {
  title: string
  positions: number
  description: string
  responsibilities: string[]
  requirements: string[]
  offer: string[]
}

const vacatures: Vacature[] = [
  {
    title: 'B2B Closer',
    positions: 2,
    description:
      'Je sluit deals met gekwalificeerde leads die door ons appointment setting team zijn ingepland. Je verkoopt Lokale SEO, SEO-websites en Google Ads aan Nederlandse ondernemers die online beter gevonden willen worden. Je verdient 10% commissie over alles wat je sluit en upselt, inclusief de eenmalige setup, de maandelijkse retainer en elke upsell die jij zelf initieert.',
    responsibilities: [
      'Salesgesprekken voeren met gekwalificeerde leads via telefoon en videocall',
      'Lokale SEO, SEO-websites en Google Ads verkopen en afstemmen op de situatie van de klant',
      'Upsells initiëren vanaf dag 1, want website, Google Ads en retainer tellen allemaal mee',
      'Deals sluiten en je pipeline zelfstandig beheren in Close CRM',
      'Klantrelaties warm houden zodat je maandelijkse commissie op de retainer blijft doorlopen',
    ],
    requirements: [
      'Minimaal 2 jaar aantoonbare ervaring in B2B sales of closing',
      'Ervaring met het verkopen van online marketingdiensten is een groot pluspunt',
      'Vloeiend Nederlands, sterk aan de telefoon en per video',
      'Zelfstandig en resultaatgericht, je regelt je eigen zaken',
    ],
    offer: [
      '10% commissie over alles, setup, retainer en elke upsell',
      'Bij closing van de Lokale SEO setup (€1.499) verdien je €150 eenmalig, daarna €50 per maand zolang de klant actief is',
      'Warme leads aangeleverd door ons appointment setting team',
      'Volledig remote werken, geen vaste uren en korte lijnen met de eigenaar',
    ],
  },
  {
    title: 'B2B Appointment Setter – Koud Bellen',
    positions: 3,
    description:
      'Jij bent het eerste contact met potentiële klanten. Je belt Nederlandse ondernemers van onze leadlijst op, wekt interesse in Lokale SEO en online marketing en plant gekwalificeerde afspraken in voor de Closers. Je verdient €50 per afspraak die daadwerkelijk plaatsvindt. Simpel en eerlijk.',
    responsibilities: [
      'Dagelijks outbound bellen naar prospects van de door Van Borg aangeleverde leadlijst',
      'Interesse wekken in Lokale SEO, Google Ads en SEO-websites',
      'Alleen afspraken inplannen met echte beslissers, zodat de Closer zijn tijd goed besteedt',
      'Bellijsten en CRM bijhouden in Close',
    ],
    requirements: [
      'Je bent niet bang voor afwijzing en hebt ervaring met koud bellen',
      'Overtuigend, direct en energiek aan de telefoon',
      'Vloeiend Nederlands',
      'Minimaal 20 uur per week beschikbaar',
    ],
    offer: [
      '€50 per gehonoreerde afspraak, prospect van onze lijst, beslisser, daagt op',
      'Bij een no-show of verkeerde persoon vindt er geen uitbetaling plaats',
      'Volledig remote werken met flexibele werktijden',
      'Mogelijkheid om door te groeien naar een Closer-rol',
    ],
  },
  {
    title: 'B2B Appointment Setter – Koud Email',
    positions: 1,
    description:
      'Je zet outbound e-mailcampagnes op voor prospects van onze leadlijst en zorgt dat er gekwalificeerde afspraken in de agenda van de Closers komen. Je beheert je eigen sequenties, test wat werkt en verdient €50 per afspraak die daadwerkelijk plaatsvindt.',
    responsibilities: [
      'Outbound e-mailcampagnes opzetten en uitvoeren naar prospects van de door Van Borg aangeleverde leadlijst',
      'Gepersonaliseerde e-mails schrijven die een reactie uitlokken, geen spam',
      'Follow-ups beheren en reacties snel opvolgen',
      'Alleen afspraken inplannen met beslissers en de pipeline bijhouden in Close CRM',
    ],
    requirements: [
      'Aantoonbare ervaring met cold email outreach',
      'Kennis van tools zoals Instantly, Lemlist of vergelijkbaar',
      'Sterke schriftelijke vaardigheden in het Nederlands',
      'Zelfstandig, georganiseerd en data-gedreven',
    ],
    offer: [
      '€50 per gehonoreerde afspraak, prospect van onze lijst, beslisser, daagt op',
      'Bij een no-show of verkeerde persoon vindt er geen uitbetaling plaats',
      'Vrijheid om je eigen strategie en sequenties te bepalen',
      'Volledig remote werken met korte communicatielijnen',
    ],
  },
]

const WHATSAPP_NUMBER = '31644732266'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hoi%2C%20ik%20heb%20interesse%20in%20een%20vacature%20bij%20Van%20Borg.`
const EMAIL = 'Info@vanborglimited.com'
/** Gmail compose in new tab – opent met Aan: vooringevuld. */
const MAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`


function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`faq-chevron${open ? ' faq-chevron--open' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function PositionBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-[var(--accent-green)] text-white ml-3 whitespace-nowrap">
      {count} {count === 1 ? 'positie' : 'posities'}
    </span>
  )
}

export function Vacatures() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = useCallback((idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx))
  }, [])

  return (
    <FadeUpSection id="vacatures" className="bg-section-2" aria-labelledby="vacatures-title">
      <Container>
        <div className="text-center">
          <h2 id="vacatures-title" className="heading-section">
            Openstaande vacatures
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Bekijk onze openstaande posities en vind de rol die bij jou past.
          </p>
        </div>

        <div className="faq-shell">
          <div className="faq-grid">
            {vacatures.map((vac, idx) => {
              const isOpen = openIdx === idx
              const headingId = `vacature-heading-${idx}`
              const panelId = `vacature-panel-${idx}`

              return (
                <div key={idx} className="card card-bordered faq-topic">
                  <h3 id={headingId} className="faq-topic__title heading-sub">
                    <button
                      type="button"
                      className="faq-topic__header"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(idx)}
                    >
                      <span className="flex items-center flex-wrap">
                        {vac.title}
                        <PositionBadge count={vac.positions} />
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className={`faq-topic__collapse${isOpen ? ' faq-topic__collapse--open' : ''}`}
                  >
                    <div className="faq-topic__inner">
                      <div className="faq-topic__questions">
                        <p className="faq-question__answer">{vac.description}</p>

                        {idx === 0 && (
                          <div className="mt-3">
                            <Link
                              to="/prijzen"
                              className="text-sm font-medium underline underline-offset-2"
                              style={{ color: 'var(--color-accent)' }}
                            >
                              Bekijk alle diensten en actuele prijzen
                            </Link>
                          </div>
                        )}

                        <div className="mt-4">
                          <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-neutral-900)' }}>
                            Wat ga je doen
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {vac.responsibilities.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-base" style={{ color: 'var(--color-neutral-700)' }}>
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-green)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-neutral-900)' }}>
                            Wat we vragen
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {vac.requirements.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-base" style={{ color: 'var(--color-neutral-700)' }}>
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-green)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <h4 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'var(--color-neutral-900)' }}>
                            Wat we bieden
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {vac.offer.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-base" style={{ color: 'var(--color-neutral-700)' }}>
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-green)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-5 mb-2 flex flex-wrap gap-3">
                          <a
                            href={MAIL_COMPOSE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 bg-white border border-[var(--border-color)] text-[var(--color-neutral-900)]"
                          >
                            <EmailIcon />
                            Stuur een e-mail
                          </a>
                          <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
                            }}
                            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 bg-[var(--accent-green)]"
                          >
                            <WhatsAppIcon />
                            Interesse? Stuur een WhatsApp
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}