
import React from 'react';
import { motion } from 'framer-motion';
import LogoV from '../assets/logoV.png'; // Asegúrate de tener el logo en esta ruta

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="footer-content">
        <motion.img 
          src={LogoV} 
          alt="Logo" 
          className="footer-logo"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.2, 
            rotate: 5,
            transition: { type: "spring", stiffness: 300 }
          }}
        />
        
        <motion.p 
          className="footer-tagline"
          variants={itemVariants}
        >
          Transformando ideas en experiencias digitales
        </motion.p>

        <motion.p variants={itemVariants}>
          &copy; 2025 Valeria Castillo. Todos los derechos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
