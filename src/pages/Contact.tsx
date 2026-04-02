import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative py-32 gradient-hero">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center pt-8">
          <span className="text-flame text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">Contact Us</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Ready for a cleaner space? Reach out for a free estimate or to ask any questions. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h2>
              <p className="text-foreground/60 mb-10 leading-relaxed">
                Whether you need a one-time deep clean or regular maintenance, we're here to help. Contact us today and we'll respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-flame/10 flex items-center justify-center text-flame flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                    <a href="tel:3212095447" className="text-flame hover:text-flame/80 text-sm font-medium transition-colors block">(321) 209-5447</a>
                    <p className="text-foreground/40 text-xs mt-1">Alternate: (772) 318-9232</p>
                    <p className="text-foreground/40 text-xs">Mon-Sat 7AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-flame/10 flex items-center justify-center text-flame flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Email</h4>
                    <p className="text-foreground/60 text-sm">info@tatoocleaning.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-flame/10 flex items-center justify-center text-flame flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Location</h4>
                    <p className="text-foreground/60 text-sm">Port Saint Lucie, FL</p>
                    <p className="text-foreground/40 text-xs mt-1">Serving the Treasure Coast area</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-foreground font-semibold mb-4 text-sm">Follow Us</h4>
                <div className="flex gap-3">
                  {[{ name: "Facebook", letter: "F" }, { name: "Instagram", letter: "I" }, { name: "TikTok", letter: "T" }].map((s) => (
                    <a key={s.name} href="#" className="w-11 h-11 rounded-xl bg-foreground/5 hover:bg-flame/20 flex items-center justify-center text-foreground/60 hover:text-flame transition-all" title={s.name}>
                      <span className="font-semibold text-sm">{s.letter}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="gradient-card rounded-2xl p-8 md:p-10 border border-foreground/5">
                <h3 className="text-xl font-semibold text-foreground mb-6">Request a Free Estimate</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-foreground/70 text-sm mb-2">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-foreground/70 text-sm mb-2">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground/70 text-sm mb-2">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-foreground/70 text-sm mb-2">Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm">
                      <option value="" className="bg-navy">Select a service</option>
                      <option value="residential" className="bg-navy">Residential Cleaning</option>
                      <option value="commercial" className="bg-navy">Commercial Cleaning</option>
                      <option value="deep" className="bg-navy">Deep Cleaning</option>
                      <option value="movein" className="bg-navy">Move-In / Move-Out</option>
                      <option value="window" className="bg-navy">Window Cleaning</option>
                      <option value="floor" className="bg-navy">Floor Care & Waxing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-foreground/70 text-sm mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 text-foreground placeholder-foreground/30 focus:outline-none focus:border-flame/50 focus:ring-1 focus:ring-flame/50 transition-colors text-sm resize-none" placeholder="Tell us about your cleaning needs, property size, preferred schedule, etc." />
                  </div>

                  <button type="submit" className="w-full bg-flame hover:bg-flame/90 text-primary-foreground font-semibold py-4 rounded-lg transition-all text-lg shadow-flame">
                    Send Request
                  </button>
                  <p className="text-foreground/30 text-xs text-center">We'll respond within 24 hours. Free estimates, no obligation.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl overflow-hidden h-80 gradient-card border border-foreground/5 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-flame/40 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-foreground/40 text-sm">Serving Port Saint Lucie, Stuart, Fort Pierce, Vero Beach & surrounding areas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
