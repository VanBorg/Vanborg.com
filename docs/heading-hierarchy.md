# Heading-hiërarchie (h1–h4)

Dit document beschrijft hoe we koppen op de site gebruiken. De regels gelden voor **alle pagina’s** en voor **iedereen die content of code toevoegt**. Zoekmachines en AI-crawlers gebruiken deze structuur om de pagina te begrijpen; een consistente hiërarchie verbetert SEO en toegankelijkheid.

---

## Regels (altijd aanhouden)

1. **Eén h1 per pagina** – De hoofdtitel van die pagina. Geen tweede h1 voor een andere sectie.
2. **Geen niveau overslaan** – Na een h2 komt een h3 (niet meteen een h4). Na een h3 mag een h4.
3. **Koppen zijn sectietitels** – Een heading beschrijft het *onderwerp* van het blok eronder. Geen heading voor elke zin; alleen waar een nieuw (sub-)onderwerp begint.
4. **h4 alleen bij echte sub-subsecties** – Gebruik h4 als onder één h3 meerdere duidelijke sub-onderwerpen staan (bijv. “Werkgebied”, “Openingstijden” onder “Contact”). Niet extra h4’s toevoegen “voor SEO”; dat helpt niet.
5. **Tekst onder een heading** – Direct onder een h2/h3/h4 hoort inhoud (alinea’s, lijsten). Die inhoud staat in `<p>`, geen extra heading tenzij er echt een lager niveau is.

---

## Niveaus – wanneer wat?

| Niveau | Gebruik | Voorbeeld |
|--------|--------|-----------|
| **h1** | Paginatitel, één per pagina | “Het beste marketingbureau van Veendam en omstreken” |
| **h2** | Grote sectie op de pagina | “Wie wij zijn”, “Onze diensten” |
| **h3** | Subsectie onder een h2 | “Over de oprichter”, “Wat we doen”, “Voor wie we werken” |
| **h4** | Sub-subsectie onder een h3, alleen als er meerdere duidelijke sub-onderwerpen zijn | “Werkgebied”, “Openingstijden” onder “Voor wie we werken, werkgebied & openingstijden” |

---

## Voorbeelden uit deze codebase

### Homepage – Hero
- **h1** – Hoofdtitel van de pagina.
- **h2** – Kernboodschap (bijv. “Binnen 90 dagen een Top 3 positie op Google”).
- **h3** – Eén blok uitleg (bijv. heatmap-legendatekst). Niet elke zin een eigen h3.

### Homepage – About Us (Wie wij zijn)
- **h2** – “Wie wij zijn” (sectietitel).
- **h3** – “Over de oprichter” → daaronder h4’s of alinea’s.
- **h3** – “Onze aanpak” → alleen alinea’s (geen h4; geen aparte sub-onderwerpen).
- **h3** – “Wat we doen” → alleen alinea’s.
- **h3** – “Voor wie we werken, werkgebied & openingstijden” → **h4** “Voor wie we werken”, **h4** “Werkgebied”, **h4** “Openingstijden”, elk gevolgd door één alinea. Hier zijn drie duidelijke sub-onderwerpen, dus h4 is logisch.

### Later: subpagina’s
- Elke subpagina krijgt één **h1** (titel van die pagina).
- Daaronder **h2** voor grote blokken, **h3** voor subsecties, **h4** alleen waar een vierde niveau nodig is.

---

## Voor zoekmachines en AI-crawlers

- **Document outline:** De heading-structuur (h1 → h2 → h3 → h4) vormt de outline van de pagina. Crawlers gebruiken die om onderwerpen en relaties te begrijpen.
- **Consistentie:** Overal dezelfde regels toepassen (één h1, geen niveaus overslaan, koppen = sectietitels) maakt de site voorspelbaar en beter te indexeren.
- **Geen heading-stuffing:** Extra koppen toevoegen “voor SEO” of om trefwoorden te herhalen, helpt niet en kan de structuur vervuilen. Alleen koppen gebruiken waar een nieuw (sub-)onderwerp begint.
- **Toegankelijkheid:** Screenreaders en outline-tools tonen dezelfde hiërarchie; duidelijke koppen helpen alle gebruikers.

---

## Samenvatting

- **h1** = paginatitel (één per pagina).
- **h2** = grote sectie.
- **h3** = subsectie.
- **h4** = sub-subsectie, alleen als er onder één h3 meerdere duidelijke sub-onderwerpen zijn.
- Geen niveau overslaan; koppen zijn sectietitels, geen decoratie.

Referentie-implementatie: `src/components/sections/AboutUs.tsx` (h2 → h3 → h4 waar logisch).

---

## Stijl (Tailwind) – overal hetzelfde voor content-secties

Voor **content-secties** (zoals About Us en alle nieuwe secties met h2/h3/h4) gebruiken we onderstaande classes. Zo blijft de vormgeving gelijk.

| Niveau | Gebruik | className (Tailwind) |
|--------|--------|----------------------|
| **h2** | Sectietitel | `className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl"` |
| **h3** | Subsectie | `className="text-base font-bold text-neutral-900"` |
| **h4** | Sub-subsectie | `className="mt-2 text-sm font-semibold text-neutral-800"` (eerste na h3: `mt-2`; volgende h4: `mt-3`) |
| **p** onder heading | Alinea | `className="mt-2 leading-relaxed"` (of `mt-1` direct onder een h4) |

**Voorbeeld (zoals in AboutUs):**

```tsx
<h2 id="sectie-id" className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
  Sectietitel
</h2>

<div>
  <h3 className="text-base font-bold text-neutral-900">Subsectie</h3>
  <h4 className="mt-2 text-sm font-semibold text-neutral-800">Sub-subsectie</h4>
  <p className="mt-1 leading-relaxed">Tekst…</p>
  <h4 className="mt-3 text-sm font-semibold text-neutral-800">Volgende sub-subsectie</h4>
  <p className="mt-1 leading-relaxed">Tekst…</p>
</div>
```

**Let op:** De Hero heeft bewust andere groottes (h1 groot, h2 als ondertitel, h3 voor legenda). Voor alle andere secties met lopende tekst: bovenstaande classes aanhouden.
