import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, Plane } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    num: '01',
    icon: <Search className="w-8 h-8" />,
    title: 'Explore & Choose',
    desc: 'Browse our curated destination packages — from Kerala backwaters to Maldives overwater villas. Filter by budget, duration, or type.',
  },
  {
    num: '02',
    icon: <CalendarCheck className="w-8 h-8" />,
    title: 'Personalise & Book',
    desc: 'Share your preferences with our travel expert. We build a custom itinerary, handle all bookings, and confirm everything within 24 hours.',
  },
  {
    num: '03',
    icon: <Plane className="w-8 h-8" />,
    title: 'Travel & Enjoy',
    desc: 'Show up and experience your dream vacation stress-free. Our concierge is just a call away at every step of your journey.',
  },
];

const HowItWorks = () => (
  <section className="py-28 bg-[#082f49] relative overflow-hidden">
    {/* Decorative number watermark */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none pr-8">
      3
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="flex items-center gap-5 mb-20"
      >
        <div className="h-px w-16 bg-amber-400"></div>
        <div>
          <p className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Simple Process</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">How It Works</h2>
        </div>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
      >
        {/* Connector dashed line between steps on desktop */}
        <div className="hidden md:block absolute top-12 left-[calc(16.6%)] right-[calc(16.6%)] h-px border-t border-dashed border-amber-400/20 z-0"></div>

        {steps.map((step, i) => (
          <motion.div key={i} variants={fadeUp} className="relative z-10 group">

            {/* Step number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-[#082f49] transition-all duration-400 relative z-10">
                {step.icon}
              </div>
              <span className="text-5xl font-black text-white/8 group-hover:text-white/15 transition-colors">{step.num}</span>
            </div>

            <h3 className="text-2xl font-black text-white mb-3 group-hover:text-amber-300 transition-colors">{step.title}</h3>
            <p className="text-white/45 text-sm leading-relaxed font-light">{step.desc}</p>

          </motion.div>
        ))}
      </motion.div>

      {/* CTA under the steps */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="mt-20 flex justify-center"
      >
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-[#082f49] font-black text-lg px-12 py-4 rounded-full transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)]"
        >
          Start Planning My Trip →
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
