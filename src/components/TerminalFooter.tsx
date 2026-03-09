const TerminalFooter = () => {
  return (
    <footer className="px-4 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="terminal-card text-center">
          <pre className="text-[10px] sm:text-xs text-terminal-dim mb-4 font-mono">
{`╔══════════════════════════════════════════════════╗
║              END OF TERMINAL SESSION             ║
╚══════════════════════════════════════════════════╝`}
          </pre>
          <div className="space-y-2 text-sm font-mono">
            <p className="text-muted-foreground">
              <span className="text-terminal-cyan">EMAIL:</span>{" "}
              <a href="mailto:pratikppithadia@gmail.com" className="text-terminal-green hover:terminal-glow transition-all">
                pratikppithadia@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="text-terminal-cyan">PHONE:</span>{" "}
              <a href="tel:+918114781697" className="text-terminal-green hover:terminal-glow transition-all">
                +91 81147 81697
              </a>
            </p>
            <p className="text-muted-foreground">
              <span className="text-terminal-cyan">LINKEDIN:</span>{" "}
              <a href="https://linkedin.com/in/pratikpithadia" target="_blank" rel="noopener noreferrer" className="text-terminal-green hover:terminal-glow transition-all">
                /pratikpithadia
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs">
            {["English", "Hindi", "Odia", "Gujarati"].map((lang) => (
              <span key={lang} className="px-2 py-1 rounded-sm bg-muted text-muted-foreground">
                {lang} — Fluent
              </span>
            ))}
          </div>
          <p className="text-xs text-terminal-dim mt-6">
            © {new Date().getFullYear()} TERMINAL.P — All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
