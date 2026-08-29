import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMui, SiReactquery, SiRedux } from 'react-icons/si';
import PropTypes from 'prop-types';

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

// Flip card: the float-bob still runs on the outer wrapper, but hover now
// triggers a real 180° rotateY between two faces instead of a tooltip.
// Both faces are absolutely stacked with backface-visibility: hidden, so
// only one is ever visible at a time as the card turns.
const TechCard = ({ icon: Icon, label, color, duration }) => {
  return (
    <motion.div
      variants={gridItem}
      className="group relative w-fit"
      style={{ perspective: 1000 }}
    >
      <motion.div
        variants={floatVariants(duration)}
        animate="animate"
        className="relative h-[104px] w-[104px] lg:h-[124px] lg:w-[124px]"
      >
        <motion.div
          initial={false}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative h-full w-full motion-reduce:!transform-none"
        >
          {/* Front — icon */}
          <div
            style={{ backfaceVisibility: 'hidden' }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-neutral-800 bg-neutral-950/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-purple-800/60"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at 50% 30%, rgba(168,85,247,0.15), transparent 70%)',
              }}
            />
            <Icon className={`text-6xl lg:text-7xl ${color}`} />
          </div>

          {/* Back — label */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 flex items-center justify-center rounded-2xl border-2 border-purple-800/60 bg-neutral-950 px-2 text-center"
          >
            <span className="text-sm font-medium text-white">{label}</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

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
        {TECHNOLOGIES.map((tech) => (
          <TechCard key={tech.label} {...tech} />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

//? PROP-TYPES
TechCard.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  duration: PropTypes.number.isRequired,
};
