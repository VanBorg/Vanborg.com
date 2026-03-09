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
  quota: string[]
  offer: string[]
}

const vacatures: Vacature[] = [
  {
    title: 'B2B Closer – Warme Leads',
    positions: 2,
    description:
      'Je sluit deals met gekwalificeerde leads die door onze appointment setters en koude e-mail outreach worden aangeleverd. Jouw hele bestaan binnen Van Borg draait om het closen van lauwe tot warme leads. Je focust op het verkopen van onze Lokale Top 3 (Lokale SEO) en SEO-websites aan Nederlandse ondernemers die online beter gevonden willen worden. Je bouwt een strakke pipeline op in Close CRM en zorgt dat geen enkele lead onbehandeld blijft. Je start op 10% commissie over alles wat je sluit en upselt. Bij bewezen resultaten groei je door naar 15%.',
    responsibilities: [
      'Salesgesprekken voeren met warme en lauwe leads via telefoon en videocall',
      'Primair verkopen: Lokale Top 3 (Lokale SEO) en SEO-websites. Retainers en Google Ads komen later als upsell',
      'Een strakke pipeline opzetten en beheren in Close CRM zodat elke lead wordt opgevolgd',
      'Upsells initiëren: als de klant draait, bied je de website, retainer of Google Ads aan',
      'Alle warme leads van de appointment setters en koude e-mail campagnes in behandeling nemen',
      'Lauwe leads die door de eigenaar worden doorgestuurd opvolgen en converteren',
      'Klantrelaties warm houden zodat je maandelijkse commissie op de retainer blijft doorlopen',
    ],
    requirements: [
      'Minimaal 2 jaar aantoonbare ervaring in B2B sales of closing',
      'Ervaring met het verkopen van online marketingdiensten (SEO, Google Ads, websites) is een groot pluspunt',
      'Vloeiend Nederlands (moedertaal of C2-niveau), sterk aan de telefoon en per video',
      'Zelfstandig, resultaatgericht en in staat om een eigen pipeline te managen',
    ],
    quota: [
      'Minimaal 1 gesloten klant per 5 afspraken (20% close rate)',
      'Minimaal 2 nieuwe klanten per week als target',
      'Alle aangeleverde leads binnen 24 uur opvolgen',
      'Pipeline in Close CRM dagelijks bijwerken, geen lead mag onbehandeld blijven',
    ],
    offer: [
      '10% commissie als instap, 15% na bewezen resultaten',
      'Combideal Lokale Top 3 + website (€3.000): €300 commissie bij 10%, €450 bij 15%',
      'Bij closing van alleen de Lokale Top 3 setup (€1.499): €150 eenmalig bij 10%, daarna €50/maand zolang de klant actief is',
      'Bij een SEO-website (vanaf €2.499): €250+ eenmalig bij 10%',
      'Warme leads aangeleverd door ons appointment setting team en koude e-mail campagnes',
      'Volledig remote werken met korte lijnen met de eigenaar',
    ],
  },
  {
    title: 'B2B Appointment Setter – Koud Bellen',
    positions: 4,
    description:
      'Jij bent het eerste contact met potentiële klanten. Je belt dagelijks Nederlandse ondernemers van onze leadlijst, wekt interesse in de Lokale Top 3 en SEO-websites, en plant gekwalificeerde afspraken in voor de Closers. Je belt in twee blokken per dag: ochtend (09:00-11:00) en middag (13:30-16:00). Je verdient €50 per afspraak die daadwerkelijk plaatsvindt met een beslisser.',
    responsibilities: [
      'Dagelijks outbound bellen naar prospects van de door Van Borg aangeleverde leadlijst',
      'Interesse wekken in de Lokale Top 3 (Lokale SEO) en SEO-websites',
      'Alleen afspraken inplannen met echte beslissers zodat de Closer zijn tijd goed besteedt',
      'Bellijsten en CRM bijhouden in Close',
      'Bellen in twee blokken per dag: ochtend (09:00-11:00) en middag (13:30-16:00)',
    ],
    requirements: [
      'Je bent niet bang voor afwijzing en hebt aantoonbare ervaring met koud bellen',
      'Overtuigend, direct en energiek aan de telefoon',
      'Vloeiend Nederlands (moedertaal of C2-niveau)',
      'Minimaal 25 uur per week beschikbaar, maandag tot en met vrijdag',
    ],
    quota: [
      'Minimaal 120 belletjes per dag via power dialer (4,5 uur belblokken, ca. 30 dials per uur inclusief gesprekstijd)',
      'Minimaal 3 gehonoreerde afspraken per dag als target (op basis van 2,5-3% conversie)',
      'Minimaal 12 gehonoreerde afspraken per week',
      'Bellen van maandag tot en met vrijdag, twee belblokken per dag: 09:00-11:00 en 13:30-16:00',
      'Dit zijn minimale targets, niet het moment om te stoppen. Hoe meer je belt, hoe meer je verdient',
    ],
    offer: [
      '€50 per gehonoreerde afspraak: prospect van onze lijst, beslisser, daagt op',
      'Bij een no-show of verkeerde persoon vindt geen uitbetaling plaats',
      'Bij 12 afspraken per week verdien je €600/week, bij 15+ zit je op €750+',
      'Volledig remote werken met flexibele indeling binnen de belblokken',
      'Mogelijkheid om door te groeien naar een Closer-rol',
    ],
  },
  {
    title: 'B2B Appointment Setter – Koude E-mail',
    positions: 2,
    description:
      'Je zet outbound e-mailcampagnes op voor prospects van onze leadlijst, focust op de Lokale Top 3 en SEO-websites, en zorgt dat er gekwalificeerde afspraken in de agenda van de Closers komen. Je hebt 10 voorverwarmde e-mailaccounts tot je beschikking waarmee je 300 nieuwe contacten per dag bereikt, ofwel 1.500 per week. Je beheert je eigen sequenties, test wat werkt en verdient €50 per afspraak die daadwerkelijk plaatsvindt.',
    responsibilities: [
      'Outbound e-mailcampagnes opzetten en uitvoeren naar 1.500 nieuwe prospects per week (10 accounts × 30 e-mails/dag × 5 dagen)',
      'Campagnes richten op de Lokale Top 3 (Lokale SEO) en SEO-websites',
      'Gepersonaliseerde e-mails schrijven die een reactie uitlokken, geen spam',
      'Follow-ups beheren en reacties snel opvolgen',
      'Alleen afspraken inplannen met beslissers en de pipeline bijhouden in Close CRM',
      'A/B-testen op onderwerpregels, copy en timing om conversie te verhogen',
      'Reagerende leads die niet direct een afspraak willen doorzetten naar de urgentie-scan funnel',
    ],
    requirements: [
      'Aantoonbare ervaring met cold email outreach en bewezen resultaten',
      'Kennis van tools zoals Instantly, Lemlist, Smartlead of vergelijkbaar',
      'Sterke schriftelijke vaardigheden in het Nederlands',
      'Zelfstandig, georganiseerd en data-gedreven',
    ],
    quota: [
      '1.500 nieuwe contacten per week via de 10 voorverwarmde accounts',
      'Minimaal 5 gehonoreerde afspraken per week als instaptarget (op basis van 4-5% reply rate en ~10% booking rate)',
      'Sequenties draaien van maandag tot en met vrijdag',
      'Alle reacties binnen 4 uur opvolgen tijdens werkdagen',
      'Wekelijkse rapportage van open rates, reply rates en geboekte afspraken',
    ],
    offer: [
      '€50 per gehonoreerde afspraak: prospect van onze lijst, beslisser, daagt op',
      'Bij een no-show of verkeerde persoon vindt geen uitbetaling plaats',
      'Bij 5 afspraken per week verdien je €250/week, bij 10+ zit je op €500+',
      '10 voorverwarmde e-mailaccounts direct beschikbaar',
      'Vrijheid om je eigen strategie en sequenties te bepalen',
      'Volledig remote werken met korte communicatielijnen',
    ],
  },
  {
    title: 'Zelfstandig B2B Sales Partner – Full Cycle',
    positions: 5,
    description:
      'Je bent een 100% zelfstandige closer die alles zelf opzet: van leadlijsten en prospecting tot pipeline management en het closen van deals. Het maakt ons niet uit hoe of waar je aan klanten komt. Jij vindt klanten die passen bij onze diensten en sluit ze. Je mag het volledige aanbod verkopen: Lokale Top 3, SEO-websites, Google Ads en retainers. Je eigen software en tools? Ga je gang. Je krijgt 25% commissie over alle omzet die je genereert, oplopend naar 30% na bewezen resultaten.',
    responsibilities: [
      'Je eigen leadlijsten samenstellen en prospects identificeren die passen bij onze diensten',
      'Zelf het eerste contact leggen via telefoon, e-mail, LinkedIn, netwerken of welke methode dan ook',
      'De volledige salescyclus doorlopen: van prospecting tot closing',
      'Een eigen pipeline opbouwen en beheren in Close CRM',
      'Het volledige aanbod verkopen: Lokale Top 3, SEO-websites, Google Ads, CRM-automations en retainers',
      'Klantrelaties onderhouden voor doorlopende retainercommissie',
    ],
    requirements: [
      'Minimaal 3 jaar ervaring in B2B sales, bij voorkeur in digitale marketing of online diensten',
      'Bewezen track record van zelfstandig klanten binnenhalen',
      'Eigen netwerk of bewezen methode om leads te genereren',
      'Je mag je eigen software en tools gebruiken voor leadgeneratie en outreach',
      'Vloeiend Nederlands (moedertaal of C2-niveau)',
      'Ondernemend, proactief en niet afhankelijk van aangeleverde leads',
    ],
    quota: [
      'Minimaal 1 nieuwe klant per week',
      'Eigen pipeline opgebouwd en bijgehouden in Close CRM',
      'Na 3 maanden evaluatie op basis van resultaten',
    ],
    offer: [
      '25% commissie als instap, 30% na bewezen resultaten',
      'Bij closing van de Lokale Top 3 setup (€1.499): €375 eenmalig bij 25%, daarna €125/maand per klant',
      'Combideal Lokale Top 3 + website (€3.000): €750 commissie bij 25%, €900 bij 30%',
      'Bij een SEO-website (vanaf €2.499): €625+ eenmalig bij 25%',
      'Volledig remote, volledige vrijheid in aanpak, tools en werktijden',
      'Geen micromanagement: jij bepaalt hoe je je targets haalt',
      'Langetermijnsamenwerking met groeiend commissie-inkomen door retainerklanten',
    ],
  },
]

