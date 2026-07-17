import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, CheckCircle2, ChevronRight, Phone, 
  Droplets, Zap, Settings, ShieldAlert, Sparkles 
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const servicesDetail = [
  {
    id: "chemical-care",
    title: "Chemical Care Plan",
    tagline: "Worry-free chemistry. We handle testing and chemicals; you do the rest.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
    description: "This plan is designed for homeowners who prefer to handle brushing, skimming debris, and vacuuming themselves. We keep the water chemistry perfect, safe, and balanced.",
    checklist: [
      "Weekly professional water testing (chlorine, pH, alkalinity, calcium, CYA)",
      "All standard balancing chemicals included",
      "Skimmer and pump baskets emptied",
      "Filter cleaned when needed",
      "A detailed service report with photos and chemistry readings sent after each visit"
    ],
    pricing: "Starting at $99 / Month"
  },
  {
    id: "signature-service",
    title: "Signature Service",
    tagline: "Our standard full service. Ideal for screened pools or light yard debris.",
    icon: Droplets,
    image: "/images/gallery-photos/Bazaart_1A5D566F-BEAE-4289-A6C0-3339A63E935B.JPEG",
    description: "This plan works best for screened pools or yards with minimal tree debris. We handle the chemistry, skimming, brushing, tile cleaning, and vacuuming as needed.",
    checklist: [
      "Weekly professional water testing (chlorine, pH, alkalinity, calcium, CYA)",
      "All standard balancing chemicals included",
      "Skimmer and pump baskets emptied",
      "Filter cleaned when needed",
      "Full surface skimming of debris",
      "Brushing walls and steps & tile washing",
      "Vacuum service when needed (typically up to 2 times per month)",
      "A detailed, email service report with photos and chemistry readings"
    ],
    pricing: "Starting at $140 / Month"
  },
  {
    id: "elite-service",
    title: "Elite Service",
    tagline: "Ultimate convenience. Complete, hands-off professional care.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800",
    description: "Most of our customers choose Elite so their pool is fully handled every week without needing to worry about maintenance. This is our most comprehensive and hands-off option.",
    checklist: [
      "Weekly professional water testing (chlorine, pH, alkalinity, calcium, CYA)",
      "All standard balancing chemicals and specialty chemicals (phosphates, algae, metal removers) included",
      "Skimmer and pump baskets emptied",
      "Filter cleaned on schedule of 4-6 weeks or weekly if needed",
      "Tile washing, brushing walls and steps & full surface skimming",
      "Vacuuming every single visit",
      "Minor repair/replacement of filter/pump lid o-rings and air relief valves",
      "A detailed, email service report with photos and chemistry readings",
      "Priority service scheduling if any issues arise"
    ],
    pricing: "$200 / Month",
    recommended: true
  }
];

export default function ServicesPage() {
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
            Professional Pool Care
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            NEW Pool Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Weekly Residential Pool Service
          </motion.p>
        </div>
      </section>

      {/* Client Portal & Invoicing Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-blue/5 border border-brand-blue/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">Client Portal & Invoicing</span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark">Secure Online Access to Your Account</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage your pool service easily with our secure client portal. Enjoy automatic monthly invoicing, set up automatic payments, and track your complete service history.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto shrink-0 text-left">
              {[
                { title: "Automatic Invoicing", desc: "Sent on the 1st of each month" },
                { title: "Flexible Payments", desc: "Manage autopay & save receipts" },
                { title: "Detailed Service History", desc: "Access reports, readings & photos" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-brand-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Lists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesDetail.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50`}
            >
              {/* Image / Stats Column */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-dark/95 backdrop-blur-sm text-brand-gold px-4 py-2 rounded-xl font-bold border border-brand-gold/30">
                    {service.pricing}
                  </div>
                  {service.recommended && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-dark px-4 py-2 rounded-xl font-bold shadow-lg text-xs uppercase tracking-wider">
                      Recommended
                    </div>
                  )}
                </div>
              </div>

              {/* Details Column */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <service.icon size={24} />
                  </div>
                  <span className="text-slate-400 font-bold tracking-wider text-sm uppercase">Service Details</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">{service.title}</h2>
                <p className="text-brand-blue font-semibold mb-6">{service.tagline}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">What We Do Checklist:</h4>
                <ul className="grid grid-cols-1 gap-3 mb-8">
                  {service.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-brand-gold shrink-0 mt-0.5" />
                      <span className="font-medium text-sm leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#/contact"
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-blue/20 transition-all cursor-pointer"
                >
                  Request This Service
                  <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Services / FAQ Teaser */}
      <section className="py-20 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Specialized Service?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            From tile cleaning to algae treatments and seasonal chemical balancing, we handle all unique pool projects. Get a fast response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8137332829"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-gold/90 transition-all"
            >
              <Phone size={22} />
              (813) 733-2829
            </a>
            <a
              href="/#/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              Message Us Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
