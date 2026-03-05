import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, TriangleAlert } from 'lucide-react';
import { callGemini } from '../utils/gemini';

const SUGGESTIONS = [
  'Best honeymoon package under ₹80,000?',
  'Plan a family trip to Kerala',
  'Compare Bali vs Maldives',
  'Group tour options under ₹30,000',
];

const AiChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "✈️ Hi! I'm **DCRUISE AI** — your personal travel assistant.\n\nTell me your dream destination, budget, or travel style and I'll help you plan the perfect trip! 🌍",
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setApiError(false);

    const newMessages = [...messages, { role: 'user', content: msg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const reply = await callGemini(newMessages);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      if (err.message === 'NO_API_KEY') {
        setApiError(true);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: '⚠️ Please add your Gemini API key to the `.env` file as `VITE_GEMINI_API_KEY` to activate the AI assistant.',
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: '😔 Sorry, I had trouble connecting. Please try again in a moment.',
        }]);
      }
    } finally {
      setLoading(false);
    }
  };

  const renderText = (text) => {
    // Basic markdown: **bold**, newlines
    return text
      .split('\n')
      .map((line, i) => {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <span key={i}>
            {parts.map((p, j) => j % 2 === 1 ? <strong key={j} className="font-black text-amber-300">{p}</strong> : p)}
            {i < text.split('\n').length - 1 && <br />}
          </span>
        );
      });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[9990] w-14 h-14 rounded-full bg-brand-accent hover:bg-amber-300 text-brand-primary shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_45px_rgba(251,191,36,0.7)] flex items-center justify-center transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-6 h-6" /></motion.div>
            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle className="w-6 h-6" /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      {/* Ping badge */}
      {!open && (
        <div className="fixed bottom-6 right-6 z-[9991] pointer-events-none">
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-brand-primary">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          </span>
        </div>
      )}

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-[9989] w-[370px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10"
          >
            {/* Header */}
            <div className="bg-brand-primary border-b border-white/8 px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-black text-sm">DCRUISE AI</h3>
                <p className="text-green-400 text-[11px] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span> Online — Travel Expert
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="bg-brand-primary h-80 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${m.role === 'user' ? 'bg-amber-400/20 border border-amber-400/30' : 'bg-amber-400'}`}>
                    {m.role === 'user'
                      ? <User className="w-3.5 h-3.5 text-amber-400" />
                      : <Bot className="w-3.5 h-3.5 text-brand-primary" />
                    }
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === 'user'
                    ? 'bg-amber-400/15 border border-amber-400/20 text-white/90 rounded-tr-sm'
                    : 'bg-white/6 border border-white/8 text-white/80 rounded-tl-sm'
                    }`}>
                    {renderText(m.content)}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5 text-brand-primary" />
                  </div>
                  <div className="bg-white/6 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                    <span className="text-white/40 text-xs">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="bg-brand-primary border-t border-white/5 px-4 py-3 flex gap-2 overflow-x-auto">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => send(s)}
                    className="flex-shrink-0 text-[11px] font-semibold text-white/60 hover:text-amber-300 border border-white/10 hover:border-amber-400/40 rounded-full px-3 py-1.5 transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="bg-brand-primary border-t border-white/8 p-3 flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
                placeholder="Ask about any destination..."
                className="flex-1 bg-white/6 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-brand-accent hover:bg-amber-300 text-brand-primary flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiChatWidget;
