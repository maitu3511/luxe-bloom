import { Phone, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+11234567890" },
              { icon: Mail, label: "Email", value: "hello@luxesalon.com", href: "mailto:hello@luxesalon.com" },
              { icon: MapPin, label: "Location", value: "456 Rodeo Drive, Beverly Hills, CA 90210" },
              { icon: Clock, label: "Hours", value: "Mon–Sat: 9AM–7PM | Sun: 10AM–5PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-body text-base text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-base text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="tel:+11234567890"
              className="inline-flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity mt-4"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </a>
          </div>

          <div className="rounded-sm overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0068456508455!2d-118.4003563!3d34.0695562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sRodeo%20Drive%2C%20Beverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxe Salon Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
