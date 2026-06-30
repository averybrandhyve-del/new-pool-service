import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, X, ChevronLeft, ChevronRight, Phone, 
  Sparkles, AlertTriangle, CheckCircle2 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import BeforeAfterSlider from './BeforeAfterSlider';

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

const photos = [
  '/images/gallery-photos/Bazaart_1A5D566F-BEAE-4289-A6C0-3339A63E935B.JPEG',
  '/images/gallery-photos/Bazaart_1CD77CAB-3921-4E2F-A271-C292A0BAEF6B.JPEG',
  '/images/gallery-photos/Bazaart_429025A9-8342-4190-BB5C-395FCFDFD41A.JPEG',
  '/images/gallery-photos/Bazaart_44B71909-0CE5-4210-A379-DD1AAFA860EF.JPEG',
  '/images/gallery-photos/Bazaart_55AED6F7-D27C-4A0C-9D2D-952CE1E1A27E.JPEG',
  '/images/gallery-photos/Bazaart_8918DDA8-383C-48D5-BE32-D6F7AD905A90.JPEG',
  '/images/gallery-photos/Bazaart_A972153E-2ECD-49D9-A0F7-D6649A5398B3.JPEG',
  '/images/gallery-photos/Bazaart_BC00EB58-FACA-416E-820F-F30CAF32ABCA.JPEG',
  '/images/gallery-photos/Bazaart_E5CA607F-4C9A-4996-A59C-F39547F51DFB.PNG',
  '/images/gallery-photos/Bazaart_EA54699A-AD05-4404-8FB8-03AF9FB1A7CA.JPEG',
  '/images/gallery-photos/Bazaart_EAB6DF71-E58C-477F-A6D2-4EB9B2E8A335.JPEG',
  '/images/gallery-photos/Bazaart_F09A9803-5D31-4C12-BE6E-AEACC815AE12.JPEG',
  '/images/gallery-photos/Bazaart_FC0A08C3-B085-425D-AC86-D5472B34ECE6.PNG',
  '/images/gallery-photos/IMG_7560.jpeg',
  '/images/gallery-photos/IMG_7561.jpeg',
  '/images/gallery-photos/IMG_7562.jpeg',
  '/images/gallery-photos/IMG_7563.jpeg',
  '/images/gallery-photos/IMG_7564.jpeg',
  '/images/gallery-photos/IMG_7565.jpeg',
  '/images/gallery-photos/IMG_7566.jpeg',
  '/images/gallery-photos/IMG_7567.jpeg',
  '/images/gallery-photos/IMG_7568.jpeg',
  '/images/gallery-photos/IMG_7569.jpeg',
  '/images/gallery-photos/IMG_7571.jpeg',
  '/images/gallery-photos/IMG_7573.jpeg',
  '/images/gallery-photos/IMG_7575.jpeg',
  '/images/gallery-photos/IMG_7703.jpeg',
  '/images/gallery-photos/IMG_7704.jpeg',
  '/images/gallery-photos/IMG_7706.jpeg',
  '/images/gallery-photos/IMG_7708.jpeg',
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((p) => (p !== null ? (p - 1 + photos.length) % photos.length : null));
  const next = () => setLightboxIndex((p) => (p !== null ? (p + 1) % photos.length : null));

  return (
    <div className="min-h-screen bg-brand-light">
      <Header />
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(212,168,67,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full font-bold text-sm mb-4"
          >
            <Camera size={16} />
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Photo Gallery & Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            See the actual quality and transformations we deliver to pools across Tampa Bay.
          </motion.p>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white overflow-hidden">
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
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Slide the handle to see how we restore neglected pools into pristine backyard paradises.
            </p>
          </div>

          <div className="space-y-24">
            {galleryItems.map((item, i) => (
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
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Service Photos</h2>
            <p className="text-slate-600">Snapshots of weekly cleaning and chemistry maintenance.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={src}
                    alt={`Pool Ninja service photo ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/90 px-4 py-2 rounded-full text-sm">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-brand-blue text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want Your Pool to Look Like This?</h2>
          <p className="text-white/70 mb-8 text-lg">Call us today for a free estimate.</p>
          <a
            href="tel:8133803966"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-brand-gold/90 hover:shadow-xl transition-all"
          >
            <Phone size={22} />
            (813) 380-3966
          </a>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white cursor-pointer z-10" aria-label="Close">
              <X size={32} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white/80 hover:text-white cursor-pointer z-10" aria-label="Previous">
              <ChevronLeft size={40} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white/80 hover:text-white cursor-pointer z-10" aria-label="Next">
              <ChevronRight size={40} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={photos[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
