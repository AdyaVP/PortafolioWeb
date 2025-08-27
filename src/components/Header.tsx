// src/components/Header.tsx
import logoV from '../assets/logoV.png';
import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Easing similar a easeOut: [0.16, 1, 0.3, 1]
  const EASE_OUT = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: EASE_OUT,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.35,
        ease: EASE_OUT,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: EASE_OUT,
        delay: 0.3,
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: EASE_OUT,
        staggerChildren: 0.08,
      },
    },
  };

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      className="header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="nav">
        <motion.img
          src={logoV}
          alt="Logo"
          className="header-logo"
          variants={logoVariants}
          whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Desktop Navigation */}
        <motion.ul variants={containerVariants} className="desktop-nav">
        <motion.li variants={itemVariants}>
            <motion.a href="#experience-section" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              Experiencia
            </motion.a>
          </motion.li>

          <motion.li variants={itemVariants}>
            <motion.a href="#projects-section" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              Projectos
            </motion.a>
          </motion.li>

          <motion.li variants={itemVariants}>
            <motion.a href="#skills-section" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              Stack
            </motion.a>
          </motion.li>

          <motion.li variants={itemVariants}>
            <motion.a href="#contact-section" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
             Contacto
            </motion.a>
          </motion.li>
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-button"
          onClick={toggleMenu}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-expanded={isMenuOpen}
          aria-label="Open menu"
        >
          <motion.div
            className="hamburger-line"
            animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="hamburger-line"
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            className="hamburger-line"
            animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="mobile-nav"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          style={{ display: 'block' }}
        >
          <motion.ul>
            <motion.li variants={itemVariants}>
              <motion.a
                href="#projects-section"
                onClick={closeMenu}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Projects
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a
                href="#skills-section"
                onClick={closeMenu}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Lab
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a
                href="#experience-section"
                onClick={closeMenu}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Experience
              </motion.a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <motion.a
                href="#contact-section"
                onClick={closeMenu}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Header;
