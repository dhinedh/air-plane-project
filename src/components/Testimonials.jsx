import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya & Aravind",
      avatar: "PA",
      text: "DCRUISE planned our Maldives honeymoon perfectly. Every detail — from overwater villa to seaplane transfers — was flawless. Truly luxury travel!",
      rating: 5,
      type: "Honeymoon Trip – Maldives",
      bg: "from-rose-500/20 to-pink-600/10",
    },
    {
      id: 2,
      name: "TechCorp Team – 45 pax",
      avatar: "TC",
      text: "Outstanding group coordination and corporate rates. The Goa offsite was entirely seamless. DCRUISE is the gold standard for corporate group travel.",
      rating: 5,
      type: "Corporate Group Tour – Goa",
      bg: "from-ocean-500/20 to-aqua-500/10",
    },
    {
      id: 3,
      name: "Suresh Family",
      avatar: "SF",
      text: "Our Kerala family trip was magical — houseboats, resorts, Ayurveda. DCRUISE handled everything. Tension-free and beyond memorable!",
      rating: 5,
      type: "Family Package – Kerala",
      bg: "from-amber-500/20 to-yellow-500/10",
    }
  ];

  return (
    <section className="py-28 bg-[#060d1a] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-400/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex items-center gap-5 mb-20"
        >
          <div className="h-px w-16 bg-amber-400"></div>
          <div>
            <p className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Client Stories</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">What Travelers Say</h2>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.id}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className={`relative rounded-2xl p-8 border border-white/8 bg-gradient-to-br ${r.bg} backdrop-blur-sm overflow-hidden group hover:border-amber-400/30 transition-colors`}
            >
              <Quote className="absolute top-5 right-5 w-12 h-12 text-amber-400/10" />

              <div className="flex gap-1.5 mb-6">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-white/70 text-base leading-relaxed mb-8 font-light">
                "{r.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/8 pt-6">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center font-black text-amber-300 text-sm flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <h4 className="font-black text-white text-sm">{r.name}</h4>
                  <p className="text-amber-400/70 text-xs font-semibold mt-0.5">{r.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.25em] mb-6 font-medium">Ready to create your story?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-[#060d1a] font-black text-base px-10 py-4 rounded-full transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)]"
          >
            Plan My Trip Now →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
