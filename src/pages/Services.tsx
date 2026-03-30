import { Link } from "react-router-dom";

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential Cleaning",
    description: "Complete home cleaning tailored to your needs. Our trained professionals will leave every room spotless, from kitchen to bathroom to living areas. We use eco-friendly products that are safe for your family and pets.",
    features: ["Kitchen deep clean", "Bathroom sanitization", "Dusting & vacuuming", "Mopping all floors"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Commercial Cleaning",
    description: "Professional cleaning services for offices, retail spaces, and commercial properties. We work around your schedule to minimize disruption while maximizing cleanliness.",
    features: ["Office cleaning", "Retail spaces", "Common areas", "Restroom sanitation"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Deep Cleaning",
    description: "Intensive top-to-bottom cleaning that goes beyond the surface. Perfect for spring cleaning, post-construction cleanup, or when your space needs extra attention.",
    features: ["Behind appliances", "Inside cabinets", "Baseboards & trim", "Light fixtures"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Move-In / Move-Out Cleaning",
    description: "Make your transition seamless with our comprehensive move-in/move-out cleaning. We'll ensure every surface is pristine for the next chapter.",
    features: ["Full property clean", "Appliance cleaning", "Cabinet interiors", "Window tracks"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out. Our professional window cleaning removes streaks, grime, and buildup for a brilliant view every time.",
    features: ["Interior windows", "Exterior windows", "Window sills", "Screen cleaning"],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Floor Care & Waxing",
    description: "Restore the shine to your floors with our professional floor care services. From hardwood to tile, we'll bring your floors back to life.",
    features: ["Hardwood polishing", "Tile & grout", "Carpet cleaning", "Waxing & buffing"],
  },
];

const Services = () => {
  return (
    <div>
      <section className="relative py-32 gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-8">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">Our Cleaning Services</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Professional cleaning solutions for every space. We tailor our services to meet your specific needs.
          </p>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="gradient-card rounded-2xl p-8 border border-foreground/5 hover:border-flame/20 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-flame/10 flex items-center justify-center text-flame flex-shrink-0 group-hover:bg-flame/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-foreground/50 text-sm">
                          <svg className="w-4 h-4 text-flame flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Need a Custom Cleaning Plan?</h2>
          <p className="text-foreground/70 text-lg mb-8">
            Every space is different. Contact us for a personalized cleaning plan tailored to your needs and budget.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all text-lg shadow-flame">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
