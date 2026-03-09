const signals = [
  {
    id: "01",
    title: "Retail Trader Psychology",
    insight: "80% of retail decisions are driven by fear, greed, and herd mentality. Building products that address these behavioral biases — through education, nudges, and smart defaults — creates stickier trading platforms.",
    strength: "STRONG BUY",
  },
  {
    id: "02",
    title: "Broker Growth via Partnerships",
    insight: "The Indian broking industry is shifting from volume-based to value-based growth. Structured partner programs with tier-based incentives, dashboards, and loyalty systems outperform traditional acquisition by 3x.",
    strength: "STRONG BUY",
  },
  {
    id: "03",
    title: "Fintech Adoption in Tier 2/3",
    insight: "Tier-2 and Tier-3 cities are the next frontier for fintech penetration. Vernacular content, simplified UX, trust-building through education, and regional influencer partnerships are key adoption drivers.",
    strength: "BUY",
  },
];

const MarketSignals = () => {
  return (
    <section id="signals" className="px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-terminal-green text-lg">⚡</span>
          <h2 className="font-display text-2xl font-bold text-foreground">MARKET SIGNALS</h2>
        </div>
        <p className="text-xs text-muted-foreground font-mono">// Industry insights and market intelligence</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {signals.map((signal) => (
          <div key={signal.id} className="terminal-card hover:border-terminal-amber/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-terminal-dim">SIGNAL {signal.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded-sm font-bold ${
                signal.strength === "STRONG BUY"
                  ? "bg-terminal-green/10 text-terminal-green"
                  : "bg-terminal-cyan/10 text-terminal-cyan"
              }`}>
                {signal.strength}
              </span>
            </div>
            <h3 className="font-display text-base font-semibold text-terminal-amber mb-3">{signal.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{signal.insight}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSignals;
