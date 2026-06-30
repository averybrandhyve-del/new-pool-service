import React from 'react';
import { motion } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Sparkles, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const galleryItems = [
  {
    title: "The Algae Rescue",
    description: "This pool had been neglected for over 6 months, resulting in a severe black algae infestation and zero visibility.",
    challenges: "High phosphate levels, clogged filtration system, and deep-rooted algae on the plaster surface.",
    services: ["Chemical Shock Treatment", "Filter Deep Clean", "Manual Algae Scrubbing", "Water Balancing"],
    before: "/images/gallery/algae_rescue_before.png",
    after: "/images/gallery/algae_rescue_after.png"
  },
  {
    title: "Abandoned Oasis Restoration",
    description: "A foreclosed property where the pool had completely dried out and collected debris for over a year.",
    challenges: "Heavy structural debris, severe plaster staining, and extreme chemical imbalance.",
    services: ["Deep Vacuuming", "Tile Descaling", "Algae Scrubbing", "Full Chemical Balancing"],
    before: "/images/gallery/abandoned_oasis_before.png",
    after: "/images/gallery/abandoned_oasis_after.png"
  },
  {
    title: "Water Clarity Transformation",
    description: "An aging pool with consistently cloudy water and poor chemical balance despite weekly attempts by the homeowner.",
    challenges: "Chronic phosphate buildup, low stabilizer, and poor filter flow rate from a neglected filter.",
    services: ["Phosphate Treatment", "Filter Deep Clean", "Salt System Tune-Up", "Full Chemical Reset"],
    before: "/images/gallery/equipment_upgrade_before.png",
    after: "/images/gallery/equipment_upgrade_after.png"
  }
];

export default function BeforeAfterGallery({ teaser = false }: { teaser?: boolean }) {
  const navigate = useNavigate();
  const displayItems = teaser ? galleryItems.slice(0, 1) : galleryItems;

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full font-bold text-sm mb-4"
          >
            <Sparkles size={16} />
            Real Results
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
          >
            Transformations That Speak for Themselves
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Slide the handle to see how we turn neglected pools into pristine backyard paradises.
          </motion.p>
        </div>

        <div className="space-y-24">
          {displayItems.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Slider Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-3/5"
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                />
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-2/5"
              >
                <h3 className="text-3xl font-bold text-brand-dark mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-6">
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                    <div className="flex items-center gap-2 text-amber-700 font-bold mb-1">
                      <AlertTriangle size={18} />
                      The Challenge
                    </div>
                    <p className="text-amber-800/80 text-sm">
                      {item.challenges}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-brand-blue font-bold mb-3">
                      <CheckCircle2 size={18} />
                      Services Performed
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.services.map(service => (
                        <span
                          key={service}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="/#/contact"
                  className="mt-8 inline-flex items-center justify-center bg-brand-blue text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
                >
                  Get a Similar Result
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        {teaser && (
          <div className="mt-16 text-center">
            <a
              href="/gallery"
              onClick={(e) => { e.preventDefault(); navigate('/gallery'); }}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
            >
              View Full Gallery & Before/Afters
              <ChevronRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
