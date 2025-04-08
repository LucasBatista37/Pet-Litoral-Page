import React from "react";
import "./ServicosSecao.css";

const commonBenefits = [
  "Banho completo com secagem especializada",
  "Tosa higiênica ou completa",
  "Hidratação básica",
  "Corte de unhas e limpeza de ouvidos",
  "Perfume pet incluso",
];

const services = [
  {
    type: "Pequeno Porte",
    icon: "🐶",
    oldPrice: "R$ 70,00",
    price: "R$ 50,00",
  },
  {
    type: "Médio Porte",
    icon: "🐕",
    oldPrice: "R$ 90,00",
    price: "R$ 70,00",
  },
  {
    type: "Grande Porte",
    icon: "🦮",
    oldPrice: "R$ 120,00",
    price: "R$ 90,00",
  },
];

const ServicosSecao = () => {
  return (
    <section className="services-section" id="precos">
      <h3 data-aos="fade-up">Tabela de Preços</h3>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div
            className="service-card"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 250}
            data-aos-duration="800"
          >
            <span className="icon">{service.icon}</span>
            <h4>{service.type}</h4>
            <p className="price-label">A partir de:</p>
            <p className="price">{service.price}</p>
            <ul>
              {commonBenefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a
              className="purchase-btn"
              href={`https://wa.me/5513996830085?text=Olá,%20gostaria%20de%20agendar%20um%20serviço%20para%20um%20cachorro%20de%20${encodeURIComponent(
                service.type.toLowerCase()
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Serviço
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicosSecao;
