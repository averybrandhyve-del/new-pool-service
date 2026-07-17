import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, X, ChevronLeft, ChevronRight, Phone, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const photos = [
  '/images/gallery-photos/Bazaart_1A5D566F-BEAE-4289-A6C0-3339A63E935B.JPEG',
  '/images/gallery-photos/Bazaart_1CD77CAB-3921-4E2F-A271-C292A0BAEF6B.JPEG',
  '/images/gallery-photos/Bazaart_429025A9-8342-4190-BB5C-395FCFDFD41A.JPEG',
  '/images/gallery-photos/Bazaart_44B71909-0CE5-4210-A379-DD1AAFA860EF.JPEG',
  '/images/gallery-photos/Bazaart_55AED6F7-D27C-4A0C-9D2D-952CE1E1A27E.JPEG',
  '/images/gallery-photos/Bazaart_8918DDA8-383C-48D5-BE32-D6F7AD905A90.JPEG',
  '/images/gallery-photos/Bazaart_A972153E-2ECD-49D9-A0F7-D6649A5398B3.JPEG',
  '/images/gallery-photos/Bazaart_BC00EB58-FACA-416E-820F-F30CAF32ABCA.JPEG',
  '/images/gallery-photos/Bazaart_EA54699A-AD05-4404-8FB8-03AF9FB1A7CA.JPEG',
  '/images/gallery-photos/Bazaart_EAB6DF71-E58C-477F-A6D2-4EB9B2E8A335.JPEG',
  '/images/gallery-photos/Bazaart_F09A9803-5D31-4C12-BE6E-AEACC815AE12.JPEG',
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
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            See the actual quality we deliver to pools across Riverview, Fishhawk, Brandon, and Lithia.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
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
                    alt={`NEW Pool Service photo ${i + 1}`}
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
            href="tel:8137332829"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-brand-gold/90 hover:shadow-xl transition-all"
          >
            <Phone size={22} />
            (813) 733-2829
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
