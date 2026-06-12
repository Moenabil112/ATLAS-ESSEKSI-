# ATLAS Isseksi ProjectCo — Partner Entry Window

Confidential interactive executive interface for the **Moroccan Financial Partner Entry Window**:
Capital Increase into Isseksi ProjectCo | USD 3.6M | 10% Minority Entry | 3 Tranches.

Built as a single-page institutional transaction console for investor meetings,
executive review, screen sharing, and internal board preparation.
**Controlled distribution only — not a public website.**

## Run

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS v4 (design tokens declared in `src/index.css` via `@theme`)
- No chart or dashboard libraries — native components and lightweight CSS animation only

## Structure

```
public/
  brand/atlas-isseksi-logo.svg   Standalone logo asset (mark + wordmark)
src/
  App.tsx                  Page assembly (11 sections + header/footer)
  index.css                Design tokens, panels, buttons, copper rules, RTL typography
  i18n/
    translations.ts        All UI content in EN / FR / AR as one typed object
    LanguageContext.tsx    LanguageProvider + useTranslation hook
  hooks/                   useInView, useCountUp (scroll-triggered animation)
  components/
    Layout/                Header (sticky nav, active section), Section wrapper,
                           LanguageSwitcher (EN / FR / AR)
    Brand/                 AtlasMark (brand mark SVG), Logo (mark + wordmark lockup)
    UI/                    StatCard, InfoCard, ProgressBar, MatrixTable, Timeline, Accordion
    Sections/              Hero, TransactionSnapshot, WhyLayerExists, TranchePlan,
                           UseOfFunds, SponsorProtection, GovernanceMonitoring,
                           ReservedMatters, MeetingPath, DocumentCenter, FinalStatement
```

## Languages

The interface is trilingual: **English (default), French, Arabic**.

- The switcher in the header sets `document.documentElement.lang` / `dir` and
  persists the choice in `localStorage` (`atlas-lang`); an inline script in
  `index.html` restores the direction before first paint.
- Arabic activates RTL layout and swaps to Arabic-capable fonts
  (**Cairo** for headings, **Tajawal** for body) with letter-spacing reset.
- To edit or add copy, change the corresponding key in
  `src/i18n/translations.ts` — every language must satisfy the
  `TranslationSet` interface, so missing keys fail the type-check.

## Design system

| Token | Value |
|---|---|
| Deep Earth (background) | `#1A1A0E` |
| Verde Tech (panels) | `#2E4A3E` |
| Atlas Stone (muted surfaces) | `#4A3728` |
| Copper Fire (accent) | `#B87333` |
| Forge Glow (hover/highlight) | `#D4924A` |
| Ash White (text) | `#F0EDE8` |

Typography: **Montserrat** (headings), **Cormorant Garamond** (sub-headings),
**Raleway** (body), loaded from Google Fonts with system fallbacks.

## Content source

All copy derives from `docs/ATLAS_Isseksi_ProjectCo_Capital_Architecture_Context_v1.md`.
Edit transaction content in `src/data/transactionData.ts` — components map over the data.
