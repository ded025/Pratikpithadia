const logs = [
  {
    id: "245",
    source: "Manager @ FYERS",
    comment: "Strong product thinking & partner ecosystem understanding. Pratik consistently delivers insights that translate into actionable growth strategies.",
    timestamp: "2024-Q3",
  },
  {
    id: "189",
    source: "Partner Lead",
    comment: "One of the most structured thinkers I've worked with. His approach to partner onboarding transformed our entire process.",
    timestamp: "2024-Q1",
  },
  {
    id: "142",
    source: "Client @ Axis Securities",
    comment: "Exceptional at understanding customer needs and translating them into solutions. His sales approach feels consultative, not pushy.",
    timestamp: "2023-Q2",
  },
  {
    id: "098",
    source: "Freelance Client",
    comment: "Pratik's design work perfectly captured our brand identity. He thinks like a strategist and executes like a designer.",
    timestamp: "2022-Q4",
  },
];

const AuditLog = () => {
  return (
    <section className="px-4 py-20 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-terminal-green text-lg">🧾</span>
          <h2 className="font-display text-2xl font-bold text-foreground">AUDIT LOG</h2>
        </div>
        <p className="text-xs text-muted-foreground font-mono">// Verified testimonials from the network</p>
      </div>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="terminal-card hover:border-terminal-cyan/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-terminal-dim text-xs">LOG ENTRY #{log.id}</span>
                <span className="text-terminal-cyan text-xs">SOURCE: {log.source}</span>
              </div>
              <span className="text-xs text-muted-foreground">{log.timestamp}</span>
            </div>
            <p className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-terminal-green/30">
              "{log.comment}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuditLog;
