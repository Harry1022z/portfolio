import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section id="home">
      <img src="/ruta/a/tu/foto.jpg" alt="Tu Nombre" className="profile-photo" />
      <h1>Tu Nombre</h1>
      <p>Desarrollador Frontend | Apasionado por la tecnología y el diseño.</p>
    </section>
  );
};

export default Home;