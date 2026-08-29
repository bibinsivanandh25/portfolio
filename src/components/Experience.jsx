import { useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { EXPERIENCES } from '../constants';
import PropTypes from 'prop-types';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ExperienceCard = ({ experience }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), {
    stiffness: 200,
    damping: 22,
    mass: 0.4,
  });

  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(400px circle at ${gx}% ${gy}%, rgba(168,85,247,0.08), transparent 70%)`,
  );

  const handleMove = useCallback(
    (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-full overflow-hidden rounded-xl border border-neutral-900 p-5 transition-all duration-300 hover:border-purple-900/60 hover:bg-neutral-950/60 lg:max-w-xl motion-reduce:!transform-none"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hover:opacity-100"
          style={{ background: glowBackground, transform: 'translateZ(1px)' }}
        />

        <motion.div
          style={{ translateZ: 25 }}
          className="mb-3 flex items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-950/50 text-purple-300">
            <FaBriefcase className="text-sm" />
          </span>
          <h6 className="font-semibold">
            {experience.role}
            <span className="block text-sm font-normal text-purple-300 sm:inline sm:before:content-['_-_']">
              {experience.company}
            </span>
          </h6>
        </motion.div>

        <motion.div style={{ translateZ: 12 }}>
          <p className="mb-4 text-justify leading-6 text-neutral-400">
            {experience.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {experience.technologies.map((technology, i) => (
              <span
                key={i}
                className="rounded bg-neutral-900 px-3.5 py-1.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-purple-950/60"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 60%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div id="experience" className="border-b border-neutral-900 pb-16">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div
        ref={containerRef}
        className="relative mx-auto flex max-w-4xl flex-col gap-14 px-4"
      >
        {/* Static faint track */}
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-neutral-900 lg:block" />

        {/* Animated draw-in line, tied to scroll progress */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[7px] top-2 hidden w-px bg-gradient-to-b from-purple-400 via-purple-600 to-purple-900 shadow-[0_0_8px_rgba(168,85,247,0.6)] lg:block"
        />

        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex flex-wrap gap-4 lg:flex-nowrap lg:gap-10 lg:pl-8"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 hidden h-4 w-4 lg:block">
              {/present|current/i.test(experience.year) && (
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-purple-500"
                />
              )}
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="relative block h-4 w-4 rounded-full border-2 border-purple-500 bg-neutral-950 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
              />
            </div>

            <div className="w-full lg:w-1/4 lg:mt-1">
              <span className="inline-block rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-left text-xs tracking-wide text-neutral-400 md:text-center lg:text-left">
                {experience.year}
              </span>
            </div>

            <div className="w-full lg:w-3/4">
              <ExperienceCard experience={experience} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

//? PROP-TYPES
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
};
