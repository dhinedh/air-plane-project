import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu on route change
    window.scrollTo(0, 0); // Scroll to top on route change
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
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 flex justify-center w-full ${isScrolled ? 'top-4 md:top-6' : 'top-6'
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 w-full max-w-7xl ${isScrolled
              ? 'bg-[#082f49]/80 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-4 md:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
              : 'bg-transparent py-4 px-2 border-transparent'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="text-[#082f49] font-black text-lg md:text-xl leading-none relative z-10">D</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-black text-xl tracking-[0.15em] leading-none text-white transition-colors duration-300">
                DCRUISE
              </h1>
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 mt-0.5">
                Platinum Edition
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative px-4 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/10 transition-colors duration-300 rounded-full"></div>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-5 shrink-0 xl:pl-4 xl:border-l border-white/10">
            <a href="tel:+919600213XXX" className="flex items-center gap-2 group text-white/60 hover:text-white transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-400/20 group-hover:border-sky-400/30 transition-all">
                <Phone className="w-3.5 h-3.5 group-hover:text-sky-400 transition-colors" />
              </div>
            </a>
            <Link to="/contact" className="group relative whitespace-nowrap overflow-hidden bg-sky-400 text-[#082f49] font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]">
              <span className="relative z-10">Plan Trip</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white z-[60] hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[45] bg-[#060d1a]/80"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#082f49]/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl flex flex-col pt-32 px-8 pb-10 overflow-y-auto"
            >
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 font-black text-[22px] uppercase tracking-widest">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-4 group ${location.pathname === link.path ? 'text-sky-400' : 'text-white/60 hover:text-white'}`}
                    >
                      <span className={`h-[2px] rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-8 bg-sky-400' : 'w-0 bg-white group-hover:w-4'}`}></span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <a href="tel:+919600213XXX" className="flex items-center gap-4 text-white hover:text-sky-400 transition-colors mb-8 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-400/20 group-hover:border-sky-400/30 transition-all">
                      <Phone className="w-5 h-5 text-white/50 group-hover:text-sky-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">Call Booking Team</p>
                      <p className="font-black text-lg tracking-wider">+91 9600213XXX</p>
                    </div>
                  </a>
                  <Link to="/contact" className="flex justify-between items-center bg-sky-400 text-[#082f49] font-black uppercase tracking-widest px-6 py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)]">
                    Plan Your Trip <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
