const trades = [
  {
    id: "001",
    project: "FYERS Partner Program Revamp",
    entry: "Scaling a 1,500+ partner ecosystem with undefined commercial structures",
    execution: "Redefined commercial structure, pitch strategy, lifecycle design, growth frameworks. Built Partner Dashboard (0→1) with tier segmentation, leaderboard logic, loyalty programs, acquisition-to-retention tracking.",
    result: "Contributed 18% of current FY revenue (₹35L), 60% conversion rate on partner-generated accounts",
    status: "PROFIT",
  },
  {
    id: "002",
    project: "Partner Landing Page & Inbound Engine",
    entry: "No sustainable inbound lead generation for partner acquisition",
    execution: "Collaborated with Product & Design team to launch high-converting Partner Landing Page",
    result: "Built sustainable inbound lead engine driving consistent partner signups",
    status: "PROFIT",
  },
  {
    id: "003",
    project: "Influencer Marketing Campaigns",
    entry: "Drive adoption of key FYERS products across social platforms",
    execution: "Executed feature-focused campaigns across YouTube and social — Automate, Smart Orders, Smart Exit, Option Scalper Terminal, APIs",
    result: "Increased product awareness and adoption through targeted influencer reach",
    status: "PROFIT",
  },
  {
    id: "004",
    project: "ICICI Bank — Retail Liabilities Growth",
    entry: "Manage Current Accounts, Credit Cards, Savings, FDs for retail & business clients",
    execution: "Dataset analysis for senior mgmt, CRM training, iView portal rollouts, HNI relationship management",
    result: "₹20L+ avg monthly FD sales, 30+ Demat accounts/qtr, zero-escalation record, top performer",
    status: "CLOSED",
  },
  {
    id: "005",
    project: "Freelance Design & Content Business",
    entry: "End-to-end creative services for B2B clients",
    execution: "Video editing (long/short form), thumbnail design, logo design, website assets, social media management",
    result: "Repeat B2B business, long-term partnerships, direct revenue contribution",
    status: "OPEN",
  },
];

const TradeHistory = () => {
  return (
    <section id="trades" className="px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-terminal-green text-lg">📊</span>
          <h2 className="font-display text-2xl font-bold text-foreground">TRADE HISTORY</h2>
        </div>
        <p className="text-xs text-muted-foreground font-mono">// Executed projects and their outcomes</p>
      </div>

      <div className="space-y-4">
        {trades.map((trade) => (
          <div key={trade.id} className="terminal-card hover:border-terminal-green/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-terminal-amber font-bold text-sm">TRADE #{trade.id}</span>
                <span className={`text-xs px-2 py-0.5 rounded-sm ${
                  trade.status === "PROFIT"
                    ? "bg-terminal-green/10 text-terminal-green"
                    : trade.status === "OPEN"
                    ? "bg-terminal-cyan/10 text-terminal-cyan"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {trade.status}
                </span>
              </div>
            </div>

            <h3 className="font-display text-lg font-semibold text-foreground mb-4">{trade.project}</h3>

            <div className="space-y-2 text-sm font-mono">
              <div className="flex gap-3">
                <span className="text-terminal-cyan min-w-[80px] shrink-0">ENTRY:</span>
                <span className="text-foreground">{trade.entry}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-terminal-amber min-w-[80px] shrink-0">EXEC:</span>
                <span className="text-foreground">{trade.execution}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-terminal-green min-w-[80px] shrink-0">RESULT:</span>
                <span className="text-terminal-green">{trade.result}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradeHistory;
