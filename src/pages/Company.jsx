import { Award, Users, Map, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight, imageReveal } from '../utils/animations';

const Company = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
      
      {/* Page Header */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-16 relative overflow-hidden rounded-3xl mx-4 lg:mx-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">About DCRUISE</h1>
          <p className="text-xl md:text-2xl text-aqua-400 max-w-2xl font-light">Your trusted travel partner for over two decades, crafting premium journeys.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Content */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-ocean-900 mb-6 leading-tight">
              21+ Years of Travel Excellence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed font-medium">
              DCRUISE is one of the elite travel agencies in South India with over <strong className="text-ocean-700">21 years of experience</strong> in the luxury tourism industry.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
              We specialize in creating memorable travel experiences for families, honeymoon couples, corporate groups, and bespoke private tours. Our goal is to make every journey comfortable, exciting, and unforgettable.
            </motion.p>
            
            <motion.div variants={slideInRight} className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-aqua-500 mt-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean-50 rounded-bl-full -z-10 group-hover:bg-aqua-50 transition-colors duration-500"></div>
              <h3 className="text-2xl font-bold text-ocean-900 mb-6">Our Expert Team Ensures:</h3>
              <ul className="space-y-4">
                {[
                  'Bespoke & personalized travel planning',
                  'Premium hotel and luxury transport arrangements',
                  'Exclusive packages without compromising elite quality',
                  '24/7 dedicated concierge customer support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-aqua-500 shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-2 gap-6 relative"
          >
             <div className="absolute -inset-4 bg-gradient-to-tr from-aqua-100 to-ocean-50 rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
            <motion.div variants={imageReveal} className="overflow-hidden rounded-3xl shadow-2xl translate-y-12 h-80">
              <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Resort" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
            <motion.div variants={imageReveal} className="overflow-hidden rounded-3xl shadow-2xl -translate-y-8 h-80">
              <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Exploration" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-ocean-900 mb-6">Why Choose Us</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-ocean-500 to-aqua-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: '21+ Years Experience', desc: 'Deep industry knowledge and trusted luxury expertise.' },
            { icon: <Users className="w-8 h-8 text-white" />, title: '25,000+ Travelers', desc: 'A growing community of happy, elite satisfied customers.' },
            { icon: <Map className="w-8 h-8 text-white" />, title: 'Bespoke Packages', desc: 'Tailor-made perfect itineraries to suit your exact preferences.' },
            { icon: <Award className="w-8 h-8 text-white" />, title: 'Premium Guarantee', desc: 'Exclusive access to premium experiences at highly competitive rates.' },
            { icon: <Map className="w-8 h-8 text-white" />, title: 'Global Reach', desc: 'International and domestic luxury tours spanning 6 continents.' },
            { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: '24x7 Concierge', desc: 'Round-the-clock VIP support throughout your entire journey.' }
          ].map((feature, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-white p-10 rounded-[2rem] shadow-lg border border-slate-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-ocean-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-ocean-900 transition-colors duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-ocean-500 to-aqua-400 rounded-xl flex items-center justify-center shadow-inner text-white group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-ocean-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Company;
