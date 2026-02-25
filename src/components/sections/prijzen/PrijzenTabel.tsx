import { useState } from 'react'
import { Container } from '../../ui/Container'

interface Dienst {
  naam: string
  eenmaligLabel: string | null
  maandelijksLabel: string
  eenmaligNum: number
  maandelijksNum: number
  link: string
  highlight?: boolean
}

const ADS_NAMEN = ['Google Ads - Klein', 'Google Ads - Middel', 'Google Ads - Groot']
const BUNDEL_NAAM = 'Top Aanbieding'
const RANKING_NAAM = 'Lokale Top 3 Ranking'
const WEBSITE_NAAM = 'SEO-website'

const diensten: Dienst[] = [
  {
    naam: 'Lokale Top 3 Ranking',
    eenmaligLabel: '€\u00a01.499',
    maandelijksLabel: '€\u00a0499 p/m',
    eenmaligNum: 1499,
    maandelijksNum: 499,
    link: '/ranking',
  },
  {
    naam: 'SEO-website',
    eenmaligLabel: 'Vanaf €\u00a0999',
    maandelijksLabel: '€\u00a099 p/m',
    eenmaligNum: 999,
    maandelijksNum: 99,
    link: '/website',
  },
  {
    naam: 'Top Aanbieding',
    eenmaligLabel: '€\u00a02.999',
    maandelijksLabel: '€\u00a0499 p/m',
    eenmaligNum: 2999,
    maandelijksNum: 499,
    link: '/aanbieding',
    highlight: true,
  },
  {
    naam: 'Google Ads - Klein',
    eenmaligLabel: null,
    maandelijksLabel: '€\u00a0499 p/m',
    eenmaligNum: 0,
    maandelijksNum: 499,
    link: '/ads',
  },
  {
    naam: 'Google Ads - Middel',
    eenmaligLabel: null,
    maandelijksLabel: '€\u00a0899 p/m',
    eenmaligNum: 0,
    maandelijksNum: 899,
    link: '/ads',
  },
  {
    naam: 'Google Ads - Groot',
    eenmaligLabel: null,
    maandelijksLabel: '€\u00a01.299 p/m',
    eenmaligNum: 0,
    maandelijksNum: 1299,
    link: '/ads',
  },
]

function formatBedrag(bedrag: number) {
  return '€\u00a0' + bedrag.toLocaleString('nl-NL')
}

export function PrijzenTabel() {
  const [geselecteerd, setGeselecteerd] = useState<Set<string>>(new Set())

  function toggleRij(naam: string) {
    setGeselecteerd((prev) => {
      const next = new Set(prev)

      if (next.has(naam)) {
        // Deselecteer
        next.delete(naam)
        // Als bundel gedeselecteerd wordt, ook ranking + website wissen
        if (naam === BUNDEL_NAAM) {
          next.delete(RANKING_NAAM)
          next.delete(WEBSITE_NAAM)
        }
      } else {
        // Ads zijn radio-achtig: max. 1 tegelijk
        if (ADS_NAMEN.includes(naam)) {
          ADS_NAMEN.forEach((a) => next.delete(a))
        }

        // Ranking of Website klikt terwijl Bundel actief is → Bundel deselecteren
        if ((naam === RANKING_NAAM || naam === WEBSITE_NAAM) && next.has(BUNDEL_NAAM)) {
          next.delete(BUNDEL_NAAM)
        }

        next.add(naam)

        // Ranking + Website samen → vervang door Bundel
        if (
          (naam === RANKING_NAAM && next.has(WEBSITE_NAAM)) ||
          (naam === WEBSITE_NAAM && next.has(RANKING_NAAM))
        ) {
          next.delete(RANKING_NAAM)
          next.delete(WEBSITE_NAAM)
          next.add(BUNDEL_NAAM)
        }

        // Bundel direct geselecteerd → ranking + website verwijderen als die er al in zitten
        if (naam === BUNDEL_NAAM) {
          next.delete(RANKING_NAAM)
          next.delete(WEBSITE_NAAM)
        }
      }

      return next
    })
  }

  const geselecteerdeDiensten = diensten.filter((d) => geselecteerd.has(d.naam))
  const totaalEenmalig = geselecteerdeDiensten.reduce((som, d) => som + d.eenmaligNum, 0)
  const totaalMaandelijks = geselecteerdeDiensten.reduce((som, d) => som + d.maandelijksNum, 0)
  const heeftSelectie = geselecteerd.size > 0

  return (
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
              {diensten.map((d) => {
                const actief = geselecteerd.has(d.naam)
                return (
                  <tr
                    key={d.naam}
                    onClick={() => toggleRij(d.naam)}
                    className={[
                      'prijzen-tabel__row',
                      d.highlight ? 'prijzen-tabel__row--highlight' : '',
                      actief ? 'prijzen-tabel__row--selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <td className="prijzen-tabel__td">
                      <span className="prijzen-tabel__naam">{d.naam}</span>
                    </td>
                    <td className="prijzen-tabel__td prijzen-tabel__td--prijs">
                      {d.eenmaligLabel ?? <span className="prijzen-tabel__nvt">n.v.t.</span>}
                    </td>
                    <td className="prijzen-tabel__td prijzen-tabel__td--prijs">
                      {d.maandelijksLabel}
                    </td>
                    <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                      <a
                        href={d.link}
                        className="btn-secondary prijzen-tabel__link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Meer info
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="prijzen-tabel__tfoot-row">
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">
                  Totaal
                </td>
                {heeftSelectie ? (
                  <>
                    <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                      {formatBedrag(totaalEenmalig)}
                    </td>
                    <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                      {formatBedrag(totaalMaandelijks)}
                      <span className="prijzen-tabel__tfoot-pm"> p/m</span>
                    </td>
                    <td className="prijzen-tabel__tfoot-td" />
                  </>
                ) : (
                  <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-hint" colSpan={3}>
                    Klik op een rij om diensten te selecteren
                  </td>
                )}
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </section>
  )
}
