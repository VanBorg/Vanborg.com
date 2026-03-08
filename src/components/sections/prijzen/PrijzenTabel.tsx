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
const K = {
  LOKALE_SEO: 'LOKALE_SEO',
  WEBSITE:    'WEBSITE',
  SEO_ADD_ON: 'SEO_ADD_ON',
  BUNDEL:     'BUNDEL',
  RETAINER:   'RETAINER',
  ADS:        'ADS',
} as const
const uitbreidingen: Array<{ key: string; naam: string; prijsLabel: string; prijsNum: number }> = [
  { key: 'api',     naam: 'API & Webhookkoppeling',       prijsLabel: 'Vanaf € 150', prijsNum: 150 },
  { key: 'calc',    naam: 'Maatwerk calculator',          prijsLabel: 'Vanaf € 300', prijsNum: 300 },
  { key: 'boeking', naam: 'Boekings- / afsprakensysteem', prijsLabel: 'Vanaf € 200', prijsNum: 200 },
  { key: 'betaal',  naam: 'Betaalintegratie',             prijsLabel: 'Vanaf € 150', prijsNum: 150 },
  { key: 'crm',     naam: 'CRM-koppeling',               prijsLabel: 'Vanaf € 200', prijsNum: 200 },
  { key: 'portaal', naam: 'Ledenportaal / loginomgeving', prijsLabel: 'Vanaf € 600', prijsNum: 600 },
]
function formatBedrag(n: number) {
  return '€ ' + n.toLocaleString('nl-NL')
}
export function PrijzenTabel() {
  const [selected, setSelected]     = useState<Set<string>>(new Set())
  const [websiteIdx, setWebsiteIdx] = useState(0)
  const [adsIdx, setAdsIdx]         = useState(2)
  const website   = websiteTypes[websiteIdx]
  const ads       = adsTiers[adsIdx]
  const isSeoSite = website.isSeoWebsite
  const bundelAan = selected.has(K.BUNDEL)
  const addOnDimmed = bundelAan || isSeoSite
  function isOn(key: string) {
    return selected.has(key)
  }
  function toggle(key: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
        if (key === K.BUNDEL) {
          next.delete(K.LOKALE_SEO)
          next.delete(K.WEBSITE)
        }
        return next
      }
      if (key === K.BUNDEL) {
        next.delete(K.LOKALE_SEO)
        next.delete(K.WEBSITE)
        next.delete(K.SEO_ADD_ON)
        next.add(K.BUNDEL)
        return next
      }
      if (key === K.LOKALE_SEO || key === K.WEBSITE) {
        next.delete(K.BUNDEL)
      }
      next.add(key)
      if (isSeoSite && next.has(K.LOKALE_SEO) && next.has(K.WEBSITE)) {
        next.delete(K.LOKALE_SEO)
        next.delete(K.WEBSITE)
        next.delete(K.SEO_ADD_ON)
        next.add(K.BUNDEL)
      }
      return next
    })
    if (key === K.BUNDEL && !selected.has(K.BUNDEL)) {
      setWebsiteIdx(0)
    }
  }
  function handleWebsiteChange(newIdx: number) {
    setWebsiteIdx(newIdx)
    if (bundelAan && !websiteTypes[newIdx].isSeoWebsite) {
      setSelected((prev) => {
        const next = new Set(prev)
        next.delete(K.BUNDEL)
        return next
      })
    }
    if (selected.has(K.WEBSITE) && selected.has(K.LOKALE_SEO) && websiteTypes[newIdx].isSeoWebsite) {
      setSelected((prev) => {
        const next = new Set(prev)
        next.delete(K.LOKALE_SEO)
        next.delete(K.WEBSITE)
        next.delete(K.SEO_ADD_ON)
        next.add(K.BUNDEL)
        return next
      })
    }
  }
  const eenmalig: Array<{ naam: string; num: number; vanaf: boolean }> = []
  if (bundelAan) {
    eenmalig.push({ naam: 'Aanbieding', num: 2999, vanaf: false })
  } else {
    if (isOn(K.LOKALE_SEO)) eenmalig.push({ naam: 'Lokale Top 3 Ranking', num: 1499, vanaf: false })
    if (isOn(K.WEBSITE))    eenmalig.push({ naam: website.naam, num: website.prijsNum, vanaf: website.prijsNum > 0 })
    if (isOn(K.SEO_ADD_ON) && !addOnDimmed) eenmalig.push({ naam: 'Lokale SEO toevoegen', num: 650, vanaf: false })
  }
  for (const u of uitbreidingen) {
    if (isOn(u.key)) eenmalig.push({ naam: u.naam, num: u.prijsNum, vanaf: true })
  }
  const maandelijks: Array<{ naam: string; num: number }> = []
  if (isOn(K.RETAINER)) maandelijks.push({ naam: 'Retainer', num: 499 })
  if (isOn(K.ADS))      maandelijks.push({ naam: 'Google Ads', num: ads.prijsNum })
  const eenmaligTotaal = eenmalig.reduce((s, i) => s + i.num, 0)
  const eenmaligVanaf  = eenmalig.some((i) => i.vanaf)
  const maandTotaal    = maandelijks.reduce((s, i) => s + i.num, 0)
  const heeftSelectie  = selected.size > 0
  const heeftEenmalig  = eenmalig.length > 0
  const heeftMaand     = maandelijks.length > 0
  function Rij({
    rowKey, naam, prijsLabel, link, dimmed = false, dimmedReden,
  }: {
    rowKey: string
    naam: string
    prijsLabel: string
    link?: string
    dimmed?: boolean
    dimmedReden?: string
  }) {
    const actief = isOn(rowKey)
    return (
      <tr
        onClick={() => { if (!dimmed) toggle(rowKey) }}
        className={['prijzen-tabel__row', actief ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
        style={{ opacity: dimmed ? 0.35 : 1, cursor: dimmed ? 'default' : 'pointer', pointerEvents: dimmed ? 'none' : 'auto' }}
      >
        <td className="prijzen-tabel__td">
          <span className="prijzen-tabel__naam">{naam}</span>
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
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Eenmalig</td>
              </tr>
              <Rij
                rowKey={K.LOKALE_SEO}
                naam="Lokale Top 3 Ranking"
                prijsLabel="€ 1.499"
                link="/ranking"
              />
              <tr
                onClick={() => toggle(K.WEBSITE)}
                className={['prijzen-tabel__row', isOn(K.WEBSITE) ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <td className="prijzen-tabel__td">
                  <span className="prijzen-tabel__naam">Website</span>
                  <select
                    value={websiteIdx}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => { e.stopPropagation(); handleWebsiteChange(Number(e.target.value)) }}
                    className="prijzen-tabel__select"
                  >
                    {websiteTypes.map((t, i) => (
                      <option key={t.naam} value={i}>{t.naam}</option>
                    ))}
                  </select>
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{website.prijsLabel}</td>
                <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                  <a
                    href={isSeoSite ? '/website#website-seo-title' : '/website#website-andere-title'}
                    className="btn-secondary prijzen-tabel__link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Meer info
                  </a>
                </td>
              </tr>
              <Rij
                rowKey={K.SEO_ADD_ON}
                naam="Lokale SEO toevoegen aan website"
                prijsLabel="€ 650"
                link="/website#website-andere-title"
                dimmed={addOnDimmed}
                dimmedReden={bundelAan ? 'Inbegrepen in de aanbieding' : 'Niet nodig bij SEO Website'}
              />
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Aanbieding</td>
              </tr>
              <tr
                onClick={() => toggle(K.BUNDEL)}
                className={['prijzen-tabel__row', isOn(K.BUNDEL) ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <td className="prijzen-tabel__td">
                  <span className="prijzen-tabel__naam">Ranking + SEO Website</span>
                  <span className="prijzen-tabel__subtekst">
                    {isOn(K.BUNDEL)
                      ? 'Geselecteerd'
                      : 'Selecteer Lokale Top 3 Ranking en SEO Website om automatisch te activeren'}
                  </span>
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--prijs">
                  € 2.999
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--accent-green)', fontWeight: 500 }}>
                    bespaar € 499
                  </span>
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                  <a href="/aanbieding" className="btn-secondary prijzen-tabel__link" onClick={(e) => e.stopPropagation()}>
                    Meer info
                  </a>
                </td>
              </tr>
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Uitbreidingen & koppelingen</td>
              </tr>
              {uitbreidingen.map((u) => (
                <Rij
                  key={u.key}
                  rowKey={u.key}
                  naam={u.naam}
                  prijsLabel={u.prijsLabel}
                  link="/website#website-integraties-title"
                />
              ))}
              <tr className="prijzen-tabel__groep-header">
                <td colSpan={3} className="prijzen-tabel__groep-label">Per maand</td>
              </tr>
              <Rij
                rowKey={K.RETAINER}
                naam="Lokale SEO Retainer"
                prijsLabel="€ 499"
                link="/ranking"
              />
              <tr
                onClick={() => toggle(K.ADS)}
                className={['prijzen-tabel__row', isOn(K.ADS) ? 'prijzen-tabel__row--selected' : ''].filter(Boolean).join(' ')}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <td className="prijzen-tabel__td">
                  <span className="prijzen-tabel__naam">Google Ads</span>
                  <select
                    value={adsIdx}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => { e.stopPropagation(); setAdsIdx(Number(e.target.value)) }}
                    className="prijzen-tabel__select"
                  >
                    {adsTiers.map((t, i) => (
                      <option key={t.label} value={i}>{t.label} · {t.dagBudget}</option>
                    ))}
                  </select>
                </td>
                <td className="prijzen-tabel__td prijzen-tabel__td--prijs">{ads.prijsLabel}</td>
                <td className="prijzen-tabel__td prijzen-tabel__td--actie">
                  <a href="/ads" className="btn-secondary prijzen-tabel__link" onClick={(e) => e.stopPropagation()}>
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
              <tr className="prijzen-tabel__tfoot-row">
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Eenmalig totaal</td>
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                  {heeftEenmalig ? (eenmaligVanaf ? `${formatBedrag(eenmaligTotaal)} +` : formatBedrag(eenmaligTotaal)) : '—'}
                </td>
                <td className="prijzen-tabel__tfoot-td" />
              </tr>
              <tr className="prijzen-tabel__tfoot-row prijzen-tabel__tfoot-row--maand">
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Per maand totaal</td>
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                  {heeftMaand ? `${formatBedrag(maandTotaal)} +` : '—'}
                </td>
                <td className="prijzen-tabel__tfoot-td" />
              </tr>
              <tr className="prijzen-tabel__tfoot-row prijzen-tabel__tfoot-row--totaal">
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-label">Totaal</td>
                <td className="prijzen-tabel__tfoot-td prijzen-tabel__tfoot-bedrag">
                  {(heeftEenmalig || heeftMaand)
                    ? `${formatBedrag(eenmaligTotaal + maandTotaal)}${(heeftMaand || eenmaligVanaf) ? ' +' : ''}`
                    : '—'}
                </td>
                <td className="prijzen-tabel__tfoot-td" />
              </tr>
            </tfoot>
          </table>
        </div>
      </Container>
    </FadeUpSection>
  )
}