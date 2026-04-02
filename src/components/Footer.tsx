import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-flame/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Tatoo" className="h-12 w-auto" />
              <div>
                <span className="text-flame font-heading font-bold text-lg block">TATOO</span>
                <span className="text-foreground/50 text-xs block">Cleaning Services</span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Professional cleaning services for residential and commercial properties. Clean spaces, clear minds.
            </p>
          </div>

          <div>
            <h4 className="text-flame font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-flame text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-flame font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["Residential Cleaning", "Commercial Cleaning", "Deep Cleaning", "Move-In/Move-Out", "Window Cleaning", "Floor Care"].map((service) => (
                <li key={service}>
                  <span className="text-foreground/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-flame font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-flame mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:3212095447" className="text-foreground/60 hover:text-flame text-sm transition-colors block">(321) 209-5447</a>
                  <span className="text-foreground/40 text-xs">(772) 318-9232</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-flame mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-foreground/60 text-sm">info@tatoocleaning.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-flame mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-foreground/60 text-sm">Port Saint Lucie, FL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Tatoo Cleaning Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1EHErXSVSK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-flame/20 flex items-center justify-center transition-colors">
              <Facebook className="w-5 h-5 text-foreground/60 hover:text-flame" />
            </a>
            <a href="https://www.instagram.com/tatooshop436?igsh=NHVscmVzbmM1cHRp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-flame/20 flex items-center justify-center transition-colors">
              <Instagram className="w-5 h-5 text-foreground/60 hover:text-flame" />
            </a>
            <a href="https://www.tiktok.com/@juniorcarlhenry?_r=1&_t=ZT-95DLbc5CfEL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-flame/20 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-foreground/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.18 8.18 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
