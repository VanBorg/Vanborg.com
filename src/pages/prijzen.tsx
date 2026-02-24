import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'
import { ContactOptions } from '../components/sections/ContactOptions'
import { ProblemOutcome } from '../components/sections/ProblemOutcome'


const diensten = [
  {
    naam: 'Google Top 3 Ranking',
    beschrijving: 'Binnen 90 dagen in de Top 3 van Google Zoeken en Maps.',
    eenmalig: '\u20ac\u00a01.499',
    maandelijks: 'Vanaf \u20ac\u00a0499 p/m',
    link: '/ranking',
  },
  {
    naam: 'Google Ads \u2014 Voorstarter',
    beschrijving: '1 campagne met gerichte zoekwoorden en maandelijkse rapportage.',
    eenmalig: '\u2014',
    maandelijks: '\u20ac\u00a0499 p/m',
    link: '/ads',
  },
  {
    naam: 'Google Ads \u2014 Groei',
    beschrijving: 'Tot 3 campagnes, A/B-tests en tweewekelijkse rapportage.',
    eenmalig: '\u2014',
    maandelijks: '\u20ac\u00a0899 p/m',
    link: '/ads',
  },
  {
    naam: 'Google Ads \u2014 Dominant',
    beschrijving: 'Onbeperkt campagnes, geavanceerde biedstrategie\u00ebn en dedicated accountmanager.',
    eenmalig: '\u2014',
    maandelijks: '\u20ac\u00a01.299 p/m',
    link: '/ads',
  },
  {
    naam: 'SEO-website',
    beschrijving: 'Snelle, conversiegerichte website geoptimaliseerd voor zoekmachines.',
    eenmalig: 'Vanaf \u20ac\u00a0999',
    maandelijks: '\u20ac\u00a099 p/m',
    link: '/website',
  },
  {
    naam: 'Bundel: Ranking + Website',
    beschrijving: 'Top 3 ranking \u00e9n een SEO-website \u2014 samen voordeliger.',
    eenmalig: '\u20ac\u00a01.999',
    maandelijks: '\u20ac\u00a0549 p/m',
    link: '/aanbieding',
    highlight: true,
  },
]

export default function PrijzenPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Prijzen</h1>
              <h2 className="heading-hero-subtitle mt-3">
                Transparant overzicht van al onze diensten.
              </h2>
              <p className="text-section-body mt-3 text-neutral-500">
                Alle prijzen zijn exclusief btw. Advertentiebudget voor Google Ads staat
                los van de servicekosten.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2" aria-labelledby="prijzen-tabel-title">
          <Container>
            <h2 id="prijzen-tabel-title" className="sr-only">
              Prijsoverzicht
            </h2>

            <div className="prijzen-tabel-wrap">
              <table className="prijzen-tabel">
                <thead>
                  <tr>
                    <th className="prijzen-tabel__th">Dienst</th>
                    <th className="prijzen-tabel__th prijzen-tabel__th--prijs">Eenmalig</th>
                    <th className="prijzen-tabel__th prijzen-tabel__th--prijs">Maandelijks</th>
                    <th className="prijzen-tabel__th prijzen-tabel__th--actie" />
                  </tr>
                </thead>
                <tbody>
                  {diensten.map((d) => (
                    <tr
                      key={d.naam}
                      className={`prijzen-tabel__row${d.highlight ? ' prijzen-tabel__row--highlight' : ''}`}
                    >
                      <td className="prijzen-tabel__td">
                        <span className="prijzen-tabel__naam">{d.naam}</span>
                        <span className="prijzen-tabel__beschrijving">{d.beschrijving}</span>
                      </td>
                      <td className="prijzen-tabel__td prijzen-tabel__td--prijs">
                        {d.eenmalig}
                      </td>
                      <td className="prijzen-tabel__td prijzen-tabel__td--prijs">
                        {d.maandelijks}
                      </td>
                      <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                        <a href={d.link} className="btn-secondary prijzen-tabel__link">
                          Meer info
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </Container>
        </section>
        <ProblemOutcome background="bg-section-1" />
        <ContactOptions />
      </main>
      <Footer />
    </>
  )
}
