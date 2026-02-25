/**
 * Canonieke lijst werkgebied-locaties (Hero, Footer, SEO kunnen hieruit lezen).
 */
export const WORKGEBIED_LOCATIONS = [
  'Veendam',
  'Wildervank',
  'Ommelanderwijk',
  'Borgercompagnie',
  'Tripscompagnie',
  'Zuidbroek',
  'Muntendam',
  'Meeden',
  'Bareveld',
  'Noordbroek',
  'Sappemeer',
  'Hoogezand',
  'Winschoten',
  'Oude Pekela',
  'Nieuwe-Pekela',
  'Nieuwe Diep',
  'Zuidlaren',
  'Stadskanaal',
  'Gieten',
  'Eext',
  'Annen',
  'Gasselte',
  'Drouwen',
  'Onstwedde',
] as const

export type LocationSlug =
  | 'veendam'
  | 'wildervank'
  | 'ommelanderwijk'
  | 'borgercompagnie'
  | 'tripscompagnie'
  | 'zuidbroek'
  | 'muntendam'
  | 'meeden'
  | 'bareveld'
  | 'noordbroek'
  | 'sappemeer'
  | 'hoogezand'
  | 'winschoten'
  | 'oude-pekela'
  | 'nieuwe-pekela'
  | 'nieuwe-diep'
  | 'zuidlaren'
  | 'stadskanaal'
  | 'gieten'
  | 'eext'
  | 'annen'
  | 'gasselte'
  | 'drouwen'
  | 'onstwedde'

export interface LocationPage {
  slug: LocationSlug
  name: string
  shortDescription: string
  nearbyLocations: LocationSlug[]
  lat: number
  lng: number
  regionHint: string
}

