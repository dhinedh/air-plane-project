import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-900 text-slate-300 pt-20 pb-10 border-t-4 border-aqua-500">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-2 hover:text-aqua-400 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ocean-500 to-aqua-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg leading-none">D</span>
                </div>
                DCRUISE
              </h2>
              <p className="text-aqua-400 text-sm font-semibold tracking-wider uppercase mt-1">Best Travel Agency in South India</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Your trusted travel partner for unforgettable journeys across India and international destinations. Providing premium travel experiences with 21+ years of expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center hover:bg-aqua-500 hover:text-white transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-aqua-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'Packages', 'Group Tours', 'Honeymoon', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-aqua-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-700 group-hover:bg-aqua-400 transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-aqua-500 rounded-full"></span>
              Top Destinations
            </h3>
            <ul className="space-y-4">
              {['Maldives', 'Bali', 'Goa', 'Kerala Backwaters', 'Dubai', 'Europe'].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="hover:text-aqua-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ocean-700 group-hover:bg-aqua-400 transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-aqua-500 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-aqua-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Call Us</p>
                  <a href="tel:+919600213XXX" className="text-white font-medium hover:text-aqua-400 transition-colors text-lg">
                    +91 9600213XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-aqua-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                  <a href="mailto:info@dcruise.com" className="text-white font-medium hover:text-aqua-400 transition-colors">
                    info@dcruise.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-aqua-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Office</p>
                  <p className="text-white font-medium">Headquarters, South India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-ocean-800 text-center md:flex md:justify-between md:text-left items-center">
          <p className="text-sm text-slate-400">
            © 2026 DCRUISE Travel Agency. All Rights Reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
