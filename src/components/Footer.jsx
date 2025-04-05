import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="logoPete">Banho & Tosa 🐾</h2>

          <nav className="footer-nav">
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#contact">Contato</a>
          </nav>

          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Banho & Tosa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
