import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Pet Litoral 🐾 </h1>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>
          <a href="#precos" onClick={() => setMenuOpen(false)}>
            Preços
          </a>
          <a href="#clientes" onClick={() => setMenuOpen(false)}>
            Clientes
          </a>

          <a
            href="https://wa.me/5513997503602?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet! 🐾"
            className="btn-agendar mobile"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Horário
          </a>
        </nav>

        <a
          href="https://wa.me/5513997503602?text=Olá,%20gostaria%20de%20agendar%20um%20horário%20para%20meu%20pet! 🐾"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-agendar desktop"
        >
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
