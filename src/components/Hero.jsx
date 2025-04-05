import React from 'react';
import './Hero.css';
import dogImage from '../assets/dog2.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Cuidados e carinho que seu pet merece</h2>
          <p>
            No Pet Litoral, transformamos o banho e tosa em um momento de bem-estar e alegria para seu cãozinho. Agende já!
          </p>
          <a href="#agendamento" className="btn-hero">Agendar agora</a>
        </div>
        <div className="hero-image">
          <img src={dogImage} alt="Cachorro feliz após o banho" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
