import myphoto from "../../assets/myphoto.png";
import "./AboutMeContainer.css";

function AboutMeContainer() {
  return (
    <div class="parentAboutMe box" id="about">
      <div class="div1AboutMe">
        <img id="imgAboutMe" src={myphoto} alt="profile photo" />
      </div>
      <div class="div2AboutMe">
        <h2>About me:</h2>
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
}

export default AboutMeContainer;
