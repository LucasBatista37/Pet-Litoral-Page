import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">PetLitoral🐾</h1>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a href="#agendamento" className="btn-agendar mobile" onClick={() => setMenuOpen(false)}>Agendar Horário</a>
        </nav>

        <a href="#agendamento" className="btn-agendar desktop">
          Agendar Horário
        </a>

        <div className={`hamburguer ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
