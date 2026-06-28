import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      {/* Card */}
      <div className="relative z-10 flex justify-center px-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-md ring-1 ring-inset ring-violet-500/10"
        >
          {/* Email */}
          <motion.a
            href={`mailto:${CONTACT.email}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-neutral-300 no-underline hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-200 active:bg-violet-500/15 transition-colors duration-200"
          >
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-base sm:text-lg text-violet-400">
              <IoMdMail />
            </span>
            <span className="text-xs sm:text-sm truncate min-w-0">
              {CONTACT.email}
            </span>
            <HiArrowRight className="ml-auto flex-shrink-0 opacity-30 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-80" />
          </motion.a>

          <div className="my-3 h-px bg-white/5" />

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/bibincs/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-neutral-300 no-underline hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-200 active:bg-sky-500/15 transition-colors duration-200"
          >
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-base sm:text-lg text-sky-400">
              <FaLinkedin />
            </span>
            <span className="text-xs sm:text-sm truncate min-w-0">
              {CONTACT.linkedIn}
            </span>
            <HiArrowRight className="ml-auto flex-shrink-0 opacity-30 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-80" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
