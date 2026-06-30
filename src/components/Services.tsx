import React from 'react';
import { motion } from 'motion/react';
import { Check, Droplets, Zap, Settings, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Weekly Maintenance",
    price: "Call for Pricing",
    description: "Our comprehensive weekly service keeps your pool sparkling clean and chemically balanced. We handle everything so you can just enjoy swimming.",
    icon: Droplets,
    features: ["Surface Skimming", "Debris Vacuuming", "Wall & Step Brushing", "Chemical Balancing", "Basket Emptying"]
  },
  {
    title: "Green Pool Cleanups",
    price: "Fast Turnaround",
    description: "Turn your green swamp back into an oasis. We shock the pool, kill the algae, balance the chemistry, and vacuum all debris.",
    icon: Zap,
    features: ["Algae Treatment", "Chemical Shock", "Deep Vacuuming", "Filter Cleaning", "Brush & Skim"]
  },
  {
    title: "Filter Deep Cleans",
    price: "Starting at $110",
    description: "A clean filter is the backbone of a healthy pool. We fully disassemble, chemically clean, and reassemble your filter system every 3–6 months.",
    icon: Settings,
    features: ["Full Disassembly", "Chemical Descaling", "Pressure Washing", "Gasket Lubrication", "Flow Rate Check"]
  }
];

export default function Services({ teaser = false }: { teaser?: boolean }) {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
            >
              Excellence in <br />Every Detail
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600"
            >
              High-quality service, reliability, strong communication, and professional knowledge — that's the Pool Ninja difference.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-gold/10 text-brand-dark px-6 py-3 rounded-2xl font-bold flex items-center gap-2"
          >
            <ShieldCheck size={20} className="text-brand-gold" />
            Professionally Trained
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all bg-slate-50/50 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <s.icon size={28} />
              </div>

              <h3 className="text-2xl font-bold text-brand-dark mb-2">{s.title}</h3>
              <div className="text-brand-gold font-bold text-lg mb-4">{s.price}</div>
              <p className="text-slate-600 mb-8 leading-relaxed">{s.description}</p>

              <ul className="space-y-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700 font-medium">
                    <Check size={18} className="text-brand-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
                className="w-full py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Get a Quote
              </a>
            </motion.div>
          ))}
        </div>

        {teaser && (
          <div className="mt-12 text-center">
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); navigate('/services'); }}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
            >
              View Detailed Checklists & Pricing
              <ChevronRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
