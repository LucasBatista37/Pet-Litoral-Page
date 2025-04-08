import React from "react";
import "./SobreNos.css";
import sobreImg from "../assets/dog5.png";

const SobreNos = () => {
  return (
    <section className="sobre-nos-modern" id="sobre">
      <div className="sobre-nos-container">
        <div className="sobre-nos-imagem-modern" data-aos="fade-up">
          <img src={sobreImg} alt="Cachorro com roupa" />
        </div>

        <div
          className="sobre-nos-conteudo"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2>Aqui nós cuidamos do seu pet com amor e carinho!</h2>
          <div className="linha-laranja"></div>
          <p>
            Amamos os animais e oferecemos cuidados especializados com carinho,
            higiene e segurança. Desde banhos até tosa, tratamos cada pet como
            parte da nossa família.
          </p>

          <ul className="sobre-nos-lista">
            <li>
              <span>1.</span> Atendimento Personalizado
            </li>
            <li>
              <span>2.</span> Conforto e Bem-estar
            </li>
            <li>
              <span>3.</span> Equipe Treinada
            </li>
            <li>
              <span>4.</span> Segurança e Amor
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
