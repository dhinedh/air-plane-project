import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setIsHovering(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setIsHovering(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring - lags behind with mass for momentum */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (isHovering ? 28 : 16),
          y: pos.y - (isHovering ? 28 : 16),
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
      >
        <div className={`w-full h-full rounded-full border border-white/80 transition-all duration-500 ${isHovering ? 'bg-white/15 scale-110' : 'bg-transparent'}`} />
      </motion.div>

      {/* Inner dot - high precision snapping */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 2, y: pos.y - 2 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40 }}
      >
        <div className={`w-1 h-1 rounded-full bg-white transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
      </motion.div>
    </>
  );
};

export default CustomCursor;
