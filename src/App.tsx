import { useState } from "react";
import { useTranslation } from "./i18n/useTranslation";
import Header from "./components/Header";
import SidebarNav from "./components/SidebarNav";
import FixedDealSummary from "./components/FixedDealSummary";
import HeroDealSnapshot from "./components/HeroDealSnapshot";
import CapitalStructure from "./components/CapitalStructure";
import TrancheCapitalPath from "./components/TrancheCapitalPath";
import UseOfFundsLedger from "./components/UseOfFundsLedger";
import PartnerProtections from "./components/PartnerProtections";
import GovernanceMatrix from "./components/GovernanceMatrix";
import SupportingEvidenceMap from "./components/SupportingEvidenceMap";
import DocumentCenter from "./components/DocumentCenter";
import NextStep from "./components/NextStep";

export default function App() {
  const { direction, t } = useTranslation();
  const [meetingMode, setMeetingMode] = useState(false);

  return (
    <div className={`app-shell ${meetingMode ? "meeting-mode" : ""}`} dir={direction}>
      <Header
        meetingMode={meetingMode}
        onToggleMeetingMode={() => setMeetingMode((v) => !v)}
      />

      <div className="deal-room-layout">
        <SidebarNav />
        <main className="deal-room-main">
          <HeroDealSnapshot />
          <CapitalStructure />
          <TrancheCapitalPath />
          <UseOfFundsLedger />
          <PartnerProtections />
          <GovernanceMatrix />
          <SupportingEvidenceMap />
          <DocumentCenter />
          <NextStep />
        </main>
        <FixedDealSummary />
      </div>

      <footer className="deal-footer">
        <span>{t("deal.productName")} — Capital Architecture v1.0</span>
        <span className="confidential">{t("header.documentRoom")} · {t("evidence.controlledAccess")}</span>
      </footer>
    </div>
  );
}
