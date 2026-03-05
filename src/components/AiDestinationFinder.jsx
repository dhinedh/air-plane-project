import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, MapPin, ArrowRight, RotateCcw } from 'lucide-react';
import { callGeminiOnce } from '../utils/gemini';
import { fadeUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    question: "Who are you traveling with?",
    options: [
      { label: '💑 Couple / Honeymoon', value: 'couple on a romantic honeymoon' },
      { label: '👨‍👩‍👧 Family', value: 'family with kids' },
      { label: '🧳 Solo Traveler', value: 'solo traveler' },
      { label: '👫 Friends Group', value: 'group of friends' },
    ]
  },
  {
    question: "What's your budget per person?",
    options: [
      { label: '💸 Under ₹30,000', value: 'under ₹30,000 per person' },
      { label: '💰 ₹30,000 – ₹80,000', value: '₹30,000 to ₹80,000 per person' },
      { label: '💎 ₹80,000+', value: 'above ₹80,000 per person, luxury' },
    ]
  },
  {
    question: "How many days do you have?",
    options: [
      { label: '⚡ 3–5 Days', value: '3 to 5 days' },
      { label: '🌅 6–9 Days', value: '6 to 9 days' },
      { label: '🗓 10+ Days', value: '10 or more days' },
    ]
  },
  {
    question: "What's your travel vibe?",
    options: [
      { label: '❤️ Romance & Relaxation', value: 'romantic and relaxing' },
      { label: '🏔 Adventure & Thrills', value: 'adventurous and thrilling' },
      { label: '🏛 Culture & Heritage', value: 'cultural and heritage' },
      { label: '🏖 Beach & Luxury', value: 'beaches and luxury resorts' },
    ]
  },
];

const AiDestinationFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const choose = async (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < steps.length - 1) {
      setStep(s => s + 1);
      return;
    }

    // All steps done — call Gemini
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
      if (err.message === 'NO_API_KEY') {
        setError('api_key');
      } else {
        setError('general');
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
    setError(null);
    setLoading(false);
  };

  const renderResult = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) =>
      i % 2 === 1
        ? <strong key={i} className="text-amber-300 font-black">{p}</strong>
        : p.split('\n').map((line, j) => <span key={`${i}-${j}`}>{line}{j < p.split('\n').length - 1 && <br />}</span>)
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* World map background */}
      <div className="absolute inset-0">
        <img
          src="/images/world-at-night.png"
          alt="World map"
          className="w-full h-full object-cover object-center opacity-70 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-brand-primary/40 to-brand-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 via-transparent to-brand-primary/40"></div>
      </div>
      {/* Amber center glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/8 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="flex items-center gap-5 mb-16"
        >
          <div className="h-px w-16 bg-amber-400"></div>
          <div>
            <p className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs mb-2">Powered by AI</p>
            <h2 className="text-5xl md:text-6xl font-black text-white flex items-center gap-4">
              Find Your Dream Destination
              <Sparkles className="w-10 h-10 text-amber-400 animate-pulse" />
            </h2>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="max-w-3xl mx-auto">
            {/* Main card */}
            <div className="rounded-3xl border border-white/8 bg-brand-surface/20 backdrop-blur-sm overflow-hidden">

              {/* Progress bar */}
              {!result && !loading && !error && (
                <div className="h-1 bg-white/8 w-full">
                  <motion.div
                    className="h-full bg-amber-400 rounded-full"
                    animate={{ width: `${(step / steps.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>
              )}

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">

                  {/* Quiz Steps */}
                  {!loading && !result && !error && (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-amber-400/60 text-xs font-black uppercase tracking-widest">Step {step + 1} of {steps.length}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-8">{steps[step].question}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {steps[step].options.map((opt, i) => (
                          <motion.button
                            key={i}
                            onClick={() => choose(opt.value)}
                            className="group text-left border border-white/10 hover:border-amber-400/50 rounded-2xl px-6 py-5 bg-white/3 hover:bg-amber-400/8 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-white/80 group-hover:text-white font-bold text-base">{opt.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Loading */}
                  {loading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                        <Sparkles className="w-8 h-8 text-brand-primary animate-spin" />
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">Analyzing your preferences...</h3>
                      <p className="text-white/40 text-sm">Our AI is curating the perfect destinations for you</p>
                    </motion.div>
                  )}

                  {/* Error */}
                  {error && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="text-center py-12"
                    >
                      {error === 'api_key' ? (
                        <>
                          <p className="text-2xl font-black text-white mb-3">⚙️ API Key Required</p>
                          <p className="text-white/50 text-sm mb-2">Add your Gemini API key to the <code className="bg-white/10 px-2 py-0.5 rounded text-amber-300">.env</code> file:</p>
                          <code className="block bg-white/6 border border-white/10 rounded-xl p-4 text-amber-300 text-sm my-4 font-mono">VITE_GEMINI_API_KEY=your_key_here</code>
                          <p className="text-white/30 text-xs">Get your free key at <a href="https://aistudio.google.com" target="_blank" rel="noreferrer" className="text-amber-400 underline">aistudio.google.com</a></p>
                        </>
                      ) : (
                        <p className="text-white/60">Something went wrong. Please try again.</p>
                      )}
                      <button onClick={reset} className="mt-6 inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-300 text-brand-primary font-black px-6 py-3 rounded-xl transition-all">
                        <RotateCcw className="w-4 h-4" /> Try Again
                      </button>
                    </motion.div>
                  )}

                  {/* Result */}
                  {result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-brand-primary" />
                        </div>
                        <h3 className="text-xl font-black text-white">Your AI-Recommended Destinations</h3>
                      </div>
                      <div className="text-white/70 text-sm leading-[1.9] bg-white/4 rounded-2xl p-6 border border-white/8 mb-6">
                        {renderResult(result)}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" className="flex-1 text-center bg-brand-accent hover:bg-amber-300 text-brand-primary font-black py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                          Book These Packages →
                        </a>
                        <button onClick={reset} className="flex-1 text-center border border-white/10 hover:border-white/20 text-white/60 hover:text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                          <RotateCcw className="w-4 h-4" /> Start Over
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiDestinationFinder;
