import { useState, useCallback, type ReactNode } from 'react'
import { Container } from '../ui/Container'
import { FadeUpSection } from '../ui/FadeUpSection'
import { LOCATION_PAGES } from '../../data/locations'
import { Link } from 'react-router-dom'

interface FAQQuestion {
  q: string
  a: string
  rich?: ReactNode
}

interface FAQTopic {
  title: string
  questions: FAQQuestion[]
}

const faqData: FAQTopic[] = [
  {
    title: 'Services',
    questions: [
      {
        q: 'Wat is Lokale SEO bij Van Borg?',
        a: 'Met Lokale SEO zorgen we dat je bedrijf beter zichtbaar wordt in Google Maps en lokale zoekresultaten. We optimaliseren je Google Business Profiel en website zodat klanten uit jouw regio je sneller vinden.',
        rich: (
          <>
            <Link to="/ranking" className="text-[var(--accent-green-light)]">
              Lokale SEO
            </Link>{' '}
            is onze aanpak om je zichtbaarheid in Google Maps en lokale zoekresultaten te vergroten. We optimaliseren je Google Business Profiel en website zodat klanten uit jouw regio je sneller vinden.
          </>
        ),
      },
      {
        q: 'Wat houden jullie Google Ads pakketten in?',
        a: 'Google Ads start vanaf € 549 per maand (€ 10/dag budget + € 249 servicefee). We hebben vijf pakketten: Starten (€ 549/mnd), Groeien (€ 899/mnd), Schalen (€ 1.249/mnd), Domineren (€ 1.599/mnd) en Marktleider (€ 1.949/mnd). We beheren campagnes volledig: van zoekwoorden en advertentieteksten tot doorlopende optimalisatie. Alle prijzen excl. btw, geen opstartkosten en geen minimale looptijd.',
        rich: (
          <>
            Onze{' '}
            <Link to="/ads" className="text-[var(--accent-green-light)]">
              Google Ads service
            </Link>{' '}
            start <strong>vanaf € 549 per maand</strong> (€ 10/dag advertentiebudget + € 249 servicefee). We hebben vijf pakketten: van <strong>Starten</strong> (€ 549/mnd) tot <strong>Marktleider</strong> (€ 1.949/mnd). We beheren campagnes volledig van zoekwoorden en advertentieteksten tot doorlopende optimalisatie. Geen opstartkosten en geen minimale looptijd. Bekijk alle pakketten op de{' '}
            <Link to="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Wat houdt Online Marketing Strategie in?',
        a: 'Online Marketing Strategie is een adviesdienst waarin we jouw huidige situatie analyseren en een concreet plan maken: welke kanalen je inzet, welke aanpak je volgt en welk budget daarbij past.',
        rich: (
          <>
            Bij <strong>Online Marketing Strategie</strong> analyseren we je huidige situatie en vertalen dat naar een concreet plan met kanalen, aanpak en budget. Zo weet je precies waar je moet beginnen en waarop je moet sturen.
          </>
        ),
      },
      {
        q: 'Wat krijg ik bij een SEO Audit?',
        a: 'Bij een SEO Audit analyseren we je volledige website op SEO-fouten, technische problemen en gemiste kansen. Je ontvangt een rapport met duidelijke verbeterpunten.',
        rich: (
          <>
            Een <strong>SEO Audit</strong> geeft je een helder rapport met exacte verbeterpunten voor techniek, content en structuur, zodat je website beter kan presteren in Google.
          </>
        ),
      },
      {
        q: 'Waarom is Zoekwoordenonderzoek belangrijk?',
        a: 'Met Zoekwoordenonderzoek bepalen we op welke termen jouw ideale klanten zoeken in Google. Dat helpt je om content en pagina’s te maken die meer relevante bezoekers en aanvragen opleveren.',
        rich: (
          <>
            <strong>Zoekwoordenonderzoek</strong> laat zien welke termen je doelgroep gebruikt. Daarmee kun je gericht content en pagina&apos;s optimaliseren voor meer zichtbaarheid en aanvragen.
          </>
        ),
      },
      {
        q: 'Wat is een SEO- en verkoopgeoptimaliseerde website bij jullie?',
        a: 'Een SEO Website van Van Borg is een snelle, conversiegerichte site gebouwd met moderne techniek (React, TypeScript, Tailwind) en ingericht op Core Web Vitals, technische SEO, duidelijke CTA’s en leadcapture, zodat bezoekers makkelijker klant worden.',
        rich: (
          <>
            Een{' '}
            <Link to="/website" className="text-[var(--accent-green-light)]">
              SEO Website
            </Link>{' '}
            van Van Borg is een snelle, conversiegerichte site gebouwd met moderne techniek (React, TypeScript, Tailwind) en ingericht op Core Web Vitals, technische SEO, duidelijke CTA’s en leadcapture, zodat bezoekers makkelijker klant worden. In onze{' '}
            <Link to="/aanbieding" className="text-[var(--accent-green-light)]">
              Website + Top 3 aanbieding
            </Link>{' '}
            combineren we deze website met een lokaal ranking-traject.
          </>
        ),
      },
    ],
  },
  {
    title: 'Over ons',
    questions: [
      {
        q: 'Wie is Van Borg en wat doen jullie?',
        a: 'Van Borg (Van Borg Limited) is een internetmarketing bedrijf uit Veendam met Marketingconsultant als extra categorie. We helpen bedrijven in Nederland met Lokale SEO, Google Ads, SEO Website, Online Marketing Strategie, SEO Audit en Zoekwoordenonderzoek.',
        rich: (
          <>
            Van Borg (Van Borg Limited) is een internetmarketing bedrijf uit Veendam met Marketingconsultant als extra categorie. We helpen bedrijven in Nederland met{' '}
            <Link to="/ranking" className="text-[var(--accent-green-light)]">
              Lokale SEO
            </Link>
            ,{' '}
            <Link to="/ads" className="text-[var(--accent-green-light)]">
              Google Ads-campagnes
            </Link>{' '}
            en{' '}
            <Link to="/website" className="text-[var(--accent-green-light)]">
              SEO Website
            </Link>
            , plus Online Marketing Strategie, SEO Audit en Zoekwoordenonderzoek.
          </>
        ),
      },
      {
        q: 'Met wat voor soort bedrijven werken jullie en waar zijn jullie actief?',
        a: 'Wij bedienen uitsluitend bedrijven in Nederland. De focus ligt op lokale dienstverleners en MKB-bedrijven die via Google Zoeken en Maps gevonden willen worden – onder andere in Veendam, Wildervank, Ommelanderwijk, Borgercompagnie, Tripscompagnie, Zuidbroek, Muntendam, Meeden, Bareveld, Noordbroek, Sappemeer, Hoogezand, Winschoten, Oude Pekela, Nieuwe-Pekela, Nieuwe Diep, Zuidlaren, Stadskanaal, Gieten, Eext, Annen, Gasselte, Drouwen en Onstwedde.',
        rich: (
          <>
            Wij bedienen uitsluitend bedrijven in Nederland. De focus ligt op lokale dienstverleners en MKB-bedrijven die via Google Zoeken en Maps gevonden willen worden. Bekijk al onze{' '}
            <Link to="/locatie" className="text-[var(--accent-green-light)]">
              werkgebieden
            </Link>
            , waaronder{' '}
            {LOCATION_PAGES.slice(0, 5).map((loc, i) => (
              <span key={loc.slug}>
                <Link to={`/locatie/${loc.slug}`} className="text-[var(--accent-green-light)]">
                  {loc.name}
                </Link>
                {i < 4 ? ', ' : ' en meer.'}
              </span>
            ))}
          </>
        ),
      },
      {
        q: 'Hoe toegankelijk is jullie locatie en hoe zit het met parkeren?',
        a: 'Onze hoofdlokatie is Kieler Bocht 104, 9642 CE Veendam. Volgens onze LocalBusiness-informatie is er geen rolstoeltoegankelijke ingang, toilet, parking of seating en zijn er geen assistive listening devices. Wel is er gratis parkeren op straat in de buurt. In de praktijk werken we vooral online, zodat fysiek langskomen meestal niet nodig is.',
      },
    ],
  },
  {
    title: 'Contact info',
    questions: [
      {
        q: 'Wat zijn jullie openingstijden en hoe snel reageren jullie?',
        a: 'Officieel staan we als 24/7 geopend (00:00–23:59, alle dagen). In de praktijk plannen we afspraken en calls op momenten die voor beide partijen werken, meestal overdag op werkdagen. We reageren zo snel mogelijk op aanvragen via het formulier, Loom-videoverzoeken en geplande calls.',
        rich: (
          <>
            Officieel staan we als 24/7 geopend (00:00–23:59, alle dagen). In de praktijk plannen we afspraken en calls op momenten die voor beide partijen werken, meestal overdag op werkdagen. We reageren zo snel mogelijk op aanvragen via het{' '}
            <a href="#contact" className="text-[var(--accent-green-light)]">
              contactgedeelte op de pagina
            </a>
            , Loom-videoverzoeken en geplande calls.
          </>
        ),
      },
      {
        q: 'Hoe kan ik het beste contact opnemen of een gesprek plannen?',
        a: 'Je kunt contact opnemen via de contactpagina, een Loom video aanvragen of direct een 15-minuten gesprek boeken via Calendly. De links naar het formulier, Loom en Calendly staan in onze contactsectie zoals beschreven in de company context.',
        rich: (
          <>
            Je kunt contact opnemen via het{' '}
            <a href="#contact" className="text-[var(--accent-green-light)]">
              contactgedeelte op deze pagina
            </a>
            , een ranking-scan aanvragen via onze{' '}
            <a
              href="https://forms.gle/s3cnmZ7PSuxdo4Yp9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-green-light)]"
            >
              Google Sheet / formulier
            </a>{' '}
            of direct een 15-minuten gesprek boeken via{' '}
            <a
              href="https://calendly.com/vanborglimited/van_borg_sales_call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent-green-light)]"
            >
              Calendly
            </a>
            . De links naar het formulier en Calendly staan ook in onze contactsectie.
          </>
        ),
      },
      {
        q: 'Waar vind ik jullie privacybeleid en algemene voorwaarden?',
        a: 'Ons privacybeleid en de algemene voorwaarden vind je op de gelijknamige pagina\'s. De links staan ook onderaan elke pagina in de footer.',
        rich: (
          <>
            Ons{' '}
            <Link to="/privacy" className="text-[var(--accent-green-light)]">
              privacybeleid
            </Link>{' '}
            en de{' '}
            <Link to="/voorwaarden" className="text-[var(--accent-green-light)]">
              algemene voorwaarden
            </Link>{' '}
            vind je op de gelijknamige pagina&apos;s. De links staan ook onderaan elke pagina in de footer.
          </>
        ),
      },
    ],
  },
  {
    title: 'Werkgebieden',
    questions: [
      {
        q: 'In welke plaatsen en regio\u2019s werken jullie?',
        a: 'Wij werken met bedrijven in heel Nederland. Vaste werkgebieden zijn onder andere Veendam, Wildervank, Ommelanderwijk, Borgercompagnie, Tripscompagnie, Zuidbroek, Muntendam, Meeden, Bareveld, Noordbroek, Sappemeer, Hoogezand, Winschoten, Oude Pekela, Nieuwe-Pekela, Nieuwe Diep, Zuidlaren, Stadskanaal, Gieten, Eext, Annen, Gasselte, Drouwen en Onstwedde.',
        rich: (
          <>
            Wij werken met bedrijven in heel Nederland. Onze vaste werkgebieden zijn:{' '}
            {LOCATION_PAGES.map((loc, i) => (
              <span key={loc.slug}>
                <Link to={`/locatie/${loc.slug}`} className="text-[var(--accent-green-light)]">
                  {loc.name}
                </Link>
                {i < LOCATION_PAGES.length - 1 ? ', ' : '. '}
              </span>
            ))}
            Bekijk alle{' '}
            <Link to="/locatie" className="text-[var(--accent-green-light)]">
              werkgebieden
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Werken jullie ook met bedrijven buiten Nederland?',
        a: 'Nee. Wij richten ons uitsluitend op bedrijven in Nederland en nemen geen internationale klanten buiten Nederland aan.',
      },
    ],
  },
  {
    title: 'Prijzen & betaling',
    questions: [
      {
        q: 'Wat houdt de Aanbieding (Lokale SEO + SEO Website) precies in?',
        a: 'De aanbieding combineert Lokale Top 3 Ranking met een SEO Website voor € 2.999 eenmalig excl. btw (normaal € 3.498, bespaar € 499). Inbegrepen: homepage, 3 dienstenpagina\'s, contactpagina en locatiepagina\'s. De website wordt volledig op maat gebouwd, inclusief Google Business Profiel-optimalisatie, wekelijkse posts, citations en lokale SEO. Extra pagina\'s zijn beschikbaar vanaf € 200 per stuk.',
        rich: (
          <>
            De{' '}
            <Link to="/aanbieding" className="text-[var(--accent-green-light)]">
              Aanbieding (Lokale Top 3 + SEO Website)
            </Link>{' '}
            combineert ranking en website voor <strong>€ 2.999 eenmalig</strong> excl. btw (normaal € 3.498, bespaar <strong>€ 499</strong>). Inbegrepen: homepage, 3 dienstenpagina&apos;s, contactpagina en locatiepagina&apos;s. De website wordt op maat gebouwd, inclusief GBP-optimalisatie, wekelijkse posts, citations en lokale SEO. Extra pagina&apos;s vanaf € 200 p.p. Bekijk de details op de{' '}
            <Link to="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Wat kosten jullie diensten?',
        a: 'Lokale Top 3 Ranking kost € 1.499 eenmalig, met een optionele retainer van € 499/mnd om je positie te behouden. Google Ads start vanaf € 549 per maand (budget + servicefee). Een SEO Website begint vanaf € 1.499 eenmalig, andere websitetypes vanaf € 799. De combinatie-aanbieding (Ranking + SEO Website) kost € 2.999 eenmalig. Alle prijzen excl. btw. Bekijk het volledige overzicht op de prijzenpagina.',
        rich: (
          <>
            <Link to="/ranking" className="text-[var(--accent-green-light)]">
              Lokale Top 3 Ranking
            </Link>{' '}
            kost <strong>€ 1.499 eenmalig</strong>, met een optionele retainer van € 499/mnd.{' '}
            <Link to="/ads" className="text-[var(--accent-green-light)]">
              Google Ads
            </Link>{' '}
            start <strong>vanaf € 549 per maand</strong> (budget + servicefee). Een{' '}
            <Link to="/website" className="text-[var(--accent-green-light)]">
              SEO Website
            </Link>{' '}
            begint <strong>vanaf € 1.499 eenmalig</strong>, andere websitetypes vanaf € 799. De{' '}
            <Link to="/aanbieding" className="text-[var(--accent-green-light)]">
              combinatie-aanbieding
            </Link>{' '}
            kost <strong>€ 2.999 eenmalig</strong>. Alle prijzen excl. btw. Bekijk het volledige overzicht op de{' '}
            <Link to="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Welke diensten vallen onder Marketingconsultant?',
        a: 'Onder de extra categorie Marketingconsultant vallen bij ons: Online Marketing Strategie, SEO Audit en Zoekwoordenonderzoek.',
      },
      {
        q: 'Welke betaalmethodes accepteren jullie?',
        a: 'Ons werk start zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of Bitcoin ($BTC), in lijn met wat in onze company context is vastgelegd.',
      },
      {
        q: 'Welke soorten websites bouwen jullie en wat kosten ze?',
        a: 'Wij bouwen diverse soorten websites, allemaal volledig op maat. SEO Website vanaf € 1.499, Webshop vanaf € 1.999, Boeking & Afspraken vanaf € 1.299, Horeca & Restaurants vanaf € 1.299, Portfolio & Presentatie vanaf € 799, Vastgoed & Makelaars vanaf € 1.999, Zorg & Medisch vanaf € 1.499 en Crypto & Web3 vanaf € 1.999. Extra pagina\'s kosten € 200 tot € 300 per stuk. Wil je lokale SEO toevoegen aan een niet-SEO website? Dat kan als add-on voor € 650 eenmalig. Alle prijzen excl. btw.',
        rich: (
          <>
            Wij bouwen diverse soorten websites, allemaal volledig op maat. Prijzen (eenmalig, excl. btw): <strong>SEO Website</strong> vanaf € 1.499, <strong>Webshop</strong> vanaf € 1.999, <strong>Boeking &amp; Afspraken</strong> vanaf € 1.299, <strong>Horeca</strong> vanaf € 1.299, <strong>Portfolio</strong> vanaf € 799, <strong>Vastgoed</strong> vanaf € 1.999, <strong>Zorg &amp; Medisch</strong> vanaf € 1.499 en <strong>Crypto &amp; Web3</strong> vanaf € 1.999. Extra pagina&apos;s kosten € 200–300 p.p. Lokale SEO add-on voor niet-SEO websites: € 650. Bekijk alle details op de{' '}
            <Link to="/website" className="text-[var(--accent-green-light)]">
              websitepagina
            </Link>{' '}
            of de{' '}
            <Link to="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Wat kost doorlopend SEO-beheer (retainer)?',
        a: 'Na de eenmalige opzet (Fase 1, € 1.499) kun je kiezen voor een maandelijkse retainer van € 499/mnd (Fase 2). Daarmee houden we je Google Business Profiel actief met wekelijkse posts en foto\'s, reageren we op algoritme-updates, voegen we nieuwe zoekwoorden en locaties toe en ontvang je maandelijks een heatmap met rankings per zoekterm en locatie. Alle prijzen excl. btw.',
        rich: (
          <>
            Na de eenmalige opzet (Fase 1, € 1.499) kun je kiezen voor een maandelijkse{' '}
            <Link to="/ranking" className="text-[var(--accent-green-light)]">
              retainer van € 499/mnd
            </Link>{' '}
            (Fase 2). Daarmee houden we je GBP actief met wekelijkse posts en foto&apos;s, reageren we op algoritme-updates, voegen we nieuwe zoekwoorden en locaties toe en ontvang je maandelijks een heatmap met rankings. Bekijk het volledige overzicht op de{' '}
            <Link to="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    title: 'Garanties & resultaten',
    questions: [
      {
        q: 'Wat voor resultaten kan ik realistisch verwachten?',
        a: 'Voor Google Ranking is het doel om binnen ongeveer 90 dagen in de Top 3 te komen voor lokale zoekopdrachten. Bij Google Ads zien veel klanten al in de eerste week verkeer en een significantere ROI na ongeveer 3 maanden. SEO Websites zijn ontworpen om vanaf dag één beter te converteren zodra er relevant verkeer op komt. Resultaten blijven altijd afhankelijk van markt, concurrentie en budget.',
        rich: (
          <>
            Voor{' '}
            <Link to="/ranking" className="text-[var(--accent-green-light)]">
              Google Ranking
            </Link>{' '}
            is het doel om binnen ongeveer 90 dagen in de Top 3 te komen voor lokale zoekopdrachten. Bij{' '}
            <Link to="/ads" className="text-[var(--accent-green-light)]">
              Google Ads
            </Link>{' '}
            zien veel klanten al in de eerste week verkeer en een significantere ROI na ongeveer 3 maanden.{' '}
            <Link to="/website" className="text-[var(--accent-green-light)]">
              SEO Websites
            </Link>{' '}
            zijn ontworpen om vanaf dag één beter te converteren zodra er relevant verkeer op komt. Resultaten blijven altijd afhankelijk van markt, concurrentie en budget.
          </>
        ),
      },
      {
        q: 'Wat betekent “Top 3 binnen 90 dagen of we werken gratis door”?',
        a: 'Voor onze Google Ranking dienst geldt: halen we de beoogde Top 3-positie binnen de afgesproken periode niet, dan werken we in principe gratis door totdat we het maximaal haalbare resultaat in jouw situatie hebben bereikt. We kunnen nooit een exacte positie op elk individueel zoekwoord 100% garanderen, maar we blijven optimaliseren binnen realistische grenzen.',
      },
      {
        q: 'Geven jullie harde garanties op omzet of aantal leads?',
        a: 'Nee. In lijn met onze context geven we geen harde omzet- of leadgaranties, zeker niet bij Google Ads waar advertentiebudget en markt omstandigheden een grote rol spelen. Wel werken we datagedreven, sturen we op ROI en communiceren we eerlijk over wat haalbaar is.',
      },
    ],
  },
]

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

function buildJsonLd(topics: FAQTopic[]) {
  const entities = topics.flatMap((t) =>
    t.questions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities,
  }
}

export function FAQ() {
  const [openTopicIdx, setOpenTopicIdx] = useState<number | null>(null)
  const [openQuestionKey, setOpenQuestionKey] = useState<string | null>(null)

  const toggleTopic = useCallback((topicIdx: number) => {
    setOpenTopicIdx((current) => (current === topicIdx ? null : topicIdx))
    setOpenQuestionKey(null)
  }, [])

  const toggleQuestion = useCallback((topicIdx: number, questionIdx: number) => {
    const key = `${topicIdx}-${questionIdx}`
    setOpenTopicIdx(topicIdx)
    setOpenQuestionKey((current) => (current === key ? null : key))
  }, [])

  return (
    <FadeUpSection className="bg-section-1" aria-labelledby="faq-title">
      <Container>
        <div className="text-center">
          <h2 id="faq-title" className="heading-section">
            Veelgestelde vragen
          </h2>
          <p className="mt-3 text-section-lead max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten en werkwijze.
          </p>
        </div>

        <div className="faq-shell">
          <div className="faq-grid">
            {faqData.map((topic, tIdx) => {
            const topicOpen = openTopicIdx === tIdx
            const topicId = `faq-topic-${tIdx}`
            const panelId = `faq-panel-${tIdx}`

            return (
              <div key={topicId} className="card card-bordered faq-topic">
                <h3 id={topicId} className="faq-topic__title heading-sub">
                  <button
                    type="button"
                    className="faq-topic__header"
                    aria-expanded={topicOpen}
                    aria-controls={panelId}
                    onClick={() => toggleTopic(tIdx)}
                  >
                    {topic.title}
                    <ChevronIcon open={topicOpen} />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={topicId}
                  className={`faq-topic__collapse${topicOpen ? ' faq-topic__collapse--open' : ''}`}
                >
                  <div className="faq-topic__inner">
                    <div className="faq-topic__questions">
                      {topic.questions.map((item, qIdx) => {
                        const qKey = `${tIdx}-${qIdx}`
                        const qOpen = openQuestionKey === qKey
                        const qBtnId = `faq-q-${qKey}`
                        const qPanelId = `faq-a-${qKey}`
                        const qHeadingId = `faq-q-heading-${qKey}`

                        return (
                          <div key={qKey} className="faq-question">
                            <h4 id={qHeadingId} className="faq-question__heading">
                              <button
                                type="button"
                                id={qBtnId}
                                className="faq-question__trigger"
                                aria-expanded={qOpen}
                                aria-controls={qPanelId}
                                onClick={() => toggleQuestion(tIdx, qIdx)}
                              >
                                {item.q}
                                <ChevronIcon open={qOpen} />
                              </button>
                            </h4>

                            <div
                              id={qPanelId}
                              role="region"
                              aria-labelledby={qHeadingId}
                              className={`faq-question__collapse${qOpen ? ' faq-question__collapse--open' : ''}`}
                            >
                              <div className="faq-question__inner">
                                <p className="faq-question__answer">{item.rich ?? item.a}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(faqData)) }}
      />
    </FadeUpSection>
  )
}
