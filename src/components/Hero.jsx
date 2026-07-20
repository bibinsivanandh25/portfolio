import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/bibin.jpg';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const nameContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const wordVariant = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const NAME_WORDS = 'Bibin C S'.split(' ');

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-36">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-x-4 pb-10 text-6xl font-thin
                         tracking-tight lg:mt-16 lg:justify-start lg:text-8xl"
            >
              {NAME_WORDS.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center bg-gradient-to-t from-pink-300 via-slate-500
                         to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Front-end Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 text-justify font-light leading-7 tracking-normal
                         text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8">
          <div className="relative flex justify-center">
            {/* Glow blobs */}
            <div className="absolute h-64 w-64 rounded-full bg-purple-700/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-indigo-600/10 blur-2xl" />

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
              transition={{
                x: { duration: 1, delay: 1.2 },
                opacity: { duration: 1, delay: 1.2 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                },
              }}
              className="relative rounded-2xl bg-gradient-to-br from-purple-600/60 via-purple-900/40
                         to-transparent p-[2px] shadow-[0_0_50px_rgba(147,51,234,0.15)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={profilePic}
                  className="w-full grayscale transition-all duration-500 hover:grayscale-0
                             md:w-[500px] lg:w-full"
                  alt="Bibin CS"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.15 }}
        aria-label="Scroll to About section"
        className="mx-auto mt-10 hidden h-9 w-9 items-center justify-center rounded-full
                   border border-neutral-800 text-neutral-500 transition-colors duration-300
                   hover:border-purple-700 hover:text-purple-400 lg:flex"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowDown className="text-sm" />
        </motion.span>
      </motion.button>
    </div>
  );
};

export default Hero;
