import { Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/animations';

const InternationalDestinations = () => {
  const continents = [
    {
      name: 'Africa',
      places: ['Kenya', 'Morocco', 'Seychelles', 'South Africa', 'Zimbabwe', 'Tanzania'],
    },
    {
      name: 'America',
      places: ['Alaska', 'Canada', 'Central America', 'North America', 'South America', 'USA'],
    },
    {
      name: 'Europe',
      places: ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Netherlands', 'Norway', 'Portugal', 'Romania', 'Russia', 'Slovakia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'United Kingdom'],
    },
    {
      name: 'Asia',
      places: ['Bali', 'Cambodia', 'China', 'Hong Kong', 'Japan', 'Indonesia', 'Kazakhstan', 'Russia', 'South Korea', 'Malaysia', 'Singapore', 'Philippines', 'Taiwan', 'Thailand', 'Vietnam', 'Uzbekistan'],
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4 tracking-tight">
            <Globe2 className="text-aqua-400 w-12 h-12 drop-shadow-md" /> International Destinations
          </h1>
          <p className="text-xl md:text-2xl text-aqua-100 max-w-3xl mx-auto font-light leading-relaxed">Discover the world with our premium international tour packages tailored for unforgettable global experiences.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {continents.map((continent, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-aqua-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex items-center gap-6 mb-8 pb-6 border-b border-slate-100 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean-500 to-aqua-400 flex flex-col items-center justify-center text-white font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{continent.name.charAt(0)}</span>
                </div>
                <h2 className="text-4xl font-black text-ocean-900">{continent.name}</h2>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {continent.places.map((place) => (
                  <span key={place} className="px-5 py-2.5 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 hover:bg-ocean-50 hover:border-aqua-300 hover:text-ocean-600 transition-colors shadow-sm hover:shadow-md cursor-pointer">
                    {place}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default InternationalDestinations;
