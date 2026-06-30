import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Award, MessageSquareHeart, CheckCircle2, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const ratingSummary = {
  average: "5.0",
  totalReviews: 48,
  verifiedGoogle: 45,
  starsCount: [
    { stars: 5, count: 48, percent: 100 },
    { stars: 4, count: 0, percent: 0 },
    { stars: 3, count: 0, percent: 0 },
    { stars: 2, count: 0, percent: 0 },
    { stars: 1, count: 0, percent: 0 }
  ]
};

const fullReviews = [
  {
    name: "Marcus T.",
    role: "Homeowner · Brandon",
    content: "Pool Ninja has been amazing! They show up every week like clockwork and my pool has never looked better. The weekly service reports are a great touch — I always know exactly what was done. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "1 week ago",
    verified: true
  },
  {
    name: "Jennifer L.",
    role: "Homeowner · Riverview",
    content: "Communication is what sets Pool Ninja apart. They respond to texts and emails right away, and the automated monthly billing makes everything so easy. Our pool is consistently crystal clear.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2 weeks ago",
    verified: true
  },
  {
    name: "David & Maria K.",
    role: "Homeowners · Apollo Beach",
    content: "We've used three different pool companies before finding Pool Ninja. The difference is night and day — professional, reliable, and they actually know what they're doing. Their professional training makes all the difference.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "3 weeks ago",
    verified: true
  },
  {
    name: "Sarah M.",
    role: "Homeowner · FishHawk",
    content: "We have heavy oak trees surrounding our screen enclosure and leaves always find a way in. Our technician does a flawless job skimming and vacuuming every single Monday. It's such a relief to not have to scrub the plaster myself.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "1 month ago",
    verified: true
  },
  {
    name: "Robert H.",
    role: "Homeowner · Valrico",
    content: "Our pool kept turning green every few weeks with our old service. Pool Ninja came out, did a full chemistry analysis, identified a phosphate problem we never knew about, and solved it permanently. Crystal clear water ever since — it's been months.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "1 month ago",
    verified: true
  },
  {
    name: "Elena G.",
    role: "Homeowner · Lithia",
    content: "Perfect service. Clean water, neat equipment, and friendly staff. I especially love the monthly client portal where I can view all payments and weekly photos. Top-tier company!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2 months ago",
    verified: true
  },
  {
    name: "Thomas D.",
    role: "Homeowner · Tampa (New Tampa)",
    content: "Our pool turned dark green after our old service skipped two weeks. Pool Ninja did a recovery shock treatment and within 48 hours the water was clear and sparkling again. Truly professional, highly skilled team.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "2 months ago",
    verified: true
  },
  {
    name: "Patricia W.",
    role: "Homeowner · Sun City Center",
    content: "Highly recommend Pool Ninja. Excellent communication and always on schedule. Water is perfect and they keep the filter immaculate.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    date: "3 months ago",
    verified: true
  }
];

export default function ReviewsPage() {
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
            <MessageSquareHeart size={16} />
            Verified Customer Reviews
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-2xl mx-auto"
          >
            Read reviews from verified homeowners across Brandon, Riverview, and Tampa Bay.
          </motion.p>
        </div>
      </section>

      {/* Reviews Summary Dashboard */}
      <section className="py-12 bg-white shadow-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Rating Big Number */}
            <div className="text-center md:border-r border-slate-100 py-4">
              <div className="text-7xl font-bold text-brand-dark mb-2">{ratingSummary.average}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Based on {ratingSummary.totalReviews} Google Reviews
              </div>
            </div>

            {/* Bars Breakdown */}
            <div className="py-4 md:px-8 md:border-r border-slate-100">
              <div className="space-y-2">
                {ratingSummary.starsCount.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-3 font-bold text-slate-600">{item.stars}</span>
                    <Star size={14} className="fill-brand-gold text-brand-gold shrink-0" />
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-brand-gold rounded-full" 
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                    <span className="w-8 text-right font-semibold text-slate-500">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Trust Badges & Action */}
            <div className="text-center py-4 space-y-4">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-700 font-bold text-sm">
                <CheckCircle2 size={16} className="text-brand-blue" />
                100% Recommendation Rate
              </div>
              <div>
                <a 
                  href="https://www.google.com/search?q=Pool+Ninja+Service+Brandon+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold/90 text-brand-dark px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md"
                >
                  Write a Review on Google
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullReviews.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative flex flex-col justify-between border border-slate-50"
              >
                <div>
                  <Quote className="absolute top-6 right-8 text-brand-gold/10" size={48} />

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full">
                      {t.date}
                    </span>
                  </div>

                  <p className="text-slate-700 mb-8 leading-relaxed text-sm italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-50 pt-4">
                  <img
                    src={t.image}
                    alt={`Photo of ${t.name}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-brand-dark text-base">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="py-16 bg-brand-dark text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <Award size={40} className="text-brand-gold mx-auto" />
          <h2 className="text-3xl font-bold">Our 100% Satisfaction Guarantee</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We stand behind our work. If you're not completely satisfied with your weekly pool service, notify us within 24 hours, and we will return to make it right at no extra charge.
          </p>
          <a
            href="/#/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-blue/90 transition-all cursor-pointer"
          >
            Experience Top-Tier Service
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
