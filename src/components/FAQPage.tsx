import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const faqCategories = [
  {
    category: "General & Scheduling",
    questions: [
      {
        q: "Do I need to be home for the weekly pool service?",
        a: "No, you do not need to be home. As long as our technicians have clear, safe access to your pool area (unlocked gate, pets indoors) we can perform our service completely independently. We send a detailed report with photos immediately after completion so you know exactly when we were there and what was done."
      },
      {
        q: "What are your business hours?",
        a: "We service pools Monday through Friday, 8:00 AM to 5:00 PM. We are closed on weekends. For emergencies, you can call or text our main line, and we will get back to you as soon as possible."
      },
      {
        q: "Are there contract commitments?",
        a: "No. We believe in earning your business every month. Our weekly maintenance service is on a month-to-month basis, and you can pause or cancel service at any time with a 15-day notice before your next billing cycle."
      },
      {
        q: "How does billing work?",
        a: "We keep it simple. You will receive an automated monthly invoice on the 1st of each month for that month's service. We support all major credit cards and bank transfers, and you can set up automatic payments through our secure client portal."
      }
    ]
  },
  {
    category: "Water Chemistry & Swimmer Safety",
    questions: [
      {
        q: "How long should I wait to swim after chemical treatment?",
        a: "For standard weekly maintenance, we recommend waiting at least 1 hour after chemicals are added before swimming. If we perform an aggressive shock treatment or add granular algaecide, we advise waiting 24 hours or until chlorine levels return to safe swimming ranges (under 5 ppm)."
      },
      {
        q: "How often should my pool water be chemically tested?",
        a: "We test basic water chemistry (Chlorine, pH, and Total Alkalinity) every single week during our service visit. We perform a complete, in-depth analysis of stabilizer, salt, calcium hardness, and metal content once a month or as needed after heavy storms."
      },
      {
        q: "Why is my pool water cloudy?",
        a: "Cloudy water is typically caused by three things: poor filtration (dirty filter), chemical imbalance (low chlorine, high pH), or the early stages of algae growth. Our technicians will test the chemistry and inspect your filter flow rates to diagnose and clear up the water quickly."
      }
    ]
  },
  {
    category: "Equipment & Maintenance",
    questions: [
      {
        q: "How often does my pool filter need to be cleaned?",
        a: "For cartridge and D.E. filters, we recommend a deep chemical cleaning every 3 to 6 months depending on pool size, usage, and surrounding tree coverage. Sand filters should be backwashed every 2 to 4 weeks. High filter pressure (8-10 PSI above clean starting pressure) is a key indicator that a clean is required."
      },
      {
        q: "How long should I run my pool pump every day?",
        a: "As a general rule, we recommend running your pump long enough to turn over the entire volume of your pool's water at least once daily. This typically takes 8 to 10 hours in the summer and 6 to 8 hours in the winter. If you have a variable-speed pump, running it at lower speeds for longer hours is highly efficient."
      },
      {
        q: "What does it mean when my pool pressure gauge reads high?",
        a: "A high pressure reading on your filter gauge (typically 8-10 PSI above your clean starting pressure) means your filter is dirty and needs to be cleaned. We track your pool's baseline pressure after every filter clean so we know exactly when it's time for the next service. Simply let us know and we'll schedule a filter deep clean."
      }
    ]
  },
  {
    category: "Weather & Storm Prep",
    questions: [
      {
        q: "Do you service pools in the rain?",
        a: "Yes, we work through light to moderate Florida rain to keep your pool on schedule. However, for the safety of our technicians, we will pause service during active thunderstorms, lightning, or high-wind storm warnings. If we miss a cleaning due to severe weather, we will prioritize chemical balancing and leaf clearing once conditions are safe."
      },
      {
        q: "What should I do to prepare my pool for a hurricane?",
        a: "Do NOT drain your pool; keeping water in the pool provides structural weight to prevent it from popping out of the ground due to high groundwater pressure. Turn off power at the main circuit breaker to protect pump motors from electrical surges. Store all loose pool furniture, toys, and cleaning equipment inside. Super-chlorinate the pool to prevent algae growth from storm runoff."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setActiveQuestion(prev => (prev === id ? null : id));
  };

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
            <HelpCircle size={16} />
            Frequently Asked Questions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Pool Care FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Get clear, professional answers on pool chemistry, scheduling, equipment, and storm prep.
          </motion.p>
        </div>
      </section>

      {/* FAQ Categories & Accordions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {faqCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark border-b border-slate-200 pb-3">
                {cat.category}
              </h2>
              
              <div className="space-y-4">
                {cat.questions.map((item, qIdx) => {
                  const qId = `${catIdx}-${qIdx}`;
                  const isOpen = activeQuestion === qId;
                  
                  return (
                    <div 
                      key={item.q}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleQuestion(qId)}
                        className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-dark hover:text-brand-blue transition-colors cursor-pointer gap-4"
                      >
                        <span className="text-base sm:text-lg">{item.q}</span>
                        <ChevronDown 
                          size={20} 
                          className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 text-slate-600 border-t border-slate-50 text-sm sm:text-base leading-relaxed bg-brand-light/20">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Prompt */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <MessageSquare size={36} className="text-brand-gold mx-auto" />
          <h2 className="text-3xl font-bold">Have another question?</h2>
          <p className="text-white/70 text-lg">
            Our team is always happy to explain our processes and keep you informed about your pool's condition.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:8133803966"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-gold/90 transition-all"
            >
              <Phone size={20} />
              (813) 380-3966
            </a>
            <a
              href="/#/contact"
              className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
            >
              Send Us a Message
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
