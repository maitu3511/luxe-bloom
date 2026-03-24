import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxe Salon interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-gold-glow mb-6 animate-fade-in-up">
          Welcome to Luxe Salon
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Look & Feel Your Best Every Day
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Premium Hair & Beauty Services in Beverly Hills
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="tel:+11234567890"
            className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-sm border-2 border-primary-foreground/30 text-primary-foreground font-body text-sm font-semibold tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
