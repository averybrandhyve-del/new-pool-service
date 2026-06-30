import React from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo-main.svg"
                alt="Pool Ninja Service"
                className="h-14"
              />
            </div>
            <p className="text-white/60 leading-relaxed mb-8">
              Professional pool cleaning and maintenance for Tampa Bay homeowners.
              Professional, reliable service, and unmatched communication.
            </p>
            <div className="flex gap-4">
              {[{ Icon: Facebook, label: "Facebook" }, { Icon: Instagram, label: "Instagram" }].map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={`Follow Pool Ninja on ${label}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-dark transition-colors cursor-pointer">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services')} className="hover:text-brand-gold transition-colors">Our Services</a></li>
              <li><a href="/gallery" onClick={(e) => handleNavClick(e, '/gallery')} className="hover:text-brand-gold transition-colors">Before & After</a></li>
              <li><a href="/reviews" onClick={(e) => handleNavClick(e, '/reviews')} className="hover:text-brand-gold transition-colors">Reviews</a></li>
              <li><a href="/areas" onClick={(e) => handleNavClick(e, '/areas')} className="hover:text-brand-gold transition-colors">Service Areas</a></li>
              <li><a href="/faq" onClick={(e) => handleNavClick(e, '/faq')} className="hover:text-brand-gold transition-colors">FAQ</a></li>
              <li><a href="/contact" onClick={(e) => handleNavClick(e, '/contact')} className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-white/60">
              <li>Tampa & Brandon</li>
              <li>Riverview</li>
              <li>Apollo Beach</li>
              <li>FishHawk & Lithia</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="text-brand-gold shrink-0" />
                <span>Brandon, FL 33511</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={20} className="text-brand-gold shrink-0" />
                <a href="tel:8133803966" className="hover:text-white transition-colors">(813) 380-3966</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={20} className="text-brand-gold shrink-0" />
                <a href="mailto:poolninjaservice@gmail.com" className="hover:text-white transition-colors">poolninjaservice@gmail.com</a>
              </li>
            </ul>
            <div className="mt-6 text-white/40 text-sm">
              <p className="font-semibold text-white/60 mb-1">Business Hours</p>
              <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Pool Ninja Service LLC. All rights reserved. Brandon, FL</p>
        </div>
      </div>
    </footer>
  );
}
