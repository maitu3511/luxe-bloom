import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica M.",
    text: "I've been coming to Luxe Salon for three years and I refuse to go anywhere else. My stylist truly understands my hair and always delivers a flawless result. The atmosphere is so relaxing — it's my happy place!",
    service: "Hair Coloring",
  },
  {
    name: "Amanda R.",
    text: "The bridal package was everything I dreamed of. They did a trial run, listened to every detail, and on my wedding day I felt like an absolute queen. My photos turned out stunning. Worth every penny!",
    service: "Bridal Makeup",
  },
  {
    name: "Sarah L.",
    text: "Best keratin treatment I've ever had! My hair has never been smoother or more manageable. The team was professional, friendly, and the results lasted well beyond what I expected.",
    service: "Keratin Treatment",
  },
  {
    name: "Michelle K.",
    text: "Found Luxe Salon on Instagram and booked a balayage appointment. The transformation was incredible — my hair looks so natural and dimensional. I get compliments everywhere I go!",
    service: "Balayage",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background p-8 rounded-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs tracking-wider uppercase text-accent">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
