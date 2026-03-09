import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const allDests = [
  {
    name: 'Maldives',
    tag: 'Romance & Luxury',
    region: 'International',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=85',
    size: 'large',
    color: 'from-sky-900',
  },
  {
    name: 'Kerala',
    tag: 'Backwaters & Spice',
    region: 'India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85',
    size: 'small',
    color: 'from-emerald-900',
  },
  {
    name: 'Bali',
    tag: 'Temples & Terraces',
    region: 'International',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85',
    size: 'small',
    color: 'from-amber-900',
  },
  {
    name: 'Switzerland',
    tag: 'Alps & Glaciers',
    region: 'International',
    image: 'https://images.unsplash.com/photo-1527668752968-14ce70a40d7c?auto=format&fit=crop&w=900&q=85',
    size: 'large',
    color: 'from-blue-900',
  },
  {
    name: 'Goa',
    tag: 'Sun & Sand',
    region: 'India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85',
    size: 'small',
    color: 'from-orange-900',
  },
  {
    name: 'Paris',
    tag: 'Art & Romance',
    region: 'International',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85',
    size: 'small',
    color: 'from-violet-900',
  },
];

const Destinations = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block text-sky-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 border border-sky-200 bg-sky-50 px-4 py-2 rounded-full">Explore the World</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight">
            Where Will You<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Go Next?</span>
          </h2>
          <p className="text-gray-400 text-lg font-light mt-6 max-w-xl mx-auto">
            Handpicked destinations across India and the globe, curated for every type of traveler.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {allDests.map((dest, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${dest.size === 'large' ? 'row-span-2' : 'row-span-1'
                } ${dest.size === 'large' ? 'h-[540px]' : 'h-[250px]'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${dest.color}/80 via-transparent to-transparent`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Region badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {dest.region}
                </span>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 border border-white/0 group-hover:bg-white/10 group-hover:border-white/20 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider mb-1">{dest.tag}</p>
                <h3 className={`font-black text-white leading-none group-hover:text-sky-200 transition-colors duration-300 ${dest.size === 'large' ? 'text-4xl' : 'text-2xl'
                  }`}>
                  {dest.name}
                </h3>
                <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-white/70 text-xs font-semibold">View packages</span>
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More destinations pills + CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['Andaman', 'Dubai', 'Manali', 'Thailand', 'Kodaikanal', 'Greece', 'Seychelles', 'Mauritius'].map(d => (
              <span key={d} className="px-5 py-2 rounded-full border border-gray-200 text-gray-500 hover:border-sky-300 hover:text-sky-500 hover:bg-sky-50 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-200">
                {d}
              </span>
            ))}
          </div>
          <Link
            to="/packages"
            className="group flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full transition-all"
          >
            Browse All Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Destinations;
