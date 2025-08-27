import Header from './components/Header';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { Routes, Route } from 'react-router-dom'; // No longer needed

function App() {
  return (
    <>
      {/* <img src="/purple-horizontal.png" alt="Purple Horizontal Line" className="design-element purple-horizontal" /> */}
      {/* Design Elements */}
      {/* <img src="/purple-circle.png" alt="Purple Circle" className="design-element purple-circle" /> */}
      {/* <img src="/curved-arrow.png" alt="Curved Arrow" className="design-element curved-arrow" /> */}
      {/* <img src="/noisy-bar.png" alt="Noisy Bar" className="design-element noisy-bar" /> */}
      {/* <img src="/k-logo-orbit.png" alt="K Logo Orbit" className="design-element k-logo-orbit" /> */}
      {/* <img src="/large-oval.png" alt="Large Oval" className="design-element large-oval" /> */}

      <Header />
      <Hero />
      <ExperienceSection />
      <Projects /> {/* Projects should be here */}
      <SkillsSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
