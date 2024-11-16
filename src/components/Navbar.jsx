// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <a href="#" className="mx-2 text-5xl">
//           B
//         </a>
//       </div>
//       <div className="flex items-center justify-center gap-4 m-8 text-2xl">
//         <a href="https://www.linkedin.com/in/bibincs/" target="_blank">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/bibinsivanandh25" target="_blank">
//           <FaGithub />
//         </a>

//         <FaTwitter />
//         <FaInstagram />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 lg:px-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="#" className="text-5xl font-medium">
          B
        </a>
      </div>

      {/* Middle Links Section */}
      <div className="hidden lg:flex items-center gap-8 text-xl font-medium">
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
      <div className="hidden lg:flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/bibincs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/bibinsivanandh25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <FaTwitter />
        <FaInstagram />
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
        <div className="absolute top-0 left-0 w-full bg-neutral-900 z-10 flex flex-col items-center gap-6 py-6 text-xl font-medium">
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

          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/bibincs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/bibinsivanandh25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
