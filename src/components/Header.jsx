import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight, Plane, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Group Tours', path: '/group-tours' },
    { name: 'Packages', path: '/packages' },
    { name: 'India', path: '/india-destinations' },
    { name: 'Honeymoon', path: '/honeymoon' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* ── Top Strip ── */}
        <motion.div
          initial={{ height: 36 }}
          animate={{ height: isScrolled ? 0 : 36, opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden bg-[#051e30] border-b border-white/5"
        >
          <div className="container mx-auto px-6 lg:px-12 h-[36px] flex items-center justify-between">
            <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase text-white/40">
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-sky-400" /> South India's #1 Travel Agency</span>
              <span className="hidden md:flex items-center gap-1.5"><Plane className="w-3 h-3 text-sky-400" /> Platinum Edition — Est. 2015</span>
            </div>
            <a href="tel:+919600213XXX" className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-sky-400 transition-colors">
              <Phone className="w-3 h-3" /> +91 9600213XXX
            </a>
          </div>
        </motion.div>

        {/* ── Main Navbar ── */}
        <div
          className={`transition-all duration-500 ${isScrolled
              ? 'bg-[#082f49]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
              : 'bg-[#082f49]/60 backdrop-blur-sm border-b border-white/5'
            }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-16 md:h-[72px]">

              {/* Logo */}
              <Link to="/" className="flex items-center gap-3.5 shrink-0 group">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-colors duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center text-[#082f49] font-black text-xl">D</span>
                </div>
                <div>
                  <p className="font-black text-[18px] tracking-[0.12em] text-white leading-none">DCRUISE</p>
                  <p className="text-[8px] font-bold tracking-[0.3em] uppercase text-sky-400/70 mt-0.5">Platinum Edition</p>
                </div>
              </Link>

              {/* Desktop Nav — animated underline */}
              <nav className="hidden lg:flex items-center gap-0">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`relative px-4 xl:px-5 py-8 text-[11px] xl:text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 flex items-center ${isActive ? 'text-sky-400' : 'text-white/60 hover:text-white'
                        }`}
                    >
                      {link.name}
                      {/* Animated underline */}
                      {isActive ? (
                        <motion.span
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-4 xl:left-5 right-4 xl:right-5 h-[2px] rounded-full bg-sky-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      ) : (
                        <span className="absolute bottom-0 left-4 xl:left-5 right-4 xl:right-5 h-[2px] rounded-full bg-white/0 group-hover:bg-white/20 transition-colors" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right CTA */}
              <div className="hidden lg:flex items-center gap-4 shrink-0">
                <div className="h-8 w-px bg-white/10" />
                <Link
                  to="/contact"
                  className="relative overflow-hidden group flex items-center gap-2 bg-sky-400 hover:bg-sky-300 text-[#082f49] font-black text-[11px] uppercase tracking-[0.15em] px-7 py-3 rounded-lg transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]"
                >
                  <span className="relative z-10">Book Now</span>
                  <Plane className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(o => !o)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="x" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[45] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
              className="fixed top-0 right-0 bottom-0 z-[50] w-full max-w-[320px] bg-[#06243b] border-l border-white/10 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <div>
                  <p className="font-black text-lg tracking-[0.12em] text-white">DCRUISE</p>
                  <p className="text-[8px] font-bold tracking-widest uppercase text-sky-400/70 mt-0.5">Platinum Edition</p>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-6">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-4 border-b border-white/5 group ${isActive ? 'text-sky-400' : 'text-white/60 hover:text-white'
                          }`}
                      >
                        <span className="text-sm font-bold uppercase tracking-[0.18em]">{link.name}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 pb-8 pt-4 border-t border-white/8 space-y-3">
                <a href="tel:+919600213XXX" className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/8 text-white/70 hover:text-white hover:border-white/20 transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-sky-400/10 flex items-center justify-center group-hover:bg-sky-400/20 transition-colors">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-white/30">Call Us</p>
                    <p className="text-sm font-bold tracking-wide">+91 9600213XXX</p>
                  </div>
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-between w-full bg-sky-400 text-[#082f49] font-black text-sm uppercase tracking-[0.15em] rounded-xl px-5 py-4 hover:bg-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all"
                >
                  Book Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
