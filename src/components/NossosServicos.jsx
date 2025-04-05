import React from 'react';
import './NossosServicos.css';
import iconHotel from '../assets/dog2.png';
import iconGrooming1 from '../assets/dog2.png';
import iconGrooming2 from '../assets/dog2.png';

const servicos = [
  {
    nome: 'Hotel',
    descricao: 'Comfortable stays for your pets',
    icone: iconHotel,
  },
  {
    nome: 'Grooming',
    descricao: 'Expert grooming for a fresh look',
    icone: iconGrooming1,
  },
  {
    nome: 'Grooming',
    descricao: 'Expert grooming for a fresh look',
    icone: iconGrooming2,
  },
];

const NossosServicos = () => {
  return (
      <div className="servicos-bar">
        {servicos.map((item, index) => (
          <div key={index} className="servico-item">
            <img src={item.icone} alt={item.nome} className="icone-servico" />
            <div>
              <h4>{item.nome}</h4>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default NossosServicos;
