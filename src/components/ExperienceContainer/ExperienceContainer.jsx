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
        <h2>Experiencia: </h2>
        <p>
          Estos son algunos de los proyectos en los que trabaje a medida que fui
          aprendiendo:
          <br />
          <br />
          <ul>
            <li>
              <a href="https://roela12.github.io/proyecto_mi_ejercicio/">
                Mi Ejercicio
              </a>
              : Este fue mi primer proyecto personal que realicé cuando estaba
              aprendiendo a usar html y css (tambien usé sass para facilitar el
              uso de css).
            </li>
            <br />
            <li>
              <a href="https://roela12.github.io/calculadora/">Calculadora</a>:
              Luego me adentré en JavaScript y realicé una calculadora para
              comenzar a practicar.
            </li>
            <br />
            <li>
              <a href="https://roela12.github.io/inventarioCs/">
                Inventario de cs
              </a>
              : Luego quise combinar html css y JavaScript haciendo este pequeño
              proyecto.
            </li>
            <br />
            <li>
              <a href="https://roela12.github.io/ta-te-ti-pokemon/">
                Ta Te Ti de Pokemon
              </a>
              : Después de eso realicé un proyecto un poco más complejo que el
              anterior usando tambien html, css, JavaScript y consumiendo la api
              de Pokemon.
            </li>
            <br />
          </ul>
          <br />
          Estoy en constante actualización y aprendizaje, siempre buscando
          mejorar mis habilidades y mantenerme al día con las nuevas tendencias
          y tecnologías en el campo de la programación.
        </p>
      </div>
    </div>
  );
};

export default ExperienceContainer;
