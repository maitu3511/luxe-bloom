import aboutImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Our expert styling team"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-sm hidden md:block" />
          </div>

          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Beauty Meets Expertise
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
              With over 15 years of experience, Luxe Salon has become Beverly Hills' most trusted destination for premium hair and beauty services. Our team of award-winning stylists combines artistry with the latest techniques to deliver results that exceed expectations.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              We believe every client deserves a personalized experience. From the moment you walk through our doors, you'll be treated to world-class service in a luxurious, relaxing environment designed to make you feel your absolute best.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "15+", label: "Years Experience" },
                { number: "10K+", label: "Happy Clients" },
                { number: "25+", label: "Expert Stylists" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-gold-gradient">{stat.number}</p>
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
