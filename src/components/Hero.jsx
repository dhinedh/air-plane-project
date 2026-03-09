import { Link } from 'react-router-dom';
import { ChevronRight, Plane, MapPin, Star, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const POPULAR = ['Maldives', 'Bali', 'Kerala', 'Dubai', 'Switzerland', 'Paris'];

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.85]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#040e18]">

      {/* ── Cinematic Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=90"
          alt="Luxury travel"
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* ── Layered Overlays ── */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-[1] bg-gradient-to-t from-[#040e18] via-[#040e18]/50 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#040e18]/80 via-[#040e18]/20 to-transparent" />

      {/* Grain texture */}
      <div className="absolute inset-0 z-[3] opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }}>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pb-20 pt-40">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-1.5 bg-sky-400/10 border border-sky-400/30 rounded-full px-4 py-2">
            <Star className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
            <span className="text-sky-400 font-bold text-[11px] uppercase tracking-[0.3em]">
              South India's #1 Platinum Travel Agency
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.25, 0.1, 0.1, 1] }}
            className="text-[clamp(3rem,9vw,8rem)] font-black text-white leading-[0.9] tracking-tighter mb-2"
          >
            Craft Your
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.1, 1] }}
            className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.9] tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-cyan-300">
              Perfect Journey
            </span>
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12"
        >
          Luxury itineraries handcrafted by experts — from serene Kerala backwaters
          to the Maldivian horizon. Your dream vacation, flawlessly executed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-wrap items-center gap-5 mb-16"
        >
          <Link
            to="/packages"
            className="group relative flex items-center gap-3 bg-sky-400 hover:bg-sky-300 text-[#040e18] font-black text-base px-10 py-5 rounded-full overflow-hidden transition-all shadow-[0_0_50px_rgba(56,189,248,0.5)] hover:shadow-[0_0_80px_rgba(56,189,248,0.7)]"
          >
            <Plane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Explore Packages
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            to="/contact"
            className="group flex items-center gap-3 text-white/80 hover:text-white font-bold text-base transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-sky-400/50 flex items-center justify-center group-hover:bg-sky-400/10 transition-all">
              <ChevronRight className="w-5 h-5 text-sky-400" />
            </div>
            Plan My Trip
          </Link>
        </motion.div>

        {/* Popular Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-sky-400" /> Popular:
          </span>
          {POPULAR.map((dest) => (
            <span key={dest} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-sky-400 text-white/60 text-xs font-semibold transition-all cursor-pointer">
              {dest}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Right side floating stat cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col gap-4"
      >
        {[
          { val: '25K+', label: 'Happy Travelers' },
          { val: '21+', label: 'Years of Experience' },
          { val: '4.9★', label: 'Average Rating' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 text-right hover:bg-white/10 hover:border-sky-400/20 transition-all"
          >
            <p className="text-2xl font-black text-white">{s.val}</p>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mt-0.5">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-white/30" />
        </motion.div>
        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>

    </section>
  );
};

export default Hero;
