const portfolioData = [
  {
    asset: "FYERS Securities",
    role: "Sr. Executive | Partner Relations | Marcom",
    period: "Jun 2024–Present",
    highlights: "1500+ partner ecosystem, 18% FY revenue, 60% conversion",
    pnl: "+127%",
    status: "OPEN",
  },
  {
    asset: "ICICI Bank",
    role: "Sr. Relationship Manager | Retail Liabilities",
    period: "Jun 2022–May 2024",
    highlights: "₹20L+ monthly FD sales, 30+ Demat accts/qtr, zero escalations",
    pnl: "+85%",
    status: "CLOSED",
  },
  {
    asset: "Freelancing",
    role: "Video Editor | Designer | Social Media",
    period: "2019–Present",
    highlights: "End-to-end business ops, B2B clients, brand design",
    pnl: "+62%",
    status: "OPEN",
  },
];

const chartBars = [15, 20, 25, 30, 28, 35, 40, 38, 45, 50, 55, 60, 58, 65, 72, 78, 82, 88, 95, 100];

const PortfolioPerformance = () => {
  return (
    <section id="portfolio" className="px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-terminal-green text-lg">📈</span>
          <h2 className="font-display text-2xl font-bold text-foreground">PORTFOLIO PERFORMANCE</h2>
        </div>
        <p className="text-xs text-muted-foreground font-mono">// Career positions displayed as trading PnL</p>
      </div>

      {/* Mini Chart */}
      <div className="terminal-card mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-muted-foreground">CAREER GROWTH INDEX — 2019 TO PRESENT</span>
          <span className="text-xs text-terminal-green">▲ ALL TIME HIGH</span>
        </div>
        <div className="flex items-end gap-1 h-32">
          {chartBars.map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-terminal-green/30 hover:bg-terminal-green/60 transition-colors rounded-sm relative group"
              style={{ height: `${height}%` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden group-hover:block text-[10px] text-terminal-green whitespace-nowrap">
                {height}%
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
          <span>2019</span>
          <span>2021</span>
          <span>2023</span>
          <span>NOW</span>
        </div>
      </div>

      {/* Cards for each position */}
      <div className="space-y-4">
        {portfolioData.map((row, i) => (
          <div key={i} className="terminal-card hover:border-terminal-green/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-terminal-cyan font-bold text-base">{row.asset}</span>
                <span className={`text-xs px-2 py-0.5 rounded-sm ${
                  row.status === "OPEN"
                    ? "bg-terminal-green/10 text-terminal-green"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {row.status}
                </span>
              </div>
              <span className="text-terminal-green font-bold">{row.pnl}</span>
            </div>
            <div className="text-xs text-terminal-amber mb-2 font-mono">{row.role}</div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{row.period}</span>
              <span className="text-xs text-foreground">{row.highlights}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPerformance;
