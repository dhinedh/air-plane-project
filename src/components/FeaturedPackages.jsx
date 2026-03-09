import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const packages = [
  {
    title: 'Maldives Overwater Escape',
    duration: '5 Days / 4 Nights',
    price: '₹85,000',
    per: 'per couple',
    tag: 'Bestseller',
    location: 'Maldives',
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-sky-600 to-cyan-800',
  },
  {
    title: 'Kerala Luxury Backwater Tour',
    duration: '4 Days / 3 Nights',
    price: '₹32,000',
    per: 'per couple',
    tag: 'Popular',
    location: 'Kerala, India',
    rating: 4.8,
    reviews: 486,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-600 to-teal-800',
  },
  {
    title: 'Dubai Grand Experience',
    duration: '6 Days / 5 Nights',
    price: '₹75,000',
    per: 'per couple',
    tag: 'Premium',
    location: 'Dubai, UAE',
    rating: 4.9,
    reviews: 228,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-600 to-orange-800',
  },
  {
    title: 'Bali Cultural Retreat',
    duration: '7 Days / 6 Nights',
    price: '₹65,000',
    per: 'per couple',
    tag: 'Trending',
    location: 'Bali, Indonesia',
    rating: 4.8,
    reviews: 394,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-600 to-violet-800',
  },
];

const tagColors = {
  Bestseller: 'bg-sky-400 text-[#040e18]',
  Popular: 'bg-emerald-400 text-[#040e18]',
  Premium: 'bg-amber-400 text-[#040e18]',
  Trending: 'bg-purple-400 text-white',
};

const FeaturedPackages = () => (
  <section className="py-32 bg-[#040e18] relative overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
    <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-sky-400/3 rounded-full blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-6 lg:px-16 relative z-10">

      {/* Header */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
        className="flex justify-between items-end mb-16 flex-wrap gap-6"
      >
        <div>
          <span className="inline-block text-sky-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 border border-sky-400/30 bg-sky-400/10 px-4 py-2 rounded-full">Curated for You</span>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Featured<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">Packages</span>
          </h2>
        </div>
        <Link to="/packages" className="group flex items-center gap-2 text-white/40 hover:text-sky-400 transition-colors text-sm font-bold uppercase tracking-widest">
          All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group relative rounded-3xl overflow-hidden cursor-pointer"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              {/* Tag badge */}
              <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${tagColors[pkg.tag] || 'bg-white text-gray-900'}`}>
                {pkg.tag}
              </span>
              {/* Location */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                <MapPin className="w-3 h-3 text-sky-400" />
                <span className="text-white/80 text-[10px] font-semibold">{pkg.location}</span>
              </div>

              {/* Bottom content inside image */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-black text-lg leading-snug mb-2">{pkg.title}</h3>
                <div className="flex items-center gap-3 text-white/60 text-xs font-semibold">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {pkg.duration}</span>
                  <span className="w-px h-3 bg-white/20" />
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-sky-400 text-sky-400" /> {pkg.rating} ({pkg.reviews})</span>
                </div>
              </div>
            </div>

            {/* Price strip at bottom */}
            <div className="relative flex items-center justify-between px-5 py-4 bg-white/[0.03] border border-white/8 border-t-0 rounded-b-3xl group-hover:bg-white/[0.06] transition-colors">
              <div>
                <p className="text-sky-400 text-xl font-black">{pkg.price}</p>
                <p className="text-white/30 text-[10px] font-semibold uppercase tracking-wider">{pkg.per}</p>
              </div>
              <Link
                to="/contact"
                className="bg-sky-400 hover:bg-sky-300 text-[#040e18] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturedPackages;
