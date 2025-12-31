const clients = [
  "TechCorp",
  "DesignHub",
  "StartupX",
  "InnovateCo",
  "BrandWorks",
  "DigitalFlow",
  "CreativeMinds",
  "FutureLabs",
];

const ClientLogos = () => {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/10 to-background" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Trusted by leading companies
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling content */}
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <div className="px-8 py-4 rounded-xl glass-effect hover:bg-primary/5 transition-colors duration-300 group">
                  <span className="font-heading text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