export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: 'veendam',
    name: 'Veendam',
    shortDescription:
      'Onze hoofdlokatie. Vanuit Kieler Bocht 104 bedienen we bedrijven in heel Veendam en omstreken met Google Top 3 ranking, Google Ads en SEO-websites.',
    nearbyLocations: ['wildervank', 'ommelanderwijk', 'muntendam'],
    lat: 53.1067,
    lng: 6.8792,
    regionHint: 'Hoofdlokatie',
  },
  {
    slug: 'wildervank',
    name: 'Wildervank',
    shortDescription:
      'Direct naast Veendam. Wij helpen lokale ondernemers in Wildervank met Google ranking en Google Ads voor meer zichtbaarheid en leads.',
    nearbyLocations: ['veendam', 'ommelanderwijk', 'borgercompagnie'],
    lat: 53.0797,
    lng: 6.8649,
    regionHint: 'Direct naast Veendam',
  },
  {
    slug: 'ommelanderwijk',
    name: 'Ommelanderwijk',
    shortDescription:
      'In de Veenkoloniën. Bedrijven in Ommelanderwijk kunnen bij ons terecht voor lokale SEO, Google Business Profile en conversiegerichte websites.',
    nearbyLocations: ['veendam', 'wildervank', 'borgercompagnie'],
    lat: 53.0884,
    lng: 6.9114,
    regionHint: 'Veenkoloniën',
  },
  {
    slug: 'borgercompagnie',
    name: 'Borgercompagnie',
    shortDescription:
      'Tussen Veendam en Hoogezand. Wij ondersteunen ondernemers in Borgercompagnie met meetbare marketing: Top 3 ranking, Ads en websites.',
    nearbyLocations: ['wildervank', 'ommelanderwijk', 'tripscompagnie'],
    lat: 53.1119,
    lng: 6.7856,
    regionHint: 'Tussen Veendam en Hoogezand',
  },
  {
    slug: 'tripscompagnie',
    name: 'Tripscompagnie',
    shortDescription:
      'In het hart van Oost-Groningen. Van Borg helpt bedrijven in Tripscompagnie hoger te ranken op Google en meer klanten binnen te halen.',
    nearbyLocations: ['borgercompagnie', 'zuidbroek', 'bareveld'],
    lat: 53.1442,
    lng: 6.785,
    regionHint: 'Oost-Groningen',
  },
  {
    slug: 'zuidbroek',
    name: 'Zuidbroek',
    shortDescription:
      'Aan het Winschoterdiep. Lokale bedrijven in Zuidbroek werken met ons aan betere online zichtbaarheid en meer aanvragen via Google.',
    nearbyLocations: ['tripscompagnie', 'muntendam', 'noordbroek'],
    lat: 53.1631,
    lng: 6.8612,
    regionHint: 'Aan het Winschoterdiep',
  },
  {
    slug: 'muntendam',
    name: 'Muntendam',
    shortDescription:
      'Tussen Veendam en Zuidbroek. Wij zorgen dat bedrijven in Muntendam gevonden worden op Google met Local SEO en gerichte advertenties.',
    nearbyLocations: ['veendam', 'zuidbroek', 'meeden'],
    lat: 53.1269,
    lng: 6.9309,
    regionHint: 'Midden-Groningen',
  },
  {
    slug: 'meeden',
    name: 'Meeden',
    shortDescription:
      'In de gemeente Midden-Groningen. Van Borg ondersteunt ondernemers in Meeden met Google Top 3 ranking en conversiegerichte marketing.',
    nearbyLocations: ['muntendam', 'noordbroek', 'bareveld'],
    lat: 53.1386,
    lng: 6.9271,
    regionHint: 'Midden-Groningen',
  },
  {
    slug: 'bareveld',
    name: 'Bareveld',
    shortDescription:
      'Bij Nieuwediep. Bedrijven in Bareveld kunnen bij ons terecht voor lokale SEO, Google Ads en professionele websites die converteren.',
    nearbyLocations: ['tripscompagnie', 'meeden', 'noordbroek'],
    lat: 53.1439,
    lng: 6.8347,
    regionHint: 'Bij Nieuwediep',
  },
  {
    slug: 'noordbroek',
    name: 'Noordbroek',
    shortDescription:
      'Tussen Zuidbroek en Sappemeer. Wij helpen lokale bedrijven in Noordbroek met Google ranking, advertenties en SEO-geoptimaliseerde websites.',
    nearbyLocations: ['zuidbroek', 'meeden', 'sappemeer'],
    lat: 53.1984,
    lng: 6.8675,
    regionHint: 'Tussen Zuidbroek en Sappemeer',
  },
  {
    slug: 'sappemeer',
    name: 'Sappemeer',
    shortDescription:
      'In Midden-Groningen. Van Borg werkt met ondernemers in Sappemeer aan hogere posities op Google en meer gekwalificeerde leads.',
    nearbyLocations: ['noordbroek', 'hoogezand'],
    lat: 53.1632,
    lng: 6.7903,
    regionHint: 'Midden-Groningen',
  },
  {
    slug: 'hoogezand',
    name: 'Hoogezand',
    shortDescription:
      'Het grootste dorp in de regio. Wij bedienen bedrijven in Hoogezand met Google Top 3 ranking, Google Ads en conversiegerichte websites.',
    nearbyLocations: ['sappemeer', 'noordbroek'],
    lat: 53.1615,
    lng: 6.7619,
    regionHint: 'Grootste plaats in de regio',
  },
  {
    slug: 'winschoten',
    name: 'Winschoten',
    shortDescription:
      'In Oost-Groningen. Wij helpen bedrijven in Winschoten met lokale SEO, Google Ads en websites die gericht zijn op aanvragen.',
    nearbyLocations: ['zuidbroek', 'oude-pekela', 'nieuwe-pekela'],
    lat: 53.1446,
    lng: 7.0345,
    regionHint: 'Centrum van Oost-Groningen',
  },
  {
    slug: 'oude-pekela',
    name: 'Oude Pekela',
    shortDescription:
      'Langs het Pekelder Hoofddiep. Ondernemers in Oude Pekela ondersteunen wij met betere online vindbaarheid en leadgeneratie.',
    nearbyLocations: ['winschoten', 'nieuwe-pekela', 'zuidbroek'],
    lat: 53.1069,
    lng: 6.9656,
    regionHint: 'Pekela-regio',
  },
  {
    slug: 'nieuwe-pekela',
    name: 'Nieuwe-Pekela',
    shortDescription:
      'In de Pekela-regio. Wij helpen bedrijven in Nieuwe-Pekela met Google ranking, advertenties en conversiegerichte websites.',
    nearbyLocations: ['oude-pekela', 'winschoten', 'veendam'],
    lat: 53.0796,
    lng: 6.9648,
    regionHint: 'Pekela-regio',
  },
  {
    slug: 'nieuwe-diep',
    name: 'Nieuwe Diep',
    shortDescription:
      'In de omgeving van Bareveld en Veendam. Wij ondersteunen ondernemers in Nieuwe Diep met lokale SEO en zichtbaarheid op Google.',
    nearbyLocations: ['bareveld', 'veendam', 'tripscompagnie'],
    lat: 53.1248,
    lng: 6.8364,
    regionHint: 'Omgeving Bareveld',
  },
  {
    slug: 'zuidlaren',
    name: 'Zuidlaren',
    shortDescription:
      'Aan de rand van Drenthe en Groningen. Ook in Zuidlaren helpen wij bedrijven met Google Ads, SEO en website-optimalisatie.',
    nearbyLocations: ['veendam', 'hoogezand', 'sappemeer'],
    lat: 53.0941,
    lng: 6.6814,
    regionHint: 'Drenthe/Groningen grens',
  },
  {
    slug: 'stadskanaal',
    name: 'Stadskanaal',
    shortDescription:
      'Een van de grootste plaatsen in Oost-Groningen. Wij helpen bedrijven in Stadskanaal met Google Top 3 ranking, Google Ads en professionele websites.',
    nearbyLocations: ['veendam', 'onstwedde', 'oude-pekela'],
    lat: 52.9848,
    lng: 6.9531,
    regionHint: 'Oost-Groningen',
  },
  {
    slug: 'gieten',
    name: 'Gieten',
    shortDescription:
      'Centraal in Drenthe. Van Borg ondersteunt ondernemers in Gieten met lokale SEO, Google Ads en conversiegerichte websites voor meer aanvragen.',
    nearbyLocations: ['gasselte', 'annen', 'drouwen'],
    lat: 52.9983,
    lng: 6.7488,
    regionHint: 'Midden-Drenthe',
  },
  {
    slug: 'eext',
    name: 'Eext',
    shortDescription:
      'Een rustig dorp in Drenthe. Wij helpen lokale ondernemers in Eext met betere online vindbaarheid en gerichte marketing via Google.',
    nearbyLocations: ['annen', 'gieten', 'gasselte'],
    lat: 52.9779,
    lng: 6.7214,
    regionHint: 'Drenthe',
  },
  {
    slug: 'annen',
    name: 'Annen',
    shortDescription:
      'In de gemeente Aa en Hunze. Wij zorgen dat bedrijven in Annen gevonden worden op Google met lokale SEO, advertenties en een sterke website.',
    nearbyLocations: ['eext', 'gieten', 'zuidlaren'],
    lat: 53.0198,
    lng: 6.7122,
    regionHint: 'Aa en Hunze, Drenthe',
  },
  {
    slug: 'gasselte',
    name: 'Gasselte',
    shortDescription:
      'In het hart van Drenthe. Van Borg helpt bedrijven in Gasselte met Google ranking en Ads zodat ze meer klanten aantrekken uit de regio.',
    nearbyLocations: ['gieten', 'drouwen', 'eext'],
    lat: 52.9836,
    lng: 6.7909,
    regionHint: 'Drenthe',
  },
  {
    slug: 'drouwen',
    name: 'Drouwen',
    shortDescription:
      'Klein dorp in Drenthe met ondernemers die online groeien. Wij ondersteunen bedrijven in Drouwen met SEO, Google Ads en effectieve websites.',
    nearbyLocations: ['gasselte', 'gieten', 'onstwedde'],
    lat: 52.9666,
    lng: 6.8264,
    regionHint: 'Drenthe',
  },
  {
    slug: 'onstwedde',
    name: 'Onstwedde',
    shortDescription:
      'In Oost-Groningen nabij de Duitse grens. Van Borg helpt bedrijven in Onstwedde met lokale online marketing, Google ranking en leadgeneratie.',
    nearbyLocations: ['stadskanaal', 'drouwen', 'winschoten'],
    lat: 52.9963,
    lng: 7.0544,
    regionHint: 'Oost-Groningen, grensstreek',
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return LOCATION_PAGES.find((loc) => loc.slug === slug)
}

export function getAllLocationSlugs(): LocationSlug[] {
  return LOCATION_PAGES.map((loc) => loc.slug)
}
