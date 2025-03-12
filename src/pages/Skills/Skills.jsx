import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import "./Skills.css";

const Skills = () => {
  return (
    <SectionTemplate title="Habilidades Técnicas">
      <div className="skills-intro">
        <p>
          Como desarrollador frontend, he adquirido experiencia en una variedad de tecnologías y herramientas
          que me permiten crear aplicaciones web modernas, responsivas y de alto rendimiento. A continuación,
          te presento un resumen de mis habilidades técnicas:
        </p>
      </div>

      <div className="skill-category">
        <h3>Frontend</h3>
        <ul>
          <li><strong>React</strong> - Desarrollo de interfaces de usuario dinámicas y reutilizables.</li>
          <li><strong>HTML</strong> - Estructura semántica y accesible para aplicaciones web.</li>
          <li><strong>CSS</strong> - Estilos avanzados, animaciones y diseño responsivo.</li>
          <li><strong>JavaScript</strong> - Lógica del lado del cliente y manipulación del DOM.</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3 className="twott">Backend</h3>
        <ul>
          <li><strong>Node.js</strong> - Desarrollo de APIs y servidores.</li>
          <li><strong>Express</strong> - Creación de aplicaciones web y APIs RESTful.</li>
          <li><strong>MongoDB</strong> - Manejo de bases de datos NoSQL.</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Herramientas y Otros</h3>
        <ul>
          <li><strong>Git</strong> - Control de versiones y colaboración en equipo.</li>
          <li><strong>GitHub</strong> - Alojamiento de repositorios y despliegue de proyectos.</li>
          <li><strong>Figma</strong> - Diseño de interfaces y prototipado.</li>
          <li><strong>VSCode</strong> - Editor de código altamente personalizable.</li>
        </ul>
      </div>
    </SectionTemplate>
  );
};

export default Skills;