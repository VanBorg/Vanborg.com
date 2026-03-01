import { useState } from 'react'
import { Container } from '../../ui/Container'

interface Dienst {
  naam: string
  prijsLabel: string
  vanaf: boolean
  prijsNum: number
  link: string
  highlight?: boolean
}

const BUNDEL_NAAM = 'Aanbieding (Lokale SEO + SEO Website)'
const LOKALE_SEO_NAAM = 'Lokale SEO'
const SEO_WEBSITE_NAAM = 'SEO Website'

const diensten: Dienst[] = [
  {
    naam: LOKALE_SEO_NAAM,
    prijsLabel: '€ 1.499',
    vanaf: false,
    prijsNum: 1499,
    link: '/ranking',
  },
  {
    naam: 'Google Ads',
    prijsLabel: 'Vanaf € 499',
    vanaf: true,
    prijsNum: 499,
    link: '/ads',
  },
  {
    naam: SEO_WEBSITE_NAAM,
    prijsLabel: 'Vanaf € 999',
    vanaf: true,
    prijsNum: 999,
    link: '/website',
  },
  {
    naam: BUNDEL_NAAM,
    prijsLabel: '€ 2.999',
    vanaf: false,
    prijsNum: 2999,
    link: '/aanbieding',
    highlight: true,
  },
]

function formatBedrag(bedrag: number) {
  return '€ ' + bedrag.toLocaleString('nl-NL')
}

export function PrijzenTabel() {
  const [geselecteerd, setGeselecteerd] = useState<Set<string>>(new Set())

  function toggleRij(naam: string) {
    setGeselecteerd((prev) => {
      const next = new Set(prev)
      const had = next.has(naam)

      if (had) {
        next.delete(naam)
        if (naam === BUNDEL_NAAM) {
          next.delete(LOKALE_SEO_NAAM)
          next.delete(SEO_WEBSITE_NAAM)
        }
        return next
      }

      if ((naam === LOKALE_SEO_NAAM || naam === SEO_WEBSITE_NAAM) && next.has(BUNDEL_NAAM)) {
        next.delete(BUNDEL_NAAM)
      }

      if (naam === BUNDEL_NAAM) {
        next.delete(LOKALE_SEO_NAAM)
        next.delete(SEO_WEBSITE_NAAM)
      }

      next.add(naam)

      if (
        (naam === LOKALE_SEO_NAAM && next.has(SEO_WEBSITE_NAAM)) ||
        (naam === SEO_WEBSITE_NAAM && next.has(LOKALE_SEO_NAAM))
      ) {
        next.delete(LOKALE_SEO_NAAM)
        next.delete(SEO_WEBSITE_NAAM)
        next.add(BUNDEL_NAAM)
      }

      return next
    })
  }

  const geselecteerdeDiensten = diensten.filter((d) => geselecteerd.has(d.naam))
  const totaalVanaf = geselecteerdeDiensten.some((d) => d.vanaf)
  const totaalNum = geselecteerdeDiensten.reduce((som, d) => som + d.prijsNum, 0)
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
                <th className="prijzen-tabel__th prijzen-tabel__th--prijs">Prijs</th>
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
                    <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{d.prijsLabel}</td>
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
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Totaal</td>
                {heeftSelectie ? (
                  <>
                    <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                      {totaalVanaf ? `Vanaf ${formatBedrag(totaalNum)}` : formatBedrag(totaalNum)}
                    </td>
                    <td className="prijzen-tabel__tfoot-td" />
                  </>
                ) : (
                  <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-hint" colSpan={2}>
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
