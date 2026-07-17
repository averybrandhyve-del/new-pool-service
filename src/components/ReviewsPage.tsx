import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, MessageSquareHeart, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function ReviewsPage() {
  useEffect(() => {
    // Dynamically load the Reputation Hub review widget script
    const scriptId = 'reputation-hub-widget-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://reputationhub.site/reputation/assets/review-widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-light">
      <Header />

      {/* Banner */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(212,168,67,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full font-bold text-sm mb-4"
          >
            <MessageSquareHeart size={16} />
            Verified Customer Reviews
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Read reviews from verified homeowners in our service areas.
          </motion.p>
        </div>
      </section>

      {/* Reviews Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full min-h-[400px] bg-white p-4 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50"
          >
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/kDp1vEDaoI9Mq8HxU8Tk"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: '100%', width: '100%', border: 'none' }}
              title="Google Reviews Widget"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <Award size={40} className="text-brand-gold mx-auto" />
          <h2 className="text-3xl font-bold">Our 100% Satisfaction Guarantee</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We stand behind our work. If you're not completely satisfied with your weekly pool service, notify us within 24 hours, and we will return to make it right at no extra charge.
          </p>
          <a
            href="/#/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
          >
            Experience Top-Tier Service
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
