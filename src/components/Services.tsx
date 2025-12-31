import { Code, Palette, Layout, Smartphone, Globe, Megaphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Eye-catching visual designs that communicate your brand story and leave lasting impressions on your audience.",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "User-centered interfaces that blend aesthetics with functionality for seamless digital experiences.",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Responsive and native mobile applications that engage users across all devices and platforms.",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    icon: Globe,
    title: "Brand Identity",
    description:
      "Complete brand packages including logos, color palettes, and visual guidelines that define your presence.",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that amplify your reach and convert visitors into loyal customers.",
    gradient: "from-rose-400 to-red-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-effect text-sm text-primary font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to transform your vision into reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative card-gradient rounded-2xl p-8 border border-border/50 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
