// src/components/Hero.tsx
import { motion, type Variants } from 'framer-motion';
import Valeria from '/public/Valeria.png';


function Hero() {
  // Easing equivalente a easeOut
  const EASE_OUT = [0.16, 1, 0.3, 1] as const;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // para animar hijos en secuencia
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: EASE_OUT,
      },
    },
  };

  const avatarVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: EASE_OUT,
        delay: 0.5,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: EASE_OUT,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      id="hero-section"
      className="hero-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          variants={itemVariants}
          whileHover={{ scale: 1.05, x: 10, transition: { duration: 0.2 } }}
        >
          <span style={{ color: '#B771E5', fontSize:'45px', fontWeight: 'bolder' }}>¡Hola!</span> Soy Valeria M. Portillo.
          
           
        </motion.p>

        <div className="hero-main">
          <motion.div
            className="hero-avatar-container"
            variants={avatarVariants}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={Valeria} alt="Avatar" className="hero-avatar" />
          </motion.div>

          <div className="hero-text-container">
            <motion.p
              className="hero-engineer-title"
              variants={titleVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            >
              Fullstack Developer
            </motion.p>

            <motion.h5
              className="hero-tagline"
              variants={itemVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.25 } }}
            >
              Soy una estudiante apasionada por la tecnología y en constante aprendizaje de nuevas herramientas.<br />
            </motion.h5>

            <motion.p className="hero-tagline-subtext" variants={itemVariants}>
              Diseño experiencias digitales completas que equilibran necesidades de usuarios, objetivos de negocio y buenas prácticas.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
