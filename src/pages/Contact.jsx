import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    whatsapp: '',
    destination: '',
    date: '',
    people: '',
    vacationType: 'Family'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for choosing DCRUISE! Make your dream vacation a reality.');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-aqua-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial="hidden" animate="visible" variants={fadeUp}
        className="bg-ocean-900 text-white py-16 mb-20 relative overflow-hidden rounded-3xl mx-4 md:mx-8 shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight drop-shadow-md">Contact & Enquiry</h1>
          <p className="text-xl md:text-2xl text-aqua-400 max-w-2xl mx-auto font-light leading-relaxed">Book Your Dream Vacation Today. Fill the form and our luxury travel concierge will contact you shortly.</p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3 space-y-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={slideInRight} className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-50 relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-ocean-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h2 className="text-3xl font-black text-ocean-900 mb-10 border-l-8 border-aqua-500 pl-6 relative z-10">Get In Touch</h2>
              
              <div className="space-y-8 relative z-10">
                <motion.div variants={fadeUp} className="flex gap-5 group/item">
                  <div className="w-14 h-14 bg-ocean-50 group-hover/item:bg-aqua-500 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-ocean-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Phone Support</p>
                    <a href="tel:+919600213XXX" className="text-xl font-bold text-ocean-900 hover:text-aqua-500 transition-colors">+91 9600213XXX</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-5 group/item">
                  <div className="w-14 h-14 bg-ocean-50 group-hover/item:bg-aqua-500 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-ocean-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Email Info</p>
                    <a href="mailto:info@dcruise.com" className="text-lg font-bold text-ocean-900 hover:text-aqua-500 transition-colors">info@dcruise.com</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex gap-5 group/item">
                  <div className="w-14 h-14 bg-ocean-50 group-hover/item:bg-aqua-500 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-ocean-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Headquarters</p>
                    <p className="text-lg font-bold text-ocean-900">South India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border-t-[12px] border-aqua-500">
              <h2 className="text-4xl font-black text-ocean-900 mb-10">Plan Your Trip</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">City of Residence *</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="Chennai" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">WhatsApp Number</label>
                    <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="Same as phone" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Travel Destination *</label>
                    <input required type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="e.g. Maldives, Kerala" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Date of Travel *</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-600 font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">No. of People *</label>
                    <input required type="number" min="1" name="people" value={formData.people} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium" placeholder="e.g. 2" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Vacation Type</label>
                    <div className="relative">
                      <select name="vacationType" value={formData.vacationType} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-aqua-500/20 focus:border-aqua-500 outline-none transition-all text-slate-800 font-medium appearance-none">
                        <option value="Family">Family</option>
                        <option value="Honeymoon">Honeymoon</option>
                        <option value="Corporate">Corporate / Group</option>
                        <option value="Friends">Friends / Backpacking</option>
                      </select>
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full mt-8 btn-primary flex items-center justify-center gap-3 text-xl py-5 rounded-[1.25rem] shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.5)] transition-all font-black tracking-wide"
                >
                  SEND ENQUIRY <Send className="w-6 h-6" />
                </motion.button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
