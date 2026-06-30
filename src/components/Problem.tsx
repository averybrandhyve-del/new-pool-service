import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Clock, Wrench } from 'lucide-react';

export default function Problem() {
    return (
        <section className="py-24 bg-brand-dark text-white pattern-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Spending Your Weekends <span className="text-brand-gold">Balancing Chemicals?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/80"
                    >
                        Owning a pool should be relaxing, but dealing with green water, algae outbreaks, and endless maintenance turns it into a second job.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: AlertCircle,
                            title: "Green, Cloudy Water",
                            desc: "Constantly fighting algae and struggling to keep the water balanced and safe for swimming."
                        },
                        {
                            icon: Clock,
                            title: "Lack of Time",
                            desc: "Spending hours every weekend skimming, brushing, and testing water instead of relaxing."
                        },
                        {
                            icon: Wrench,
                            title: "Inconsistent Service",
                            desc: "Pool companies that skip visits, send different technicians every week, and leave you guessing about your water's safety."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
                        >
                            <div className="bg-brand-gold/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-brand-gold/30">
                                <item.icon className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/70 leading-relaxed text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
