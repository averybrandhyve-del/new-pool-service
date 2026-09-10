/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TrustSection from './components/TrustSection';
import Neighborhoods from './components/Neighborhoods';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Bible Verse Quote Banner */}
        <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-white to-brand-blue/5 border-y border-slate-100 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-2" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #007e81 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
            <p className="text-2xl md:text-3.5xl font-serif italic text-brand-dark leading-relaxed max-w-3xl mx-auto">
              "If anyone is in Christ, he is a new creation. The old has passed away; the new has come."
            </p>
            <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">
              2 Corinthians 5:17
            </p>
          </div>
        </section>

        <Problem />
        <Services teaser={true} />
        <TrustSection />
        <Testimonials teaser={true} />
        <Neighborhoods teaser={true} />
        
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-brand-dark to-brand-blue text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 0%, transparent 60%)' }} />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Experience the NEW Pool Service Difference?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Get in touch today for a free on-site water chemistry analysis and custom service estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8137332829"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-gold/90 transition-all cursor-pointer"
              >
                Call (813) 733-2829
              </a>
              <a
                href="/#/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
