import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-16">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-16 lg:gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-wrap items-center lg:items-start lg:justify-center
                       gap-6 lg:gap-10 rounded-2xl border border-neutral-900 p-4 lg:p-6
                       transition-colors duration-300 hover:border-purple-800/60"
          >
            {/* Soft glow on hover */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0
                         transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(600px circle at 50% 0%, rgba(168,85,247,0.08), transparent 70%)',
              }}
            />

            {/* Image */}
            <div className="w-full overflow-hidden rounded-xl lg:w-1/4 lg:mt-2">
              <img
                className="h-full w-full object-contain transition-transform duration-500 ease-out
                           group-hover:scale-110 lg:w-[300px]"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col items-center lg:w-3/4 lg:max-w-xl lg:items-start">
              <h6 className="mb-2 text-lg font-semibold">
                <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text">
                  {project.title}
                </span>
              </h6>
              <p className="mb-4 text-justify leading-6 text-neutral-400">
                {project.description}
              </p>

              <div className="flex w-full flex-wrap items-center justify-start gap-2 md:justify-center lg:justify-start">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-neutral-900 px-3.5 py-1.5 text-sm font-medium text-white
                               transition-colors duration-200 hover:bg-purple-950/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex w-full flex-col flex-wrap items-start gap-4 md:flex-row md:items-center md:justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group/btn flex items-center gap-2 whitespace-nowrap rounded-lg
                             border-2 border-purple-800 bg-neutral-900 px-4 py-2
                             transition-colors duration-200 hover:bg-neutral-800"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-sm font-semibold">Source code</div>
                  <FaGithub className="text-lg transition-transform duration-300 group-hover/btn:rotate-12" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group/btn flex items-center gap-2 rounded-lg border-2 border-purple-800
                             bg-neutral-900 px-4 py-2 transition-colors duration-200 hover:bg-neutral-800"
                  href={project.liveDemoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-sm font-semibold">Live demo</div>
                  <MdArrowOutward className="text-xl transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
