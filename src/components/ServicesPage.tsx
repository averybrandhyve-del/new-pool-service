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
    id: "weekly-maintenance",
    title: "Weekly Full Service Maintenance",
    tagline: "Total peace of mind. Consistent, meticulous care every single week.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
    description: "Our comprehensive weekly service is designed to keep your pool water safe, healthy, and crystal clear. We don't just throw in chemicals and leave; we perform a thorough cleaning and water quality check during every visit.",
    checklist: [
      "Water chemistry testing & balancing (Chlorine, pH, Alkalinity, Calcium, Stabilizer, Salt)",
      "Surface skimming to remove leaves, bugs, and organic debris",
      "Thorough vacuuming of the pool floor",
      "Wall, step, and tile line brushing to prevent algae growth",
      "Emptying of skimmer, pump, and automatic cleaner baskets",
      "Equipment monitoring to catch early warning signs",
      "Email service reports sent instantly after every visit with photos and chemical log"
    ],
    pricing: "Starting at $149 / Month"
  },
  {
    id: "green-cleanups",
    title: "Green Pool Cleanups & Shock Treatments",
    tagline: "Turn your green swamp back into a sparkling oasis in 48-72 hours.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
    description: "A green pool is not just an eyesore — it's a breeding ground for mosquitoes and harmful bacteria. Our aggressive green pool cleanup process eliminates algae, removes heavy organic loading, and sanitizes the water safely.",
    checklist: [
      "Aggressive algaecide and chemical shock dosing",
      "Manual algae scrubbing of all surfaces",
      "Vacuum-to-waste of dead algae and heavy debris (bypassing the filter)",
      "Multiple filter deep-clean cycles during the process",
      "Water clarification and advanced flocculation treatments",
      "Full water balancing to restore safety and swimmer comfort",
      "Water chemistry follow-up to identify why the pool went green"
    ],
    pricing: "Custom Estimate Required"
  },
  {
    id: "filter-cleans",
    title: "Regular Filter Deep Cleans",
    tagline: "Protect your equipment, lower electric bills, and keep water clear.",
    icon: ShieldAlert,
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800",
    description: "A dirty filter restricts water flow, forcing your pump to work harder, consume more electricity, and balance chemicals poorly. We recommend a full filter teardown and chemical cleaning every 3 to 6 months.",
    checklist: [
      "Complete filter disassembly and grid/cartridge extraction",
      "Thorough chemical descaling and pressure washing of cartridges/grids",
      "Internal manifold and tank flush to remove caked-on debris",
      "Check of O-rings, air relief valves, and filter housing condition",
      "Reassembly with professional lubrication of sealing gaskets",
      "Post-clean pressure monitoring to establish baseline flow rate"
    ],
    pricing: "Starting at $110 / Clean"
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
            Our Pool Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            From weekly balancing to deep filter cleans, we keep your pool pristine.
          </motion.p>
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
              href="tel:8133803966"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-gold/90 transition-all"
            >
              <Phone size={22} />
              (813) 380-3966
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
