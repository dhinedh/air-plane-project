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
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left bg-gradient-to-r from-ocean-500 via-aqua-400 to-ocean-300"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
