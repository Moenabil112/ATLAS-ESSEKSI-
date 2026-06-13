export type Language = "en" | "ar" | "fr";

export type DealSummaryItem = {
  key: string;
  labelKey: string;
  value: string;
};

export type TableRow = {
  key: string;
  labelKey: string;
  valueKey?: string;
  value?: string;
};

export type TrancheItem = {
  id: "tranche1" | "tranche2" | "tranche3";
  titleKey: string;
  amount: string;
  equity: string;
  labelKey: string;
  purposeKey: string;
  conditionsKey: string;
};

export type FundsItem = {
  id: string;
  categoryKey: string;
  purposeKey: string;
  amount: string;
  allocation: number;
  allocationLabel: string;
  relatedTranche: string;
};

export type ProtectionItem = {
  id: string;
  labelKey: string;
};

export type GovernanceRow = {
  id: string;
  areaKey: string;
  partnerKey: string;
  sponsorKey: string;
  statusKey: string;
};

export type NextStepItem = {
  id: string;
  labelKey: string;
};

export const dealIdentity = {
  productName: "ATLAS Isseksi ProjectCo",
  transactionType: "Capital Increase into ProjectCo",
  capital: "USD 3.6M",
  stake: "10%",
  vehicle: "ProjectCo",
  fullVehicle: "Isseksi ProjectCo / SPV",
  payments: "3 Tranches",
  monitoring: "Quarterly",
  sponsorRetained: "90%",
  geojsonUrl: "/data/atlas-licenses.geojson",
  isseksiPdfUrl: "/licenses/isseksi-exploitation-license.pdf"
};

export const fixedDealSummary: DealSummaryItem[] = [
  { key: "capital", labelKey: "summary.capital", value: "USD 3.6M" },
  { key: "stake", labelKey: "summary.stake", value: "10%" },
  { key: "vehicle", labelKey: "summary.vehicle", value: "ProjectCo" },
  { key: "structure", labelKey: "summary.structure", value: "Capital Increase" },
  { key: "payments", labelKey: "summary.payments", value: "3 Tranches" },
  { key: "monitoring", labelKey: "summary.monitoring", value: "Quarterly" },
  { key: "sponsorRetained", labelKey: "summary.sponsorRetained", value: "90%" }
];

export const capitalStructureRows: TableRow[] = [
  {
    key: "transaction",
    labelKey: "capital.field.transaction",
    valueKey: "capital.value.transaction"
  },
  {
    key: "vehicle",
    labelKey: "capital.field.vehicle",
    valueKey: "capital.value.vehicle"
  },
  {
    key: "partner",
    labelKey: "capital.field.partner",
    valueKey: "capital.value.partner"
  },
  {
    key: "contribution",
    labelKey: "capital.field.contribution",
    value: "USD 3.6M"
  },
  {
    key: "stake",
    labelKey: "capital.field.stake",
    valueKey: "capital.value.stake"
  },
  {
    key: "sponsorRetained",
    labelKey: "capital.field.sponsorRetained",
    value: "90%"
  },
  {
    key: "paymentPath",
    labelKey: "capital.field.paymentPath",
    valueKey: "capital.value.paymentPath"
  },
  {
    key: "monitoring",
    labelKey: "capital.field.monitoring",
    valueKey: "capital.value.monitoring"
  },
  {
    key: "futureRounds",
    labelKey: "capital.field.futureRounds",
    valueKey: "capital.value.futureRounds"
  },
  {
    key: "license",
    labelKey: "capital.field.license",
    valueKey: "capital.value.license"
  },
  {
    key: "technology",
    labelKey: "capital.field.technology",
    valueKey: "capital.value.technology"
  },
  {
    key: "control",
    labelKey: "capital.field.control",
    valueKey: "capital.value.control"
  }
];

export const valuationRows: TableRow[] = [
  {
    key: "investorContribution",
    labelKey: "valuation.investorContribution",
    value: "USD 3.6M"
  },
  {
    key: "equity",
    labelKey: "valuation.equity",
    value: "10%"
  },
  {
    key: "postMoney",
    labelKey: "valuation.postMoney",
    value: "USD 36.0M"
  },
  {
    key: "preMoney",
    labelKey: "valuation.preMoney",
    value: "USD 32.4M"
  }
];

export const tranches: TrancheItem[] = [
  {
    id: "tranche1",
    titleKey: "tranche1.title",
    amount: "USD 1.2M",
    equity: "3.33%",
    labelKey: "tranche1.label",
    purposeKey: "tranche1.purpose",
    conditionsKey: "tranche1.conditions"
  },
  {
    id: "tranche2",
    titleKey: "tranche2.title",
    amount: "USD 1.2M",
    equity: "+3.33%",
    labelKey: "tranche2.label",
    purposeKey: "tranche2.purpose",
    conditionsKey: "tranche2.conditions"
  },
  {
    id: "tranche3",
    titleKey: "tranche3.title",
    amount: "USD 1.2M",
    equity: "+3.34%",
    labelKey: "tranche3.label",
    purposeKey: "tranche3.purpose",
    conditionsKey: "tranche3.conditions"
  }
];

