import { motion, type Variants, type Transition } from 'framer-motion';
import OlaC from '/public/OlaC.png';
import OlaD from '/public/OlaD.png';
import BuylistoImage from '/public/BuylistoImage.png' 
import HondureandoOld from '/public/HondureandoOld.png'
import ClickMarket from '/public/ClickMarket.png'
import OrganizarTareas from '/public/OrganizarTareas.png'



/* Transiciones tipadas para evitar el error 2322 */
const SPRING_SLOW: Transition = {
  type: 'spring',
  damping: 15,
  stiffness: 60,
};

const SPRING_FAST: Transition = {
  type: 'spring',
  stiffness: 300,
};

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  /* ✅ Variants tipados + SPRING_SLOW para no romper tipos */
  const decorationVariants: Variants = {
    hidden: { opacity: 0.2, y: -100, rotate: -10 },
    visible: {
      opacity: 0.8,
      y: 0,
      rotate: 0,
      transition: SPRING_SLOW,
    },
  };

  /* Estos no son variants, solo “whileHover” */
  const imageHover: Variants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="projects-section"
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* ⬇️ Capa absoluta: NO ocupa espacio del layout */}
      <div className="projects-decorations" aria-hidden="true">
        <motion.img
          src={OlaC}
          alt="Wave Decoration"
          className="ola-c-decoration"
          variants={decorationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: SPRING_FAST, // ✅ tipado correcto
          }}
        />

        <motion.img
          src={OlaD}
          alt="Wave Decoration D"
          className="ola-d-decoration"
          initial={{ opacity: 0.2, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />

        <motion.img
          src={OlaC}
          alt="Wave Decoration 2"
          className="ola-c-decoration-2"
          variants={{
            hidden: { opacity: 0.2, y: 100, rotate: 10 },
            visible: {
              opacity: 0.3,
              y: 0,
              rotate: 0,
              transition: {
                ...SPRING_SLOW,
                // Puedes dejar un pequeño delay sin problema
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotate: -5,
            transition: SPRING_FAST, // ✅ tipado correcto
          }}
        />
      </div>

      {/* Contenido real (queda por encima con z-index en CSS) */}
      <motion.h2
        className="projects-title"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
          },
        }}
      >
        <h3>Proyectos</h3>
      </motion.h2>

      <div className="project-list">
        
        <motion.div
          className="project-card featured"
          variants={projectVariants}
          whileHover="hover"
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={BuylistoImage}
              alt="Project 1"
              className="project-image"
              variants={imageHover}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Buylisto</motion.h3>
            <motion.p initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
            Buylisto es una tienda en línea donde los administradores pueden gestionar productos desde un panel de control,
            y los clientes exploran las publicaciones y contactan automáticamente al vendedor vía WhatsApp, 
            mejorando la interacción y experiencia de usuario.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">Supabase</span>
            </div>
            <motion.a
              href="https://buylisto.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="project-card featured right-aligned"
          variants={projectVariants}
          whileHover="hover"
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={HondureandoOld}
              alt="Project 2"
              className="project-image"
              variants={imageHover}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Hondureando</motion.h3>
            <span style={{color: '#9929EA', fontSize: '25px', fontWeight: 'bolder'}}>¡Aun en desarrollo! </span> 
            <motion.p initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
            Hondureando es una plataforma que conecta a los usuarios con contenido relevante sobre Honduras, 
            incluyendo planes turísticos, noticias y recomendaciones locales. 
            Los administradores pueden gestionar y publicar contenido desde un panel de control,
             mientras que los usuarios exploran lugares por departamento y acceden a información útil de manera intuitiva y dinámica.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">PostgreSQL</span>
              
            </div>
            <motion.a
              href="https://hondureando.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="project-card featured"
          variants={projectVariants}
          whileHover="hover"
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={ClickMarket}
              alt="Project 3"
              className="project-image"
              variants={imageHover}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>ClickMarket</motion.h3>
            <motion.p initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
            ClickMarket es una plataforma diseñada para apoyar a personas que desean emprender y buscan aprender habilidades esenciales. 
            A través de cursos y recursos interactivos, los usuarios pueden adquirir conocimientos prácticos para iniciar sus proyectos.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">Odoo</span>
              <span className='tech-tag'>Stripe</span>
              <span className="tech-tag">Botpress</span>
            </div>
            <motion.a
              href="https://clickmarker.odoo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="project-card featured right-aligned"
          variants={projectVariants}
          whileHover="hover"
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={OrganizarTareas}
              alt="Project 4"
              className="project-image"
              variants={imageHover}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Gestor de Tareas</motion.h3>
            <motion.p initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }}>
            Aplicación web que permite a los usuarios organizar sus tareas y actividades diarias de manera eficiente. 
            Incluye funcionalidades para agregar, editar y eliminar tareas, así como marcar tareas completadas.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">Html</span>
              <span className="tech-tag">Sass</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            <motion.a
              href="https://gestortareasv.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
