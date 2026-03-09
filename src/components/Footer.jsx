import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp, Send } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040e18] pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Decorative background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Layer 1: Impact Recall Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              Start Your Next<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-sky-400">
                Great Adventure.
              </span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-lg">
              Unlock exclusive luxury travel experiences and handcrafted itineraries designed specifically for your unique style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="w-full lg:w-autorelative"
          >
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full lg:w-96 bg-white/[0.03] border border-white/10 rounded-2xl py-5 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-sky-400/50 transition-all text-sm pr-16"
              />
              <button className="absolute right-2 top-2 bottom-2 aspect-square bg-sky-400 hover:bg-sky-300 rounded-xl flex items-center justify-center text-[#040e18] transition-all group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest mt-4 ml-2">Subscribe for weekly travel inspiration</p>
          </motion.div>
        </div>

        {/* Layer 2: Detailed Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">

          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-sky-400/20 transition-all">
                <span className="text-white font-black text-xl leading-none">D</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">DCRUISE</span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              Experience travel redefine. Since 2003, we’ve been the most trusted premium travel agency in South India, creating journeys that inspire the soul.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Packages', 'Group Tours', 'Honeymoon', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-sky-400 text-sm font-medium transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-sky-400 transition-all shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Support */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Quick Support</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-[#040e18] transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest leading-none mb-1.5">Call Hotline</p>
                  <p className="text-white font-bold text-sm tracking-tight">+91 9600213XXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-[#040e18] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest leading-none mb-1.5">Write to us</p>
                  <p className="text-white font-bold text-sm tracking-tight">info@dcruise.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Location */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Headquarters</h4>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-sky-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight leading-relaxed">
                  123 Luxury Lane, Ocean View Heights,<br />
                  Chennai, Tamil Nadu, India — 600001
                </p>
                <a href="#" className="inline-block text-sky-400 text-[10px] font-black uppercase tracking-widest mt-4 border-b border-sky-400/30 hover:border-sky-400 py-0.5 transition-all">
                  Location map
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Layer 3: Legal & Copyright Wrap */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/20 text-xs font-medium">
            © 2026 DCRUISE Travel Agency. Crafted with passion by travel engineers.
          </p>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map(l => (
                <a key={l} href="#" className="text-white/20 hover:text-white/50 text-[10px] font-bold uppercase tracking-widest transition-colors">{l}</a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/5 transition-all group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
