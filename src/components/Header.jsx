import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-primary/95 backdrop-blur-xl border-b border-white/8 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg">
              <span className="text-brand-primary font-black text-xl leading-none">D</span>
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tight leading-none text-white">
                DCRUISE
              </h1>
              <p className="hidden xl:block text-[10px] font-semibold tracking-wider uppercase text-white/40">
                Best Travel Agency in South India
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`whitespace-nowrap text-sm font-semibold transition-colors hover:text-amber-400 ${location.pathname === link.path
                  ? 'text-amber-400'
                  : 'text-white/70'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call / Action Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a href="tel:+919600213XXX" className="whitespace-nowrap flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              +91 9600213XXX
            </a>
            <Link to="/contact" className="whitespace-nowrap bg-brand-accent hover:bg-amber-300 text-brand-primary font-black text-sm px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-primary shadow-xl border-t border-white/10 overflow-hidden animate-fade-in">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-amber-400' : 'text-white/70'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <a href="tel:+919600213XXX" className="flex items-center gap-3 text-lg font-bold text-white">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white/60" />
                </div>
                +91 9600213XXX
              </a>
              <Link to="/contact" className="btn-primary w-full text-center">
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
