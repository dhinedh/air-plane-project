import { useScroll, useSpring, motion } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9998] origin-left bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-300 shadow-[0_2px_10px_rgba(56,189,248,0.3)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
