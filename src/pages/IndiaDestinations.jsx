import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, imageReveal } from '../utils/animations';

const IndiaDestinations = () => {
  const regions = [
    {
      name: 'North India',
      places: ['Agra', 'Delhi', 'Jaipur', 'Jammu & Kashmir', 'Ladakh', 'Manali', 'Shimla', 'Uttarakhand'],
      image: 'https://images.unsplash.com/photo-1564507592208-528f1e680af0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'South India',
      places: ['Bangalore', 'Hyderabad', 'Karnataka', 'Kerala', 'Kochi', 'Mysore', 'Ooty', 'Tamil Nadu'],
      image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'North East',
      places: ['Arunachal Pradesh', 'Gangtok', 'Pelling', 'Sikkim'],
      image: 'https://images.unsplash.com/photo-1565507977685-6184a44111be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'East India',
      places: ['Bihar', 'Darjeeling', 'Kolkata', 'West Bengal'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'West India',
      places: ['Ahmedabad', 'Goa', 'Gujarat', 'Maharashtra', 'Mumbai', 'Pune', 'Rajasthan'],
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">Incredible India</h1>
          <p className="text-xl md:text-2xl text-aqua-100 max-w-3xl mx-auto font-light leading-relaxed">Explore the rich cultural heritage and diverse landscapes of India through our premium curated tours.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="space-y-24">
          {regions.map((region, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              <motion.div variants={imageReveal} className="w-full lg:w-1/2">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] group border border-slate-100">
                  <img src={region.image} alt={region.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/90 via-ocean-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="absolute bottom-8 left-8 text-4xl font-black text-white">{region.name}</h3>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="w-full lg:w-1/2 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border-t-8 border-aqua-500 relative overflow-hidden group">
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-aqua-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-3xl font-bold text-ocean-900 mb-8 flex items-center gap-3 relative z-10">
                  <span className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center text-aqua-600 shadow-sm border border-ocean-100">
                    <MapPin className="w-6 h-6" />
                  </span>
                  Must Visit Places
                </h4>
                <div className="flex flex-wrap gap-4 relative z-10">
                  {region.places.map((place) => (
                    <span key={place} className="px-6 py-3 bg-slate-50 text-ocean-800 font-bold rounded-full border border-slate-100 hover:bg-aqua-500 hover:text-white hover:border-aqua-500 transition-colors cursor-pointer shadow-sm hover:shadow-md">
                      {place}
                    </span>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default IndiaDestinations;
