import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "Marcus T.",
    role: "Homeowner · Brandon",
    content: "Pool Ninja has been amazing! They show up every week like clockwork and my pool has never looked better. The weekly service reports are a great touch — I always know exactly what was done. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    source: "Google Review"
  },
  {
    name: "Jennifer L.",
    role: "Homeowner · Riverview",
    content: "Communication is what sets Pool Ninja apart. They respond to texts and emails right away, and the automated monthly billing makes everything so easy. Our pool is consistently crystal clear.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    source: "Google Review"
  },
  {
    name: "David & Maria K.",
    role: "Homeowners · Apollo Beach",
    content: "We've used three different pool companies before finding Pool Ninja. The difference is night and day — professional, reliable, and they actually know what they're doing. Their professional training makes all the difference.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    source: "Google Review"
  }
];

export default function Testimonials({ teaser = false }: { teaser?: boolean }) {
  const navigate = useNavigate();
  const displayItems = teaser ? testimonials.slice(0, 2) : testimonials;

  return (
    <section id="testimonials" className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-dark border border-brand-gold/20 px-4 py-2 rounded-full font-bold text-sm mb-4"
          >
            <Star size={16} className="fill-brand-gold text-brand-gold" />
            Rated on Google
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Real reviews from real homeowners across Tampa Bay.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {displayItems.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative border border-slate-50"
            >
              <Quote className="absolute top-6 right-8 text-brand-gold/10" size={48} />

              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded-full">{t.source}</span>
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.google.com/search?q=Pool+Ninja+Service+Brandon+FL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-bold hover:underline cursor-pointer"
          >
            Read all reviews on Google
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
          </a>
          {teaser && (
            <a
              href="/reviews"
              onClick={(e) => { e.preventDefault(); navigate('/reviews'); }}
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
            >
              Read Verified Client Stories
              <ChevronRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
