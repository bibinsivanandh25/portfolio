import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { SiCodewars, SiHackerrank, SiLeetcode } from 'react-icons/si';
import PropTypes from 'prop-types';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/bibincs/', icon: FaLinkedin },
  { href: 'https://github.com/bibinsivanandh25', icon: FaGithub },
  { href: 'https://www.codewars.com/users/bibinsivanandh25', icon: SiCodewars },
  { href: 'https://www.hackerrank.com/profile/bibincs', icon: SiHackerrank },
  { href: 'https://leetcode.com/u/bibincs97/', icon: SiLeetcode },
];

const NavLink = ({ href, label, onClick }) => (
  <a href={href} onClick={onClick} className="group relative py-1">
    {label}
    <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
  </a>
);

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const SocialIcon = ({ href, icon: Icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5, color: '#a855f7' }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon />
  </motion.a>
);

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 mb-10 flex items-center justify-between px-4 py-4
                  transition-all duration-300 sm:mb-20 lg:px-10
                  ${isScrolled ? 'border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}
    >
      <motion.a
        href="#"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="flex h-14 w-14 items-center justify-center rounded-full border
                   border-purple-600 bg-neutral-900 text-3xl font-bold text-purple-500
                   shadow-lg shadow-purple-500/30 lg:h-16 lg:w-16 lg:text-4xl"
      >
        B
      </motion.a>

      {/* Middle Links */}
      <div className="hidden items-center gap-8 text-lg font-medium lg:flex">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </div>

      {/* Social Links */}
      <div className="hidden items-center gap-5 text-2xl lg:flex">
        {SOCIAL_LINKS.map((social) => (
          <SocialIcon key={social.href} {...social} />
        ))}
      </div>

      {/* Hamburger */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="text-3xl focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-0 top-0 z-50 flex w-full flex-col items-center gap-6
                       border-b border-neutral-900 bg-neutral-950/95 py-6 text-lg font-medium
                       backdrop-blur-md"
          >
            <button
              className="self-end mr-4 text-3xl focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <NavLink {...link} onClick={closeMenu} />
              </motion.div>
            ))}

            <div className="mt-4 flex items-center gap-5 text-2xl">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.href} {...social} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
