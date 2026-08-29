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

      // Show immediately when user starts scrolling
      setIsVisible(scrollTop > 0);

      // Never show 0%, start from 1%
      const roundedProgress = Math.max(
        1,
        Math.min(100, Math.round(scrollPercent)),
      );

      setProgress(roundedProgress);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    // Initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circle math
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          title="Back to top"
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 20,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="fixed right-8 bottom-9 z-50 grid place-items-center w-16 h-16 rounded-full bg-black/30 backdrop-blur-md border border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.35)] cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-shadow duration-300"
        >
          {/* Progress Ring */}
          <svg
            className="absolute inset-0 -rotate-90"
            width="64"
            height="64"
            viewBox="0 0 64 64"
          >
            {/* Background Ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="rgba(139,92,246,0.15)"
              strokeWidth="2"
            />

            {/* Progress Ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: 'stroke-dashoffset 0.15s linear',
              }}
            />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
          </svg>

          {/* Percentage / Arrow */}
          <AnimatePresence mode="wait">
            {progress >= 100 ? (
              <motion.div
                key="arrow"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                }}
              >
                <IoIosArrowUp color="white" size={25} />
              </motion.div>
            ) : (
              <motion.span
                key="percentage"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                }}
                className="relative z-10 text-white text-xs font-semibold"
              >
                {progress}%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
