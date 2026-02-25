import { useState, useCallback, type ReactNode } from 'react'
import { Container } from '../ui/Container'
import { LOCATION_PAGES } from '../../data/locations'

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
        q: 'Wat is Google Ranking (Top 3 lokaal)?',
        a: 'Google Ranking is ons Local SEO-traject waarmee we je Google Business Profile en website optimaliseren zodat je lokaal hoger komt in Google Zoeken en Google Maps, met als doel een Top 3-positie voor hoog-intentie zoekopdrachten.',
        rich: (
          <>
            <a href="/ranking" className="text-[var(--accent-green-light)]">
              Google Ranking
            </a>{' '}
            is ons Local SEO-traject waarmee we je Google Business Profile en website optimaliseren zodat je lokaal hoger komt in Google Zoeken en Google Maps, met als doel een Top 3-positie voor hoog-intentie zoekopdrachten.
          </>
        ),
      },
      {
        q: 'Wat houden jullie Google Ads pakketten in?',
        a: 'Onze Google Ads-pakketten zijn er in drie varianten (advertentiebudget inbegrepen): Klein – € 499 p/m (1 campagne), Middel – € 899 p/m (tot 3 campagnes, A/B-tests, conversietracking), Groot – € 1.299 p/m (onbeperkte campagnes, dedicated accountmanager).',
        rich: (
          <>
            Onze{' '}
            <a href="/ads" className="text-[var(--accent-green-light)]">
              Google Ads-pakketten
            </a>{' '}
            zijn er in drie varianten — advertentiebudget is inbegrepen in de prijs:{' '}
            <strong>Klein (€ 499 p/m)</strong> voor 1 campagne,{' '}
            <strong>Middel (€ 899 p/m)</strong> voor tot 3 campagnes met A/B-tests en conversietracking, en{' '}
            <strong>Groot (€ 1.299 p/m)</strong> voor onbeperkte campagnes met dedicated accountmanager. Zie de{' '}
            <a href="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </a>{' '}
            voor het volledige overzicht.
          </>
        ),
      },
      {
        q: 'Wat is een SEO- en verkoopgeoptimaliseerde website bij jullie?',
        a: 'Een SEO Website van Van Borg is een snelle, conversiegerichte site gebouwd met moderne techniek (React, TypeScript, Tailwind) en ingericht op Core Web Vitals, technische SEO, duidelijke CTA’s en leadcapture, zodat bezoekers makkelijker klant worden.',
        rich: (
          <>
            Een{' '}
            <a href="/website" className="text-[var(--accent-green-light)]">
              SEO Website
            </a>{' '}
            van Van Borg is een snelle, conversiegerichte site gebouwd met moderne techniek (React, TypeScript, Tailwind) en ingericht op Core Web Vitals, technische SEO, duidelijke CTA’s en leadcapture, zodat bezoekers makkelijker klant worden. In onze{' '}
            <a href="/aanbieding" className="text-[var(--accent-green-light)]">
              Website + Top 3 aanbieding
            </a>{' '}
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
        a: 'Van Borg (Van Borg Limited) is een marketing consultant / marketingbureau uit Veendam dat lokale bedrijven in Nederland helpt met Google Top 3 ranking, Google Ads-campagnes en SEO- en sales-geoptimaliseerde websites. We richten ons op meetbare groei: hogere rankings, meer gekwalificeerde leads en betere conversie.',
        rich: (
          <>
            Van Borg (Van Borg Limited) is een marketing consultant / marketingbureau uit Veendam dat lokale bedrijven in Nederland helpt met{' '}
            <a href="/ranking" className="text-[var(--accent-green-light)]">
              Google Top 3 ranking
            </a>
            ,{' '}
            <a href="/ads" className="text-[var(--accent-green-light)]">
              Google Ads-campagnes
            </a>{' '}
            en{' '}
            <a href="/website" className="text-[var(--accent-green-light)]">
              SEO- en sales-geoptimaliseerde websites
            </a>
            . We richten ons op meetbare groei: hogere rankings, meer gekwalificeerde leads en betere conversie.
          </>
        ),
      },
      {
        q: 'Met wat voor soort bedrijven werken jullie en waar zijn jullie actief?',
        a: 'Wij bedienen uitsluitend bedrijven in Nederland. De focus ligt op lokale dienstverleners en MKB-bedrijven die via Google Zoeken en Maps gevonden willen worden – onder andere in Veendam, Wildervank, Ommelanderwijk, Borgercompagnie, Tripscompagnie, Zuidbroek, Muntendam, Meeden, Bareveld, Noordbroek, Sappemeer, Hoogezand, Winschoten, Oude Pekela, Nieuwe-Pekela, Nieuwe Diep, Zuidlaren, Stadskanaal, Gieten, Eext, Annen, Gasselte, Drouwen en Onstwedde.',
        rich: (
          <>
            Wij bedienen uitsluitend bedrijven in Nederland. De focus ligt op lokale dienstverleners en MKB-bedrijven die via Google Zoeken en Maps gevonden willen worden. Bekijk al onze{' '}
            <a href="/locatie" className="text-[var(--accent-green-light)]">
              werkgebieden
            </a>
            , waaronder{' '}
            {LOCATION_PAGES.slice(0, 5).map((loc, i) => (
              <span key={loc.slug}>
                <a href={`/locatie/${loc.slug}`} className="text-[var(--accent-green-light)]">
                  {loc.name}
                </a>
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
            <a href="/privacy" className="text-[var(--accent-green-light)]">
              privacybeleid
            </a>{' '}
            en de{' '}
            <a href="/voorwaarden" className="text-[var(--accent-green-light)]">
              algemene voorwaarden
            </a>{' '}
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
                <a href={`/locatie/${loc.slug}`} className="text-[var(--accent-green-light)]">
                  {loc.name}
                </a>
                {i < LOCATION_PAGES.length - 1 ? ', ' : '. '}
              </span>
            ))}
            Bekijk alle{' '}
            <a href="/locatie" className="text-[var(--accent-green-light)]">
              werkgebieden
            </a>
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
        q: 'Wat houdt de Website + Top 3 aanbieding precies in?',
        a: 'De Website + Top 3 aanbieding kost € 2.999 eenmalig excl. btw + € 499 p/m. Je krijgt een SEO-geoptimaliseerde website (max. 5 pagina’s) + tot 7 locatiepagina’s, Google Business Profile setup, hosting via Netlify, tot 3 grotere of 5 kleine websitewijzigingen, wekelijkse heatmap-rapportages en maandelijkse calls. Looptijd 90 dagen.',
        rich: (
          <>
            De{' '}
            <a href="/aanbieding" className="text-[var(--accent-green-light)]">
              Website + Top 3 aanbieding
            </a>{' '}
            kost € 2.999 eenmalig excl. btw + € 499 p/m. Je krijgt een SEO-geoptimaliseerde website (max. 5 pagina’s) inclusief tot 7 locatiepagina’s, Google Business Profile setup en optimalisatie, hosting via Netlify, tot 3 grotere of 5 kleine wijzigingen, wekelijkse heatmap-rapportages en maandelijkse calls – alles in 90 dagen parallel. Zie{' '}
            <a href="/prijzen" className="text-[var(--accent-green-light)]">
              prijzenpagina
            </a>
            .
          </>
        ),
      },
      {
        q: 'Hoe kan ik betalen voor Local Ranking, Websites en Ads?',
        a: 'Voor Local Ranking en SEO Websites kun je het eenmalige bedrag in één keer of in drie termijnen betalen. De maandelijkse retainers (bijv. vanaf € 499 p/m voor Ranking en € 99 p/m hosting) worden maandelijks voldaan. Voor Google Ads-pakketten is het advertentiebudget inbegrepen in de maandelijkse servicefee.',
        rich: (
          <>
            Voor Local Ranking en SEO Websites kun je het eenmalige bedrag in één keer of in drie termijnen betalen. De maandelijkse retainers (bijv. vanaf € 499 p/m voor Ranking en € 99 p/m hosting) worden maandelijks voldaan. Voor Google Ads-pakketten is het advertentiebudget inbegrepen in de maandelijkse servicefee. Op de{' '}             <a href="/prijzen" className="text-[var(--accent-green-light)]">               prijzenpagina             </a>{' '}             zie je hoe alle pakketten zijn opgebouwd.
          </>
        ),
      },
      {
        q: 'Welke betaalmethodes accepteren jullie?',
        a: 'Ons werk start zodra de betaling is ontvangen. Je kunt betalen via bankoverschrijving, creditcard, contant of Bitcoin ($BTC), in lijn met wat in onze company context is vastgelegd.',
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
            <a href="/ranking" className="text-[var(--accent-green-light)]">
              Google Ranking
            </a>{' '}
            is het doel om binnen ongeveer 90 dagen in de Top 3 te komen voor lokale zoekopdrachten. Bij{' '}
            <a href="/ads" className="text-[var(--accent-green-light)]">
              Google Ads
            </a>{' '}
            zien veel klanten al in de eerste week verkeer en een significantere ROI na ongeveer 3 maanden.{' '}
            <a href="/website" className="text-[var(--accent-green-light)]">
              SEO Websites
            </a>{' '}
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
    <section className="section bg-section-1" aria-labelledby="faq-title">
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
    </section>
  )
}
