import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/skills">Habilidades Técnicas</Link></li>
        <li><Link to="/social-skills">Habilidades Sociales</Link></li>
        <li><Link to="/english-level">Inglés</Link></li>
        <li><Link to="/experience">Experiencia</Link></li>
        <li><Link to="/education">Estudios</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;