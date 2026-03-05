import { motion } from 'framer-motion';
import { Shield, Headphones, MapPin, Star, BadgeCheck, Wallet } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const features = [
  {
    icon: <BadgeCheck className="w-7 h-7" />,
    title: '21+ Years of Excellence',
    desc: 'Over two decades of crafting dream holidays across India and the globe. Trust built through experience.',
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: '24/7 Dedicated Support',
    desc: 'Our travel concierge is always reachable — whether you\'re at home planning or already on the road.',
  },
  {
    icon: <Wallet className="w-7 h-7" />,
    title: 'Best Price Guarantee',
    desc: 'We negotiate directly with hotels and airlines to bring you the best value without compromising luxury.',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: '100% Safe & Trusted',
    desc: 'Fully licensed, insured, and backed by 25,000+ happy travelers who return to us again and again.',
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'Handcrafted Itineraries',
    desc: 'No cookie-cutter packages. Every itinerary is privately designed around your preferences and travel style.',
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: '4.8 ⭐ Rated Agency',
    desc: 'South India\'s highest-rated travel agency with consistent 5-star reviews across Google and TripAdvisor.',
  },
];

const WhyChooseUs = () => (
  <section className="py-28 bg-[#082f49] relative overflow-hidden">
    {/* Subtle grid texture */}
    <div className="absolute inset-0 opacity-5 pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
    </div>

    <div className="container mx-auto px-6 lg:px-16 relative z-10">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="flex items-center gap-5 mb-20"
      >
        <div className="h-px w-16 bg-sky-400"></div>
        <div>
          <p className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Our Promise</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">Why Choose DCRUISE?</h2>
        </div>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group relative rounded-2xl border border-white/8 p-8 bg-white/3 hover:bg-white/6 hover:border-sky-400/30 transition-all duration-400 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Amber corner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-400/5 rounded-full group-hover:bg-sky-400/15 transition-colors duration-500"></div>

            <div className="w-14 h-14 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400 mb-6 group-hover:bg-sky-400/20 group-hover:scale-110 transition-all duration-400 relative z-10">
              {f.icon}
            </div>
            <h3 className="text-xl font-black text-white mb-3 relative z-10 group-hover:text-sky-300 transition-colors">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed relative z-10 font-light">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
