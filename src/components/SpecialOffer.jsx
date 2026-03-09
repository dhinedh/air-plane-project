import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const SpecialOffer = () => (
  <section className="py-8 px-4 md:px-6 lg:px-12 bg-white">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="relative rounded-[2.5rem] overflow-hidden min-h-[560px] flex items-center"
    >
      {/* Full-bleed background image */}
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury travel offer"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-[#040e18]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#040e18]/90 via-[#040e18]/60 to-transparent" />

      {/* Floating glow accents */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-40 bottom-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full py-16 px-8 md:px-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

        {/* Left — Text */}
        <div className="max-w-2xl">
          {/* Offer badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-400 font-bold uppercase tracking-widest text-xs px-4 py-2.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" /> Limited Time Offer
            </span>
            <span className="flex items-center gap-1.5 text-white/30 text-xs font-bold uppercase tracking-widest">
              <Clock className="w-3 h-3" /> Ends this month
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
            Save Up to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400">
              25% Off
            </span>
            Your Dream Trip
          </h2>

          <p className="text-white/50 text-base font-light leading-relaxed mb-10 max-w-lg">
            Book any international package this month and receive exclusive upgrades — complimentary airport transfers, premium hotel room upgrades, and a private guided city tour.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap gap-4">
            {['Free Airport Transfers', 'Room Upgrade', 'City Tour Included', '24/7 Concierge'].map(b => (
              <div key={b} className="flex items-center gap-2 text-white/60 text-sm font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Contact card */}
        <div className="w-full max-w-sm flex-shrink-0">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">Free Consultation</p>
            <h3 className="text-white font-black text-2xl mb-8">Get a Free Quote</h3>

            <div className="space-y-3 mb-6">
              <a href="tel:+919600213XXX" className="flex items-center gap-4 group bg-sky-400/10 hover:bg-sky-400 border border-sky-400/20 hover:border-sky-400 rounded-2xl px-5 py-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sky-400 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-5 h-5 text-[#040e18]" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">Call Us Now</p>
                  <p className="text-white/50 text-xs mt-0.5">+91 9600213XXX</p>
                </div>
              </a>

              <a href="mailto:info@dcruise.com" className="flex items-center gap-4 group bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/20 rounded-2xl px-5 py-4 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/8 group-hover:bg-white/15 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Email Us</p>
                  <p className="text-white/40 text-xs mt-0.5">info@dcruise.com</p>
                </div>
              </a>
            </div>

            <Link
              to="/contact"
              className="group flex items-center justify-between w-full bg-sky-400 hover:bg-sky-300 text-[#040e18] font-black text-sm uppercase tracking-widest px-6 py-4.5 rounded-2xl transition-all shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]"
            >
              <span className="py-1">Fill Enquiry Form</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SpecialOffer;
