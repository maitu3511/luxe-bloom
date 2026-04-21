import { Facebook, MessageCircle } from "lucide-react";
import instagram3d from "@/assets/instagram-3d.png";

const socialLinks = [
  { type: "icon" as const, icon: MessageCircle, href: "https://wa.me/11234567890", label: "WhatsApp" },
  { type: "image" as const, src: instagram3d, href: "https://instagram.com/luxesalon", label: "Instagram" },
  { type: "icon" as const, icon: Facebook, href: "https://facebook.com/luxesalon", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground section-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <a href="#home" className="font-display text-2xl font-bold tracking-wide">
            Luxe<span className="text-gold-glow"> Salon</span>
          </a>

          <div className="flex gap-8">
            {["About", "Services", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) =>
              s.type === "image" ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <img
                    src={s.src}
                    alt={s.label}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="w-10 h-10 object-contain drop-shadow-md"
                  />
                </a>
              ) : (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-gold-light hover:bg-gold/10 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              )
            )}
          </div>

          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Luxe Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
