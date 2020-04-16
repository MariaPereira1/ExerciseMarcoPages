import React from "react";

import "./styles.less";

import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpg";
import Image4 from "../../assets/Image4.jpg";

const Gallery = () => {
  return (
    <div className="container">
      <img src={Image1} className="imgGallery" />
      <img src={Image2} className="imgGallery" />
      <img src={Image3} className="imgGallery" />
      <img src={Image4} className="imgGallery" />
    </div>
  );
};

export default Gallery;
