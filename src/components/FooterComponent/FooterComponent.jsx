import React from "react";
import "./FooterComponent.css";
import linkedin from "../../assets/linkedin.webp";
import github from "../../assets/github.webp";
import cv from "../../assets/cv.webp";

const FooterComponent = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/rodrimartinezjalil/">
        <img class="footer__logo" src={linkedin} alt="linkedin logo" />
      </a>
      <a href="https://github.com/roela12">
        <img class="footer__logo" src={github} alt="github logo" />
      </a>
      <a href="https://drive.google.com/file/d/1mI5ROf9jI3Ekk5JiNoQDdYnp2FHzMs5I/view">
        <img class="footer__logo" src={cv} alt="cv logo" />
      </a>
    </div>
  );
};

export default FooterComponent;
