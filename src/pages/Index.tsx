import TerminalHero from "@/components/TerminalHero";
import PortfolioPerformance from "@/components/PortfolioPerformance";
import Strategies from "@/components/Strategies";
import TradeHistory from "@/components/TradeHistory";
import MarketSignals from "@/components/MarketSignals";
import AuditLog from "@/components/AuditLog";
import TerminalFooter from "@/components/TerminalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TerminalHero />
      <PortfolioPerformance />
      <Strategies />
      <TradeHistory />
      <MarketSignals />
      <AuditLog />
      <TerminalFooter />
    </div>
  );
};

export default Index;
