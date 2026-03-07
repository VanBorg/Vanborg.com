import { useState } from 'react'
import { Container } from '../../ui/Container'
import { FadeUpSection } from '../../ui/FadeUpSection'

interface WebsiteType {
  naam: string
  prijsLabel: string
  prijsNum: number
  isSeoWebsite: boolean
}

const websiteTypes: WebsiteType[] = [
  { naam: 'SEO Website',             prijsLabel: 'Vanaf € 1.499', prijsNum: 1499, isSeoWebsite: true  },
  { naam: 'Webshop',                 prijsLabel: 'Vanaf € 1.999', prijsNum: 1999, isSeoWebsite: false },
  { naam: 'Boeking & Afspraken',     prijsLabel: 'Vanaf € 1.299', prijsNum: 1299, isSeoWebsite: false },
  { naam: 'Horeca & Restaurants',    prijsLabel: 'Vanaf € 1.299', prijsNum: 1299, isSeoWebsite: false },
  { naam: 'Portfolio & Presentatie', prijsLabel: 'Vanaf € 799',   prijsNum: 799,  isSeoWebsite: false },
  { naam: 'Vastgoed & Makelaars',    prijsLabel: 'Vanaf € 1.999', prijsNum: 1999, isSeoWebsite: false },
  { naam: 'Zorg & Medisch',          prijsLabel: 'Vanaf € 1.499', prijsNum: 1499, isSeoWebsite: false },
  { naam: 'Crypto & Web3',           prijsLabel: 'Vanaf € 1.999', prijsNum: 1999, isSeoWebsite: false },
  { naam: 'Maatwerk & Portalen',     prijsLabel: 'Prijs op aanvraag', prijsNum: 0, isSeoWebsite: false },
]

interface AdsTier {
  label: string
  dagBudget: string
  prijsLabel: string
  prijsNum: number
}

const adsTiers: AdsTier[] = [
  { label: 'Starten',     dagBudget: '€10/dag', prijsLabel: '€ 549',   prijsNum: 549  },
  { label: 'Groeien',     dagBudget: '€20/dag', prijsLabel: '€ 899',   prijsNum: 899  },
  { label: 'Schalen',     dagBudget: '€30/dag', prijsLabel: '€ 1.249', prijsNum: 1249 },
  { label: 'Domineren',   dagBudget: '€40/dag', prijsLabel: '€ 1.599', prijsNum: 1599 },
  { label: 'Marktleider', dagBudget: '€50/dag', prijsLabel: '€ 1.949', prijsNum: 1949 },
]

const LOKALE_SEO = 'Lokale Top 3 Ranking'
const WEBSITE    = 'Website'
const SEO_ADD_ON = 'Lokale SEO toevoegen'
const BUNDEL     = 'Aanbieding (Ranking + SEO Website)'
const RETAINER   = 'Lokale SEO Retainer'
const ADS        = 'Google Ads'

const uitbreidingen = [
  { naam: 'API & Webhookkoppeling',       prijsLabel: 'Vanaf € 150', prijsNum: 150 },
  { naam: 'Maatwerk calculator',          prijsLabel: 'Vanaf € 300', prijsNum: 300 },
  { naam: 'Boekings- / afsprakensysteem', prijsLabel: 'Vanaf € 200', prijsNum: 200 },
  { naam: 'Betaalintegratie',             prijsLabel: 'Vanaf € 150', prijsNum: 150 },
  { naam: 'CRM-koppeling',                prijsLabel: 'Vanaf € 200', prijsNum: 200 },
  { naam: 'Ledenportaal / loginomgeving', prijsLabel: 'Vanaf € 600', prijsNum: 600 },
]

function formatBedrag(bedrag: number) {
  return '€ ' + bedrag.toLocaleString('nl-NL')
}

