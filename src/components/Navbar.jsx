import { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiCodewars, SiHackerrank, SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mb-10 sm:mb-20 flex items-center justify-between py-6 px-4 lg:px-10">
      {/* Logo Section */}
      {/* <div className="flex items-center">
        <a href="#" className="text-5xl font-medium">
          B
        </a>
      </div> */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.15,
          rotate: 360,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-purple-600 bg-neutral-900 text-4xl font-bold text-purple-500 shadow-lg shadow-purple-500/30"
      >
        B
      </motion.div>

      {/* Middle Links Section */}
      <div className="hidden lg:flex items-center gap-8 text-lg font-medium">
        <a href="#about" className="nav">
          About
        </a>
        <a href="#technologies" className="nav">
          Technologies
        </a>
        <a href="#experience" className="nav">
          Experience
        </a>
        <a href="#projects" className="nav">
          Projects
        </a>
      </div>

      {/* Social Links Section */}
      <div className="hidden lg:flex items-center gap-5 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/bibincs/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/bibinsivanandh25"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.codewars.com/users/bibinsivanandh25"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiCodewars />
        </motion.a>
        <motion.a
          href="https://www.hackerrank.com/profile/bibincs"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiHackerrank />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/bibincs97/"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiLeetcode />
        </motion.a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-neutral-900 z-10 flex flex-col items-center gap-6 py-6 text-lg font-medium">
          {/* Close Button */}
          <button
            className="self-end mr-4 text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <a href="#about" className="nav">
            About
          </a>
          <a href="#technologies" className="nav">
            Technologies
          </a>
          <a href="#experience" className="nav">
            Experience
          </a>
          <a href="#projects" className="nav">
            Projects
          </a>

          <div className="flex items-center gap-5 text-2xl mt-4">
            <motion.a
              href="https://www.linkedin.com/in/bibincs/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/bibinsivanandh25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.codewars.com/users/bibinsivanandh25"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiCodewars />
            </motion.a>
            <motion.a
              href="https://www.hackerrank.com/profile/bibincs"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiHackerrank />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/bibincs97/"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiLeetcode />
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
