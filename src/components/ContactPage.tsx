import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'weekly',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API submission timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
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
            <ShieldCheck size={16} />
            Quick Estimates & Support
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Contact Pool Ninja
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
                  <a href="tel:8133803966" className="text-xl font-semibold text-brand-blue hover:underline">
                    (813) 380-3966
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
                  <a href="mailto:poolninjaservice@gmail.com" className="text-lg font-semibold text-brand-blue hover:underline break-all">
                    poolninjaservice@gmail.com
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
                    Based in Brandon, FL. We run weekly service routes across Brandon, Riverview, Valrico, FishHawk, Lithia, Apollo Beach, and Tampa.
                  </p>
                  <a href="/#/areas" className="inline-flex items-center text-brand-gold font-bold hover:underline text-sm gap-1">
                    View full map and ZIP codes &rarr;
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50">
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-dark">Estimate Request Sent!</h3>
                    <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Pool Ninja Service. Our team has received your information, and we will text or call you within 2 business hours to discuss your pool.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">Request a Free Estimate</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(813) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-slate-700 mb-2">Service Address *</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Street Address, City"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium bg-white"
                      >
                        <option value="weekly">Weekly Full Service Maintenance</option>
                        <option value="green-cleanup">Green Pool Shock Cleanup</option>
                        <option value="filter-clean">Filter Deep Cleaning</option>
                        <option value="other">Other / General Question</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message or Special Notes</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your pool (size, tree coverage, or specific equipment issues)..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-slate-800 text-sm font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Quote Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
