import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Plane, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    num: '01',
    icon: <Search className="w-7 h-7" />,
    title: 'Explore & Choose',
    desc: 'Browse our curated packages — from Kerala backwaters to Maldives overwater villas. Filter by budget, duration, or style.',
    color: 'from-sky-400 to-cyan-400',
    glow: 'rgba(56,189,248,0.3)',
  },
  {
    num: '02',
    icon: <MessageSquare className="w-7 h-7" />,
    title: 'Personalise & Book',
    desc: 'Share your preferences with our travel expert. We craft a custom itinerary, handle all bookings, and confirm within 24 hours.',
    color: 'from-violet-400 to-purple-400',
    glow: 'rgba(139,92,246,0.3)',
  },
  {
    num: '03',
    icon: <Plane className="w-7 h-7" />,
    title: 'Travel & Enjoy',
    desc: 'Show up and experience your dream vacation stress-free. Our concierge is one call away at every step of your journey.',
    color: 'from-emerald-400 to-teal-400',
    glow: 'rgba(52,211,153,0.3)',
  },
];

const HowItWorks = () => (
  <section className="py-32 bg-[#040e18] relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04)_0%,transparent_70%)] pointer-events-none" />

    {/* Big watermark */}
    <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[28rem] font-black text-white/[0.018] leading-none select-none pointer-events-none">
      HOW
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-10">

      {/* Header */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-center mb-20"
      >
        <span className="inline-block text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 border border-sky-400/30 bg-sky-400/10 px-4 py-2 rounded-full">Simple Process</span>
        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
          From Dream to Reality<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">In 3 Easy Steps</span>
        </h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
      >
        {/* Connector line */}
        <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px border-t border-dashed border-white/10 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative z-10 group"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-8 h-full hover:border-white/15 transition-all duration-500 relative overflow-hidden">
              {/* Corner glow */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

              {/* Step icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-[0_0_30px_${step.glow}] group-hover:shadow-[0_0_50px_${step.glow}] transition-shadow duration-500`}>
                {step.icon}
              </div>

              {/* Step number */}
              <p className="text-white/10 font-black text-6xl leading-none mb-4 group-hover:text-white/15 transition-colors">{step.num}</p>

              <h3 className="text-white font-black text-2xl mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{step.desc}</p>

              {/* Arrow on hover */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="mt-16 flex justify-center"
      >
        <Link
          to="/contact"
          className="group flex items-center gap-3 bg-sky-400 hover:bg-sky-300 text-[#040e18] font-black text-base uppercase tracking-widest px-12 py-5 rounded-full transition-all shadow-[0_0_50px_rgba(56,189,248,0.4)] hover:shadow-[0_0_80px_rgba(56,189,248,0.6)]"
        >
          <Plane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          Start Planning My Trip
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
