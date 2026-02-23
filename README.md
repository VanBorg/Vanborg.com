# Van Borg – Website

Officiële website van **Van Borg** (Van Borg Limited): marketingbureau uit Veendam voor lokale bedrijven in Nederland. Wij zorgen voor een **Top 3 Google ranking** (Local SEO / Google Business Profile), **Google Ads**-campagnes en **SEO-websites**.

---

## Over Van Borg

- **Locatie:** Kieler Bocht 104, 9642 CE Veendam, Nederland  
- **Werkgebied:** Heel Nederland (o.a. Veendam, Wildervank, Ommelanderwijk, Borgercompagnie, Tripscompagnie, Zuidbroek, Muntendam, Meeden, Bareveld, Noordbroek, Sappemeer, Hoogezand)  
- **Contact:** info@vanborglimited.com | +31 6 44 73 22 66  
- **Website:** [vanborg.com](https://vanborg.com)

Wij werken uitsluitend met bedrijven in Nederland. Meetbare resultaten: hogere rankings, meer gekwalificeerde leads, betere conversie. **Niet in de top 3? Dan werken we gratis door.**

---

## Diensten & prijzen (excl. btw)

| Dienst | Prijs |
|--------|--------|
| **Google Ranking (Top 3 lokaal)** | € 1.499 eenmalig + vanaf € 499 p/m |
| **Google Ads** | Voorstarter € 499 p/m · Groei € 899 p/m · Dominant € 1.299 p/m |
| **SEO Website** | Vanaf € 999 eenmalig + € 99 p/m hosting |

Betaling: bankoverschrijving, creditcard, contant of Bitcoin ($BTC). Werk start zodra betaling is ontvangen.

---

## Bron van waarheid (DNA)

Alle officiële teksten, SEO-meta, prijzen, locaties en structured data staan in:

- **`van-borg-dna.html`** – Volledige HTML met meta, Open Graph, Twitter, JSON-LD (LocalBusiness), prijzen, werkgebieden en noscript SEO-fallback. Dit bestand is de **canonieke referentie**; wijzigingen aan bedrijfsinformatie het liefst daar doorvoeren en daarna in `index.html` en de app overnemen.

---

## Tech stack

- **React** + **TypeScript**  
- **Vite** (build & dev server)  
- **Tailwind CSS** (layout & spacing)  
- **Globals.css** voor knoppen, gradients, container/section  
- Geen UI-bibliotheken

---

## Ontwikkeling

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # Productiebuild
npm run preview  # Preview van build
```

---

## Heading-hiërarchie (SEO & AI-crawlers)

We gebruiken een vaste **heading-structuur (h1 → h2 → h3 → h4)** op alle pagina’s:

- **Eén h1 per pagina** (paginatitel).
- **h2** voor grote secties, **h3** voor subsecties, **h4** alleen voor sub-subsecties (bijv. “Werkgebied”, “Openingstijden” onder één h3).
- Geen niveau overslaan; koppen zijn sectietitels, geen extra h4’s “voor SEO”.

Volledige regels en voorbeelden: **[docs/heading-hierarchy.md](docs/heading-hierarchy.md)**. Daar staat ook uitgelegd waarom dit belangrijk is voor zoekmachines en AI-crawlers. Referentie in code: `src/components/sections/AboutUs.tsx`.

---

## Projectstructuur

- `index.html` – Vite-entry; head en noscript afgeleid van `van-borg-dna.html`
- `van-borg-dna.html` – Bron van waarheid (SEO, prijzen, locaties, contact)
- `docs/heading-hierarchy.md` – Regels voor koppen (h1–h4) op alle pagina’s
- `src/` – React-app (components, pages, styles)
- `public/` – Statische assets (favicon, etc.)

---

© Van Borg
