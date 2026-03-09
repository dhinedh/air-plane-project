import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw, ArrowRight, Plane, CheckCircle2 } from 'lucide-react';
import { callGeminiOnce } from '../utils/gemini';

const steps = [
  {
    question: "Who are you traveling with?",
    sub: "Select one that best describes your group",
    options: [
      {
        label: 'Couple / Honeymoon', emoji: '💑', value: 'couple on a romantic honeymoon',
        image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80',
        color: 'from-rose-500 to-pink-600',
      },
      {
        label: 'Family', emoji: '👨‍👩‍👧', value: 'family with kids',
        image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80',
        color: 'from-emerald-500 to-teal-600',
      },
      {
        label: 'Solo Traveler', emoji: '🧭', value: 'solo traveler',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
        color: 'from-sky-500 to-blue-600',
      },
      {
        label: 'Friends Group', emoji: '🎉', value: 'group of friends',
        image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80',
        color: 'from-violet-500 to-purple-600',
      },
    ]
  },
  {
    question: "What's your budget per person?",
    sub: "We have perfect options for every budget",
    options: [
      {
        label: 'Budget Friendly', sub2: 'Under ₹30,000', emoji: '💸', value: 'under ₹30,000 per person',
        image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=600&q=80',
        color: 'from-amber-500 to-orange-600',
      },
      {
        label: 'Mid-Range', sub2: '₹30K – ₹80K', emoji: '💰', value: '₹30,000 to ₹80,000 per person',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
        color: 'from-sky-500 to-cyan-600',
      },
      {
        label: 'Luxury', sub2: '₹80,000+', emoji: '💎', value: 'above ₹80,000 per person, luxury',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
        color: 'from-slate-500 to-slate-700',
      },
    ]
  },
  {
    question: "How long is your trip?",
    sub: "Pick your ideal travel window",
    options: [
      {
        label: 'Quick Escape', sub2: '3–5 Days', emoji: '⚡', value: '3 to 5 days',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80',
        color: 'from-orange-500 to-red-600',
      },
      {
        label: 'Perfect Trip', sub2: '6–9 Days', emoji: '🌅', value: '6 to 9 days',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
        color: 'from-teal-500 to-emerald-600',
      },
      {
        label: 'Grand Tour', sub2: '10+ Days', emoji: '🗺️', value: '10 or more days',
        image: 'https://images.unsplash.com/photo-1527668752968-14ce70a40d7c?auto=format&fit=crop&w=600&q=80',
        color: 'from-indigo-500 to-violet-600',
      },
    ]
  },
  {
    question: "What's your travel vibe?",
    sub: "Tell us the experience you're chasing",
    options: [
      {
        label: 'Romance & Relaxation', emoji: '❤️', value: 'romantic and relaxing',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
        color: 'from-rose-500 to-pink-600',
      },
      {
        label: 'Adventure & Thrills', emoji: '🏔', value: 'adventurous and thrilling',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
        color: 'from-orange-500 to-amber-600',
      },
      {
        label: 'Culture & Heritage', emoji: '🏛', value: 'cultural and heritage',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
        color: 'from-violet-500 to-purple-600',
      },
      {
        label: 'Beach & Luxury', emoji: '🏖', value: 'beaches and luxury resorts',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        color: 'from-sky-500 to-cyan-600',
      },
    ]
  },
];

const AiDestinationFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const choose = async (opt) => {
    setSelected(opt.value);
    await new Promise(r => setTimeout(r, 320)); // brief pause to show selected state

    const newAnswers = [...answers, opt.value];
    setAnswers(newAnswers);
    setSelected(null);

    if (step < steps.length - 1) {
      setStep(s => s + 1);
      return;
    }

    setLoading(true);
    setError(null);
    const [traveler, budget, duration, vibe] = newAnswers;
    const prompt = `A customer is looking for a travel package. Here are their preferences:
- Traveling as: ${traveler}
- Budget: ${budget}
- Duration: ${duration}
- Travel vibe: ${vibe}

Based on DCRUISE's offerings, recommend exactly 3 destinations. Format your response EXACTLY like this for each destination:

**[Destination Name]**
Why it's perfect: [2 sentences about why it fits their preferences]
Estimated cost: [price range]
Highlight: [one iconic experience]

Keep it concise, specific, and inspiring. End with a one-line call to action mentioning DCRUISE.`;

    try {
      const response = await callGeminiOnce(prompt);
      setResult(response);
    } catch (err) {
      setError(err.message === 'NO_API_KEY' ? 'api_key' : 'general');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); setResult(null); setError(null); setLoading(false); setSelected(null); };

  const renderResult = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) =>
      i % 2 === 1
        ? <strong key={i} className="text-sky-600 font-black text-base block mt-5 mb-1">{p}</strong>
        : p.split('\n').filter(l => l.trim()).map((line, j) => <p key={`${i}-${j}`} className="text-gray-500 text-sm leading-relaxed mb-1">{line}</p>)
    );
  };

  const cols = steps[step]?.options.length === 3 ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4';

  return (
    <section className="relative bg-white py-0 overflow-hidden">
      {/* Top wave border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500" />

      {/* Faint radial bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-sky-200 bg-sky-50 text-sky-600 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Powered by Gemini AI
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter">
            Find Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">Dream Destination</span>
          </h2>
          <p className="text-gray-400 font-light text-lg mt-5 max-w-md mx-auto">
            4 quick questions. Infinite possibilities. Curated by AI, crafted by DCRUISE.
          </p>

          {/* Step dots */}
          {!result && !loading && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-400 ${i === step ? 'w-8 h-2.5 bg-sky-500' :
                      i < step ? 'w-2.5 h-2.5 bg-sky-300' :
                        'w-2.5 h-2.5 bg-gray-200'
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">

          {/* ── QUIZ ── */}
          {!loading && !result && !error && (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.1, 1] }}
            >
              <h3 className="text-center text-2xl md:text-3xl font-black text-gray-900 mb-2">
                {steps[step].question}
              </h3>
              <p className="text-center text-gray-400 text-sm font-light mb-10">{steps[step].sub}</p>

              <div className={`grid ${cols} gap-4 md:gap-5`}>
                {steps[step].options.map((opt, i) => {
                  const isSelected = selected === opt.value;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => choose(opt)}
                      className={`group relative rounded-3xl overflow-hidden cursor-pointer text-left border-2 transition-all duration-300 ${isSelected ? 'border-sky-400 scale-[0.97]' : 'border-transparent hover:border-sky-300 hover:scale-[1.02]'
                        }`}
                      whileTap={{ scale: 0.96 }}
                    >
                      {/* Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={opt.image}
                          alt={opt.label}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${opt.color}/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />
                        {/* Emoji badge */}
                        <span className="absolute top-4 left-4 text-3xl filter drop-shadow-lg">{opt.emoji}</span>
                        {/* Selected check */}
                        {isSelected && (
                          <div className="absolute inset-0 flex items-center justify-center bg-sky-500/30">
                            <CheckCircle2 className="w-12 h-12 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Label */}
                      <div className="p-4 bg-white">
                        <p className="font-black text-gray-900 text-base leading-tight">{opt.label}</p>
                        {opt.sub2 && <p className="text-gray-400 text-xs font-semibold mt-0.5">{opt.sub2}</p>}
                        <div className="flex items-center gap-1 text-sky-500 text-xs font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Select <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ── LOADING ── */}
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.5)]">
                  <Sparkles className="w-10 h-10 text-white animate-spin" />
                </div>
                <div className="absolute -inset-2 border-2 border-sky-200 rounded-[2rem] animate-ping opacity-40" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">Analyzing your preferences...</h3>
              <p className="text-gray-400 font-light">Gemini AI is curating your perfect destinations</p>
              <div className="flex justify-center gap-1.5 mt-8">
                {[0, 1, 2].map(i => (
                  <motion.div key={i} className="w-2 h-2 rounded-full bg-sky-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }} />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── ERROR ── */}
          {error && (
            <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              {error === 'api_key' ? (
                <div className="max-w-lg mx-auto">
                  <p className="text-3xl font-black text-gray-900 mb-4">⚙️ API Key Required</p>
                  <p className="text-gray-400 mb-4">Add your Gemini API key to the <code className="bg-gray-100 px-2 py-0.5 rounded text-sky-500">.env</code> file:</p>
                  <code className="block bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sky-600 text-sm mb-6 font-mono">VITE_GEMINI_API_KEY=your_key_here</code>
                  <p className="text-gray-300 text-sm">Get your free key at <a href="https://aistudio.google.com" className="text-sky-500 underline" target="_blank" rel="noreferrer">aistudio.google.com</a></p>
                </div>
              ) : (
                <p className="text-gray-400">Something went wrong. Please try again.</p>
              )}
              <button onClick={reset} className="mt-8 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-black px-8 py-4 rounded-full transition-all">
                <RotateCcw className="w-4 h-4" /> Try Again
              </button>
            </motion.div>
          )}

          {/* ── RESULT ── */}
          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-300 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Your AI-Curated Destinations</h3>
                <p className="text-gray-400 text-sm mt-1">Tailored precisely to your preferences</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-6 shadow-sm">
                {renderResult(result)}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="flex-1 flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)]">
                  <Plane className="w-5 h-5" /> Book These Packages
                </a>
                <button onClick={reset} className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-800 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" /> Start Over
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
};

export default AiDestinationFinder;
