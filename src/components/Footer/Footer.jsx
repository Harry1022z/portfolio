import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks"; 
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Harry Osito. Todos los derechos reservados.</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;