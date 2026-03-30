import { Link } from "react-router-dom";
import heroCleaning from "@/assets/hero-cleaning.jpg";
import tattooAftercare from "@/assets/tattoo-aftercare.jpg";

const stats = [
  { number: "200+", label: "Happy Clients" },
  { number: "5.0", label: "Star Rating" },
  { number: "500+", label: "Jobs Completed" },
  { number: "100%", label: "Satisfaction Rate" },
];

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential Cleaning",
    description: "Complete home cleaning solutions tailored to your lifestyle. From weekly maintenance to one-time deep cleans.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Cleaning",
    description: "Professional cleaning for offices, retail spaces, and commercial properties. Keep your business spotless.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning that reaches every corner. Perfect for seasonal refreshes or special occasions.",
  },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your complete peace of mind.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Flexible Scheduling",
    description: "Book at your convenience — evenings, weekends, or any time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Trained Professionals",
    description: "Our team is background-checked, trained, and dedicated to excellence.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Eco-Friendly Products",
    description: "Safe, non-toxic cleaning products that protect your family and the environment.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    text: "Tatoo Cleaning transformed my home! Their attention to detail is incredible. I've been using their services for 6 months and couldn't be happier.",
    rating: 5,
  },
  {
    name: "James R.",
    text: "Professional, punctual, and thorough. The best cleaning service in Port Saint Lucie. Highly recommend for commercial properties.",
    rating: 5,
  },
  {
    name: "Maria L.",
    text: "After trying several cleaning companies, Tatoo is by far the best. Their team is courteous and my house has never looked better.",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroCleaning})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/80" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-flame/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-flame/30 bg-flame/5">
            <span className="text-flame text-sm font-medium">✨ Professional Cleaning Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Sparkling Clean,
            <br />
            <span className="text-flame">Every Time</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Clean spaces, clear minds. Trusted, thorough, and always on time — Tatoo Cleaning Services delivers premium cleaning for homes and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg shadow-flame"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Free Estimate
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/20 hover:border-flame/50 text-foreground hover:text-flame font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg"
            >
              Our Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-navy-light to-navy-lighter rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl border border-flame/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-flame mb-1">{stat.number}</div>
                <div className="text-foreground/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-flame text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">Our Cleaning Services</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              From regular home maintenance to specialized commercial cleaning, we have the expertise and equipment to handle any job.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="gradient-card rounded-2xl p-8 border border-foreground/5 hover:border-flame/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-flame/10 flex items-center justify-center text-flame mb-6 group-hover:bg-flame/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-flame hover:text-flame/80 font-semibold transition-colors">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-flame text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
                Why Choose <span className="text-flame">Tatoo?</span>
              </h2>
              <p className="text-foreground/60 mb-10 leading-relaxed">
                We don't just clean — we transform spaces. Our commitment to quality, reliability, and customer satisfaction sets us apart from the competition.
              </p>

              <div className="space-y-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-flame/10 flex items-center justify-center text-flame flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">{reason.title}</h4>
                      <p className="text-foreground/50 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={tattooAftercare} alt="Professional cleaning" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-flame rounded-2xl p-6 shadow-xl">
                <div className="text-primary-foreground font-bold text-3xl">10+</div>
                <div className="text-primary-foreground/70 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-flame text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="gradient-card rounded-2xl p-8 border border-foreground/5">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-flame" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-flame/20 flex items-center justify-center text-flame font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <span className="text-foreground font-medium text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready for a Spotless Space?</h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation estimate today. Experience the Tatoo difference — where quality meets affordability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all duration-200 text-lg shadow-flame"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