const algemeenEisen: string[] = [
  'Nederlands op moedertaalniveau of C2',
  'Stabiele internetverbinding via ethernetkabel, geschikt voor VoIP-bellen (geen WiFi)',
  'Beschikbaar van maandag tot en met vrijdag',
  'Zelfstandig werken zonder dagelijkse aansturing',
  'Ambitieus, resultaatgericht en bereid om te groeien. We bouwen dit zo op dat iedereen goed kan verdienen, maar wie lui is of niet levert hoort hier niet thuis',
  'Targets zijn een minimum, geen eindpunt. Als je je dagelijkse target hebt gehaald betekent dat niet dat je klaar bent. Hoe meer je doet, hoe meer je verdient',
  'Remote werken met volledige flexibiliteit in werkplek. Jij moet ervoor zorgen dat je je werk kunt doen zonder dat het de rest hindert. Commitment is niet optioneel',
  'Vakantie en vrije dagen zijn altijd bespreekbaar. Wil je 3 maanden per jaar vrij? Prima, maar zorg dat je genoeg resultaat levert om je afwezigheid op te vangen. Anders houdt het op',
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
            Wij zoeken gedreven salesprofessionals die willen groeien en goed willen verdienen. 100% remote, 100% op commissie, 100% resultaatgericht.
          </p>
        </div>

        <div className="faq-shell">
          <div className="faq-grid">
            {/* Algemene eisen – altijd open, zelfde card-stijl als de vacatures */}
            <div className="card card-bordered faq-topic">
              <h3 className="faq-topic__title heading-sub">
                <div className="faq-topic__header" style={{ cursor: 'default' }}>
                  <span className="flex items-center flex-wrap">
                    Geldt voor alle vacatures
                  </span>
                </div>
              </h3>
              <div className="faq-topic__collapse faq-topic__collapse--open">
                <div className="faq-topic__inner">
                  <div className="faq-topic__questions">
                    <ul className="space-y-1.5">
                      {algemeenEisen.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-base" style={{ color: 'var(--color-neutral-700)' }}>
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-green)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Vacatures */}
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
                            Targets en quota
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {vac.quota.map((item) => (
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
                            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]"
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

            {/* Capaciteit en verdienpotentieel blok */}
            <div className="card card-bordered faq-topic">
              <h3 className="faq-topic__title heading-sub">
                <div className="faq-topic__header" style={{ cursor: 'default' }}>
                  <span className="flex items-center flex-wrap">
                    Onze capaciteit en jouw verdienpotentieel
                  </span>
                </div>
              </h3>
              <div className="faq-topic__collapse faq-topic__collapse--open">
                <div className="faq-topic__inner">
                  <div className="faq-topic__questions">
                    <p className="faq-question__answer">
                      Ons development team werkt met de beste AI-tools en software zoals Cursor en n8n.
                      Daardoor leveren we snel, schaalbaar en op hoog niveau. Op dit moment kunnen we
                      maandelijks zo'n 25 Lokale Top 3 trajecten en 10 SEO-websites opleveren, en dat
                      aantal groeit mee met de vraag.
                    </p>
                    <p className="faq-question__answer" style={{ marginTop: '0.75rem' }}>
                      Dat betekent concreet: er zit geen plafond op wat jij kunt verdienen. De targets
                      hierboven zijn een minimum. Wie harder werkt, meer belt of slimmer mailt, verdient
                      meer. Daarom bouwen we een stevig salesteam. We willen volume draaien, en we
                      hebben de capaciteit om dat waar te maken. Groeit de vraag sneller dan ons team
                      aankan? Dan schalen we het development team op. Jouw resultaten worden nooit
                      afgeremd door onze achterkant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </FadeUpSection>
  )
}