import { motion, type Variants } from 'framer-motion';
import React from 'react';

const Contact = () => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // FUNCION PARA MANEJAR EL ENVIO
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form[0] as HTMLInputElement).value,
      email: (form[1] as HTMLInputElement).value,
      message: (form[2] as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Correo enviado correctamente");
        form.reset();
      } else {
        alert("Hubo un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="contact-content">
        <motion.div className="contact-header" variants={itemVariants}>
          <motion.h2 className="contact-title">Contáctame</motion.h2>
          <motion.p className="contact-subtitle">
            Puedes contactarme a través del siguiente formulario o directamente por correo.
          </motion.p>
        </motion.div>

        <motion.div className="contact-social-icons" variants={itemVariants}>
          <motion.a
            href="mailto:valeriacastillo1319@gmail.com"
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/valeria-portillo-93035a2b3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/AdyaVP"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </motion.div>

        {/*Aquí va el form con el evento */}
        <motion.form className="contact-form" variants={itemVariants} onSubmit={handleSubmit}>
          <motion.div className="form-group">
            <input type="text" placeholder="Escribe tu nombre" required />
          </motion.div>

          <motion.div className="form-group">
            <input type="email" placeholder="Escribe tu correo electrónico" required />
          </motion.div>

          <motion.div className="form-group">
            <textarea
              style={{ maxHeight: '230px' }}
              placeholder="Escribe tu mensaje aquí..."
              rows={6}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            whileHover={{ y: -1, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.99 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
