import React from 'react';
import './ServicosSecao.css';

const services = [
  {
    type: 'Pequeno Porte',
    icon: '🐶',
    description: ['Banho e tosa higiênica', 'Hidratação básica', 'Unhas e limpeza de ouvidos'],
    oldPrice: 'R$ 70,00',
    price: 'R$ 50,00',
  },
  {
    type: 'Médio Porte',
    icon: '🐕',
    description: ['Banho e tosa completa', 'Desembolo leve', 'Perfume pet incluso'],
    oldPrice: 'R$ 90,00',
    price: 'R$ 70,00',
  },
  {
    type: 'Grande Porte',
    icon: '🦮',
    description: ['Banho com secagem especializada', 'Tosa especial', 'Atendimento com 2 profissionais'],
    oldPrice: 'R$ 120,00',
    price: 'R$ 90,00',
  },
];

const ServicosSecao = () => {
  return (
    <section className="services-section" id="precos">
      <h3>Tabela de Preços</h3>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className={`service-card ${idx === 1 ? 'featured' : ''}`} key={idx}>
            <span className="icon">{service.icon}</span>
            <h4>{service.type}</h4>
            <p className="old-price">{service.oldPrice}</p>
            <p className="price">{service.price}</p>
            <ul>
              {service.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <button className="purchase-btn">Agendar Serviço</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicosSecao;
