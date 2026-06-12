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
src/
  App.tsx                  Page assembly (11 sections + header/footer)
  index.css                Design tokens, panels, buttons, copper rules
  data/transactionData.ts  All transaction content as typed data arrays
  hooks/                   useInView, useCountUp (scroll-triggered animation)
  components/
    Layout/                Header (sticky nav, active section), Section wrapper
    Brand/AtlasMark.tsx    Abstract SVG mark (mountain ridge + circuit nodes)
    UI/                    StatCard, InfoCard, ProgressBar, MatrixTable, Timeline, Accordion
    Sections/              Hero, TransactionSnapshot, WhyLayerExists, TranchePlan,
                           UseOfFunds, SponsorProtection, GovernanceMonitoring,
                           ReservedMatters, MeetingPath, DocumentCenter, FinalStatement
```

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
