import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMui, SiReactquery, SiRedux } from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center my-20 text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <FaJs className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiRedux className="text-7xl text-violet-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiReactquery className="text-7xl text-rose-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <RiTailwindCssFill className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-800 p-4 rounded-2xl"
        >
          <SiMui className="text-7xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
