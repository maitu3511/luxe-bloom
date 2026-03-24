const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground section-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Luxe Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
