import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap lg:justify-center mb-14  lg:mb-10 "
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              className="w-full lg:w-1/4 mt-0 lg:mt-2"
            >
              <img
                className="mb-6 rounded w-full lg:w-[200px]
                "
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-neutral-900 text-purple-800 text-sm font-medium px-2 py-1 mr-2 rounded"
                >
                  {tech}
                </span>
              ))}
              <div className="flex items-center gap-4 mt-6">
                <a
                  className="border-2 border-purple-800 bg-neutral-900 rounded-xl px-4 py-2 hover:bg-neutral-800 transition duration-100"
                  href={project.githubUrl}
                  target="_blank"
                >
                  <div className="font-semibold text-sm">GitHub</div>
                </a>
                <a
                  className="border-2 border-purple-800 bg-neutral-900 rounded-xl px-4 py-2 hover:bg-neutral-800 transition duration-100"
                  href={project.liveDemoURL}
                  target="_blank"
                >
                  <div className="font-semibold text-sm">Live Demo</div>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
