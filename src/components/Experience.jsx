import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia Profesional</h2>
      <div className="job">
        <h3>Desarrollador Frontend</h3>
        <p>Empresa XYZ | Enero 2022 - Presente</p>
        <ul>
          <li>Desarrollo de interfaces de usuario con React.</li>
          <li>Colaboración en equipo para la implementación de nuevas funcionalidades.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;