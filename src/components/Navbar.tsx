import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide">
            Luxe<span className="text-gold-gradient"> Salon</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="tel:+11234567890"
            className="hidden md:flex items-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-2.5 rounded-sm font-body text-sm font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+11234567890"
              className="flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-5 py-3 rounded-sm font-body text-sm font-semibold tracking-wider uppercase mt-4"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
