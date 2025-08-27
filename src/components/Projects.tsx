import { motion, type Variants, type Transition } from 'framer-motion';

// ✅ Recomendado: tener las imágenes en src/assets
// (esto hace que Vite genere URLs correctas aunque publiques en /Portal/)
const OlaC = new URL('../assets/OlaC.png', import.meta.url).href; // sirve el import.meta.url para rutas relativas es decir a este archivo
const OlaD = new URL('../assets/OlaD.png', import.meta.url).href;
const BuylistoImage = new URL('../assets/BuylistoImage.png', import.meta.url).href;
const HondureandoOld = new URL('../assets/HondureandoOld.png', import.meta.url).href;
const ClickMarket = new URL('../assets/ClickMarket.png', import.meta.url).href;
const OrganizarTareas = new URL('../assets/OrganizarTareas.png', import.meta.url).href;

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
        staggerChildren: 0.18,
        delayChildren: 0.08,
      },
    },
  };

  const projectVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  const decorationVariants: Variants = {
    hidden: { opacity: 0.2, y: -100, rotate: -10 },
    visible: {
      opacity: 0.8,
      y: 0,
      rotate: 0,
      transition: SPRING_SLOW,
    },
  };

  const imageHover: Variants = {
    hover: { scale: 1.02, transition: { duration: 0.25, ease: 'easeOut' } },
  };

  const cardHoverVariants: Variants = {
    hover: { y: -5, transition: { duration: 0.25, ease: 'easeOut' } },
  };

  // Disparo más permisivo en móvil + margin para que anime antes
  const sectionViewport = { once: false, amount: 0.05, margin: '0px 0px -15% 0px' };
  const itemViewport = { amount: 0.05 };

  return (
    <motion.section
      id="projects-section"
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={containerVariants}
    >
      {/* ⬇️ Capa absoluta decorativa; no afecta al layout */}
      <div className="projects-decorations" aria-hidden="true">
        <motion.img
          src={OlaC}
          alt="Wave Decoration"
          className="ola-c-decoration"
          variants={decorationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 5, transition: SPRING_FAST }}
        />

        <motion.img
          src={OlaD}
          alt="Wave Decoration D"
          className="ola-d-decoration"
          initial={{ opacity: 0.2, scale: 0.85 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
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
              transition: { ...SPRING_SLOW, delay: 0.45 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: -5, transition: SPRING_FAST }}
        />
      </div>

      {/* Contenido */}
      <motion.h2
        className="projects-title"
        variants={{
          hidden: { opacity: 0, y: 18 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        }}
      >
        <h3>Proyectos</h3>
      </motion.h2>

      <div className="project-list">
        {/* CARD 1 */}
        <motion.div
          className="project-card featured"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={itemViewport}
          whileHover="hover"
          style={{ willChange: 'transform' }}
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={BuylistoImage}
              alt="Buylisto"
              className="project-image"
              variants={imageHover}
              loading="eager"                   // 👈 primera imagen eager
              width={1280} height={720}         // 👈 fija dimensiones para evitar saltos
              style={{ aspectRatio: '16/9', width: '100%' }}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Buylisto</motion.h3>
            <motion.p initial={{ opacity: 0.85 }} whileHover={{ opacity: 1 }}>
              Buylisto es una tienda en línea donde los administradores pueden gestionar productos desde un panel de
              control, y los clientes exploran las publicaciones y contactan automáticamente al vendedor vía WhatsApp,
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
              whileHover={{ y: -1, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="project-card featured right-aligned"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={itemViewport}
          whileHover="hover"
          style={{ willChange: 'transform' }}
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={HondureandoOld}
              alt="Hondureando"
              className="project-image"
              variants={imageHover}
              loading="eager"                   // 👈 segunda también eager (above the fold)
              width={1280} height={800}
              style={{ aspectRatio: '16/9', width: '100%'}}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Hondureando</motion.h3>
            <span style={{ color: '#9929EA', fontSize: '25px', fontWeight: 'bolder' }}>¡Aun en desarrollo! </span>
            <motion.p initial={{ opacity: 0.85 }} whileHover={{ opacity: 1 }}>
              Hondureando es una plataforma que conecta a los usuarios con contenido relevante sobre Honduras,
              incluyendo planes turísticos, noticias y recomendaciones locales. Los administradores pueden gestionar y
              publicar contenido desde un panel de control, mientras que los usuarios exploran lugares por departamento
              y acceden a información útil de manera intuitiva y dinámica.
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
              whileHover={{ y: -1, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="project-card featured"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={itemViewport}
          whileHover="hover"
          style={{ willChange: 'transform' }}
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={ClickMarket}
              alt="ClickMarket"
              className="project-image"
              variants={imageHover}
              loading="lazy"
              width={1280} height={720}
              style={{ aspectRatio: '16/9', width: '100%' }}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>ClickMarket</motion.h3>
            <motion.p initial={{ opacity: 0.85 }} whileHover={{ opacity: 1 }}>
              ClickMarket es una plataforma diseñada para apoyar a personas que desean emprender y buscan aprender
              habilidades esenciales. A través de cursos y recursos interactivos, los usuarios pueden adquirir
              conocimientos prácticos para iniciar sus proyectos.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">Odoo</span>
              <span className="tech-tag">Stripe</span>
              <span className="tech-tag">Botpress</span>
            </div>
            <motion.a
              href="https://clickmarker.odoo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.99 }}
            >
              <span>Explorar Proyecto</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          className="project-card featured right-aligned"
          variants={projectVariants}
          initial="hidden"
          whileInView="visible"
          viewport={itemViewport}
          whileHover="hover"
          style={{ willChange: 'transform' }}
        >
          <motion.div className="project-image-container" whileHover="hover">
            <motion.img
              src={OrganizarTareas}
              alt="Gestor de Tareas"
              className="project-image"
              variants={imageHover}
              loading="lazy"
              width={1280} height={720}
              style={{ aspectRatio: '16/9', width: '100%' }}
            />
          </motion.div>
          <div className="project-info">
            <motion.h3 variants={cardHoverVariants}>Gestor de Tareas</motion.h3>
            <motion.p initial={{ opacity: 0.85 }} whileHover={{ opacity: 1 }}>
              Aplicación web que permite a los usuarios organizar sus tareas y actividades diarias de manera eficiente.
              Incluye funcionalidades para agregar, editar y eliminar tareas, así como marcar tareas completadas.
            </motion.p>
            <div className="project-tech-stack">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">Sass</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            <motion.a
              href="https://gestortareasv.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link-button"
              whileHover={{ y: -1, transition: { duration: 0.25 } }}
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
