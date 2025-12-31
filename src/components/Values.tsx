import { Lightbulb, Users, Handshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovative",
    description:
      "Creative minds, dynamic approach. We think outside the box to provide intuitive designs and innovative solutions, bringing fresh ideas to every project.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "We emphasize user experience in every aspect of development, blending smooth functionality and easy navigation into our designs.",
  },
  {
    icon: Handshake,
    title: "Collaborative",
    description:
      "Our commitment begins with our clients. We build lasting, collaborative relationships, working together to create the best custom solutions.",
  },
];

const Values = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-effect text-sm text-accent font-medium mb-4">
            Our Philosophy
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text-accent">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core values drive everything we do, ensuring excellence in every project
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-8"
            >
              {/* Animated Icon Container */}
              <div className="relative mx-auto mb-8">
                <div className="w-24 h-24 rounded-2xl glass-effect flex items-center justify-center mx-auto group-hover:scale-105 transition-transform duration-500">
                  <value.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-24 h-24 mx-auto rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Decorative line */}
              <div className="w-16 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
