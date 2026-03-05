import { Heart, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const Honeymoon = () => {
  const indiaDests = [
    { name: 'Andaman', image: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80' },
    { name: 'Coorg', image: 'https://images.unsplash.com/photo-1541038134707-33d36b801538?auto=format&fit=crop&w=600&q=80' },
    { name: 'Darjeeling', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' },
    { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Himachal', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80' },
    { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80' },
    { name: 'Kodaikanal', image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1504?auto=format&fit=crop&w=600&q=80' },
    { name: 'Manali', image: 'https://images.unsplash.com/photo-1605649487212-4d5cae60eb11?auto=format&fit=crop&w=600&q=80' },
    { name: 'Munnar', image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=600&q=80' },
    { name: 'Ooty', image: 'https://images.unsplash.com/photo-1583261623146-d13eb7662997?auto=format&fit=crop&w=600&q=80' },
    { name: 'Shimla', image: 'https://images.unsplash.com/photo-1597005152203-9d4128f73180?auto=format&fit=crop&w=600&q=80' }
  ];
  
  const intlDests = [
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
    { name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
    { name: 'Mauritius', image: 'https://images.unsplash.com/photo-1586500036706-41963de26d8b?auto=format&fit=crop&w=600&q=80' },
    { name: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80' },
    { name: 'Seychelles', image: 'https://images.unsplash.com/photo-1589519160732-57fc497e9880?auto=format&fit=crop&w=600&q=80' },
    { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { name: 'Greece', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' },
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' }
  ];

  const HoneymoonCard = ({ dest, rating }) => (
    <motion.div 
      variants={fadeUp}
      className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500 border border-pink-50"
    >
      <img 
        src={dest.image} 
        alt={dest.name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/90 via-rose-900/20 to-transparent group-hover:from-rose-900 transition-colors duration-500"></div>
      
      <div className="absolute top-4 right-4 flex gap-1 z-10 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-4 group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-500 border border-white/30">
          <Heart className="w-6 h-6 fill-white group-hover:fill-white" />
        </div>
        <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-rose-300" />
          {dest.name}
        </h3>
        <p className="text-sm text-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 font-medium">Romantic Packages →</p>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Heart className="text-rose-400 fill-rose-400 w-10 h-10 animate-pulse drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg">
            Romantic Gateways
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 max-w-2xl mx-auto font-light leading-relaxed">Celebrate your love with our specially curated luxury honeymoon packages designed for unforgettable romance.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* India Honeymoon */}
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
           className="mb-24"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-ocean-900 mb-4">India Honeymoon</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {indiaDests.map((dest, idx) => (
              <HoneymoonCard key={idx} dest={dest} rating={5} />
            ))}
          </div>
        </motion.div>

        {/* International Honeymoon */}
        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-ocean-900 mb-4">International Honeymoon</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {intlDests.map((dest, idx) => (
              <HoneymoonCard key={idx} dest={dest} rating={5} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Honeymoon;
