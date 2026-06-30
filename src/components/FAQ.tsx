import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What does your weekly pool service include?",
        answer: "Every visit includes skimming the pool surface, vacuuming debris, brushing walls and steps, emptying pump and skimmer baskets, cleaning filters, tile cleaning, equipment monitoring, and full chemical balancing. It's a comprehensive service — we handle everything."
    },
    {
        question: "Do you send service reports?",
        answer: "Yes! After every visit, we email you a detailed weekly service report with notes on what was done, chemical readings, and any observations about your equipment. You'll always know exactly what happened during each visit."
    },
    {
        question: "What are your business hours?",
        answer: "We service pools Monday through Friday, 8:00 AM to 5:00 PM. We're closed on weekends. You can reach us by phone, text, or email anytime and we'll respond as quickly as possible."
    },
    {
        question: "Are your technicians professionally trained?",
        answer: "Absolutely. Our technicians undergo rigorous professional training, meaning we have the knowledge and experience to properly maintain your pool's water chemistry and equipment."
    },
    {
        question: "How does billing work?",
        answer: "We keep it simple. You'll receive an automatic monthly invoice on the 1st of each month. We also have a client portal where you can manage payments and view your service history anytime."
    },
    {
        question: "What areas do you serve?",
        answer: "We serve Tampa, Brandon, Apollo Beach, Riverview, FishHawk, Lithia, and surrounding neighborhoods. If you're not sure if we cover your area, give us a call at (813) 380-3966 and we'll let you know!"
    },
    {
        question: "Do I need to be home during service?",
        answer: "Not at all. Most of our clients aren't home during their scheduled visits. We just need access to the pool area. After each visit, you'll receive a service report via email so you'll know exactly what was done."
    },
    {
        question: "How do I get started?",
        answer: "Just give us a call at (813) 380-3966 or email poolninjaservice@gmail.com. We'll schedule a time to come look at your pool, discuss your needs, and get you set up on a weekly schedule. It's that easy!"
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full font-bold text-sm mb-4"
                    >
                        <HelpCircle size={16} />
                        Common Questions
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brand-dark mb-4"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600"
                    >
                        Everything you need to know about Pool Ninja Service.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-brand-dark pr-4">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`text-brand-gold shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
