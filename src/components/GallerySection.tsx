import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Sleek styling result", label: "Sleek Styling" },
  { src: gallery2, alt: "Balayage hair coloring", label: "Balayage Color" },
  { src: gallery3, alt: "Bridal hair and makeup", label: "Bridal Beauty" },
  { src: gallery4, alt: "Premium skincare products", label: "Skincare" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Gallery</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.label} className="group relative overflow-hidden rounded-sm aspect-[3/4]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end justify-center pb-6">
                <p className="font-body text-sm tracking-widest uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
