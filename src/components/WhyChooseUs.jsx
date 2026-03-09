import { motion } from 'framer-motion';
import { Shield, Headphones, MapPin, Star, BadgeCheck, Wallet, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const features = [
  {
    icon: <Headphones className="w-6 h-6" />,
    title: '24/7 Concierge',
    desc: 'Always reachable, anywhere in the world. Real humans, not bots, at your service.',
    stat: '24/7',
    tag: 'Support',
    theme: 'violet',
    grid: 'lg:col-span-2 lg:row-span-1',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Price Promise',
    desc: 'Unbeatable value for premium stays through our direct global partnerships.',
    stat: '25%',
    tag: 'Savings',
    theme: 'emerald',
    grid: 'lg:col-span-2 lg:row-span-1',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe & Trusted',
    desc: 'Fully licensed and insured travel partner with a track record of safety.',
    stat: '100%',
    tag: 'Safety',
    theme: 'orange',
    grid: 'lg:col-span-2 lg:row-span-1',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Custom Trips',
    desc: 'Personalized journeys designed specifically for your unique travel style.',
    stat: '500+',
    tag: 'Itineraries',
    theme: 'pink',
    grid: 'lg:col-span-2 lg:row-span-1',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex-1"
          >
            <span className="inline-block text-sky-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 px-4 py-2 bg-sky-50 rounded-full border border-sky-100">Our Promise</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-6">
              Why Travel<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">With DCRUISE?</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-lg leading-relaxed">
              We don't just book trips; we engineer unforgettable lifetime memories with a standard of excellence that spans decades.
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex gap-12"
          >
            <div className="text-center">
              <p className="text-5xl font-black text-gray-900 leading-none mb-2">25K+</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Happy Travelers</p>
            </div>
            <div className="w-px h-16 bg-gray-100 self-center hidden sm:block" />
            <div className="text-center">
              <p className="text-5xl font-black text-gray-900 leading-none mb-2">50+</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Destinations</p>
            </div>
          </motion.div>
        </div>

        {/* Editorial Mosaic Grid */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max lg:auto-rows-[220px]"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`group relative rounded-[2rem] p-8 overflow-hidden border border-gray-100 bg-white transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-sky-200 ${f.grid}`}
            >
              {/* Corner Glow Overlay */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 
                    ${f.theme === 'sky' ? 'bg-sky-500 text-white' :
                      f.theme === 'violet' ? 'bg-violet-500 text-white' :
                        f.theme === 'emerald' ? 'bg-emerald-500 text-white' :
                          f.theme === 'orange' ? 'bg-orange-500 text-white' :
                            f.theme === 'pink' ? 'bg-pink-500 text-white' : 'bg-gray-900 text-white'}`}
                  >
                    {f.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    {f.category && <span className="text-[10px] font-black uppercase tracking-widest text-sky-500">{f.category}</span>}
                    {f.tag && <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{f.tag}</span>}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight group-hover:text-sky-500 transition-colors">{f.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[240px]">{f.desc}</p>
                </div>

                <div className="flex items-end justify-between mt-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-gray-900 group-hover:text-sky-600 transition-colors">{f.stat}</span>
                    {f.label && <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{f.label}</span>}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-sky-500" />
                  </div>
                </div>
              </div>

              {/* No watermark needed here */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
