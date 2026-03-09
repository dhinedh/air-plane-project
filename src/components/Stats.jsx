import { Users, Clock, Globe2, Award } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const AnimatedCounter = ({ to, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (val) => {
    if (to.includes('K')) return `${Math.round(val / 1000)}K`;
    if (to.includes('+')) return `${Math.round(val)}`;
    return `${Math.round(val)}`;
  });
  useEffect(() => {
    if (isInView) count.set(parseInt(to.replace(/[^0-9]/g, '')));
  }, [isInView, count, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
};

const stats = [
  { icon: <Users className="w-5 h-5" />, value: "25000+", display: "25K+", suffix: "+", label: "Happy Travelers", sub: "and counting" },
  { icon: <Clock className="w-5 h-5" />, value: null, display: "24×7", label: "Support Available", sub: "always there for you" },
  { icon: <Globe2 className="w-5 h-5" />, value: null, display: "50+", label: "Destinations", sub: "across 6 continents" },
];

const Stats = () => (
  <section className="bg-white relative overflow-hidden">
    {/* Top thin divider */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

    <div className="container mx-auto px-6 lg:px-16 py-0">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`group flex flex-col justify-center py-12 px-8 relative
              ${i < stats.length - 1 ? 'border-r border-gray-100' : ''}
              ${i >= 2 && stats.length > 2 ? 'border-t border-gray-100 lg:border-t-0' : ''}`}
          >
            {/* Hover bg */}
            <div className="absolute inset-2 rounded-2xl bg-sky-50/0 group-hover:bg-sky-50/60 transition-colors duration-400" />

            {/* Icon pill */}
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-sky-100 to-transparent" />
            </div>

            {/* Big number */}
            <p className="text-6xl lg:text-7xl font-black text-gray-900 leading-none tracking-tighter mb-1 relative z-10">
              {stat.value
                ? <><AnimatedCounter to={stat.value} />{stat.suffix}</>
                : stat.display}
            </p>

            {/* Label */}
            <p className="text-gray-700 font-black text-sm uppercase tracking-widest mt-3 relative z-10">{stat.label}</p>
            <p className="text-gray-300 text-xs font-medium mt-0.5 relative z-10">{stat.sub}</p>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-sky-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>
    </div>

    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
  </section>
);

export default Stats;
