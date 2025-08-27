import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJsSquare, FaFigma,
  FaWordpress,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiBootstrap, SiOdoo, SiExpress } from 'react-icons/si';

const skillIcons = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaJsSquare, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: FaFigma, name: "Figma" },
  { icon: SiTailwindcss, name: "Tailwind CSS"},
  { icon: SiBootstrap, name: "Bootstrap"},
  { icon: FaWordpress, name: "WordPress"},
  { icon: SiOdoo, name: "Odoo"}, 
  { icon: SiExpress, name: "Express.js"},
];

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills-section" className="skills-section">
      <motion.h2
        className="skills-intro-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Tecnologías</h2>
      </motion.h2>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillIcons.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <skill.icon size={40} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
