const strategies = [
  {
    id: "01",
    name: "Partner Ecosystem Growth",
    description: "Architecting partner programs from scratch — commercial structures, tier-based segmentation, loyalty programs, and 1500+ partner ecosystem scaling.",
    strength: 95,
  },
  {
    id: "02",
    name: "B2B Relationship Management",
    description: "Building long-term client relationships across banking and fintech — HNI clients, corporate accounts, and partner lifecycle management.",
    strength: 92,
  },
  {
    id: "03",
    name: "Data Analytics & Reporting",
    description: "Managing large datasets with 99% accuracy, generating actionable reports, forecasting inputs, and campaign analysis for senior leadership.",
    strength: 90,
  },
  {
    id: "04",
    name: "Trading & Markets",
    description: "5+ years active trading across Equity, Derivatives, Forex, and Crypto markets. Deep understanding of retail trader psychology.",
    strength: 88,
  },
  {
    id: "05",
    name: "Content & Digital Marketing",
    description: "Influencer campaigns, social media management, video editing (Premiere Pro, After Effects), and graphic design (Illustrator, Photoshop, Canva).",
    strength: 85,
  },
  {
    id: "06",
    name: "Strategic Communication",
    description: "Simplifying complex financial information into engaging reports, visuals, and concise storytelling. Fluent in English, Hindi, Odia, and Gujarati.",
    strength: 87,
  },
];

const Strategies = () => {
  return (
    <section id="strategies" className="px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-terminal-green text-lg">🧠</span>
          <h2 className="font-display text-2xl font-bold text-foreground">STRATEGIES</h2>
        </div>
        <p className="text-xs text-muted-foreground font-mono">// Active skill strategies in deployment</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {strategies.map((s) => (
          <div key={s.id} className="terminal-card hover:border-terminal-green/50 transition-colors group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-terminal-amber font-bold">STRATEGY {s.id}</span>
              <span className="text-xs text-terminal-green">{s.strength}%</span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-terminal-green transition-colors">
              {s.name}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{s.description}</p>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-terminal-green rounded-full transition-all duration-1000"
                style={{ width: `${s.strength}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Strategies;
