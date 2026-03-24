import { Scissors, Palette, Sparkles, Heart, Flower2 } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Haircut & Styling",
    description: "Precision cuts and bespoke styling tailored to your face shape and personal style.",
    price: "From $85",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "Balayage, highlights, and full-color transformations using premium, gentle formulas.",
    price: "From $150",
  },
  {
    icon: Sparkles,
    title: "Keratin Treatment",
    description: "Smooth, frizz-free hair that lasts for months with our luxury keratin treatments.",
    price: "From $250",
  },
  {
    icon: Heart,
    title: "Bridal Makeup",
    description: "Complete bridal beauty packages including hair, makeup, and trial sessions.",
    price: "From $350",
  },
  {
    icon: Flower2,
    title: "Skincare Services",
    description: "Rejuvenating facials and advanced skincare treatments for a radiant glow.",
    price: "From $120",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background p-8 rounded-sm border border-border hover:border-gold transition-all duration-300 hover:shadow-lg"
            >
              <service.icon className="w-8 h-8 text-accent mb-5 group-hover:text-primary transition-colors" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <p className="font-body text-sm font-semibold text-primary tracking-wider">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
