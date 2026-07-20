import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMui, SiReactquery, SiRedux } from 'react-icons/si';

const floatVariants = (duration) => ({
  animate: {
    y: [6, -6, 6],
    transition: { duration, ease: 'easeInOut', repeat: Infinity },
  },
});

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const TECHNOLOGIES = [
  { icon: FaHtml5, label: 'HTML', color: 'text-orange-600', duration: 5 },
  { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-600', duration: 6 },
  { icon: FaJs, label: 'JavaScript', color: 'text-yellow-400', duration: 4.5 },
  {
    icon: RiReactjsLine,
    label: 'React JS',
    color: 'text-cyan-400',
    duration: 5.5,
  },
  { icon: RiNextjsFill, label: 'Next JS', color: 'fill-white', duration: 6.5 },
  { icon: SiRedux, label: 'Redux', color: 'text-violet-500', duration: 5 },
  {
    icon: SiReactquery,
    label: 'React Query',
    color: 'text-rose-500',
    duration: 4,
  },
  {
    icon: RiTailwindCssFill,
    label: 'Tailwind CSS',
    color: 'text-blue-500',
    duration: 6,
  },
  { icon: SiMui, label: 'Material UI', color: 'text-blue-500', duration: 5.5 },
];

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {TECHNOLOGIES.map(({ icon: Icon, label, color, duration }) => (
          <motion.div
            key={label}
            variants={gridItem}
            className="group relative w-fit"
          >
            <motion.div
              variants={floatVariants(duration)}
              animate="animate"
              whileHover={{ scale: 1.12, y: 0 }}
              className="relative rounded-2xl border-2 border-neutral-800 bg-neutral-950/40 p-5
                         backdrop-blur-sm transition-colors duration-300 group-hover:border-purple-800/60"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0
                           transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(168,85,247,0.15), transparent 70%)',
                }}
              />
              <Icon className={`text-6xl lg:text-7xl ${color}`} />
            </motion.div>

            <span
              className="absolute top-full left-1/2 mt-2 -translate-x-1/2 translate-y-0
                         whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-sm text-white
                         opacity-0 shadow-[0_0_12px_rgba(168,85,247,0.2)] transition-all
                         duration-300 group-hover:translate-y-1 group-hover:opacity-100"
            >
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
