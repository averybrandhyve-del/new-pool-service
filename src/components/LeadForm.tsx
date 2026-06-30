import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone } from 'lucide-react';

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section id="quote" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/20 rotate-12 translate-x-1/3 scale-150 blur-3xl z-0 rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Ready for a <br />
                            <span className="text-brand-gold">Worry-Free Pool Season?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg"
                        >
                            Get a custom quote for your pool needs. Fill out the form or give us a call directly to speak with a pool expert today.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-6"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                <Phone className="text-brand-gold" size={32} />
                            </div>
                            <div>
                                <p className="text-white/60 font-medium mb-1">Call for immediate service</p>
                                <a href="tel:8133803966" className="text-3xl font-bold text-white hover:text-brand-gold transition-colors">
                                    (813) 380-3966
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 w-full max-w-xl bg-white p-8 md:p-10 rounded-[2rem] shadow-2xl relative"
                    >
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-3xl font-bold text-brand-dark mb-4">Quote Requested!</h3>
                                <p className="text-slate-600 text-lg">
                                    Thank you for reaching out. A Pool Ninja expert will contact you shortly to provide your custom quote.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-brand-dark mb-6">Get My Free Quote</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark">First Name</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark">Last Name</label>
                                        <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark">Phone Number</label>
                                        <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="(555) 123-4567" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-brand-dark">Email Address</label>
                                        <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-dark">Property Address (Optional)</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all" placeholder="123 Pool Ln, Tampa, FL" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-dark">Service Needed</label>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all appearance-none cursor-pointer">
                                        <option>Weekly Maintenance</option>
                                        <option>Green Pool Cleanup</option>
                                        <option>Filter Deep Clean</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-dark font-bold text-lg py-4 rounded-xl shadow-lg shadow-brand-gold/30 transition-all flex justify-center items-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
