import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mt-0 lg:mt-1 text-left md:text-center lg:text-left"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:max-w-xl lg:w-3/4 flex flex-col lg:items-start items-center"
            >
              <h6 className="font-semibold mb-2">
                {experience.role} -{' '}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="text-neutral-400 mb-4 leading-7 text-justify">
                {experience.description}
              </p>
              <div className="flex items-center flex-wrap gap-2">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
