import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import "./Education.css"; // Ruta corregida

const Education = () => {
  return (
    <SectionTemplate title="Estudios">
      <div className="education-item">
        <h3>Ingeniería en Sistemas</h3>
        <p>Universidad ABC | 2018 - 2022</p>
      </div>
    </SectionTemplate>
  );
};

export default Education;