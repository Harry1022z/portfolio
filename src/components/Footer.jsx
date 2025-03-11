import React from "react";
import SocialLinks from "./SocialLinks";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;