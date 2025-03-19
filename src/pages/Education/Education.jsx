import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import "./Education.css"; // Ruta corregida

const Education = () => {
  return (
    <SectionTemplate title="Estudios">
      {/* Educación Primaria y Secundaria */}
      <div className="education-item">
        <h3>Primaria y Secundaria</h3>
        <div className="education-details">
          <p><strong>Institución Educativa:</strong> Cámara Junior</p>
        </div>
      </div>

      {/* Técnico en Programación de Software */}
      <div className="education-item">
        <h3>Técnico en Programación de Software</h3>
        <div className="education-details">
          <p><strong>Institución Educativa:</strong> Cámara Junior</p>
          <p><strong>Periodo:</strong> Enero 2022 - Diciembre 2023</p>
        </div>
      </div>

      {/* Tecnólogo en Análisis y Desarrollo de Software (ADSO) */}
      <div className="education-item">
        <h3>Tecnólogo en Análisis y Desarrollo de Software (ADSO)</h3>
        <div className="education-details">
          <p><strong>SENA</strong> Centro de Comercio y Turismo</p>
          <p><strong>Ficha:</strong> 2901682</p>
        </div>
      </div>
    </SectionTemplate>
  );
};

export default Education;