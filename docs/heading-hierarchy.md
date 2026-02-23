# Heading-hiërarchie en crawlen

Dit document legt uit hoe we koppen (h1–h4) op de site gebruiken, zodat de structuur duidelijk is voor zoekmachines en later uitbreidbaar blijft.

---

## Huidige structuur (o.a. Hero)

- **h1** – Hoofdtitel van de pagina  
  Voorbeeld: *Het beste marketingbureau van Veendam*

- **h2** – Belangrijkste subkop / kernboodschap  
  Voorbeeld: *Binnen 90 dagen een Top 3 positie in Google Maps.*

- **h3** – Ondersteunende kop of blok uitleg  
  Voorbeeld: de heatmap-uitleg (één h3 voor het hele blok: “Op de heatmap zie je…”, “Groen = is goed…”, “Rood = is slecht…”).  
  **Niet** elke zin een eigen h3; één logisch blok = één h3.

Hiërarchie: **h1 → h2 → h3**. Geen niveau overslaan (dus geen h4 direct onder h2).

---

## Waarom zo?

- **Crawlen / SEO:** Zoekmachines gebruiken koppen om de pagina te begrijpen. Duidelijke h1 → h2 → h3 (en later h4) maakt de structuur voorspelbaar.
- **Toegankelijkheid:** Screenreaders en outline-tools tonen dezelfde hiërarchie. Eén h3 per “onderwerp” houdt de outline overzichtelijk.
- **Later uitbreiden:** Op andere pagina’s komt per pagina één h1 (bijv. titel van die pagina). Daaronder h2 voor grote secties, h3 voor subsecties, en waar nodig **h4** voor sub-subsecties. De Hero blijft h1 + h2 + h3; elders kunnen we h4 toevoegen waar het past.

---

## Regels om aan te houden

1. **Eén h1 per pagina** – De hoofdtitel. Later op subpagina’s: elke pagina zijn eigen h1 (geen “vervangen” van de site-brede h1, maar een nieuwe h1 per pagina).
2. **h2** – Grote secties of hoofdboodschappen.
3. **h3** – Subsecties of één blok ondersteunende tekst (zoals de heatmap-legendatekst in de Hero). Geen h4 voor losse zinnen of legenda; dat blijft gewone tekst in een h3- of p-blok.
4. **h4** – Alleen later toevoegen waar er echt een vierde niveau nodig is (bijv. onder een h3-sectie). Niet gebruiken voor “Groen = …” / “Rood = …”-achtige regels.

---

## Samenvatting

| Niveau | Gebruik |
|--------|--------|
| h1 | Paginatitel (één per pagina) |
| h2 | Sectie / kernboodschap |
| h3 | Subsectie of één blok uitleg |
| h4 | (Later) Sub-subsectie waar nodig |

Alles in de Hero heatmap-uitleg blijft in **één h3**, zodat de hiërarchie voor crawlen duidelijk is en we later op de site gericht h4 kunnen toevoegen.
