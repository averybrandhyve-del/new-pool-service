import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, ShieldCheck } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function ContactPage() {
  useEffect(() => {
    const scriptUrl = 'https://links.brandhyve.com/js/form_embed.js';
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.body.appendChild(script);
    // The vendor's page-level listener initializes new iframes on route re-entry.
    // Keep the singleton script across StrictMode effects and route unmounts.
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
            <ShieldCheck size={16} />
            Quick Estimates & Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Contact NEW Pool Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Get a free quote or ask us anything about your pool. We respond to all inquiries within 2 hours.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Phone card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 flex gap-5">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-1">Call or Text</h3>
                  <a href="tel:8137332829" className="text-xl font-semibold text-brand-blue hover:underline">
                    (813) 733-2829
                  </a>
                  <p className="text-slate-400 text-sm mt-1">Free estimates & emergency inquiries</p>
                </div>
              </div>

              {/* Email card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 flex gap-5">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-1">Email Us</h3>
                  <a href="mailto:Newpoolservicellc@gmail.com" className="text-lg font-semibold text-brand-blue hover:underline break-all">
                    Newpoolservicellc@gmail.com
                  </a>
                  <p className="text-slate-400 text-sm mt-1">General inquiries & business proposals</p>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 flex gap-5">
                <div className="w-12 h-12 bg-brand-gold/10 text-brand-dark rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-2">Service Hours</h3>
                  <div className="text-slate-600 text-sm space-y-1">
                    <p className="flex justify-between gap-8"><span>Monday – Friday:</span> <span className="font-semibold text-brand-dark">8:00 AM – 5:00 PM</span></p>
                    <p className="flex justify-between gap-8 text-slate-400"><span>Saturday – Sunday:</span> <span className="font-medium">Closed</span></p>
                  </div>
                </div>
              </div>

              {/* Coverage map callout */}
              <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full translate-x-10 -translate-y-10 blur-xl"></div>
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <MapPin size={20} />
                    <h4 className="font-bold text-lg">Our Service Coverage</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Based in Riverview, FL. We run weekly service routes across Riverview, Fishhawk, Brandon, and Lithia.
                  </p>
                  <a href="/#/areas" className="inline-flex items-center text-brand-gold font-bold hover:underline text-sm gap-1">
                    View full map and ZIP codes &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 min-w-0">
              <div style={{ minHeight: 1330 }}>
                <iframe
                  src="https://links.brandhyve.com/widget/form/0hZjVULCmgEyS1P1eMV5"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                  id="inline-0hZjVULCmgEyS1P1eMV5"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website form"
                  data-height="1236"
                  data-layout-iframe-id="inline-0hZjVULCmgEyS1P1eMV5"
                  data-form-id="0hZjVULCmgEyS1P1eMV5"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="Website form"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
