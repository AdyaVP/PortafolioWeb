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
        <p className="experience-date">Junio 2024 - Agosto 2024</p>
        <p>
          Desarrollo de una aplicación web tipo agenda para la organización y seguimiento de tareas de manera sencilla y eficiente.
        </p>
        <ul>
          <li>Diseño de una interfaz responsiva, intuitiva y optimizada para diferentes dispositivos.</li>
          <li>Implementación de validaciones y manejo de errores para mejorar la estabilidad y usabilidad.</li>
          <li>Uso de almacenamiento local para garantizar persistencia de datos sin necesidad de servidor.</li>
        </ul>
      </div>

        {/* New Example Card 1 */}
        <div className="experience-card">
          <h3>Hondureando</h3>
          <p className="experience-date">Enero 2025 - Actualidad</p>
          <p>
            Plataforma web en desarrollo enfocada en la promoción del turismo en Honduras, integrando estrategias digitales, marketing y gestión de contenido.
          </p>
          <ul>
            <li>Diseño e implementación de una interfaz responsiva, intuitiva y adaptable a distintos dispositivos.</li>
            <li>Panel de administración para gestionar destinos, hoteles, paquetes turísticos, eventos y contenido dinámico.</li>
            <li>Incorporación de blogs informativos sobre rincones poco conocidos y experiencias auténticas del país.</li>
            <li>Estrategias de marketing digital y uso de redes sociales para ampliar el alcance y la interacción con usuarios.</li>
          </ul>
        </div>

        {/* New Example Card 2 */}
        {/* <div className="experience-card">
          <h3>Lorem ipsum dolor sit amet.	</h3>
          <p className="experience-date">Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, laboriosam.</p>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default ExperienceSection;
