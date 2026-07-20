import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import resume from '../assets/Resume.pdf';
import { MdOutlineFileDownload } from 'react-icons/md';

const iconVariants = {
  rest: { y: 0, rotate: 0 },
  hover: {
    y: [0, -4, 0],
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="text-center text-4xl my-20">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="relative flex items-center justify-center">
            {/* Glow blobs behind the frame */}
            <div className="absolute h-56 w-56 rounded-full bg-purple-700/20 blur-3xl" />
            <div className="absolute -bottom-6 -right-2 h-40 w-40 rounded-full bg-indigo-600/10 blur-2xl" />

            {/* Gradient-ring frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl bg-gradient-to-br from-purple-600/60 via-purple-900/40
                         to-transparent p-[2px] shadow-[0_0_40px_rgba(147,51,234,0.15)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-500
                             hover:grayscale-0"
                  src={aboutImg}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center justify-center pb-4 mt-8 lg:items-start">
            <div className="relative max-w-xl py-6">
              <span className="absolute -left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-purple-600 via-purple-900/50 to-transparent lg:block" />
              <p className="my-2 leading-7 text-justify text-neutral-300">
                {ABOUT_TEXT}
              </p>
            </div>

            <a
              className="inline-flex"
              href={resume}
              download="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.96 }}
                className="cvContainer group relative inline-flex items-center gap-3 overflow-hidden
                           rounded-md border-2 border-purple-800 bg-neutral-900
                           bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
                           px-4 py-2 leading-none transition-colors duration-300 hover:bg-purple-800"
              >
                {/* Shine sweep on hover */}
                <span
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12
                             bg-white/10 opacity-0 transition-all duration-700
                             group-hover:left-[120%] group-hover:opacity-100"
                />
                <span className="relative leading-none">Download CV</span>
                <motion.span
                  className="relative inline-flex items-center text-2xl leading-none"
                  variants={iconVariants}
                >
                  <MdOutlineFileDownload />
                </motion.span>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
