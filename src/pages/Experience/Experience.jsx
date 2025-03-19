import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import { FaCode, FaUsers, FaCalendarAlt, FaArrowRight } from "react-icons/fa"; // Íconos para detalles
import "./Experience.css";

const Experience = () => {
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "Sena",
      period: "Enero 2023 - 2026",
      responsibilities: [
        "Desarrollo de interfaces de usuario con React.",
        "Colaboración en equipo para la implementación de nuevas funcionalidades.",
        "Optimización del rendimiento de aplicaciones web.",
      ],
    },
    {
      id: 2,
      title: "Practicante de Desarrollo",
      company: "Corporación Universitaria Empresarial Alexander von Humboldt",
      period: "Junio 2025 - Enero 2026",
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
            <div key={job.id} className={`job-container ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="job">
                {/* Título del trabajo */}
                <h3>
                  <FaCode /> {job.title}
                </h3>

                {/* Empresa y período */}
                <div className="job-info">
                  <span>
                    <FaUsers /> {job.company}
                  </span>
                  <span>
                    <FaCalendarAlt /> {job.period}
                  </span>
                </div>

                {/* Responsabilidades */}
                <ul className="responsibilities">
                  {job.responsibilities.map((responsibility, i) => (
                    <li key={i}>
                      <FaArrowRight /> {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Experience;