export const useOfFunds: FundsItem[] = [
  {
    id: "mobileStation",
    categoryKey: "funds.mobileStation",
    purposeKey: "purpose.mobileStation",
    amount: "USD 1.08M",
    allocation: 30,
    allocationLabel: "30%",
    relatedTranche: "Tranche 1 + 2"
  },
  {
    id: "quarryPreparation",
    categoryKey: "funds.quarryPreparation",
    purposeKey: "purpose.quarryPreparation",
    amount: "USD 540K",
    allocation: 15,
    allocationLabel: "15%",
    relatedTranche: "Tranche 2"
  },
  {
    id: "equipment",
    categoryKey: "funds.equipment",
    purposeKey: "purpose.equipment",
    amount: "USD 540K",
    allocation: 15,
    allocationLabel: "15%",
    relatedTranche: "Tranche 2"
  },
  {
    id: "workingCapital",
    categoryKey: "funds.workingCapital",
    purposeKey: "purpose.workingCapital",
    amount: "USD 540K",
    allocation: 15,
    allocationLabel: "15%",
    relatedTranche: "Tranche 3"
  },
  {
    id: "qaqc",
    categoryKey: "funds.qaqc",
    purposeKey: "purpose.qaqc",
    amount: "USD 288K",
    allocation: 8,
    allocationLabel: "8%",
    relatedTranche: "Tranche 1 + 2"
  },
  {
    id: "esg",
    categoryKey: "funds.esg",
    purposeKey: "purpose.esg",
    amount: "USD 252K",
    allocation: 7,
    allocationLabel: "7%",
    relatedTranche: "Tranche 2 + 3"
  },
  {
    id: "digital",
    categoryKey: "funds.digital",
    purposeKey: "purpose.digital",
    amount: "USD 180K",
    allocation: 5,
    allocationLabel: "5%",
    relatedTranche: "Tranche 1"
  },
  {
    id: "legal",
    categoryKey: "funds.legal",
    purposeKey: "purpose.legal",
    amount: "USD 180K",
    allocation: 5,
    allocationLabel: "5%",
    relatedTranche: "Tranche 1"
  }
];

export const partnerReceives: ProtectionItem[] = [
  { id: "equity", labelKey: "receives.equity" },
  { id: "monitoring", labelKey: "receives.monitoring" },
  { id: "budget", labelKey: "receives.budget" },
  { id: "dataRoom", labelKey: "receives.dataRoom" },
  { id: "futureRounds", labelKey: "receives.futureRounds" },
  { id: "recognizedEquity", labelKey: "receives.recognizedEquity" }
];

export const protectedAssets: ProtectionItem[] = [
  { id: "license", labelKey: "protected.license" },
  { id: "technology", labelKey: "protected.technology" },
  { id: "operations", labelKey: "protected.operations" },
  { id: "data", labelKey: "protected.data" },
  { id: "commercialRoutes", labelKey: "protected.commercialRoutes" },
  { id: "futureStrategy", labelKey: "protected.futureStrategy" },
  { id: "sponsor", labelKey: "protected.sponsor" }
];

export const governanceRows: GovernanceRow[] = [
  {
    id: "quarterly",
    areaKey: "gov.quarterly.area",
    partnerKey: "gov.quarterly.partner",
    sponsorKey: "gov.quarterly.sponsor",
    statusKey: "gov.quarterly.status"
  },
  {
    id: "budget",
    areaKey: "gov.budget.area",
    partnerKey: "gov.budget.partner",
    sponsorKey: "gov.budget.sponsor",
    statusKey: "gov.budget.status"
  },
  {
    id: "audit",
    areaKey: "gov.audit.area",
    partnerKey: "gov.audit.partner",
    sponsorKey: "gov.audit.sponsor",
    statusKey: "gov.audit.status"
  },
  {
    id: "dataRoom",
    areaKey: "gov.dataRoom.area",
    partnerKey: "gov.dataRoom.partner",
    sponsorKey: "gov.dataRoom.sponsor",
    statusKey: "gov.dataRoom.status"
  },
  {
    id: "reserved",
    areaKey: "gov.reserved.area",
    partnerKey: "gov.reserved.partner",
    sponsorKey: "gov.reserved.sponsor",
    statusKey: "gov.reserved.status"
  },
  {
    id: "future",
    areaKey: "gov.future.area",
    partnerKey: "gov.future.partner",
    sponsorKey: "gov.future.sponsor",
    statusKey: "gov.future.status"
  },
  {
    id: "license",
    areaKey: "gov.license.area",
    partnerKey: "gov.license.partner",
    sponsorKey: "gov.license.sponsor",
    statusKey: "gov.license.status"
  },
  {
    id: "technology",
    areaKey: "gov.technology.area",
    partnerKey: "gov.technology.partner",
    sponsorKey: "gov.technology.sponsor",
    statusKey: "gov.technology.status"
  }
];

export const nextSteps: NextStepItem[] = [
  { id: "nda", labelKey: "step.nda" },
  { id: "dataRoom", labelKey: "step.dataRoom" },
  { id: "loi", labelKey: "step.loi" },
  { id: "dueDiligence", labelKey: "step.dueDiligence" },
  { id: "termSheet", labelKey: "step.termSheet" },
  { id: "projectCoDocs", labelKey: "step.projectCoDocs" },
  { id: "tranche1", labelKey: "step.tranche1" }
];
