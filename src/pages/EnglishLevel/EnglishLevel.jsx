import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import { FaGlobe, FaBook, FaComments } from "react-icons/fa"; // Íconos para detalles
import "./EnglishLevel.css";

const EnglishLevel = () => {
  return (
    <SectionTemplate title="Nivel de Inglés">
      <div id="english-level">
        <p>Nivel: B1 (Intermedio)</p>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
        <p className="level-description">
          Puedo entender y comunicarme en situaciones cotidianas, así como expresar ideas básicas en contextos familiares.
        </p>
        <div className="level-details">
          <div className="level-detail">
            <FaGlobe size={40} color="var(--secondary-color)" />
            <h3>Comprensión</h3>
            <p>Capaz de entender textos y conversaciones simples.</p>
          </div>
          <div className="level-detail">
            <FaBook size={40} color="var(--secondary-color)" />
            <h3>Escritura</h3>
            <p>Puedo escribir textos cortos y correos electrónicos.</p>
          </div>
          <div className="level-detail">
            <FaComments size={40} color="var(--secondary-color)" />
            <h3>Conversación</h3>
            <p>Puedo mantener conversaciones básicas.</p>
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default EnglishLevel;