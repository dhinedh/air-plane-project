import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ArrowRight, Home as IndoorIcon, Globe as OutdoorIcon } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const sportsData = {
    indoor: [
        {
            id: 1,
            name: 'Badminton',
            image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
            description: 'Professional indoor courts for singles and doubles.',
            tag: 'Indoor'
        },
        {
            id: 2,
            name: 'Table Tennis',
            image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80',
            description: 'Standard tables with high-quality flooring.',
            tag: 'Indoor'
        },
        {
            id: 3,
            name: 'Swimming Pool',
            image: 'https://images.unsplash.com/photo-1530549387631-f535c7658f39?auto=format&fit=crop&w=800&q=80',
            description: 'Temperature-controlled indoor Olympic-sized pool.',
            tag: 'Indoor'
        },
        {
            id: 4,
            name: 'Squash',
            image: 'https://images.unsplash.com/photo-1544280146-590fb63013ba?auto=format&fit=crop&w=800&q=80',
            description: 'International standard glass-back courts.',
            tag: 'Indoor'
        },
    ],
    outdoor: [
        {
            id: 5,
            name: 'Cricket',
            image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
            description: 'Professional pitches with floodlights for night matches.',
            tag: 'Outdoor'
        },
        {
            id: 6,
            name: 'Football',
            image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
            description: 'Full-size turf fields with high-quality grass.',
            tag: 'Outdoor'
        },
        {
            id: 7,
            name: 'Tennis',
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
            description: 'Synthetic and clay courts for all levels.',
            tag: 'Outdoor'
        },
        {
            id: 8,
            name: 'Golf',
            image: 'https://images.unsplash.com/photo-1587174416062-6df3205e2530?auto=format&fit=crop&w=800&q=80',
            description: 'Beautifully landscaped 18-hole championship course.',
            tag: 'Outdoor'
        },
    ]
};

const SportsCategories = () => {
    const [activeTab, setActiveTab] = useState('indoor');

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.05)_0%,transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sky-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 px-4 py-2 bg-sky-50 rounded-full border border-sky-100">Our Facilities</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight tracking-tighter">
                        Choose Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Arena of Sport</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light mt-6 max-w-xl mx-auto">
                        Experience world-class sporting facilities tailored for both indoor skill and outdoor thrill.
                    </p>
                </motion.div>

                {/* Tab Selection */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-xl border border-gray-100">
                        <button
                            onClick={() => setActiveTab('indoor')}
                            className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'indoor'
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <IndoorIcon className="w-4 h-4" />
                            Indoor
                        </button>
                        <button
                            onClick={() => setActiveTab('outdoor')}
                            className={`flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeTab === 'outdoor'
                                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <OutdoorIcon className="w-4 h-4" />
                            Outdoor
                        </button>
                    </div>
                </div>

                {/* Sports List */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial="hidden" animate="visible" exit={{ opacity: 0, y: 20 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {sportsData[activeTab].map((sport) => (
                            <motion.div
                                key={sport.id}
                                variants={fadeUp}
                                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={sport.image}
                                        alt={sport.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-lg">
                                            {sport.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-sky-500 transition-colors">{sport.name}</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        {sport.description}
                                    </p>
                                    <button className="flex items-center gap-2 text-sky-500 font-black text-xs uppercase tracking-widest group/btn">
                                        Book Now <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* View All CTA */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="mt-16 text-center"
                >
                    <button className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white font-black text-sm uppercase tracking-[0.15em] px-10 py-4 rounded-full transition-all group">
                        Explore All 20+ Sports <Trophy className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SportsCategories;
