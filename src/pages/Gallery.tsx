import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80", alt: "Clean modern kitchen", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80", alt: "Sparkling bathroom", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80", alt: "Clean office space", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80", alt: "Fresh living room", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80", alt: "Modern office clean", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Clean home exterior", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80", alt: "Professional cleaning", category: "Deep Clean" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80", alt: "Luxury home clean", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80", alt: "Floor cleaning", category: "Deep Clean" },
];

const categories = ["All", "Residential", "Commercial", "Deep Clean"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      <section className="relative py-32 gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-8">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">Gallery</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            See the Tatoo difference. Browse our portfolio of spotless spaces and transformative cleaning results.
          </p>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-flame text-primary-foreground"
                    : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-flame/20 text-flame text-xs font-medium mb-2">{img.category}</span>
                  <p className="text-foreground font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Want Results Like These?</h2>
          <p className="text-foreground/70 text-lg mb-8">Let us transform your space. Get a free estimate and see the Tatoo difference for yourself.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all text-lg shadow-flame">
            Get Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
