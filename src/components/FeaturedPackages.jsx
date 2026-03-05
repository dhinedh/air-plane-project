import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const packages = [
  {
    title: 'Maldives Overwater Escape',
    duration: '5 Days / 4 Nights',
    price: '₹85,000',
    per: 'per couple',
    tag: 'Bestseller',
    tagColor: 'bg-amber-400 text-[#060d1a]',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Kerala Luxury Backwater Tour',
    duration: '4 Days / 3 Nights',
    price: '₹32,000',
    per: 'per couple',
    tag: 'Popular',
    tagColor: 'bg-ocean-500 text-white',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Dubai Grand Experience',
    duration: '6 Days / 5 Nights',
    price: '₹75,000',
    per: 'per couple',
    tag: 'New',
    tagColor: 'bg-rose-500 text-white',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bali Cultural Retreat',
    duration: '7 Days / 6 Nights',
    price: '₹65,000',
    per: 'per couple',
    tag: 'Trending',
    tagColor: 'bg-purple-500 text-white',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedPackages = () => (
  <section className="py-28 bg-[#07101f]">
    <div className="container mx-auto px-6 lg:px-16">

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="flex justify-between items-end mb-16 flex-wrap gap-6"
      >
        <div className="flex items-center gap-5">
          <div className="h-px w-16 bg-amber-400"></div>
          <div>
            <p className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Curated for You</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">Featured Packages</h2>
          </div>
        </div>
        <Link to="/packages" className="flex items-center gap-2 text-white/40 hover:text-amber-400 transition-colors text-sm font-bold uppercase tracking-widest group">
          All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group relative rounded-2xl overflow-hidden bg-white/4 border border-white/8 hover:border-amber-400/30 transition-all duration-400 cursor-pointer"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a] via-transparent to-transparent"></div>
              {/* Badge */}
              <span className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${pkg.tagColor}`}>
                {pkg.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-black text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors">{pkg.title}</h3>
              <div className="flex items-center gap-2 text-white/40 text-xs font-semibold mb-5">
                <Clock className="w-3.5 h-3.5" />
                {pkg.duration}
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-amber-400 text-2xl font-black">{pkg.price}</p>
                  <p className="text-white/30 text-xs font-semibold">{pkg.per}</p>
                </div>
                <Link to="/contact" className="bg-amber-400/10 hover:bg-amber-400 border border-amber-400/30 hover:border-amber-400 text-amber-400 hover:text-[#060d1a] font-bold text-xs px-4 py-2 rounded-xl transition-all duration-300">
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default FeaturedPackages;
