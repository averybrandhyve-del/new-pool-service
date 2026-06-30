import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Droplets, Info, Landmark, Check, Phone } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const areasDetail = [
  {
    name: "Tampa",
    landmark: "Tampa Riverwalk & Bayshore Boulevard",
    image: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&q=80&w=800",
    description: "Servicing residential pools across the heart of Tampa. Our routes include South Tampa, New Tampa, Carrollwood, and Westchase.",
    waterChemistryTip: "Tampa's high summer temperatures increase water evaporation, concentrating minerals. We closely monitor Calcium Hardness and Total Dissolved Solids (TDS) to prevent scaling on your pool plaster.",
    features: ["Evaporation monitoring", "Urban pollen filtration", "Summer stormwater balancing"]
  },
  {
    name: "Brandon",
    landmark: "Westfield Brandon & Brandon Parkway",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Brandon_Mall_Brandon_Florida.jpg",
    description: "Our home base. We provide weekly cleaning and consistent chemical care throughout Brandon, Valrico, and Bloomingdale.",
    waterChemistryTip: "Brandon's mature oak trees and pine canopies dump heavy organic debris, especially in spring. This organic loading depletes free chlorine and spikes phosphate levels. We perform preventive phosphate treatments and frequent skimmer clears.",
    features: ["Heavy foliage cleanup", "Phosphate management", "Spring pollen filtration"]
  },
  {
    name: "Riverview",
    landmark: "Alafia River State Park",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Hurrah_Lake_-_Alafia_River_State_Park.jpg",
    description: "Reliable, weekly maintenance for the growing communities in Riverview, Gibsonton, and South Hillsborough county.",
    waterChemistryTip: "Proximity to the Alafia River basin brings high local humidity and airborne organic spores. We maintain slightly higher stabilizer (CYA) and chlorine residuals to protect against black algae spores common in river areas.",
    features: ["Humidity spore defense", "Algae prevention shocks", "Weekly tile line brushing"]
  },
  {
    name: "Apollo Beach",
    landmark: "Apollo Beach Manatee Viewing Center & Canals",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Boardwalk_leading_towards_the_water%2C_overlooked_by_Big_Bend_Power_Station%2C_at_Manatee_Viewing_Center%2C_Apollo_Beach%2C_Florida%2C_on_21_March_2024.jpg",
    description: "Expert saltwater pool maintenance along the Apollo Beach canals, Ruskin, and coastal areas.",
    waterChemistryTip: "Salt-laden sea air can accelerate corrosion on metal pool components. We monitor salt-system cells closely, use corrosion-resistant chemicals, and treat your water to protect surfaces and equipment longevity.",
    features: ["Salt-air chemistry balancing", "Salt cell chemical washing", "Corrosion prevention treatments"]
  },
  {
    name: "FishHawk & Lithia",
    landmark: "Lithia Springs & FishHawk Ranch Trails",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/The_swimming_area_at_Lithia_Springs_Park%2C_Florida_January_4%2C_2015.jpg",
    description: "Top-tier pool services for the beautiful wooded communities of FishHawk, Lithia, and Valrico.",
    waterChemistryTip: "Heavy pine straw and oak leaves combined with acidic soils in naturally wooded areas can lower pool pH and alkalinity. We check alkalinity weekly and buffer your water to protect your pool plaster and tile surfaces.",
    features: ["pH buffer management", "Pine straw debris clearing", "Natural wooded spore defense"]
  }
];

const zipCodes = [
  { region: "Tampa", zips: ["33602", "33606", "33609", "33611", "33618", "33624", "33626", "33629", "33647"] },
  { region: "Brandon & Valrico", zips: ["33510", "33511", "33594", "33596"] },
  { region: "Riverview", zips: ["33569", "33578", "33579"] },
  { region: "Apollo Beach & Ruskin", zips: ["33572", "33570", "33573"] },
  { region: "Lithia & FishHawk", zips: ["33547"] }
];

export default function AreasPage() {
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
            <Compass size={16} />
            Hillsborough County Coverage
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Service Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Keeping pools crystal clear and chemically balanced across Brandon, Riverview, and Tampa.
          </motion.p>
        </div>
      </section>

      {/* Areas Detail Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {areasDetail.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50`}
            >
              {/* Photo Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg group">
                  <img
                    src={area.image}
                    alt={`${area.name} pool service`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-dark/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10">
                    <Landmark size={16} className="text-brand-gold" />
                    <span className="text-xs font-semibold">{area.landmark}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-brand-gold">
                  <MapPin size={24} />
                  <span className="text-2xl font-bold uppercase tracking-wider">{area.name}</span>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed">{area.description}</p>

                {/* Features Checklist */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Local Route Focus:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                        <Check size={16} className="text-brand-gold shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Water chemistry tip block */}
                <div className="bg-brand-light border-l-4 border-brand-blue p-5 rounded-r-2xl">
                  <div className="flex items-center gap-2 text-brand-blue font-bold mb-2">
                    <Droplets size={18} />
                    Local Water Chemistry Tip
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {area.waterChemistryTip}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Served ZIP Codes Directory */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <Info size={32} className="text-brand-blue mx-auto" />
            <h2 className="text-3xl font-bold text-brand-dark">Serviced ZIP Codes</h2>
            <p className="text-slate-600">Check if your neighborhood falls within our weekly routes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zipCodes.map((item) => (
              <div key={item.region} className="bg-brand-light p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-brand-dark text-lg mb-3 pb-2 border-b border-slate-200">
                  {item.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.zips.map(zip => (
                    <span 
                      key={zip} 
                      className="bg-white px-3 py-1 rounded-lg text-sm font-semibold text-slate-600 border border-slate-200 shadow-sm"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-brand-blue text-center text-white">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Don't see your ZIP code?</h2>
          <p className="text-white/70 text-lg">
            We are constantly expanding our service routes. Get in touch to see if we can accommodate your pool.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:8133803966"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-gold/90 transition-all cursor-pointer"
            >
              <Phone size={20} />
              (813) 380-3966
            </a>
            <a
              href="/#/contact"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-bold transition-all"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
