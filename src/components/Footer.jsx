import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="logoPete">Pet Litoral 🐾</h2>

          <nav className="footer-nav">
            <a href="#sobre">Sobre</a>
            <a href="#precos">Prços</a>
            <a href="#clientes">Clientes</a>
          </nav>

          <div className="social-icons">
            <a href="https://www.instagram.com/pet.litoral" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5513997503602" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pet Litoral. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
