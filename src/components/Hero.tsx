import React from 'react';
import { Star, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000"
          alt="Crystal clear pool maintained by Pool Ninja Service"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 px-4 py-2 rounded-full mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">Tampa Bay's Pool Ninja</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Crystal Clear Water. <br />
            <span className="text-brand-gold">Zero Hassle.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-white/90 mb-10 leading-relaxed"
          >
            Tampa's most reliable pool service. We handle the chemicals, cleaning, and upkeep so you can just enjoy the swim.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="group bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-8 py-4 rounded-full text-lg font-bold shadow-2xl shadow-brand-gold/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Get Your Free Quote
            </a>
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); navigate('/services'); }}
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition-all cursor-pointer text-center"
            >
              See Pricing
            </a>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              "No Contracts",
              "100% Satisfaction",
              "Weekly Reports",
              "Professional Service"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 size={18} className="text-brand-gold" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
