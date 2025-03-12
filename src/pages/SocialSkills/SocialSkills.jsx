import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import { FaComments, FaUsers, FaHandshake, FaUserFriends, FaUsersCog } from "react-icons/fa"; // Íconos para representar las habilidades
import "./SocialSkills.css"; // Ruta corregida

const SocialSkills = () => {
  const skills = [
    {
      id: 1,
      name: "Comunicación efectiva",
      icon: <FaComments />,
      description: "Capacidad para transmitir ideas de manera clara y escuchar activamente.",
    },
    {
      id: 2,
      name: "Liderazgo",
      icon: <FaUsers />,
      description: "Habilidad para guiar y motivar a un equipo hacia el logro de objetivos comunes.",
    },
    {
      id: 3,
      name: "Honestidad",
      icon: <FaHandshake />,
      description: "Actuar con integridad y transparencia en todas las interacciones.",
    },
    {
      id: 4,
      name: "Respeto",
      icon: <FaUserFriends />,
      description: "Valorar y considerar las opiniones y necesidades de los demás.",
    },
    {
      id: 5,
      name: "Trabajo en equipo",
      icon: <FaUsersCog />,
      description: "Colaborar eficientemente con otros para alcanzar metas compartidas.",
    },
  ];

  return (
    <SectionTemplate title="Habilidades Sociales">
      <div className="social-skills-container">
        <ul className="social-skills-list">
          {skills.map((skill) => (
            <li key={skill.id} className="social-skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-content">
                <span className="skill-name">{skill.name}</span>
                <p className="skill-description">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionTemplate>
  );
};

export default SocialSkills;