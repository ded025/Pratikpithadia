import { useEffect, useState } from "react";

const TerminalHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const tickerItems = [
    { label: "PARTNER.ECO", value: "▲ 1500+", positive: true },
    { label: "FY.REVENUE", value: "▲ 18%", positive: true },
    { label: "CONVERSION", value: "▲ 60%", positive: true },
    { label: "FD.MONTHLY", value: "▲ ₹20L+", positive: true },
    { label: "DEMAT.ACCTS", value: "▲ 30+/QTR", positive: true },
    { label: "DATA.ACCURACY", value: "▲ 99%", positive: true },
    { label: "ESCALATIONS", value: "0", positive: true },
    { label: "MARKETS.EXP", value: "5+ YRS", positive: true },
  ];

  return (
    <section className="min-h-screen relative grid-bg scan-line flex flex-col">
      {/* Ticker Bar */}
      <div className="border-b border-border bg-muted/50 overflow-hidden py-2">
        <div className="flex gap-8 ticker-scroll whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex gap-2 text-xs">
              <span className="text-muted-foreground">{item.label}</span>
              <span className={item.positive ? "text-terminal-green" : "text-terminal-red"}>
                {item.value}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Terminal */}
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className={`max-w-4xl w-full transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          <div className="terminal-card">
            {/* Title Bar */}
            <div className="flex items-center justify-between border-b border-border pb-3 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-amber"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              </div>
              <span className="text-xs text-muted-foreground">TERMINAL.P v2.0</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-terminal-green pulse-indicator"></div>
                <span className="text-xs text-terminal-green">LIVE</span>
              </div>
            </div>

            {/* ASCII Art Header */}
            <div className="text-terminal-green terminal-glow text-center mb-8">
              <pre className="text-[10px] sm:text-xs md:text-sm leading-tight font-mono">
{`╔══════════════════════════════════════════════════╗
║          TERMINAL.P — TRADING CONSOLE            ║
╚══════════════════════════════════════════════════╝`}
              </pre>
            </div>

            {/* Operator Info */}
            <div className="space-y-3 font-mono text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span className="text-terminal-cyan">OPERATOR:</span>
                <span className="text-foreground font-semibold">Pratik Kumar Pithadia</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span className="text-terminal-cyan">STATUS:</span>
                <span className="text-terminal-green">ACTIVE IN MARKETS SINCE 2019</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span className="text-terminal-cyan">LOCATION:</span>
                <span className="text-foreground">Bangalore, India</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span className="text-terminal-cyan">MARKET EXPOSURE:</span>
                <span className="text-terminal-amber">EQUITIES</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-terminal-amber">DERIVATIVES</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-terminal-amber">FOREX</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-terminal-amber">CRYPTO</span>
              </div>

              <div className="border-t border-border my-4"></div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">&gt;</span>
                  <span className="text-terminal-cyan">PROFILE:</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-4">
                  Detail-oriented finance and fintech professional with hands-on experience in partner onboarding, B2B relationship management, and data-driven decision making. Skilled in analyzing large datasets, identifying trends, and turning insights into actionable strategies.
                </p>
              </div>

              <div className="border-t border-border my-4"></div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">&gt;</span>
                  <span className="text-terminal-cyan">SPECIALIZATION:</span>
                </div>
                {[
                  "Partner Ecosystems & B2B Growth",
                  "Data Analytics & Reporting",
                  "Trading — Equity, Derivatives, Forex, Crypto",
                  "Content Creation & Digital Marketing",
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 pl-4">
                    <span className="text-terminal-green">•</span>
                    <span className="text-foreground">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border my-4"></div>

              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">&gt;</span>
                <span className="text-terminal-cyan">SYSTEM STATUS:</span>
                <span className="text-terminal-green terminal-glow font-bold">
                  ACTIVE<span className="cursor-blink">_</span>
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-muted-foreground">
            <span className="text-terminal-dim">[ SCROLL TO EXPLORE PORTFOLIO DATA ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;
