import { Link } from 'react-router-dom';
import { ChevronRight, Compass, Award, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '../utils/animations';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end pb-24 pt-28 overflow-hidden bg-[#082f49]">

      {/* Parallax cinematic BG */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=90"
          alt="hero"
          className="w-full h-full object-cover scale-110"
        />
        {/* Multi-layer overlays for dramatic look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-[#082f49]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f49]/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-amber-400 to-transparent z-10 hidden lg:block"></div>

      {/* Main content */}
      <motion.div style={{ y: textY }} className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-5xl">

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            {/* Eyebrow label */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-amber-400"></div>
              <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs">South India's #1 Travel Agency</span>
            </motion.div>

            {/* Headline — extra large editorial style */}
            <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black text-white leading-[0.95] tracking-tight mb-10">
              The World<br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Awaits You
                </span>
              </span>
            </motion.h1>

            {/* CTA Row */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
              <Link
                to="/packages"
                className="group inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-[#060d1a] font-black text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)]"
              >
                Explore Packages
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-white/80 hover:text-white font-bold border-b border-white/30 hover:border-amber-400 hover:text-amber-400 transition-all pb-0.5"
              >
                Plan My Trip →
              </Link>
            </motion.div>

            {/* Three trust badges in a horizontal strip */}
            <motion.div variants={staggerContainer} className="flex flex-wrap gap-6">
              {[
                { icon: <Award className="w-5 h-5 text-amber-400" />, label: '21+ Years of Excellence' },
                { icon: <Shield className="w-5 h-5 text-amber-400" />, label: '100% Safe & Trusted' },
                { icon: <Compass className="w-5 h-5 text-amber-400" />, label: '6 Continents Covered' },
              ].map((b, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-2.5 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
                  {b.icon}
                  <span className="text-white/80 text-sm font-semibold">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 lg:right-16 z-10 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-amber-400 rounded-full"></div>
        </motion.div>
        <span className="text-white/40 text-xs uppercase tracking-[0.2em] rotate-90 origin-left translate-y-5">Scroll</span>
      </motion.div>

    </section>
  );
};

export default Hero;
