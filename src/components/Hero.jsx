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
          <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
            <h1>
              Cuidados e <span className="destaque">carinho</span> que seu pet
              merece
            </h1>
            <p>
              No <strong>Pet Litoral</strong>, transformamos o banho e tosa em
              um momento de bem-estar e alegria para seu cãozinho.
              <span className="emoji"> 🐶</span> Agende já!
            </p>
            <div className="hero-buttons">
              <a
                href="https://wa.me/5513997503602?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet!"
                className="btn-hero"
              >
                Agendar
              </a>
              <a href="#precos" className="btn-hero btn-outline">
                Ver Preços
              </a>
            </div>
          </div>

          <div
            className="hero-image"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="circle-bg" aria-hidden="true"></div>
            <img src={dogImage} alt="Cachorro feliz" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
