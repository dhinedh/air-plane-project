import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const Packages = () => {
  const indiaPackages = [
    { title: 'Goa Tour Package', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Kerala Backwater Package', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Shimla Manali Package', image: 'https://images.unsplash.com/photo-1605649487212-4d5cae60eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Kashmir Paradise Tour', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Andaman Island Package', image: 'https://images.unsplash.com/photo-1596422846543-74c6fc0e5f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Ooty & Kodaikanal Tour', image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cb1504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const intlPackages = [
    { title: 'Maldives Honeymoon Package', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Bali Holiday Package', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Dubai Luxury Tour', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Thailand Island Tour', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Singapore Malaysia Tour', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { title: 'Europe Tour Package', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const PackageCard = ({ pkg }) => (
    <motion.div 
      variants={fadeUp}
      className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-50"
    >
      <div className="h-64 overflow-hidden relative">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-ocean-900 mb-6">{pkg.title}</h3>
        <button className="text-aqua-600 font-bold flex items-center gap-2 group-hover:text-ocean-600 transition-colors">
          View Details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="text-center max-w-4xl mx-auto mb-20 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-black text-ocean-900 mb-6 tracking-tight">Explore Our Signature Travel Packages</h1>
        <p className="text-xl text-slate-600 font-light">Choose from a wide range of carefully designed travel packages crafted for the ultimate premium experience.</p>
        <div className="w-24 h-1.5 bg-gradient-to-r from-ocean-500 to-aqua-400 mx-auto rounded-full mt-8"></div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* India Packages */}
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
           className="mb-24"
        >
          <motion.div variants={fadeUp} className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black text-ocean-900 border-l-8 border-aqua-500 pl-6">India Packages</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {indiaPackages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} />
            ))}
          </div>
        </motion.div>

        {/* International Packages */}
        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-black text-ocean-900 border-l-8 border-aqua-500 pl-6">International Packages</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {intlPackages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Packages;
