import React from "react";
import SectionTemplate from "../../templates/SectionTemplate";
import "../../pages/Home/Home.css";
import Korycita from "../../assets/images/Korycita.png";

const Home = () => {
  return (
    <SectionTemplate>
      <img src={Korycita} alt="Harrison Steven Osorio Patarroyo" className="profile-photo" />
      <h1>Harrison Steven Osorio Patarroyo</h1>
      <p>
        ¡Hola! Soy un <strong>Desarrollador Frontend</strong> apasionado por la tecnología y el diseño. 
        Me encanta crear interfaces de usuario atractivas, funcionales y accesibles que brinden una 
        experiencia excepcional a los usuarios. Con experiencia en tecnologías como <strong>React</strong>, 
        <strong> HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>, estoy siempre en busca de 
        nuevos desafíos y oportunidades para seguir creciendo profesionalmente.
      </p>
      <p>
        ¡Bienvenido/a a mi portafolio! Aquí podrás conocer más sobre mis habilidades, proyectos y 
        experiencia. No dudes en contactarme si deseas trabajar juntos o simplemente charlar sobre tecnología.
      </p>
    </SectionTemplate>
  );
};

export default Home;