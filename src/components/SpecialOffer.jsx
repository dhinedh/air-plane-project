import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const SpecialOffer = () => (
  <section className="py-6 px-6 lg:px-16 bg-[#082f49]">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="relative rounded-3xl overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
        alt="Special offer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay with a left-leaning amber glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#082f49]/98 via-[#082f49]/80 to-[#082f49]/60"></div>
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-sky-400/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 py-20 px-10 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left text */}
        <div className="max-w-xl">
          <span className="inline-block bg-sky-400 text-[#082f49] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            🎉 Limited Time Offer
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
            Plan Your <span className="text-sky-400">Dream Trip</span><br className="hidden md:block" /> Today — Save Up to 25%
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed mb-2">
            Book any international package this month and receive exclusive upgrades — complimentary airport transfers, premium hotel room upgrades, and a private guided city tour.
          </p>
        </div>

        {/* Right contact box */}
        <div className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-8 w-full max-w-sm flex-shrink-0">
          <h3 className="text-white font-black text-xl mb-6">Get a Free Quote</h3>
          <div className="space-y-4">
            <a href="tel:+919600213XXX" className="flex items-center gap-4 group bg-sky-400/10 hover:bg-sky-400 border border-sky-400/20 hover:border-sky-400 rounded-xl px-5 py-4 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-sky-400 group-hover:bg-[#082f49] flex items-center justify-center flex-shrink-0 transition-colors">
                <Phone className="w-5 h-5 text-[#082f49] group-hover:text-sky-400" />
              </div>
              <div>
                <p className="text-sky-400 group-hover:text-[#060d1a] font-black transition-colors text-sm">Call Us Now</p>
                <p className="text-white/60 group-hover:text-[#060d1a]/70 text-xs transition-colors">+91 9600213XXX</p>
              </div>
            </a>

            <a href="mailto:info@dcruise.com" className="flex items-center gap-4 group bg-white/4 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-5 py-4 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-white/10 group-hover:bg-sky-400/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <Mail className="w-5 h-5 text-white/60 group-hover:text-sky-400 transition-colors" />
              </div>
              <div>
                <p className="text-white/80 font-black text-sm">Email Us</p>
                <p className="text-white/40 text-xs">info@dcruise.com</p>
              </div>
            </a>

            <Link
              to="/contact"
              className="block text-center bg-sky-400 hover:bg-sky-300 text-[#082f49] font-black text-sm px-6 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)]"
            >
              Fill Enquiry Form →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default SpecialOffer;
