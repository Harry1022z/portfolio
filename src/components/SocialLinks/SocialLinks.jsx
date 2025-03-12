import React from "react";
import "./SocialLinks.css";
import { FaGithub, FaDiscord, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa"; // Importa el ícono de Discord

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/Harry1022z" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <FaDiscord /> Discord
      </a>
      <a href="https://www.instagram.com/hso_2210/" target="_blank" rel="noopener noreferrer">
        <FaInstagram /> Instagram
      </a>
      <a href="https://x.com/NoSoyYuTuber" target="_blank" rel="noopener noreferrer">
        <FaTwitter /> Twitter
      </a>
      <a href="https://www.linkedin.com/in/harrison-steven-osorio-patarroyo-15676a20a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin /> Linkedin
      </a>
    </div>
  );
};

export default SocialLinks;