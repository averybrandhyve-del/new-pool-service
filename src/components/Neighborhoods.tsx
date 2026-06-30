import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const neighborhoods = [
  "Tampa", "Brandon", "Apollo Beach", "Riverview",
  "FishHawk", "Lithia", "Valrico", "Bloomingdale",
  "Sun City Center", "Gibsonton", "Seffner", "Plant City"
];

export default function Neighborhoods({ teaser = false }: { teaser?: boolean }) {
  const navigate = useNavigate();
  const displayItems = teaser ? neighborhoods.slice(0, 4) : neighborhoods;

  return (
    <section id="neighborhoods" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
          >
            Areas We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            Proudly keeping Tampa Bay pools clean and safe.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayItems.map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate('/areas')}
              className="group bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between hover:border-brand-gold hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span className="font-semibold text-slate-700">{n}</span>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>

        {teaser ? (
          <div className="mt-12 text-center">
            <a
              href="/areas"
              onClick={(e) => { e.preventDefault(); navigate('/areas'); }}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
            >
              See Service Areas & ZIP Codes
              <ChevronRight size={18} />
            </a>
          </div>
        ) : (
          <div className="mt-16 bg-brand-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Not sure if we service your area?</h3>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                We're always expanding our routes across Tampa Bay. Call or text to find out!
              </p>
              <a
                href="tel:8133803966"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-gold/90 transition-all cursor-pointer"
              >
                <Phone size={20} />
                (813) 380-3966
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
