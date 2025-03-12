import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import { FaCode, FaUsers, FaCalendarAlt, FaArrowRight } from "react-icons/fa"; // Íconos para detalles
import "./Experience.css";

const Experience = () => {
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "Empresa XYZ",
      period: "Enero 2022 - Presente",
      responsibilities: [
        "Desarrollo de interfaces de usuario con React.",
        "Colaboración en equipo para la implementación de nuevas funcionalidades.",
        "Optimización del rendimiento de aplicaciones web.",
      ],
    },
    {
      id: 2,
      title: "Practicante de Desarrollo",
      company: "Empresa ABC",
      period: "Junio 2021 - Diciembre 2021",
      responsibilities: [
        "Apoyo en el desarrollo de aplicaciones web.",
        "Participación en reuniones de planificación y revisión de código.",
        "Implementación de funcionalidades básicas en proyectos existentes.",
      ],
    },
  ];

  return (
    <SectionTemplate title="Experiencia Profesional">
      <div id="experience">
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={job.id} className={`job ${index % 2 === 0 ? "left" : "right"}`}>
              <h3>
                <FaCode /> {job.title}
              </h3>
              <p>
                <FaUsers /> {job.company} | <FaCalendarAlt /> {job.period}
              </p>
              <ul>
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>
                    <FaArrowRight /> {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Experience;