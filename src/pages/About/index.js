import React from "react";

import "./styles.less";

import Image1 from "../../assets/Image.jpg";

const About = () => {
  return (
    <div className="container">
      <img src={Image1} className="imgAbout" />

      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos.
      </p>
    </div>
  );
};

export default About;
