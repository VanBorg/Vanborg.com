import { useState } from 'react'
import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

interface Dienst {
  naam: string
  prijsLabel: string
  subtekst: string
  vanaf: boolean
  prijsNum: number
  link: string
  highlight?: boolean
  isMonthly?: boolean
}

const BUNDEL_NAAM = 'Aanbieding (Lokale SEO + SEO Website)'
const LOKALE_SEO_NAAM = 'Lokale SEO'
const SEO_WEBSITE_NAAM = 'SEO Website'

const eenmaligeDiensten: Dienst[] = [
  {
    naam: LOKALE_SEO_NAAM,
    prijsLabel: '€ 1.499',
    subtekst: 'Eenmalig excl. btw',
    vanaf: false,
    prijsNum: 1499,
    link: '/ranking',
  },
  {
    naam: SEO_WEBSITE_NAAM,
    prijsLabel: 'Vanaf € 999',
    subtekst: 'Eenmalig excl. btw',
    vanaf: true,
    prijsNum: 999,
    link: '/website',
  },
  {
    naam: BUNDEL_NAAM,
    prijsLabel: '€ 2.999',
    subtekst: 'Eenmalig excl. btw · bespaar € 499',
    vanaf: false,
    prijsNum: 2999,
    link: '/aanbieding',
    highlight: true,
  },
]

const maandelijkseDiensten: Dienst[] = [
  {
    naam: 'Google Ads',
    prijsLabel: 'Vanaf € 499',
    subtekst: 'Per maand excl. btw · incl. advertentiebudget',
    vanaf: true,
    prijsNum: 499,
    link: '/ads',
    isMonthly: true,
  },
]

const alleDiensten = [...eenmaligeDiensten, ...maandelijkseDiensten]

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

  const geselecteerdeDiensten = alleDiensten.filter((d) => geselecteerd.has(d.naam))
  const eenmaligGeselecteerd = geselecteerdeDiensten.filter((d) => !d.isMonthly)
  const maandelijksGeselecteerd = geselecteerdeDiensten.filter((d) => d.isMonthly)

  const eenmaligNum = eenmaligGeselecteerd.reduce((som, d) => som + d.prijsNum, 0)

  const maandelijksVanaf = maandelijksGeselecteerd.some((d) => d.vanaf)
  const maandelijksNum = maandelijksGeselecteerd.reduce((som, d) => som + d.prijsNum, 0)

  const heeftSelectie = geselecteerd.size > 0
  const heeftEenmalig = eenmaligGeselecteerd.length > 0
  const heeftMaandelijks = maandelijksGeselecteerd.length > 0

  function DienstRijen({ diensten }: { diensten: Dienst[] }) {
    return (
      <>
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
                <span className="prijzen-tabel__subtekst">{d.subtekst}</span>
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
      </>
    )
  }

  return (
    <FadeUpSection className="bg-section-2" aria-labelledby="prijzen-tabel-title">
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
              {/* Eenmalige diensten */}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Eenmalig</td>
              </tr>
              <DienstRijen diensten={eenmaligeDiensten} />

              {/* Maandelijkse diensten */}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Per maand</td>
              </tr>
              <DienstRijen diensten={maandelijkseDiensten} />
            </tbody>
            <tfoot>
              {heeftSelectie ? (
                <>
                  {heeftEenmalig && (
                    <tr className="prijzen-tabel__tfoot-row">
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Eenmalig totaal</td>
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                        {`${formatBedrag(eenmaligNum)} +`}
                      </td>
                      <td className="prijzen-tabel__tfoot-td" />
                    </tr>
                  )}
                  {heeftMaandelijks && (
                    <tr className="prijzen-tabel__tfoot-row prijzen-tabel__tfoot-row--maand">
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Per maand totaal</td>
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                        {maandelijksVanaf ? `${formatBedrag(maandelijksNum)} +` : formatBedrag(maandelijksNum)}
                      </td>
                      <td className="prijzen-tabel__tfoot-td" />
                    </tr>
                  )}
                </>
              ) : (
                <tr className="prijzen-tabel__tfoot-row">
                  <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-hint" colSpan={3}>
                    Klik op een rij om diensten te selecteren
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </Container>
    </FadeUpSection>
  )
}
