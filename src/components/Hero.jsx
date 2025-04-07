import React from "react";
import "./Hero.css";
import dogImage from "../assets/dog6.png";

const Hero = () => {
  return (
    <>
      <section
        className="hero"
        id="inicio"
        aria-label="Seção inicial com chamada para ação"
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Cuidados e <span className="destaque">carinho</span> que seu pet
              merece
            </h1>
            <p>
              No <strong>Pet Litoral</strong>, transformamos o banho e tosa em
              um momento de bem-estar e alegria para seu cãozinho.
              <span className="emoji"> 🐶</span> Agende já!
            </p>
          </div>
          <div className="hero-image">
            <div className="circle-bg" aria-hidden="true"></div>
            <img src={dogImage} alt="Cachorro feliz após o banho" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
