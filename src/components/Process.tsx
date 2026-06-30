import React from 'react';
import { motion } from 'motion/react';
import { MousePointerClick, Wrench, Smile } from 'lucide-react';

export default function Process() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-6"
                    >
                        How Simple <span className="text-brand-gold">It Is</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600"
                    >
                        Getting started with Pool Ninja is as easy as 1-2-3. We take over the hard work immediately so you can get back your weekends.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[16%] w-[68%] h-0.5 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 z-0"></div>

                    {[
                        {
                            step: "01",
                            title: "Request a Quote",
                            desc: "Fill out our quick form or call us directly. We'll provide a transparent estimate based on your pool's specific needs.",
                            icon: MousePointerClick
                        },
                        {
                            step: "02",
                            title: "We Inspect & Service",
                            desc: "Our professional technician evaluates your pool equipment, balances the chemistry, and performs a deep clean.",
                            icon: Wrench
                        },
                        {
                            step: "03",
                            title: "You Enjoy Your Pool",
                            desc: "Stop worrying about maintenance and chemistry. Just jump in, relax, and enjoy crystal clear water all year round.",
                            icon: Smile
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.15 }}
                            className="relative z-10 bg-white border border-slate-100 rounded-[2rem] p-8 hover:shadow-2xl hover:shadow-brand-gold/10 transition-shadow text-center group"
                        >
                            <div className="w-20 h-20 bg-brand-dark group-hover:bg-brand-gold transition-colors text-brand-gold group-hover:text-brand-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-200 flex-col border-4 border-white">
                                <item.icon size={28} className="mb-0.5" />
                                <span className="text-[10px] font-bold tracking-widest uppercase">{item.step}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
