# ATLAS Isseksi — Executive Deal Room

A confidential, trilingual executive transaction room for the **Moroccan
Financial Partner Entry Window**: a capital increase into Isseksi ProjectCo —
**USD 3.6M for up to 10%**, paid in three staged tranches.

It is built as a closed institutional deal room (sidebar navigation, a fixed
deal-core summary, a Leaflet license evidence map, an in-room PDF viewer, and a
screen-share Meeting Mode) — not a public website or fundraising page.
**Controlled distribution only.**

## Run

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
npm run convert:kml   # regenerate public/data/atlas-licenses.geojson from the KML
```

## Stack

React 18 · TypeScript · Vite · Tailwind CSS v4 · Leaflet / React-Leaflet.
No backend, no dashboard framework.

## Structure

```
public/
  brand/                              Official ATLAS ISSEKSI logo library:
    atlas-isseksi-horizontal-dark.svg     horizontal lockup, dark background
    atlas-isseksi-horizontal-copper.svg   horizontal lockup, copper background
    atlas-isseksi-stacked.svg             stacked lockup (also the favicon)
    atlas-isseksi-header.svg              tightly-cropped dark lockup used in the header
  data/atlas-licenses.geojson         License portfolio (6 features incl. Isseksi)
  licenses/isseksi-exploitation-license.pdf   Controlled exploitation licence PDF
source-data/
  Permis ATLAS Mining.kml             Original KML portfolio (conversion source)
scripts/
  convert-kml-to-geojson.js           KML → GeoJSON + appends Isseksi anchor
src/
  App.tsx, main.tsx, index.css
  i18n/
    translations.ts                   EN / AR / FR dictionaries (flat key map)
    LanguageProvider.tsx              Context: language, direction, persistence
    useTranslation.ts                 t(key), language, direction, setLanguage
  data/
    dealData.ts                       Deal summary, capital, tranches, funds, governance
    documentsData.ts                  Document families and cards
    licenseMetadata.ts                Map config, style colours, feature types
  lib/scrollToSection.ts
  components/
    Header, SidebarNav, FixedDealSummary, SectionShell, Logo
    HeroDealSnapshot, CapitalStructure, TrancheCapitalPath, UseOfFundsLedger,
    PartnerProtections, GovernanceMatrix, SupportingEvidenceMap, DocumentCenter, NextStep
    EvidenceMap, LicenseSidePanel, PdfViewerModal
```

## Languages

EN (default, LTR), FR (LTR), AR (RTL). The switcher in the header sets
`document.documentElement.lang` / `dir` and persists the choice in
`localStorage` (`atlas-isseksi-language`); an inline script in `index.html`
restores direction before first paint. All visible copy is sourced from
`src/i18n/translations.ts` — edit a key there to change wording in one place.
Arabic swaps to the Cairo / Tajawal font stack; financial figures (USD 3.6M,
10%, 90%, 3.33%) are isolated LTR so they stay stable in RTL.

## Evidence map & PDF

The map (Leaflet) loads `/data/atlas-licenses.geojson`, fits bounds to all
licenses, renders the five PR research permits in muted verde/stone and
highlights **LE 353294 / Isseksi** in copper as the production anchor.
Clicking a feature opens the side panel with its metadata; for Isseksi a
"View Exploitation License PDF" button opens
`/licenses/isseksi-exploitation-license.pdf` inside an in-room modal (with an
open-in-new-tab fallback). The GeoJSON carries the GIS note: *approximate
WGS84 conversion for controlled interactive evidence display; GIS review
recommended* — the polygon is not a certified cadastral boundary.

## Meeting Mode

The header toggle adds a `meeting-mode` class on the app shell: key numbers
enlarge, descriptive copy dims, and a focus strip surfaces the deal equation
(USD 3.6M · 10% · 3 Tranches · 90% Retained · license / technology /
operational control protected). Capital values never change.

## Frozen transaction architecture

Capital Increase into Isseksi ProjectCo / SPV · USD 3.6M · up to 10% · 90%
sponsor retained · 3 staged tranches of USD 1.2M (3.33% + 3.33% + 3.34%) ·
quarterly monitoring · priority participation in future rounds · license,
technology, and operational control **not transferred** · controlled Data Room
access only.