export function PrijzenTabel() {
  const [geselecteerd, setGeselecteerd] = useState<Set<string>>(new Set())
  const [websiteTypeIdx, setWebsiteTypeIdx] = useState(0)
  const [adsTierIdx, setAdsTierIdx] = useState(2)

  const selectedWebsite = websiteTypes[websiteTypeIdx]
  const selectedAds = adsTiers[adsTierIdx]
  const isSeoWebsiteGekozen = selectedWebsite.isSeoWebsite
  const bundelActief = geselecteerd.has(BUNDEL)

  const lokaleSeoDimmed = bundelActief
  const websiteDimmed   = bundelActief
  const addOnDimmed     = bundelActief || isSeoWebsiteGekozen

  function toggle(naam: string, disabled: boolean) {
    if (disabled) return
    setGeselecteerd((prev) => {
      const next = new Set(prev)
      if (next.has(naam)) {
        next.delete(naam)
        if (naam === BUNDEL) {
          next.delete(LOKALE_SEO)
          next.delete(WEBSITE)
        }
        return next
      }
      if (naam === BUNDEL) {
        next.delete(LOKALE_SEO)
        next.delete(WEBSITE)
        next.delete(SEO_ADD_ON)
      }
      if ((naam === LOKALE_SEO || naam === WEBSITE) && next.has(BUNDEL)) {
        next.delete(BUNDEL)
      }
      next.add(naam)
      if (
        (naam === LOKALE_SEO && next.has(WEBSITE) && isSeoWebsiteGekozen) ||
        (naam === WEBSITE && isSeoWebsiteGekozen && next.has(LOKALE_SEO))
      ) {
        next.delete(LOKALE_SEO)
        next.delete(WEBSITE)
        next.delete(SEO_ADD_ON)
        next.add(BUNDEL)
      }
      return next
    })
  }

  // Price calc
  const eenmaligItems: Array<{ naam: string; prijsNum: number; vanaf: boolean }> = []

  if (bundelActief) {
    eenmaligItems.push({ naam: BUNDEL, prijsNum: 2999, vanaf: false })
  } else {
    if (geselecteerd.has(LOKALE_SEO)) eenmaligItems.push({ naam: LOKALE_SEO, prijsNum: 1499, vanaf: false })
    if (geselecteerd.has(WEBSITE))    eenmaligItems.push({ naam: selectedWebsite.naam, prijsNum: selectedWebsite.prijsNum, vanaf: selectedWebsite.prijsNum > 0 })
    if (geselecteerd.has(SEO_ADD_ON) && !addOnDimmed) eenmaligItems.push({ naam: SEO_ADD_ON, prijsNum: 650, vanaf: false })
  }
  for (const u of uitbreidingen) {
    if (geselecteerd.has(u.naam)) eenmaligItems.push({ naam: u.naam, prijsNum: u.prijsNum, vanaf: true })
  }

  const maandelijksItems: Array<{ naam: string; prijsNum: number }> = []
  if (geselecteerd.has(RETAINER)) maandelijksItems.push({ naam: RETAINER, prijsNum: 499 })
  if (geselecteerd.has(ADS))      maandelijksItems.push({ naam: ADS,      prijsNum: selectedAds.prijsNum })

  const eenmaligNum   = eenmaligItems.reduce((s, d) => s + d.prijsNum, 0)
  const eenmaligVanaf = eenmaligItems.some((d) => d.vanaf)
  const maandNum      = maandelijksItems.reduce((s, d) => s + d.prijsNum, 0)

  const heeftSelectie    = geselecteerd.size > 0
  const heeftEenmalig    = eenmaligItems.length > 0
  const heeftMaandelijks = maandelijksItems.length > 0

  function Rij({
    naam,
    prijsLabel,
    link,
    highlight,
    dimmed,
    dimmedReden,
    children,
  }: {
    naam: string
    prijsLabel: string
    link?: string
    highlight?: boolean
    dimmed?: boolean
    dimmedReden?: string
    children?: React.ReactNode
  }) {
    const actief = geselecteerd.has(naam)
    return (
      <tr
        onClick={() => toggle(naam, !!dimmed)}
        className={[
          'prijzen-tabel__row',
          highlight ? 'prijzen-tabel__row--highlight' : '',
          actief    ? 'prijzen-tabel__row--selected'  : '',
        ].filter(Boolean).join(' ')}
        style={{ opacity: dimmed ? 0.4 : 1, cursor: dimmed ? 'default' : 'pointer' }}
      >
        <td className="prijzen-tabel__td">
          <span className="prijzen-tabel__naam">{naam}</span>
          {children}
          {dimmed && dimmedReden && (
            <span className="prijzen-tabel__subtekst">{dimmedReden}</span>
          )}
        </td>
        <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{prijsLabel}</td>
        <td className="prijzen-tabel__td prijzen-tabel__td--actie">
          {link && !dimmed && (
            <a href={link} className="btn-secondary prijzen-tabel__link" onClick={(e) => e.stopPropagation()}>
              Meer info
            </a>
          )}
        </td>
      </tr>
    )
  }

  return (
    <FadeUpSection id="prijzen-tabel" className="bg-section-2" aria-labelledby="prijzen-tabel-title">
      <Container>
        <h2 id="prijzen-tabel-title" className="sr-only">Prijsoverzicht</h2>

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

              {/* ── Eenmalig ── */}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Eenmalig</td>
              </tr>

              <Rij
                naam={LOKALE_SEO}
                prijsLabel="€ 1.499"
                link="/ranking#ranking-prijs-title"
                dimmed={lokaleSeoDimmed}
                dimmedReden="Inbegrepen in de aanbieding"
              />

              {/* Website met dropdown */}
              <tr
                onClick={() => toggle(WEBSITE, websiteDimmed)}
                className={['prijzen-tabel__row', geselecteerd.has(WEBSITE) ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
                style={{ opacity: websiteDimmed ? 0.4 : 1, cursor: websiteDimmed ? 'default' : 'pointer' }}
              >
                <td className="prijzen-tabel__td">
                  <span className="prijzen-tabel__naam">Website</span>
                  <select
                    value={websiteTypeIdx}
                    disabled={websiteDimmed}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setWebsiteTypeIdx(Number(e.target.value))}
                    className="prijzen-tabel__select"
                  >
                    {websiteTypes.map((type, idx) => (
                      <option key={type.naam} value={idx}>{type.naam}</option>
                    ))}
                  </select>
                  {websiteDimmed && (
                    <span className="prijzen-tabel__subtekst">Inbegrepen in de aanbieding</span>
                  )}
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{selectedWebsite.prijsLabel}</td>
                <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                  {!websiteDimmed && (
                    <a
                      href={isSeoWebsiteGekozen ? '/website#website-seo-title' : '/website#website-andere-title'}
                      className="btn-secondary prijzen-tabel__link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Meer info
                    </a>
                  )}
                </td>
              </tr>

              <Rij
                naam={SEO_ADD_ON}
                prijsLabel="€ 650"
                link="/website#website-andere-title"
                dimmed={addOnDimmed}
                dimmedReden={bundelActief ? 'Inbegrepen in de aanbieding' : 'Niet nodig bij SEO Website'}
              />

              <Rij
                naam={BUNDEL}
                prijsLabel="€ 2.999"
                link="/aanbieding#sale-prijs-title"
                highlight
              />

              {/* ── Uitbreidingen ── */}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Uitbreidingen & koppelingen</td>
              </tr>

              {uitbreidingen.map((u) => (
                <Rij
                  key={u.naam}
                  naam={u.naam}
                  prijsLabel={u.prijsLabel}
                  link="/website#website-integraties-title"
                />
              ))}

              {/* ── Per maand ── */}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Per maand</td>
              </tr>

              <Rij
                naam={RETAINER}
                prijsLabel="€ 499"
                link="/ranking#ranking-prijs-title"
              />

              <tr
                onClick={() => toggle(ADS, false)}
                className={['prijzen-tabel__row', geselecteerd.has(ADS) ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
              >
                <td className="prijzen-tabel__td">
                  <span className="prijzen-tabel__naam">Google Ads</span>
                  <select
                    value={adsTierIdx}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setAdsTierIdx(Number(e.target.value))}
                    className="prijzen-tabel__select"
                  >
                    {adsTiers.map((tier, idx) => (
                      <option key={tier.label} value={idx}>{tier.label} · {tier.dagBudget}</option>
                    ))}
                  </select>
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{selectedAds.prijsLabel}</td>
                <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                  <a href="/ads#ads-prijs-title" className="btn-secondary prijzen-tabel__link" onClick={(e) => e.stopPropagation()}>
                      Meer info
                    </a>
                </td>
              </tr>

            </tbody>

            <tfoot>
              <tr>
                <td colSpan={3} style={{
                  padding: '0.875rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-neutral-700)',
                  borderTop: '2px solid var(--color-neutral-200)',
                }}>
                  Alle prijzen excl. btw
                </td>
              </tr>
              {heeftSelectie ? (
                <>
                  {heeftEenmalig && (
                    <tr className="prijzen-tabel__tfoot-row">
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Eenmalig totaal</td>
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                        {eenmaligVanaf ? `${formatBedrag(eenmaligNum)} +` : formatBedrag(eenmaligNum)}
                      </td>
                      <td className="prijzen-tabel__tfoot-td" />
                    </tr>
                  )}
                  {heeftMaandelijks && (
                    <tr className="prijzen-tabel__tfoot-row prijzen-tabel__tfoot-row--maand">
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Per maand totaal</td>
                      <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">{formatBedrag(maandNum)}</td>
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