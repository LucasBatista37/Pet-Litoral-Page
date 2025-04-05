import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Pet Litoral🐾</h1>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>
          <a href="#clientes" onClick={() => setMenuOpen(false)}>
            Clientes
          </a>
          <a href="#precos" onClick={() => setMenuOpen(false)}>
            Preços
          </a>
          <a
            href="#agendamento"
            className="btn-agendar mobile"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Horário
          </a>
        </nav>

        <a href="#agendamento" className="btn-agendar desktop">
          Agendar Horário
        </a>

        <div
          className={`hamburguer ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
