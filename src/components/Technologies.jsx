import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
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
        <div className="group relative w-fit">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <FaHtml5 className="text-6xl lg:text-7xl text-orange-600" />
          </motion.div>
          <span className="absolute top-full left-1/2 -translate-x-1/2 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-1 duration-300 text-white whitespace-nowrap text-sm bg-neutral-900 px-2 py-1 mt-2 rounded-md ">
            HTML
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <FaCss3Alt className="text-6xl lg:text-7xl text-blue-600" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            CSS
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <FaJs className="text-6xl lg:text-7xl text-yellow-400" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            JavaScript
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <RiReactjsLine className="text-6xl lg:text-7xl text-cyan-400" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            React JS
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <RiNextjsFill className="text-6xl lg:text-7xl fill-white" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            Next JS
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <SiRedux className="text-6xl lg:text-7xl text-violet-500" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            Redux
          </span>
        </div>
        <div className="relative group w-fit">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <SiReactquery className="text-6xl lg:text-7xl text-rose-500" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            React Query
          </span>
        </div>
        <div className="relative w-fit group">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <RiTailwindCssFill className="text-6xl lg:text-7xl text-blue-500" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            Tailwind CSS
          </span>
        </div>
        <div className="relative group w-fit">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="border-4 border-neutral-800 p-4 rounded-2xl"
          >
            <SiMui className="text-6xl lg:text-7xl text-blue-500" />
          </motion.div>
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 group-hover:opacity-100 group-hover:translate-y-1 opacity-0 transition-all duration-300 whitespace-nowrap bg-neutral-900 px-2 py-1 rounded-md text-sm text-white">
            Material UI
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
