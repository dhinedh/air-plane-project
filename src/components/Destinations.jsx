import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const Destinations = () => {
  const indiaDests = [
    { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', tag: 'Beaches & Culture' },
    { name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', tag: 'Backwaters & Spice' },
    { name: 'Manali', image: 'https://images.unsplash.com/photo-1605649487212-4d5cae60eb11?auto=format&fit=crop&w=800&q=80', tag: 'Snow & Adventure' },
    { name: 'Andaman', image: 'https://images.unsplash.com/photo-1596422846543-74c6fc0e5f2a?auto=format&fit=crop&w=800&q=80', tag: 'Islands & Diving' },
  ];
  const intlDests = [
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80', tag: 'Romance & Luxury' },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', tag: 'Temples & Beaches' },
    { name: 'Switzerland', image: 'https://images.unsplash.com/photo-1527668752968-14ce70a40d7c?auto=format&fit=crop&w=800&q=80', tag: 'Alps & Scenic' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', tag: 'Art & Gastronomy' },
  ];

  const DestinationCard = ({ dest, large = false }) => (
    <motion.div
      variants={fadeUp}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 ${large ? 'h-[500px]' : 'h-[240px]'}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      {/* Amber glow on hover */}
      <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-amber-400/60 rounded-2xl transition-all duration-500"></div>

      {/* Tag */}
      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1">
        <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider">{dest.tag}</span>
      </div>

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className={`font-black text-white flex items-center gap-2 group-hover:text-amber-300 transition-colors duration-300 ${large ? 'text-3xl' : 'text-xl'}`}>
          <MapPin className={`text-amber-400 flex-shrink-0 ${large ? 'w-6 h-6' : 'w-4 h-4'}`} />
          {dest.name}
        </h3>
        <p className="text-xs text-white/50 font-semibold mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
          Explore Packages <ArrowRight className="w-3 h-3" />
        </p>
      </div>
    </motion.div>
  );

  const DestSection = ({ title, num, dests, linkTo }) => (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}
      className="mb-24"
    >
      {/* Section header */}
      <motion.div variants={fadeUp} className="flex justify-between items-end mb-10">
        <div>
          <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em] block mb-2">Section {num}</span>
          <h3 className="text-4xl md:text-5xl font-black text-white">{title}</h3>
        </div>
        <Link to={linkTo} className="flex items-center gap-2 text-white/50 hover:text-amber-400 transition-colors text-sm font-bold uppercase tracking-widest group">
          View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Mosaic grid: big left + 2 stacked right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-1">
          <DestinationCard dest={dests[0]} large={true} />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {dests.slice(1).map((d, i) => <DestinationCard key={i} dest={d} />)}
        </div>
      </div>

      {/* Tag pills */}
      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
        {(num === "01"
          ? ['Shimla', 'Munnar', 'Kodaikanal', 'Coorg', 'Ooty', 'Kashmir', 'Darjeeling']
          : ['Mauritius', 'Phuket', 'Seychelles', 'Italy', 'Greece', 'Thailand', 'Dubai']
        ).map((p) => (
          <span key={p} className="px-4 py-2 rounded-full border border-white/10 text-white/50 hover:border-amber-400/60 hover:text-amber-300 text-xs font-bold uppercase tracking-wider cursor-pointer transition-all">
            {p}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-28 bg-brand-primary">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section eyebrow */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mb-20 flex items-center gap-5"
        >
          <div className="h-px flex-1 max-w-[60px] bg-amber-400"></div>
          <div>
            <p className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Explore By Region</p>
            <h2 className="text-5xl md:text-6xl font-black text-white">Popular Destinations</h2>
          </div>
        </motion.div>

        <DestSection title="Discover India" num="01" dests={indiaDests} linkTo="/india-destinations" />
        <DestSection title="International Escapes" num="02" dests={intlDests} linkTo="/international-destinations" />

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
          <Link to="/packages" className="inline-flex items-center gap-3 bg-brand-accent hover:bg-amber-300 text-brand-primary font-black text-lg px-12 py-4 rounded-full transition-all shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)]">
            Browse All Packages <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Destinations;
