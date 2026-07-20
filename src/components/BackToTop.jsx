import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Circle math for the progress ring
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          title="Back to top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed right-8 bottom-9 z-50 grid place-items-center w-16 h-16 rounded-full bg-black/30 backdrop-blur-md border border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.35)] cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-shadow duration-300"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="rgba(139,92,246,0.15)"
              strokeWidth="3"
            />
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.15s linear' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bouncing arrow */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <IoIosArrowUp color="white" size={26} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
