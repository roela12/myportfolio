import React from "react";
import "./ExperienceContainer.css";
import miejercicio from "../../assets/miejercicio.png";

const ExperienceContainer = () => {
  return (
    <div class="parentExperience box" id="experience">
      <div class="div1Experience">
        <img id="imgExperience" src={miejercicio} alt="mi ejercicio image" />
      </div>
      <div class="div2Experience">
        <h2>Experience: </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
          neque reprehenderit optio corrupti laboriosam iusto dolores, possimus
          perspiciatis voluptate, magnam ducimus sed reiciendis placeat ratione
          facilis autem vero molestiae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo quia neque reprehenderit optio corrupti
          laboriosam iusto dolores, possimus perspiciatis voluptate, magnam
          ducimus sed reiciendis placeat ratione facilis autem vero molestiae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
          neque reprehenderit optio corrupti laboriosam iusto dolores, possimus
          perspiciatis voluptate, magnam ducimus sed reiciendis placeat ratione
          facilis autem vero molestiae?
        </p>
      </div>
    </div>
  );
};

export default ExperienceContainer;
