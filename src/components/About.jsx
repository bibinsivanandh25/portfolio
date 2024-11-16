import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import resume from '../assets/Resume.pdf';
import { MdOutlineFileDownload } from 'react-icons/md';

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="text-center text-4xl my-20">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center opacity-70">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center pb-4 mt-8">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>

            <a className="flex" href={resume} download="Resume" target="_blank">
              <div className="flex gap-3 border-2  border-purple-800  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md px-4 py-2">
                Download CV
                <span className="text-2xl">
                  <MdOutlineFileDownload />
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
