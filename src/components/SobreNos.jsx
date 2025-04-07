import React from 'react';
import './SobreNos.css';
import sobreImg from '../assets/dog5.png';

const SobreNos = () => {
  return (
    <section className="sobre-nos-modern" id="sobre">
      <div className="sobre-nos-container">
        <div className="sobre-nos-imagem-modern">
          <img src={sobreImg} alt="Cachorro com roupa" />
        </div>

        <div className="sobre-nos-conteudo">
          <div className="linha-laranja"></div>
          <h2>Aqui nós cuidamos do seu pet com amor e carinho!</h2>
          <p>
            Amamos os animais e oferecemos cuidados especializados com carinho, higiene e segurança.
            Desde banhos até tosa, tratamos cada pet como parte da nossa família. Seja um cãozinho agitado,
            um gato curioso ou qualquer outro bichinho — aqui, ele é bem-vindo!
          </p>

          <ul className="sobre-nos-lista">
            <li><span>1.</span> Atendimento Personalizado</li>
            <li><span>2.</span> Conforto e Bem-estar</li>
            <li><span>3.</span> Equipe Treinada</li>
            <li><span>4.</span> Segurança e Amor</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
