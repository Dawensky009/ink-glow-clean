import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    tag: "✨ Professional Cleaning Services",
    title: ["Sparkling Clean,", "Every Time"],
    description: "Clean spaces, clear minds. Trusted, thorough, and always on time — Tatoo Cleaning Services delivers premium cleaning for homes and businesses.",
  },
  {
    image: heroSlide2,
    tag: "🏠 Residential & Commercial",
    title: ["Your Space,", "Our Passion"],
    description: "From cozy homes to busy offices, we bring the same dedication and attention to detail to every space we clean.",
  },
  {
    image: heroSlide3,
    tag: "🌿 Eco-Friendly Solutions",
    title: ["Deep Clean,", "Green Clean"],
    description: "We use environmentally responsible products that are tough on dirt but gentle on your family, pets, and the planet.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/80" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-flame/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-flame/30 bg-flame/5">
              <span className="text-flame text-sm font-medium">{slide.tag}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {slide.title[0]}
              <br />
              <span className="text-flame">{slide.title[1]}</span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg shadow-flame">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get Free Estimate
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 hover:border-flame/50 text-foreground hover:text-flame font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg">
            Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-flame" : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
