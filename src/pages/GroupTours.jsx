import { CheckCircle2, Users, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, imageReveal } from '../utils/animations';

const GroupTours = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-16 relative overflow-hidden rounded-3xl mx-4 md:mx-8 shadow-2xl"
      >
        {/* Luxury Group Safari/Tour image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549558549-415fe4c3d3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-8 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Group Tour Packages</h1>
          <p className="text-xl md:text-2xl text-aqua-400 max-w-2xl">Travel together and enjoy unforgettable elite experiences with our exclusive group tour packages.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-ocean-900 leading-tight">Ideal For Any Group Size</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed font-medium">Whether {"you're"} planning a reunion, a corporate retreat, or an educational field trip, our group tours are designed to provide seamless luxury experiences for everyone involved.</motion.p>
            
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6 mt-8">
              {[
                { icon: <HeartHandshake className="text-ocean-700 w-8 h-8 group-hover:text-white transition-colors" />, title: 'Families' },
                { icon: <Briefcase className="text-ocean-700 w-8 h-8 group-hover:text-white transition-colors" />, title: 'Corporate Teams' },
                { icon: <Users className="text-ocean-700 w-8 h-8 group-hover:text-white transition-colors" />, title: 'Friends' },
                { icon: <GraduationCap className="text-ocean-700 w-8 h-8 group-hover:text-white transition-colors" />, title: 'School & College' }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white p-6 rounded-3xl shadow-md border border-slate-100 flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-ocean-50 rounded-2xl flex items-center justify-center group-hover:bg-aqua-500 transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-ocean-900 text-lg">{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-t-[12px] border-aqua-500 h-fit"
          >
            <h3 className="text-3xl font-black text-ocean-900 mb-8 border-b border-slate-100 pb-4">What We Provide</h3>
            <ul className="space-y-6">
              {[
                'Comfortable, spacious premium transport arrangements',
                'High-quality 4 or 5 star group accommodation',
                'Expert guided sightseeing tours with priority access',
                'Carefully organized and optimized VIP itineraries',
                'Dedicated group concierge manager on call'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-7 h-7 text-aqua-500 shrink-0 mt-0.5" />
                  <span className="text-xl text-slate-700 font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature Image Spread */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal}
          className="w-full h-96 rounded-[3rem] overflow-hidden shadow-2xl mb-20 relative group"
        >
          <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Group travel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Unforgettable Memories</h3>
            <p className="text-aqua-100 text-lg">Shared experiences that last a lifetime.</p>
          </div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-ocean-900 mb-4">Popular Group Destinations</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-ocean-500 to-aqua-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80' },
              { name: 'Manali', image: 'https://images.unsplash.com/photo-1605649487212-4d5cae60eb11?auto=format&fit=crop&w=600&q=80' },
              { name: 'Shimla', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80' },
              { name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80' },
              { name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80' },
              { name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
              { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80' },
              { name: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80' },
              { name: 'Europe', image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80' },
              { name: 'Sri Lanka', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=600&q=80' }
            ].map((dest, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className="group relative h-64 rounded-3xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-900/20 to-transparent group-hover:from-ocean-900 transition-colors duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-aqua-400 transition-colors">{dest.name}</h3>
                  <p className="text-xs text-aqua-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">Explore Packages →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default GroupTours;
