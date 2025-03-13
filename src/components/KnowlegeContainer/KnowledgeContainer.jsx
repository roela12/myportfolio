import React from "react";
import "./KnowledgeContainer.css";
import node from "../../assets/node.png";

const KnowledgeContainer = () => {
  return (
    <div class="parentKnowledge box" id="knowledge">
      <div class="div1Knowledge">
        <h2>Conocimientos: </h2>
        <p>
          A lo largo de mi formación y experiencia autodidacta, he adquirido
          conocimientos sólidos en varias áreas de la informática y la
          programación. Algunos de los lenguajes, tecnologías y herramientas que
          manejo son:
          <br />
          <br />
          <ul>
            <li>
              Desarrollo web: Dominio en la creación de sitios web utilizando
              tecnologías como HTML5, CSS3, JavaScript, React, Express, Mongodb,
              Node.
            </li>
            <br />
            <li>
              Desarrollo de software: Experiencia en la creación de aplicaciones
              sencillas, manejo de versiones mediante Git y GitHub, y en el
              desarrollo de software modular y escalable.
            </li>
            <br />

            <li>
              Matemáticas y lógica: Fuerte afinidad por las matemáticas y la
              lógica computacional, lo que me permite abordar problemas
              complejos con soluciones eficientes.
            </li>
            <br />

            <li>
              Inglés técnico: Gracias a mis estudios en una academia, he
              alcanzado el nivel B2 de inglés y sigo perfeccionando mi fluidez
              mediante la plataforma Open English. Esto me permite comprender
              documentación técnica en inglés y colaborar en entornos globales.
            </li>
          </ul>
          <br />
          Estoy en constante actualización y aprendizaje, siempre buscando
          mejorar mis habilidades y mantenerme al día con las nuevas tendencias
          y tecnologías en el campo de la programación.
        </p>
      </div>
      <div class="div2Knowledge">
        <img id="imgKnowledge" src={node} alt="node image" />
      </div>
    </div>
  );
};

export default KnowledgeContainer;
