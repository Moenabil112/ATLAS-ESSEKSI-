export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "structure", label: "Structure" },
  { id: "tranches", label: "Tranches" },
  { id: "use-of-funds", label: "Use of Funds" },
  { id: "governance", label: "Governance" },
  { id: "process", label: "Process" },
  { id: "documents", label: "Documents" },
];

export interface HeroStat {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: 3.6, decimals: 1, prefix: "USD ", suffix: "M", label: "Total Capital Contribution" },
  { value: 10, decimals: 0, prefix: "", suffix: "%", label: "Maximum Recognized Stake" },
  { value: 3, decimals: 0, prefix: "", suffix: "", label: "Staged Tranches" },
  { value: 90, decimals: 0, prefix: "", suffix: "%", label: "Sponsor Retained Stake" },
];

export interface SnapshotRow {
  field: string;
  value: string;
}

export const snapshotRows: SnapshotRow[] = [
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
];

export interface WhyCard {
  title: string;
  body: string;
}

export const whyCards: WhyCard[] = [
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
];

export interface Tranche {
  name: string;
  amount: string;
  equity: string;
  cumulativeEquity: string;
  purpose: string[];
  releaseConditions: string[];
}

export const tranches: Tranche[] = [
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
    purpose: [
      "Ramp-up",
      "Working capital",
      "Operational readiness",
      "Production scale-up",
    ],
    releaseConditions: [
      "Operational readiness report",
      "Quarterly review",
      "Updated budget",
      "ProjectCo approval",
    ],
  },
];

export interface FundAllocation {
  category: string;
  allocation: number;
  amount: string;
}

export const useOfFunds: FundAllocation[] = [
  { category: "Mobile processing station", allocation: 30, amount: "USD 1.08M" },
  { category: "Quarry preparation", allocation: 15, amount: "USD 540K" },
  { category: "Equipment and material handling", allocation: 15, amount: "USD 540K" },
  { category: "Working capital", allocation: 15, amount: "USD 540K" },
  { category: "Technical team and QA/QC", allocation: 8, amount: "USD 288K" },
  { category: "Water, ESG, and monitoring", allocation: 7, amount: "USD 252K" },
  { category: "Digital tracking and Data Room", allocation: 5, amount: "USD 180K" },
  { category: "Legal, governance, and transaction costs", allocation: 5, amount: "USD 180K" },
];

export const partnerReceives: string[] = [
  "Up to 10% in ProjectCo",
  "Quarterly monitoring rights",
  "Budget visibility",
  "Controlled Data Room access",
  "Priority participation in future rounds",
];

export const protectedItems: string[] = [
  "Mining license ownership",
  "Technology ownership",
  "Day-to-day operational control",
  "Unrestricted data access",
  "Exclusive offtake rights",
  "Future financing exclusivity",
];

export interface GovernanceRow {
  area: string;
  partner: string;
  sponsor: string;
  status: string;
  protectedRow: boolean;
}

export const governanceRows: GovernanceRow[] = [
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
];

export interface ReservedMatter {
  title: string;
  note: string;
}

export const reservedMatters: ReservedMatter[] = [
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
];

export interface ProcessStep {
  step: string;
  detail: string;
}

export const processSteps: ProcessStep[] = [
  { step: "NDA", detail: "Confidentiality framework before any disclosure" },
  { step: "Limited Data Room", detail: "Controlled, permission-based document access" },
  { step: "Non-Binding LOI", detail: "Alignment on structure and intent" },
  { step: "Due Diligence", detail: "Scoped review within the controlled perimeter" },
  { step: "Indicative Term Sheet", detail: "Key commercial and governance terms" },
  { step: "ProjectCo Documentation", detail: "Subscription and shareholder agreements" },
  { step: "Tranche 1 Closing", detail: "First USD 1.2M payment and 3.33% recognition" },
];

export type DocumentStatus = "To Prepare" | "Draft" | "Controlled";

export interface DocumentCard {
  title: string;
  purpose: string;
  status: DocumentStatus;
}

export const documents: DocumentCard[] = [
  {
    title: "Executive Offer Note",
    purpose: "Concise statement of the capital increase structure",
    status: "Draft",
  },
  {
    title: "Six-Page Meeting Pack",
    purpose: "Core presentation set for the partner meeting",
    status: "To Prepare",
  },
  {
    title: "Non-Binding LOI",
    purpose: "Letter of intent recording mutual alignment",
    status: "To Prepare",
  },
  {
    title: "Indicative Term Sheet",
    purpose: "Key terms of the ProjectCo entry",
    status: "To Prepare",
  },
  {
    title: "Use of Funds Schedule",
    purpose: "Ring-fenced allocation of the USD 3.6M contribution",
    status: "Draft",
  },
  {
    title: "Three-Tranche Payment Protocol",
    purpose: "Staged payment and equity recognition mechanics",
    status: "Draft",
  },
  {
    title: "ProjectCo Governance Note",
    purpose: "Governance, monitoring, and reserved matters outline",
    status: "To Prepare",
  },
  {
    title: "Quarterly Reporting Template",
    purpose: "Standardized quarterly review format",
    status: "To Prepare",
  },
  {
    title: "Data Room Index",
    purpose: "Catalogue of controlled Data Room contents",
    status: "Controlled",
  },
  {
    title: "Board Approval Memo",
    purpose: "Internal authorization of the transaction",
    status: "To Prepare",
  },
  {
    title: "Investor Q&A Sheet",
    purpose: "Prepared answers for anticipated partner questions",
    status: "To Prepare",
  },
  {
    title: "Official Short Offer Statement",
    purpose: "Approved external positioning language",
    status: "Draft",
  },
];

export const heroText =
  "ATLAS is opening a limited Moroccan financial partner layer through a capital increase into Isseksi ProjectCo. The structure is designed for a USD 3.6M contribution against up to 10% of ProjectCo, paid in three staged tranches and dedicated to the current expansion phase. The partner receives quarterly monitoring rights and priority participation in future rounds, while Atlas retains license control and Akanil retains technology and data architecture.";

export const finalStatement =
  "ATLAS is not selling the asset or transferring control. The proposed structure is a disciplined 10% Moroccan financial partner layer through a capital increase into Isseksi ProjectCo. The USD 3.6M contribution is paid in three transparent tranches and dedicated to the current expansion phase, while Atlas retains license control and Akanil retains technology and data architecture.";
