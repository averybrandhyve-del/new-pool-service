import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Testimonials({ teaser = false }: { teaser?: boolean }) {
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
    <section id="testimonials" className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            Real reviews from real homeowners in our service areas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full min-h-[300px] bg-white p-4 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50"
        >
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/kDp1vEDaoI9Mq8HxU8Tk"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%', border: 'none' }}
            title="Google Reviews Carousel"
          />
        </motion.div>
      </div>
    </section>
  );
}

