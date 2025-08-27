import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience-section" className="experience-section">
      <h2 className="experience-title">Experiencia</h2>
      <p className="experience-intro">
      Mi experiencia combina proyectos universitarios, prácticas en programación y desarrollo de soluciones digitales aplicando metodologías modernas.
      </p>
      {/* Add your experience cards here */}
      <div className="experience-cards-container">
        {/* Example Card */}
        <div className="experience-card">
          <h3>Aplicación de Gestión de Tareas</h3>
          <p className="experience-date">Jun 2024 - Agosto 2024</p>
          <p>Desarrollé una aplicación web para organizar tareas estilo agenda</p>
          <ul>
            <li>Diseñé la interfaz de usuario responsiva y fácil de usar.</li>
            <li>Aplicé validaciones y manejo de errores para asegurar estabilidad y confiabilidad.</li>
          </ul>
        </div>
        {/* New Example Card 1 */}
        <div className="experience-card">
          <h3>Lorem ipsum dolor sit amet.	</h3>
          <p className="experience-date">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laboriosam.</p>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</li>
          </ul>
        </div>
        {/* New Example Card 2 */}
        <div className="experience-card">
          <h3>Lorem ipsum dolor sit amet.	</h3>
          <p className="experience-date">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laboriosam.</p>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
