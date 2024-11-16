import { motion } from 'framer-motion';
import { CONTACT } from '../constants';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

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
      <div className="tracking-tighter text-center flex justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-2 border-neutral-600 p-6 rounded-2xl"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-2xl">
              <IoMdMail />
            </span>
            <a href="mailto:bibincs97@gmail.com.com" target="_blank">
              {CONTACT.email}
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <span className="text-2xl">
              <FaLinkedin />
            </span>
            <a href="https://www.linkedin.com/in/bibincs/" target="_blank">
              {CONTACT.linkedIn}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
