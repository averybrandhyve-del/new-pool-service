import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Clock } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-16 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Excellence. Reliability. <br />Communication.
            </motion.h2>
            <p className="text-white/70 text-lg mb-8">
              At Pool Ninja Service, we focus on what matters most: high-quality service,
              reliability, strong communication, and professional knowledge. Our professional
              technicians bring 5+ years of industry experience to every pool we maintain.
              We're not just cleaning pools — we're building trust with every visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-bold">Professionally Trained</span>
              <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-bold">Weekly Reports</span>
              <span className="bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-bold">Client Portal</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Experienced", sub: "5+ Years Experience", icon: Award },
              { label: "Reliable", sub: "Show Up Every Week", icon: Clock },
              { label: "Transparent", sub: "Weekly Reports", icon: ShieldCheck },
              { label: "Responsive", sub: "Text, Email, Call", icon: Users }
            ].map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center"
              >
                <badge.icon size={24} className="text-brand-gold mx-auto mb-2" />
                <div className="text-brand-gold font-bold text-xl mb-1">{badge.label}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider font-semibold">{badge.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
