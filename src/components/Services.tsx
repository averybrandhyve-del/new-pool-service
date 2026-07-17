import React from 'react';
import { motion } from 'motion/react';
import { Check, Droplets, Zap, ShieldCheck, ShieldAlert, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Chemical Care Plan",
    price: "Starting at $99/Month",
    description: "Designed for homeowners who prefer to handle brushing, skimming debris, and vacuuming themselves. We keep the water chemistry perfect.",
    icon: Zap,
    features: [
      "Weekly professional water testing",
      "All standard balancing chemicals included",
      "Skimmer and pump baskets emptied",
      "Filter cleaned when needed",
      "Detailed service report with photos"
    ]
  },
  {
    title: "Signature Service",
    price: "Starting at $140/Month",
    description: "Perfect for screened pools or yards with minimal tree debris. Includes full chemistry care plus surface skimming, brushing, and tile washing.",
    icon: Droplets,
    features: [
      "Weekly professional water testing",
      "All standard balancing chemicals included",
      "Skimmer and pump baskets emptied",
      "Full surface skimming of debris",
      "Brushing walls & steps & tile washing",
      "Vacuum service when needed"
    ]
  },
  {
    title: "Elite Service",
    price: "$200/Month",
    description: "Our most popular hands-off option. Includes specialty chemicals, o-ring/air relief valve replacements, filter cleaning, and weekly vacuuming.",
    icon: ShieldCheck,
    features: [
      "Weekly professional water testing",
      "Specialty chemicals (phosphate/mustard algae)",
      "Filter cleaned on schedule (4-6 weeks)",
      "Brushing, tile wash & surface skimming",
      "Vacuuming every single visit",
      "Minor repair of o-rings/relief valves"
    ]
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
              High-quality service, reliability, strong communication, and professional knowledge — that's the NEW Pool Service difference.
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
              onClick={() => navigate('/services')}
              className="group border border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all bg-slate-50/50 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-brand-dark mb-2">{s.title}</h3>
                <div className="text-brand-gold font-bold text-lg mb-4">{s.price}</div>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">{s.description}</p>

                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700 font-medium text-sm">
                      <Check size={18} className="text-brand-gold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/services"
                onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                className="w-full py-4 rounded-xl border-2 border-brand-blue text-brand-blue font-bold group-hover:bg-brand-blue group-hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Learn More
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
