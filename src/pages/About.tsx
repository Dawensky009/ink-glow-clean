const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Reliability",
    description: "We show up on time, every time. Our clients trust us with their homes and businesses because we consistently deliver quality.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Passion for Clean",
    description: "Cleaning isn't just our job — it's our passion. We take pride in transforming every space we touch.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Efficiency",
    description: "Our systematic approach and professional equipment ensure we deliver outstanding results in the shortest time possible.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Eco-Conscious",
    description: "We use environmentally responsible products and practices to protect your health and our planet.",
  },
];

const About = () => {
  return (
    <div>
      <section className="relative py-32 gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-8">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">About Tatoo Cleaning</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Dedicated to creating clean, healthy environments for families and businesses across the community.
          </p>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80" alt="Our team" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-flame/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-flame/20 rounded-2xl -z-10" />
            </div>

            <div>
              <span className="text-flame text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">Our Mission</h2>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Tatoo Cleaning Services was founded with a simple mission: to provide exceptional cleaning services that transform spaces and improve lives. We believe that a clean environment is the foundation of a healthy, productive, and happy life.
              </p>
              <p className="text-foreground/60 leading-relaxed mb-4">
                What started as a small family business has grown into a trusted name in professional cleaning. Our team of dedicated professionals brings years of experience, attention to detail, and a genuine passion for cleanliness to every project.
              </p>
              <p className="text-foreground/60 leading-relaxed">
                Whether it's a cozy home, a bustling office, or a special event venue, we approach every job with the same commitment to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-light py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-flame text-sm font-semibold uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">What Drives Us</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-flame/10 flex items-center justify-center text-flame mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-light to-navy-lighter rounded-3xl p-10 md:p-16 border border-flame/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-flame text-sm font-semibold uppercase tracking-wider">Our Promise</span>
                <h2 className="text-3xl font-bold text-foreground mt-3 mb-6">The Tatoo Guarantee</h2>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  We stand behind every clean. If you're not 100% satisfied with our work, we'll come back and re-clean the area at no additional cost. That's our promise to you.
                </p>
                <ul className="space-y-3">
                  {["100% Satisfaction Guarantee", "Licensed & Fully Insured", "Background-Checked Staff", "Eco-Friendly Products", "Flexible Scheduling"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/70 text-sm">
                      <svg className="w-5 h-5 text-flame flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Our team at work" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-cta py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join Our Growing Family of Happy Clients</h2>
          <p className="text-foreground/70 text-lg mb-8">Experience the Tatoo difference today. Your satisfaction is our top priority.</p>
          <a href="tel:3212095447" className="inline-flex items-center gap-2 bg-flame hover:bg-flame/90 text-primary-foreground font-semibold px-10 py-4 rounded-lg transition-all text-lg shadow-flame">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — (321) 209-5447
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
