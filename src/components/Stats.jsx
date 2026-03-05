import { Users, Clock, Globe2, Award } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { fadeUp, staggerContainer } from '../utils/animations';

const AnimatedCounter = ({ to, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (val) => {
    if (to.includes('K')) return `${Math.round(val / 1000)}K+`;
    if (to.includes('+')) return `${Math.round(val)}+`;
    return `${Math.round(val)}`;
  });

  useEffect(() => {
    if (isInView) {
      const numericVal = parseInt(to.replace(/[^0-9]/g, ''));
      count.set(numericVal);
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
  const stats = [
    { icon: <Users className="w-7 h-7" />, numeric: true, value: "500+", label: "Happy Travelers" },
    { icon: <Clock className="w-7 h-7" />, numeric: false, value: "24x7", label: "Support Available" },
    { icon: <Globe2 className="w-7 h-7" />, numeric: false, value: "6", label: "Continents Visited" },
    { icon: <Award className="w-7 h-7" />, numeric: true, value: "21+", label: "Years of Experience" },
  ];

  return (
    <section className="bg-[#082f49] py-0">
      {/* Full-width amber divider strip */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center justify-center py-14 px-6 group hover:bg-white/3 transition-colors duration-500 relative"
            >
              {/* Amber top accent on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-full bg-amber-400 transition-all duration-500 rounded-full"></div>

              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2">
                {stat.numeric ? <AnimatedCounter to={stat.value} /> : stat.value}
              </h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.18em] text-center">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
    </section>
  );
};

export default Stats;
