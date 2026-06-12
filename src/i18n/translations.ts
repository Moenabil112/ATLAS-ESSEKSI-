export type Language = "en" | "fr" | "ar";

export interface NavItem {
  id: string;
  label: string;
}

export interface HeroStat {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
}

export interface Tranche {
  name: string;
  amount: string;
  equity: string;
  cumulativeEquity: string;
  purpose: string[];
  releaseConditions: string[];
}

export interface FundAllocation {
  category: string;
  allocation: number;
  amount: string;
}

export interface GovernanceRow {
  area: string;
  partner: string;
  sponsor: string;
  status: string;
  protectedRow: boolean;
}

export interface ReservedMatter {
  title: string;
  note: string;
}

export interface ProcessStep {
  step: string;
  detail: string;
}

export type DocumentStatus = "toPrepare" | "draft" | "controlled";

export interface DocumentCard {
  title: string;
  purpose: string;
  status: DocumentStatus;
}

interface SectionHeading {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface TranslationSet {
  logoAlt: string;
  header: {
    confidential: string;
    nav: NavItem[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tagline: string;
    text: string;
    actions: { label: string; href: string }[];
    stats: HeroStat[];
  };
  snapshot: SectionHeading & {
    rows: { field: string; value: string }[];
  };
  why: SectionHeading & {
    cards: { title: string; body: string }[];
  };
  tranches: SectionHeading & {
    stepperAria: string;
    purposeLabel: string;
    conditionsLabel: string;
    equityLabel: string;
    cumulativeLabel: string;
    items: Tranche[];
    total: { label: string; amount: string; arrow: string; result: string; suffix: string };
  };
  useOfFunds: SectionHeading & {
    headers: { category: string; percent: string; amount: string };
    totalLabel: string;
    totalAmount: string;
    items: FundAllocation[];
  };
  protection: SectionHeading & {
    receivesTitle: string;
    protectedTitle: string;
    receives: string[];
    protectedItems: string[];
    footnote: string;
  };
  governance: SectionHeading & {
    headers: { area: string; partner: string; sponsor: string; status: string };
    rows: GovernanceRow[];
    footnote: string;
  };
  reserved: SectionHeading & {
    items: ReservedMatter[];
  };
  process: SectionHeading & {
    steps: ProcessStep[];
  };
  documents: SectionHeading & {
    statusLabels: Record<DocumentStatus, string>;
    previewLabel: string;
    items: DocumentCard[];
  };
  final: {
    eyebrow: string;
    statement: string;
    actions: string[];
  };
  footer: {
    left: string;
    right: string;
  };
}

const en: TranslationSet = {
  logoAlt: "ATLAS ISSEKSI — Copper Ecosystem logo",
  header: {
    confidential: "Confidential — Controlled Distribution",
    nav: [
      { id: "structure", label: "Structure" },
      { id: "tranches", label: "Tranches" },
      { id: "use-of-funds", label: "Use of Funds" },
      { id: "governance", label: "Governance" },
      { id: "process", label: "Process" },
      { id: "documents", label: "Documents" },
    ],
  },
  hero: {
    eyebrow: "Confidential Transaction Window",
    title: "ATLAS Isseksi ProjectCo",
    subtitle: "Moroccan Financial Partner Entry Window",
    tagline: "Capital Increase into ProjectCo | USD 3.6M | 10% Minority Entry | 3 Tranches",
    text: "ATLAS is opening a limited Moroccan financial partner layer through a capital increase into Isseksi ProjectCo. The structure is designed for a USD 3.6M contribution against up to 10% of ProjectCo, paid in three staged tranches and dedicated to the current expansion phase. The partner receives quarterly monitoring rights and priority participation in future rounds, while Atlas retains license control and Akanil retains technology and data architecture.",
    actions: [
      { label: "View Structure", href: "#structure" },
      { label: "Review Tranches", href: "#tranches" },
      { label: "Governance Rights", href: "#governance" },
      { label: "Document Center", href: "#documents" },
    ],
    stats: [
      { value: 3.6, decimals: 1, prefix: "USD ", suffix: "M", label: "Total Capital Contribution" },
      { value: 10, decimals: 0, prefix: "", suffix: "%", label: "Maximum Recognized Stake" },
      { value: 3, decimals: 0, prefix: "", suffix: "", label: "Staged Tranches" },
      { value: 90, decimals: 0, prefix: "", suffix: "%", label: "Sponsor Retained Stake" },
    ],
  },
  snapshot: {
    eyebrow: "Section 01",
    title: "Transaction Snapshot",
    intro: "The closed capital architecture, stated in transaction terms.",
    rows: [
      { field: "Transaction type", value: "Capital Increase into ProjectCo" },
      { field: "Entry vehicle", value: "Isseksi ProjectCo / SPV" },
      { field: "Partner type", value: "Moroccan financial partner with industrial understanding" },
      { field: "Total contribution", value: "USD 3.6M" },
      { field: "Maximum stake", value: "10%" },
      { field: "Sponsor retained stake", value: "90%" },
      { field: "Payment method", value: "3 staged tranches" },
      { field: "Monitoring", value: "Quarterly review every 3 months" },
      { field: "Future rounds", value: "Priority participation right" },
      { field: "License ownership", value: "Not transferred" },
      { field: "Technology ownership", value: "Not transferred" },
      { field: "Data access", value: "Controlled Data Room" },
    ],
  },
  why: {
    eyebrow: "Section 02",
    title: "Why This Layer Exists",
    intro: "The strategic logic behind a limited minority financial partner entry.",
    cards: [
      {
        title: "Expansion Liquidity",
        body: "Dedicated capital for the current Isseksi expansion phase.",
      },
      {
        title: "ProjectCo Discipline",
        body: "Capital enters a dedicated vehicle, not founder pockets.",
      },
      {
        title: "Minority Partner Logic",
        body: "10% creates alignment without transferring control.",
      },
      {
        title: "Execution Transparency",
        body: "Three tranches and quarterly monitoring create clear accountability.",
      },
      {
        title: "Protected Assets",
        body: "License, technology, operational control, and sensitive data remain protected.",
      },
    ],
  },
  tranches: {
    eyebrow: "Section 03",
    title: "Three-Tranche Capital Plan",
    intro:
      "USD 3.6M deployed through a staged, condition-based payment protocol with progressive equity recognition.",
    stepperAria: "Tranche selection",
    purposeLabel: "Purpose",
    conditionsLabel: "Release Conditions",
    equityLabel: "Equity recognized",
    cumulativeLabel: "Cumulative",
    items: [
      {
        name: "Tranche 1",
        amount: "USD 1.2M",
        equity: "3.33%",
        cumulativeEquity: "3.33%",
        purpose: [
          "ProjectCo activation",
          "Governance setup",
          "Initial technical readiness",
          "Initial procurement planning",
        ],
        releaseConditions: [
          "Signed shareholder agreement",
          "ProjectCo account",
          "Approved use of funds",
          "Initial governance protocol",
        ],
      },
      {
        name: "Tranche 2",
        amount: "USD 1.2M",
        equity: "Additional 3.33%",
        cumulativeEquity: "6.66%",
        purpose: [
          "Mobile station procurement / development",
          "Quarry preparation",
          "Operating setup",
        ],
        releaseConditions: [
          "Report on Tranche 1 use",
          "Technical execution report",
          "Approved procurement and quarry plan",
        ],
      },
      {
        name: "Tranche 3",
        amount: "USD 1.2M",
        equity: "Additional 3.34%",
        cumulativeEquity: "10.00%",
        purpose: ["Ramp-up", "Working capital", "Operational readiness", "Production scale-up"],
        releaseConditions: [
          "Operational readiness report",
          "Quarterly review",
          "Updated budget",
          "ProjectCo approval",
        ],
      },
    ],
    total: {
      label: "Total:",
      amount: "USD 3.6M",
      arrow: "→",
      result: "10%",
      suffix: "recognized after full payment",
    },
  },
  useOfFunds: {
    eyebrow: "Section 04",
    title: "Use of Funds",
    intro: "The USD 3.6M contribution is ring-fenced for the current Isseksi expansion phase.",
    headers: { category: "Category", percent: "%", amount: "Amount" },
    totalLabel: "Total",
    totalAmount: "USD 3.6M",
    items: [
      { category: "Mobile processing station", allocation: 30, amount: "USD 1.08M" },
      { category: "Quarry preparation", allocation: 15, amount: "USD 540K" },
      { category: "Equipment and material handling", allocation: 15, amount: "USD 540K" },
      { category: "Working capital", allocation: 15, amount: "USD 540K" },
      { category: "Technical team and QA/QC", allocation: 8, amount: "USD 288K" },
      { category: "Water, ESG, and monitoring", allocation: 7, amount: "USD 252K" },
      { category: "Digital tracking and Data Room", allocation: 5, amount: "USD 180K" },
      { category: "Legal, governance, and transaction costs", allocation: 5, amount: "USD 180K" },
    ],
  },
  protection: {
    eyebrow: "Section 05",
    title: "Protected Architecture",
    intro: "The financial partner receives ProjectCo economics — not protected strategic assets.",
    receivesTitle: "Partner Receives",
    protectedTitle: "Protected / Not Transferred",
    receives: [
      "Up to 10% in ProjectCo",
      "Quarterly monitoring rights",
      "Budget visibility",
      "Controlled Data Room access",
      "Priority participation in future rounds",
    ],
    protectedItems: [
      "Mining license ownership",
      "Technology ownership",
      "Day-to-day operational control",
      "Unrestricted data access",
      "Exclusive offtake rights",
      "Future financing exclusivity",
    ],
    footnote:
      "Atlas Mining's license position, Akanil / HYRION technology, geological and strategic data, operating control, the sponsor position, and the future capital strategy remain outside the transaction perimeter.",
  },
  governance: {
    eyebrow: "Section 06",
    title: "Governance & Monitoring",
    intro: "Quarterly monitoring rights with clearly bounded partner visibility.",
    headers: {
      area: "Governance Area",
      partner: "Financial Partner",
      sponsor: "ProjectCo / Sponsor",
      status: "Protected Status",
    },
    rows: [
      {
        area: "Quarterly review",
        partner: "Yes — every 3 months",
        sponsor: "Prepares quarterly reporting",
        status: "Partner monitoring right",
        protectedRow: false,
      },
      {
        area: "Budget visibility",
        partner: "Yes — ProjectCo scope only",
        sponsor: "Owns budget preparation",
        status: "Limited to ProjectCo",
        protectedRow: false,
      },
      {
        area: "ProjectCo audit visibility",
        partner: "Yes — ProjectCo accounts only",
        sponsor: "Maintains accounts",
        status: "Limited to ProjectCo",
        protectedRow: false,
      },
      {
        area: "Reserved matters",
        partner: "Notification / approval on material deviations",
        sponsor: "Leads ordinary execution",
        status: "Defined schedule",
        protectedRow: false,
      },
      {
        area: "Data Room access",
        partner: "Controlled, permission-based",
        sponsor: "Administers access",
        status: "Controlled",
        protectedRow: false,
      },
      {
        area: "Future round priority",
        partner: "Priority participation right",
        sponsor: "Retains capital strategy",
        status: "Non-exclusive priority",
        protectedRow: false,
      },
      {
        area: "Operational control",
        partner: "No",
        sponsor: "Yes — full operational control",
        status: "Protected",
        protectedRow: true,
      },
      {
        area: "License control",
        partner: "No",
        sponsor: "Atlas Mining position",
        status: "Protected — not transferred",
        protectedRow: true,
      },
      {
        area: "Technology ownership",
        partner: "No",
        sponsor: "Akanil / HYRION",
        status: "Protected — not transferred",
        protectedRow: true,
      },
    ],
    footnote:
      "The partner has the right to review, ask questions, and request clarification through the quarterly cycle. Day-to-day operational control remains with ProjectCo and the sponsor at all times.",
  },
  reserved: {
    eyebrow: "Section 07",
    title: "Reserved Matters",
    intro:
      "Material deviations requiring partner notification or approval, as finalized in the shareholder agreement.",
    items: [
      {
        title: "Change of ProjectCo purpose",
        note: "Any modification of the ProjectCo corporate purpose is subject to the reserved matters schedule in the shareholder agreement.",
      },
      {
        title: "Use of funds outside approved expansion budget",
        note: "Capital deployment beyond the approved expansion budget requires the treatment defined in the shareholder agreement.",
      },
      {
        title: "New debt above agreed threshold",
        note: "Indebtedness above the agreed threshold falls under the reserved matters framework.",
      },
      {
        title: "Sale or pledge of core ProjectCo assets",
        note: "Disposal or encumbrance of core ProjectCo assets is a reserved matter.",
      },
      {
        title: "Material change to mobile station strategy",
        note: "Material deviation from the mobile station strategy is subject to the reserved matters schedule.",
      },
      {
        title: "Issuance of new equity affecting investor dilution",
        note: "Equity issuance affecting partner dilution is governed by the agreed shareholder framework.",
      },
      {
        title: "Material related-party transactions",
        note: "Material related-party transactions are reviewable under the reserved matters schedule.",
      },
      {
        title: "Exclusive offtake agreement affecting ProjectCo economics",
        note: "Any exclusive offtake arrangement affecting ProjectCo economics is a reserved matter.",
      },
      {
        title: "Transfer of operating rights or material contractual rights",
        note: "Transfers of operating or material contractual rights fall under the reserved matters framework.",
      },
      {
        title: "Change to ProjectCo governance structure",
        note: "Changes to the agreed governance structure are subject to the reserved matters schedule.",
      },
    ],
  },
  process: {
    eyebrow: "Section 08",
    title: "Meeting Path",
    intro: "A controlled, sequential process from first contact to Tranche 1 closing.",
    steps: [
      { step: "NDA", detail: "Confidentiality framework before any disclosure" },
      { step: "Limited Data Room", detail: "Controlled, permission-based document access" },
      { step: "Non-Binding LOI", detail: "Alignment on structure and intent" },
      { step: "Due Diligence", detail: "Scoped review within the controlled perimeter" },
      { step: "Indicative Term Sheet", detail: "Key commercial and governance terms" },
      { step: "ProjectCo Documentation", detail: "Subscription and shareholder agreements" },
      { step: "Tranche 1 Closing", detail: "First USD 1.2M payment and 3.33% recognition" },
    ],
  },
  documents: {
    eyebrow: "Section 09",
    title: "Controlled Document Center",
    intro: "The transaction documentation set. Distribution is controlled and permission-based.",
    statusLabels: {
      toPrepare: "To Prepare",
      draft: "Draft",
      controlled: "Controlled",
    },
    previewLabel: "Preview →",
    items: [
      {
        title: "Executive Offer Note",
        purpose: "Concise statement of the capital increase structure",
        status: "draft",
      },
      {
        title: "Six-Page Meeting Pack",
        purpose: "Core presentation set for the partner meeting",
        status: "toPrepare",
      },
      {
        title: "Non-Binding LOI",
        purpose: "Letter of intent recording mutual alignment",
        status: "toPrepare",
      },
      {
        title: "Indicative Term Sheet",
        purpose: "Key terms of the ProjectCo entry",
        status: "toPrepare",
      },
      {
        title: "Use of Funds Schedule",
        purpose: "Ring-fenced allocation of the USD 3.6M contribution",
        status: "draft",
      },
      {
        title: "Three-Tranche Payment Protocol",
        purpose: "Staged payment and equity recognition mechanics",
        status: "draft",
      },
      {
        title: "ProjectCo Governance Note",
        purpose: "Governance, monitoring, and reserved matters outline",
        status: "toPrepare",
      },
      {
        title: "Quarterly Reporting Template",
        purpose: "Standardized quarterly review format",
        status: "toPrepare",
      },
      {
        title: "Data Room Index",
        purpose: "Catalogue of controlled Data Room contents",
        status: "controlled",
      },
      {
        title: "Board Approval Memo",
        purpose: "Internal authorization of the transaction",
        status: "toPrepare",
      },
      {
        title: "Investor Q&A Sheet",
        purpose: "Prepared answers for anticipated partner questions",
        status: "toPrepare",
      },
      {
        title: "Official Short Offer Statement",
        purpose: "Approved external positioning language",
        status: "draft",
      },
    ],
  },
  final: {
    eyebrow: "Executive Position",
    statement:
      "“ATLAS is not selling the asset or transferring control. The proposed structure is a disciplined 10% Moroccan financial partner layer through a capital increase into Isseksi ProjectCo. The USD 3.6M contribution is paid in three transparent tranches and dedicated to the current expansion phase, while Atlas retains license control and Akanil retains technology and data architecture.”",
    actions: ["Prepare LOI", "Open Data Room", "Generate Meeting Pack"],
  },
  footer: {
    left: "ATLAS Isseksi ProjectCo — Capital Architecture v1.0",
    right: "Confidential — Controlled Distribution Only",
  },
};

const fr: TranslationSet = {
  logoAlt: "Logo ATLAS ISSEKSI — Copper Ecosystem",
  header: {
    confidential: "Confidentiel — Diffusion contrôlée",
    nav: [
      { id: "structure", label: "Structure" },
      { id: "tranches", label: "Tranches" },
      { id: "use-of-funds", label: "Emploi des fonds" },
      { id: "governance", label: "Gouvernance" },
      { id: "process", label: "Processus" },
      { id: "documents", label: "Documents" },
    ],
  },
  hero: {
    eyebrow: "Fenêtre de transaction confidentielle",
    title: "ATLAS Isseksi ProjectCo",
    subtitle: "Fenêtre d'entrée du partenaire financier marocain",
    tagline:
      "Augmentation de capital dans la ProjectCo | USD 3.6M | Entrée minoritaire de 10% | 3 tranches",
    text: "ATLAS ouvre une fenêtre limitée de partenariat financier marocain par une augmentation de capital dans Isseksi ProjectCo. La structure prévoit une contribution de USD 3.6M contre une participation pouvant atteindre 10% de la ProjectCo, versée en trois tranches échelonnées et dédiée à la phase d'expansion actuelle. Le partenaire bénéficie de droits de revue trimestrielle et d'un droit de participation prioritaire aux tours futurs, tandis qu'Atlas conserve le contrôle de la licence et qu'Akanil conserve la technologie et l'architecture des données.",
    actions: [
      { label: "Voir la structure", href: "#structure" },
      { label: "Examiner les tranches", href: "#tranches" },
      { label: "Droits de gouvernance", href: "#governance" },
      { label: "Centre de documents", href: "#documents" },
    ],
    stats: [
      { value: 3.6, decimals: 1, prefix: "USD ", suffix: "M", label: "Contribution totale en capital" },
      { value: 10, decimals: 0, prefix: "", suffix: "%", label: "Participation maximale reconnue" },
      { value: 3, decimals: 0, prefix: "", suffix: "", label: "Tranches échelonnées" },
      { value: 90, decimals: 0, prefix: "", suffix: "%", label: "Participation conservée du sponsor" },
    ],
  },
  snapshot: {
    eyebrow: "Section 01",
    title: "Aperçu de la transaction",
    intro: "L'architecture de capital fermée, énoncée en termes de transaction.",
    rows: [
      { field: "Type de transaction", value: "Augmentation de capital dans la ProjectCo" },
      { field: "Véhicule d'entrée", value: "Isseksi ProjectCo / SPV" },
      {
        field: "Type de partenaire",
        value: "Partenaire financier marocain doté d'une compréhension industrielle",
      },
      { field: "Contribution totale", value: "USD 3.6M" },
      { field: "Participation maximale", value: "10%" },
      { field: "Participation conservée du sponsor", value: "90%" },
      { field: "Modalité de paiement", value: "3 tranches échelonnées" },
      { field: "Suivi", value: "Revue trimestrielle tous les 3 mois" },
      { field: "Tours futurs", value: "Droit de participation prioritaire" },
      { field: "Propriété de la licence", value: "Non transférée" },
      { field: "Propriété de la technologie", value: "Non transférée" },
      { field: "Accès aux données", value: "Data Room contrôlée" },
    ],
  },
  why: {
    eyebrow: "Section 02",
    title: "Pourquoi cette couche existe",
    intro: "La logique stratégique d'une entrée limitée de partenaire financier minoritaire.",
    cards: [
      {
        title: "Liquidité d'expansion",
        body: "Un capital dédié à la phase d'expansion actuelle d'Isseksi.",
      },
      {
        title: "Discipline ProjectCo",
        body: "Le capital entre dans un véhicule dédié, et non dans les poches des fondateurs.",
      },
      {
        title: "Logique de partenaire minoritaire",
        body: "10% crée un alignement sans transfert de contrôle.",
      },
      {
        title: "Transparence d'exécution",
        body: "Trois tranches et une revue trimestrielle créent une responsabilité claire.",
      },
      {
        title: "Actifs protégés",
        body: "La licence, la technologie, le contrôle opérationnel et les données sensibles restent protégés.",
      },
    ],
  },
  tranches: {
    eyebrow: "Section 03",
    title: "Plan de capital en trois tranches",
    intro:
      "USD 3.6M déployés selon un protocole de paiement échelonné et conditionnel, avec reconnaissance progressive de la participation.",
    stepperAria: "Sélection de tranche",
    purposeLabel: "Objet",
    conditionsLabel: "Conditions de libération",
    equityLabel: "Participation reconnue",
    cumulativeLabel: "Cumul",
    items: [
      {
        name: "Tranche 1",
        amount: "USD 1.2M",
        equity: "3.33%",
        cumulativeEquity: "3.33%",
        purpose: [
          "Activation de la ProjectCo",
          "Mise en place de la gouvernance",
          "Préparation technique initiale",
          "Planification initiale des achats",
        ],
        releaseConditions: [
          "Pacte d'actionnaires signé",
          "Compte de la ProjectCo",
          "Emploi des fonds approuvé",
          "Protocole de gouvernance initial",
        ],
      },
      {
        name: "Tranche 2",
        amount: "USD 1.2M",
        equity: "3.33% supplémentaires",
        cumulativeEquity: "6.66%",
        purpose: [
          "Acquisition / développement de la station mobile",
          "Préparation des carrières",
          "Mise en place opérationnelle",
        ],
        releaseConditions: [
          "Rapport sur l'emploi de la Tranche 1",
          "Rapport d'exécution technique",
          "Plan d'achats et de carrières approuvé",
        ],
      },
      {
        name: "Tranche 3",
        amount: "USD 1.2M",
        equity: "3.34% supplémentaires",
        cumulativeEquity: "10.00%",
        purpose: [
          "Montée en puissance",
          "Fonds de roulement",
          "Préparation opérationnelle",
          "Augmentation de la production",
        ],
        releaseConditions: [
          "Rapport de préparation opérationnelle",
          "Revue trimestrielle",
          "Budget actualisé",
          "Approbation de la ProjectCo",
        ],
      },
    ],
    total: {
      label: "Total :",
      amount: "USD 3.6M",
      arrow: "→",
      result: "10%",
      suffix: "reconnus après paiement intégral",
    },
  },
  useOfFunds: {
    eyebrow: "Section 04",
    title: "Emploi des fonds",
    intro:
      "La contribution de USD 3.6M est cantonnée à la phase d'expansion actuelle d'Isseksi.",
    headers: { category: "Catégorie", percent: "%", amount: "Montant" },
    totalLabel: "Total",
    totalAmount: "USD 3.6M",
    items: [
      { category: "Station de traitement mobile", allocation: 30, amount: "USD 1.08M" },
      { category: "Préparation des carrières", allocation: 15, amount: "USD 540K" },
      { category: "Équipements et manutention", allocation: 15, amount: "USD 540K" },
      { category: "Fonds de roulement", allocation: 15, amount: "USD 540K" },
      { category: "Équipe technique et QA/QC", allocation: 8, amount: "USD 288K" },
      { category: "Eau, ESG et suivi", allocation: 7, amount: "USD 252K" },
      { category: "Suivi numérique et Data Room", allocation: 5, amount: "USD 180K" },
      {
        category: "Frais juridiques, de gouvernance et de transaction",
        allocation: 5,
        amount: "USD 180K",
      },
    ],
  },
  protection: {
    eyebrow: "Section 05",
    title: "Architecture protégée",
    intro:
      "Le partenaire financier reçoit les droits économiques de la ProjectCo — et non les actifs stratégiques protégés.",
    receivesTitle: "Le partenaire reçoit",
    protectedTitle: "Protégé / Non transféré",
    receives: [
      "Jusqu'à 10% de la ProjectCo",
      "Droits de revue trimestrielle",
      "Visibilité budgétaire",
      "Accès contrôlé à la Data Room",
      "Participation prioritaire aux tours futurs",
    ],
    protectedItems: [
      "Propriété de la licence minière",
      "Propriété de la technologie",
      "Contrôle opérationnel quotidien",
      "Accès illimité aux données",
      "Droits d'enlèvement (offtake) exclusifs",
      "Exclusivité sur les financements futurs",
    ],
    footnote:
      "La position de licence d'Atlas Mining, la technologie Akanil / HYRION, les données géologiques et stratégiques, le contrôle opérationnel, la position du sponsor et la stratégie de capital future restent en dehors du périmètre de la transaction.",
  },
  governance: {
    eyebrow: "Section 06",
    title: "Gouvernance et suivi",
    intro: "Des droits de revue trimestrielle avec une visibilité du partenaire clairement délimitée.",
    headers: {
      area: "Domaine de gouvernance",
      partner: "Partenaire financier",
      sponsor: "ProjectCo / Sponsor",
      status: "Statut de protection",
    },
    rows: [
      {
        area: "Revue trimestrielle",
        partner: "Oui — tous les 3 mois",
        sponsor: "Prépare le reporting trimestriel",
        status: "Droit de suivi du partenaire",
        protectedRow: false,
      },
      {
        area: "Visibilité budgétaire",
        partner: "Oui — périmètre ProjectCo uniquement",
        sponsor: "Assure la préparation du budget",
        status: "Limitée à la ProjectCo",
        protectedRow: false,
      },
      {
        area: "Visibilité d'audit ProjectCo",
        partner: "Oui — comptes de la ProjectCo uniquement",
        sponsor: "Tient les comptes",
        status: "Limitée à la ProjectCo",
        protectedRow: false,
      },
      {
        area: "Matières réservées",
        partner: "Notification / approbation en cas d'écart matériel",
        sponsor: "Conduit l'exécution ordinaire",
        status: "Liste définie",
        protectedRow: false,
      },
      {
        area: "Accès à la Data Room",
        partner: "Contrôlé, fondé sur des autorisations",
        sponsor: "Administre l'accès",
        status: "Contrôlé",
        protectedRow: false,
      },
      {
        area: "Priorité sur les tours futurs",
        partner: "Droit de participation prioritaire",
        sponsor: "Conserve la stratégie de capital",
        status: "Priorité non exclusive",
        protectedRow: false,
      },
      {
        area: "Contrôle opérationnel",
        partner: "Non",
        sponsor: "Oui — contrôle opérationnel intégral",
        status: "Protégé",
        protectedRow: true,
      },
      {
        area: "Contrôle de la licence",
        partner: "Non",
        sponsor: "Position d'Atlas Mining",
        status: "Protégé — non transféré",
        protectedRow: true,
      },
      {
        area: "Propriété de la technologie",
        partner: "Non",
        sponsor: "Akanil / HYRION",
        status: "Protégée — non transférée",
        protectedRow: true,
      },
    ],
    footnote:
      "Le partenaire a le droit d'examiner, de poser des questions et de demander des clarifications dans le cadre du cycle trimestriel. Le contrôle opérationnel quotidien demeure en permanence entre les mains de la ProjectCo et du sponsor.",
  },
  reserved: {
    eyebrow: "Section 07",
    title: "Matières réservées",
    intro:
      "Écarts matériels nécessitant la notification ou l'approbation du partenaire, tels que finalisés dans le pacte d'actionnaires.",
    items: [
      {
        title: "Changement d'objet de la ProjectCo",
        note: "Toute modification de l'objet social de la ProjectCo relève de la liste des matières réservées du pacte d'actionnaires.",
      },
      {
        title: "Emploi des fonds hors du budget d'expansion approuvé",
        note: "Tout déploiement de capital au-delà du budget d'expansion approuvé suit le traitement défini dans le pacte d'actionnaires.",
      },
      {
        title: "Nouvel endettement au-delà du seuil convenu",
        note: "L'endettement au-delà du seuil convenu relève du cadre des matières réservées.",
      },
      {
        title: "Vente ou nantissement d'actifs essentiels de la ProjectCo",
        note: "La cession ou le nantissement d'actifs essentiels de la ProjectCo constitue une matière réservée.",
      },
      {
        title: "Changement matériel de la stratégie de station mobile",
        note: "Tout écart matériel par rapport à la stratégie de station mobile relève de la liste des matières réservées.",
      },
      {
        title: "Émission de nouveaux titres affectant la dilution de l'investisseur",
        note: "L'émission de titres affectant la dilution du partenaire est régie par le cadre actionnarial convenu.",
      },
      {
        title: "Transactions matérielles avec des parties liées",
        note: "Les transactions matérielles avec des parties liées sont examinables au titre des matières réservées.",
      },
      {
        title: "Accord d'enlèvement exclusif affectant l'économie de la ProjectCo",
        note: "Tout accord d'enlèvement (offtake) exclusif affectant l'économie de la ProjectCo constitue une matière réservée.",
      },
      {
        title: "Transfert de droits d'exploitation ou de droits contractuels matériels",
        note: "Les transferts de droits d'exploitation ou de droits contractuels matériels relèvent du cadre des matières réservées.",
      },
      {
        title: "Modification de la structure de gouvernance de la ProjectCo",
        note: "Les modifications de la structure de gouvernance convenue relèvent de la liste des matières réservées.",
      },
    ],
  },
  process: {
    eyebrow: "Section 08",
    title: "Parcours de réunion",
    intro: "Un processus contrôlé et séquentiel, du premier contact au closing de la Tranche 1.",
    steps: [
      { step: "NDA", detail: "Cadre de confidentialité avant toute divulgation" },
      { step: "Data Room limitée", detail: "Accès contrôlé et autorisé aux documents" },
      { step: "LOI non contraignante", detail: "Alignement sur la structure et l'intention" },
      { step: "Due diligence", detail: "Revue cadrée dans le périmètre contrôlé" },
      { step: "Term sheet indicatif", detail: "Principaux termes commerciaux et de gouvernance" },
      { step: "Documentation ProjectCo", detail: "Contrats de souscription et pacte d'actionnaires" },
      { step: "Closing de la Tranche 1", detail: "Premier paiement de USD 1.2M et reconnaissance de 3.33%" },
    ],
  },
  documents: {
    eyebrow: "Section 09",
    title: "Centre de documents contrôlé",
    intro:
      "L'ensemble documentaire de la transaction. La diffusion est contrôlée et fondée sur des autorisations.",
    statusLabels: {
      toPrepare: "À préparer",
      draft: "Projet",
      controlled: "Contrôlé",
    },
    previewLabel: "Aperçu →",
    items: [
      {
        title: "Note d'offre exécutive",
        purpose: "Énoncé concis de la structure d'augmentation de capital",
        status: "draft",
      },
      {
        title: "Dossier de réunion de six pages",
        purpose: "Support de présentation principal pour la réunion partenaire",
        status: "toPrepare",
      },
      {
        title: "LOI non contraignante",
        purpose: "Lettre d'intention actant l'alignement mutuel",
        status: "toPrepare",
      },
      {
        title: "Term sheet indicatif",
        purpose: "Termes clés de l'entrée dans la ProjectCo",
        status: "toPrepare",
      },
      {
        title: "Calendrier d'emploi des fonds",
        purpose: "Allocation cantonnée de la contribution de USD 3.6M",
        status: "draft",
      },
      {
        title: "Protocole de paiement en trois tranches",
        purpose: "Mécanique des paiements échelonnés et de la reconnaissance de participation",
        status: "draft",
      },
      {
        title: "Note de gouvernance ProjectCo",
        purpose: "Synthèse de la gouvernance, du suivi et des matières réservées",
        status: "toPrepare",
      },
      {
        title: "Modèle de reporting trimestriel",
        purpose: "Format normalisé de revue trimestrielle",
        status: "toPrepare",
      },
      {
        title: "Index de la Data Room",
        purpose: "Catalogue du contenu de la Data Room contrôlée",
        status: "controlled",
      },
      {
        title: "Mémo d'approbation du conseil",
        purpose: "Autorisation interne de la transaction",
        status: "toPrepare",
      },
      {
        title: "Fiche Q&R investisseur",
        purpose: "Réponses préparées aux questions anticipées du partenaire",
        status: "toPrepare",
      },
      {
        title: "Déclaration d'offre officielle courte",
        purpose: "Langage de positionnement externe approuvé",
        status: "draft",
      },
    ],
  },
  final: {
    eyebrow: "Position exécutive",
    statement:
      "« ATLAS ne vend pas l'actif et ne transfère pas le contrôle. La structure proposée est une couche disciplinée de partenariat financier marocain de 10%, par une augmentation de capital dans Isseksi ProjectCo. La contribution de USD 3.6M est versée en trois tranches transparentes et dédiée à la phase d'expansion actuelle, tandis qu'Atlas conserve le contrôle de la licence et qu'Akanil conserve la technologie et l'architecture des données. »",
    actions: ["Préparer la LOI", "Ouvrir la Data Room", "Générer le dossier de réunion"],
  },
  footer: {
    left: "ATLAS Isseksi ProjectCo — Architecture de capital v1.0",
    right: "Confidentiel — Diffusion contrôlée uniquement",
  },
};

const ar: TranslationSet = {
  logoAlt: "شعار ATLAS ISSEKSI — Copper Ecosystem",
  header: {
    confidential: "سري — توزيع مضبوط",
    nav: [
      { id: "structure", label: "الهيكل" },
      { id: "tranches", label: "الشرائح" },
      { id: "use-of-funds", label: "استخدام الأموال" },
      { id: "governance", label: "الحوكمة" },
      { id: "process", label: "المسار" },
      { id: "documents", label: "المستندات" },
    ],
  },
  hero: {
    eyebrow: "نافذة معاملة سرية",
    title: "ATLAS Isseksi ProjectCo",
    subtitle: "نافذة دخول الشريك المالي المغربي",
    tagline: "زيادة رأس مال داخل ProjectCo | USD 3.6M | دخول أقلية بنسبة 10% | 3 شرائح",
    text: "تفتح ATLAS طبقة محدودة لشريك مالي مغربي من خلال زيادة رأس مال داخل Isseksi ProjectCo. صُمم الهيكل لمساهمة قدرها USD 3.6M مقابل حصة تصل إلى 10% من ProjectCo، تُدفع على ثلاث شرائح متدرجة وتُخصص لمرحلة التوسع الحالية. يحصل الشريك على حقوق مراجعة ربع سنوية وأولوية المشاركة في الجولات المستقبلية، بينما تحتفظ Atlas بالسيطرة على الرخصة وتحتفظ Akanil بالتقنية وهندسة البيانات.",
    actions: [
      { label: "عرض الهيكل", href: "#structure" },
      { label: "مراجعة الشرائح", href: "#tranches" },
      { label: "حقوق الحوكمة", href: "#governance" },
      { label: "مركز المستندات", href: "#documents" },
    ],
    stats: [
      { value: 3.6, decimals: 1, prefix: "USD ", suffix: "M", label: "إجمالي المساهمة الرأسمالية" },
      { value: 10, decimals: 0, prefix: "", suffix: "%", label: "الحد الأقصى للحصة المعترف بها" },
      { value: 3, decimals: 0, prefix: "", suffix: "", label: "شرائح متدرجة" },
      { value: 90, decimals: 0, prefix: "", suffix: "%", label: "حصة الراعي المحتفظ بها" },
    ],
  },
  snapshot: {
    eyebrow: "القسم 01",
    title: "لمحة عن المعاملة",
    intro: "هيكل رأس المال المغلق، معبَّرًا عنه بمصطلحات المعاملة.",
    rows: [
      { field: "نوع المعاملة", value: "زيادة رأس مال داخل ProjectCo" },
      { field: "أداة الدخول", value: "Isseksi ProjectCo / SPV" },
      { field: "نوع الشريك", value: "شريك مالي مغربي ذو فهم صناعي" },
      { field: "إجمالي المساهمة", value: "USD 3.6M" },
      { field: "الحد الأقصى للحصة", value: "10%" },
      { field: "حصة الراعي المحتفظ بها", value: "90%" },
      { field: "طريقة الدفع", value: "3 شرائح متدرجة" },
      { field: "المتابعة", value: "مراجعة ربع سنوية كل 3 أشهر" },
      { field: "الجولات المستقبلية", value: "حق أولوية المشاركة" },
      { field: "ملكية الرخصة", value: "غير منقولة" },
      { field: "ملكية التقنية", value: "غير منقولة" },
      { field: "الوصول إلى البيانات", value: "غرفة بيانات (Data Room) مضبوطة" },
    ],
  },
  why: {
    eyebrow: "القسم 02",
    title: "لماذا توجد هذه الطبقة",
    intro: "المنطق الاستراتيجي وراء دخول محدود لشريك مالي بحصة أقلية.",
    cards: [
      {
        title: "سيولة التوسع",
        body: "رأس مال مخصص لمرحلة التوسع الحالية لمشروع Isseksi.",
      },
      {
        title: "انضباط ProjectCo",
        body: "يدخل رأس المال في أداة مخصصة، لا في جيوب المؤسسين.",
      },
      {
        title: "منطق الشريك الأقلية",
        body: "نسبة 10% تخلق توافقًا دون نقل السيطرة.",
      },
      {
        title: "شفافية التنفيذ",
        body: "ثلاث شرائح ومراجعة ربع سنوية تخلقان مساءلة واضحة.",
      },
      {
        title: "الأصول المحمية",
        body: "تبقى الرخصة والتقنية والسيطرة التشغيلية والبيانات الحساسة محمية.",
      },
    ],
  },
  tranches: {
    eyebrow: "القسم 03",
    title: "خطة رأس المال على ثلاث شرائح",
    intro: "تُوزَّع USD 3.6M عبر بروتوكول دفع متدرج ومشروط مع اعتراف تدريجي بالحصة.",
    stepperAria: "اختيار الشريحة",
    purposeLabel: "الغرض",
    conditionsLabel: "شروط الإفراج",
    equityLabel: "الحصة المعترف بها",
    cumulativeLabel: "التراكمي",
    items: [
      {
        name: "الشريحة 1",
        amount: "USD 1.2M",
        equity: "3.33%",
        cumulativeEquity: "3.33%",
        purpose: [
          "تفعيل ProjectCo",
          "إعداد الحوكمة",
          "الجاهزية التقنية الأولية",
          "التخطيط الأولي للمشتريات",
        ],
        releaseConditions: [
          "اتفاقية مساهمين موقعة",
          "حساب ProjectCo",
          "استخدام أموال معتمد",
          "بروتوكول حوكمة أولي",
        ],
      },
      {
        name: "الشريحة 2",
        amount: "USD 1.2M",
        equity: "3.33% إضافية",
        cumulativeEquity: "6.66%",
        purpose: [
          "شراء / تطوير المحطة المتنقلة",
          "تجهيز المقالع",
          "الإعداد التشغيلي",
        ],
        releaseConditions: [
          "تقرير عن استخدام الشريحة 1",
          "تقرير التنفيذ التقني",
          "خطة مشتريات ومقالع معتمدة",
        ],
      },
      {
        name: "الشريحة 3",
        amount: "USD 1.2M",
        equity: "3.34% إضافية",
        cumulativeEquity: "10.00%",
        purpose: [
          "التصعيد التشغيلي",
          "رأس المال العامل",
          "الجاهزية التشغيلية",
          "توسيع الإنتاج",
        ],
        releaseConditions: [
          "تقرير الجاهزية التشغيلية",
          "المراجعة الربع سنوية",
          "ميزانية محدَّثة",
          "موافقة ProjectCo",
        ],
      },
    ],
    total: {
      label: "الإجمالي:",
      amount: "USD 3.6M",
      arrow: "←",
      result: "10%",
      suffix: "معترف بها بعد سداد كامل المبلغ",
    },
  },
  useOfFunds: {
    eyebrow: "القسم 04",
    title: "استخدام الأموال",
    intro: "تُخصَّص مساهمة USD 3.6M حصريًا لمرحلة التوسع الحالية لمشروع Isseksi.",
    headers: { category: "الفئة", percent: "%", amount: "المبلغ" },
    totalLabel: "الإجمالي",
    totalAmount: "USD 3.6M",
    items: [
      { category: "محطة المعالجة المتنقلة", allocation: 30, amount: "USD 1.08M" },
      { category: "تجهيز المقالع", allocation: 15, amount: "USD 540K" },
      { category: "المعدات ومناولة المواد", allocation: 15, amount: "USD 540K" },
      { category: "رأس المال العامل", allocation: 15, amount: "USD 540K" },
      { category: "الفريق التقني وضبط الجودة (QA/QC)", allocation: 8, amount: "USD 288K" },
      { category: "المياه والمعايير البيئية (ESG) والمتابعة", allocation: 7, amount: "USD 252K" },
      { category: "التتبع الرقمي وغرفة البيانات (Data Room)", allocation: 5, amount: "USD 180K" },
      { category: "التكاليف القانونية والحوكمة وتكاليف المعاملة", allocation: 5, amount: "USD 180K" },
    ],
  },
  protection: {
    eyebrow: "القسم 05",
    title: "الهيكل المحمي",
    intro: "يحصل الشريك المالي على الحقوق الاقتصادية في ProjectCo — لا على الأصول الاستراتيجية المحمية.",
    receivesTitle: "ما يحصل عليه الشريك",
    protectedTitle: "محمي / غير منقول",
    receives: [
      "حصة تصل إلى 10% في ProjectCo",
      "حقوق مراجعة ربع سنوية",
      "رؤية على الميزانية",
      "وصول مضبوط إلى غرفة البيانات (Data Room)",
      "أولوية المشاركة في الجولات المستقبلية",
    ],
    protectedItems: [
      "ملكية رخصة التعدين",
      "ملكية التقنية",
      "السيطرة التشغيلية اليومية",
      "الوصول غير المقيد إلى البيانات",
      "حقوق التصريف (Offtake) الحصرية",
      "حصرية التمويل المستقبلي",
    ],
    footnote:
      "تبقى مكانة رخصة Atlas Mining، وتقنية Akanil / HYRION، والبيانات الجيولوجية والاستراتيجية، والسيطرة التشغيلية، ومركز الراعي، واستراتيجية رأس المال المستقبلية خارج نطاق المعاملة.",
  },
  governance: {
    eyebrow: "القسم 06",
    title: "الحوكمة والمتابعة",
    intro: "حقوق مراجعة ربع سنوية مع رؤية محددة بوضوح للشريك.",
    headers: {
      area: "مجال الحوكمة",
      partner: "الشريك المالي",
      sponsor: "ProjectCo / الراعي",
      status: "حالة الحماية",
    },
    rows: [
      {
        area: "المراجعة الربع سنوية",
        partner: "نعم — كل 3 أشهر",
        sponsor: "يُعِدّ التقارير الربع سنوية",
        status: "حق متابعة للشريك",
        protectedRow: false,
      },
      {
        area: "رؤية الميزانية",
        partner: "نعم — ضمن نطاق ProjectCo فقط",
        sponsor: "يتولى إعداد الميزانية",
        status: "محدودة بـ ProjectCo",
        protectedRow: false,
      },
      {
        area: "رؤية تدقيق ProjectCo",
        partner: "نعم — حسابات ProjectCo فقط",
        sponsor: "يمسك الحسابات",
        status: "محدودة بـ ProjectCo",
        protectedRow: false,
      },
      {
        area: "المسائل المحجوزة",
        partner: "إخطار / موافقة عند الانحرافات الجوهرية",
        sponsor: "يقود التنفيذ الاعتيادي",
        status: "جدول محدد",
        protectedRow: false,
      },
      {
        area: "الوصول إلى غرفة البيانات",
        partner: "مضبوط وقائم على الأذونات",
        sponsor: "يدير الوصول",
        status: "مضبوط",
        protectedRow: false,
      },
      {
        area: "أولوية الجولات المستقبلية",
        partner: "حق أولوية المشاركة",
        sponsor: "يحتفظ باستراتيجية رأس المال",
        status: "أولوية غير حصرية",
        protectedRow: false,
      },
      {
        area: "السيطرة التشغيلية",
        partner: "لا",
        sponsor: "نعم — سيطرة تشغيلية كاملة",
        status: "محمية",
        protectedRow: true,
      },
      {
        area: "السيطرة على الرخصة",
        partner: "لا",
        sponsor: "مركز Atlas Mining",
        status: "محمية — غير منقولة",
        protectedRow: true,
      },
      {
        area: "ملكية التقنية",
        partner: "لا",
        sponsor: "Akanil / HYRION",
        status: "محمية — غير منقولة",
        protectedRow: true,
      },
    ],
    footnote:
      "للشريك حق المراجعة وطرح الأسئلة وطلب الإيضاحات خلال الدورة الربع سنوية. وتبقى السيطرة التشغيلية اليومية بيد ProjectCo والراعي في جميع الأوقات.",
  },
  reserved: {
    eyebrow: "القسم 07",
    title: "المسائل المحجوزة",
    intro: "انحرافات جوهرية تتطلب إخطار الشريك أو موافقته، وفق ما يُحدَّد نهائيًا في اتفاقية المساهمين.",
    items: [
      {
        title: "تغيير غرض ProjectCo",
        note: "يخضع أي تعديل في الغرض المؤسسي لـ ProjectCo لجدول المسائل المحجوزة في اتفاقية المساهمين.",
      },
      {
        title: "استخدام الأموال خارج ميزانية التوسع المعتمدة",
        note: "يخضع أي توزيع لرأس المال خارج ميزانية التوسع المعتمدة للمعالجة المحددة في اتفاقية المساهمين.",
      },
      {
        title: "ديون جديدة تتجاوز الحد المتفق عليه",
        note: "تندرج المديونية فوق الحد المتفق عليه ضمن إطار المسائل المحجوزة.",
      },
      {
        title: "بيع أو رهن أصول ProjectCo الأساسية",
        note: "يُعد التصرف في أصول ProjectCo الأساسية أو رهنها مسألة محجوزة.",
      },
      {
        title: "تغيير جوهري في استراتيجية المحطة المتنقلة",
        note: "يخضع أي انحراف جوهري عن استراتيجية المحطة المتنقلة لجدول المسائل المحجوزة.",
      },
      {
        title: "إصدار أسهم جديدة يؤثر على تخفيف حصة المستثمر",
        note: "يخضع إصدار الأسهم المؤثر على تخفيف حصة الشريك للإطار المساهمي المتفق عليه.",
      },
      {
        title: "معاملات جوهرية مع أطراف ذات علاقة",
        note: "تخضع المعاملات الجوهرية مع الأطراف ذات العلاقة للمراجعة ضمن جدول المسائل المحجوزة.",
      },
      {
        title: "اتفاقية تصريف حصرية تؤثر على اقتصاديات ProjectCo",
        note: "يُعد أي ترتيب تصريف (Offtake) حصري يؤثر على اقتصاديات ProjectCo مسألة محجوزة.",
      },
      {
        title: "نقل حقوق التشغيل أو الحقوق التعاقدية الجوهرية",
        note: "يندرج نقل حقوق التشغيل أو الحقوق التعاقدية الجوهرية ضمن إطار المسائل المحجوزة.",
      },
      {
        title: "تغيير هيكل حوكمة ProjectCo",
        note: "تخضع التغييرات على هيكل الحوكمة المتفق عليه لجدول المسائل المحجوزة.",
      },
    ],
  },
  process: {
    eyebrow: "القسم 08",
    title: "مسار الاجتماع",
    intro: "مسار مضبوط ومتسلسل من أول تواصل حتى إقفال الشريحة 1.",
    steps: [
      { step: "اتفاقية عدم الإفصاح (NDA)", detail: "إطار سرية قبل أي إفصاح" },
      { step: "غرفة بيانات محدودة", detail: "وصول مضبوط وقائم على الأذونات للمستندات" },
      { step: "خطاب نوايا غير ملزم (LOI)", detail: "توافق على الهيكل والنية" },
      { step: "الفحص النافي للجهالة", detail: "مراجعة محددة النطاق ضمن المحيط المضبوط" },
      { step: "شروط استرشادية (Term Sheet)", detail: "الشروط التجارية والحوكمية الرئيسية" },
      { step: "وثائق ProjectCo", detail: "اتفاقيات الاكتتاب والمساهمين" },
      { step: "إقفال الشريحة 1", detail: "أول دفعة USD 1.2M والاعتراف بحصة 3.33%" },
    ],
  },
  documents: {
    eyebrow: "القسم 09",
    title: "مركز المستندات المضبوط",
    intro: "مجموعة وثائق المعاملة. التوزيع مضبوط وقائم على الأذونات.",
    statusLabels: {
      toPrepare: "للإعداد",
      draft: "مسودة",
      controlled: "مضبوط",
    },
    previewLabel: "معاينة ←",
    items: [
      {
        title: "مذكرة العرض التنفيذية",
        purpose: "بيان موجز لهيكل زيادة رأس المال",
        status: "draft",
      },
      {
        title: "حزمة الاجتماع من ست صفحات",
        purpose: "مجموعة العرض الأساسية لاجتماع الشريك",
        status: "toPrepare",
      },
      {
        title: "خطاب نوايا غير ملزم (LOI)",
        purpose: "خطاب نوايا يوثق التوافق المتبادل",
        status: "toPrepare",
      },
      {
        title: "شروط استرشادية (Term Sheet)",
        purpose: "الشروط الرئيسية لدخول ProjectCo",
        status: "toPrepare",
      },
      {
        title: "جدول استخدام الأموال",
        purpose: "التخصيص المقيد لمساهمة USD 3.6M",
        status: "draft",
      },
      {
        title: "بروتوكول الدفع على ثلاث شرائح",
        purpose: "آليات الدفع المتدرج والاعتراف بالحصة",
        status: "draft",
      },
      {
        title: "مذكرة حوكمة ProjectCo",
        purpose: "مخطط الحوكمة والمتابعة والمسائل المحجوزة",
        status: "toPrepare",
      },
      {
        title: "نموذج التقارير الربع سنوية",
        purpose: "صيغة موحدة للمراجعة الربع سنوية",
        status: "toPrepare",
      },
      {
        title: "فهرس غرفة البيانات",
        purpose: "قائمة محتويات غرفة البيانات المضبوطة",
        status: "controlled",
      },
      {
        title: "مذكرة موافقة مجلس الإدارة",
        purpose: "التفويض الداخلي للمعاملة",
        status: "toPrepare",
      },
      {
        title: "ورقة أسئلة وأجوبة المستثمر",
        purpose: "إجابات معدة لأسئلة الشريك المتوقعة",
        status: "toPrepare",
      },
      {
        title: "بيان العرض الرسمي الموجز",
        purpose: "صيغة التموضع الخارجي المعتمدة",
        status: "draft",
      },
    ],
  },
  final: {
    eyebrow: "الموقف التنفيذي",
    statement:
      "«لا تبيع ATLAS الأصل ولا تنقل السيطرة. الهيكل المقترح هو طبقة منضبطة لشريك مالي مغربي بنسبة 10% من خلال زيادة رأس مال داخل Isseksi ProjectCo. تُدفع مساهمة USD 3.6M على ثلاث شرائح شفافة وتُخصص لمرحلة التوسع الحالية، بينما تحتفظ Atlas بالسيطرة على الرخصة وتحتفظ Akanil بالتقنية وهندسة البيانات.»",
    actions: ["إعداد خطاب النوايا", "فتح غرفة البيانات", "إنشاء حزمة الاجتماع"],
  },
  footer: {
    left: "ATLAS Isseksi ProjectCo — هيكل رأس المال v1.0",
    right: "سري — للتوزيع المضبوط فقط",
  },
};

export const translations: Record<Language, TranslationSet> = { en, fr, ar };
