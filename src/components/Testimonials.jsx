import { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, MapPin, Calendar, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stories = [
  {
    id: 1,
    name: "Priya & Aravind",
    location: "Maafushi Island, Maldives",
    date: "October 2025",
    type: "Honeymoon Escape",
    quote: "Every morning felt like waking up in a postcard. DCRUISE didn't just plan a trip; they engineered a dream.",
    text: "From the moment we landed at Malé, everything was orchestrated flawlessly. The overwater villa recommended by our concierge offered sunset views we'll never forget. The private candlelit dinner on the beach was the perfect cherry on top. If you're looking for luxury without the stress, this is it.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=90",
    rating: 5,
  },
  {
    id: 2,
    name: "The Sharma Family",
    location: "Munnar & Alleppey, Kerala",
    date: "December 2025",
    type: "Family Adventure",
    quote: "A perfectly balanced journey. My kids loved the spice plantations, and we loved the ultimate serenity of the backwaters.",
    text: "Traveling with three kids isn't easy, but DCRUISE made it feel like a breeze. The houseboat experience in Alleppey was a major highlight for everyone. The staff went above and beyond to cater to our needs, and the local guides were incredibly knowledgeable. Highly recommended for family travelers!",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram & Crew",
    location: "Anjuna & Vagator, Goa",
    date: "January 2026",
    type: "Corporate Retreat",
    quote: "DCRUISE delivered a corporate offsite that actually felt like a vacation. Unbeatable rates and even better coordination.",
    text: "Managing a group of 45 people is a logistical nightmare, but our coordinator from DCRUISE handled it with absolute poise. From the beachside conference setup to the sunset yacht party, everything was punctual and premium. Our team came back refreshed and energized.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=90",
    rating: 5,
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const story = stories[index];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <div className="mb-16">
          <span className="inline-block text-sky-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 border border-sky-200 bg-sky-50 px-4 py-2 rounded-full">Client Stories</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
            Where Memories<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Come to Life</span>
          </h2>
        </div>

        {/* Magazine Panel */}
        <div className="relative bg-gray-50 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] min-h-[700px] lg:min-h-[600px] flex flex-col lg:flex-row">

          {/* Left Side: Massive Image */}
          <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={story.id}
                initial={{ x: direction * 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 50, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0"
              >
                <motion.img
                  animate={{ scale: [1.1, 1] }}
                  transition={{ duration: 8, ease: "linear" }}
                  src={story.image}
                  alt={story.location}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              </motion.div>
            </AnimatePresence>

            {/* Image Overlay UI */}
            <div className="absolute bottom-10 left-10 right-10 z-20 flex items-center justify-between text-white">
              <motion.div
                key={`loc-${story.id}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3"
              >
                <div className="w-8 h-8 rounded-full bg-sky-400 flex items-center justify-center">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Destination Photo</p>
                  <p className="text-xs font-black">{story.location}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Editorial Content */}
          <div className="w-full lg:w-1/2 p-10 lg:p-20 relative flex flex-col justify-center">

            {/* Background elements */}
            <div className="absolute top-0 right-0 p-10 select-none pointer-events-none opacity-[0.03]">
              <Quote className="w-64 h-64 text-gray-900" />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={story.id}
                initial={{ y: direction * 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -direction * 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10"
              >
                {/* Story Badge */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-8 bg-sky-400" />
                  <span className="text-sky-500 font-black text-xs uppercase tracking-widest">{story.type}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < story.rating ? 'fill-sky-400 text-sky-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>

                {/* Big Quote */}
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] mb-10 tracking-tight italic">
                  "{story.quote}"
                </h3>

                {/* Body Text */}
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
                  {story.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-8 border-t border-gray-100 pt-10">
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-2">The Travelers</p>
                    <h4 className="text-2xl font-black text-gray-900 leading-none">{story.name}</h4>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-2">Journey Date</p>
                    <div className="flex items-center gap-2 text-gray-900 font-bold">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span className="text-sm">{story.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-16 lg:mt-24 flex items-center justify-between">
              <div className="flex gap-4">
                <button
                  onClick={prev}
                  className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-all group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={next}
                  className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-sky-500 hover:border-sky-500 transition-all group"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Fractional Indicator */}
              <div className="flex items-center gap-6">
                <div className="h-px w-20 bg-gray-100 relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-sky-400"
                    initial={false}
                    animate={{ width: `${((index + 1) / stories.length) * 100}%` }}
                  />
                </div>
                <p className="text-gray-900 font-black text-lg">
                  0{index + 1} <span className="text-gray-200 text-sm mx-1">/</span> 0{stories.length}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Global CTA */}
        <div className="mt-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Ready to write your own story?</p>
            <button className="bg-gray-900 text-white font-black px-12 py-5 rounded-full hover:bg-sky-500 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(56,189,248,0.3)] group flex items-center gap-3">
              Plan My Dream Trip
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
