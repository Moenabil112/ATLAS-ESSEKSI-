import Header from "./components/Layout/Header";
import { useTranslation } from "./i18n/LanguageContext";
import Hero from "./components/Sections/Hero";
import TransactionSnapshot from "./components/Sections/TransactionSnapshot";
import WhyLayerExists from "./components/Sections/WhyLayerExists";
import TranchePlan from "./components/Sections/TranchePlan";
import UseOfFunds from "./components/Sections/UseOfFunds";
import SponsorProtection from "./components/Sections/SponsorProtection";
import GovernanceMonitoring from "./components/Sections/GovernanceMonitoring";
import ReservedMatters from "./components/Sections/ReservedMatters";
import MeetingPath from "./components/Sections/MeetingPath";
import DocumentCenter from "./components/Sections/DocumentCenter";
import FinalStatement from "./components/Sections/FinalStatement";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-deep-earth font-body text-ash-white">
      <Header />
      <main>
        <Hero />
        <TransactionSnapshot />
        <WhyLayerExists />
        <TranchePlan />
        <UseOfFunds />
        <SponsorProtection />
        <GovernanceMonitoring />
        <ReservedMatters />
        <MeetingPath />
        <DocumentCenter />
        <FinalStatement />
      </main>
      <footer className="border-t border-copper-fire/20 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-ash-white/45">
            {t.footer.left}
          </p>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-copper-fire/70">
            {t.footer.right}
          </p>
        </div>
      </footer>
    </div>
  );
}
