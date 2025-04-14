import React from "react";
import "./FooterComponent.css";
import linkedin from "../../assets/linkedin.webp";
import github from "../../assets/github.webp";

const FooterComponent = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/rodrimartinezjalil/">
        <img class="footer__logo" src={linkedin} alt="linkedin logo" />
      </a>
      <a href="https://github.com/roela12">
        <img class="footer__logo" src={github} alt="github logo" />
      </a>
    </div>
  );
};

export default FooterComponent;
