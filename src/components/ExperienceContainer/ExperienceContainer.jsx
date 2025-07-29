import React from "react";
import "./ExperienceContainer.css";
import nodejs from "../../assets/nodejs.webp";

const ExperienceContainer = () => {
  return (
    <div class="parentExperience box" id="experience">
      <div class="div1Experience">
        <img id="imgExperience" src={nodejs} alt="nodejs logo" />
      </div>
      <div class="div2Experience">
        <h2>Experiencia: </h2>
        <div class="paragraph">
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
            <li>
              <a href="https://github.com/roela12/ProyectoFinal-React">
                E-commerce hecho en react
              </a>
              : Posteriormente me adentré en el mundo de react y realicé un
              pequeño e-commerce donde practiqué el uso de hooks y el manejo de
              estados. Utilicé Firebase para almacenar los datos de los
              productos y las compras (no tiene deploy, pero hay un gif en el
              repo mostrando la funcionalidad).
            </li>
            <br />
            <li>
              <a href="https://github.com/roela12/first_express_server">
                Primer servidor en Express
              </a>
              : Luego de eso me adentré en el mundo del backend con Node y
              Express y este es mi primer pequeño servidor.
            </li>
            <br />
            <li>
              <a href="https://github.com/roela12/preentrega_MartinezJalil">
                Proyecto completo de backend
              </a>
              : Después realicé un proyecto más grande y complejo sobre un
              e-commerce con una base de datos en MongoDB en el cual practiqué
              el manejo de sesiones y autenticación de usuarios. También
              practiqué el uso de middlewares y la creación de rutas, con una
              parte realizada con WebSockets. Por otra parte también realicé el
              manejo de errores y documentación correspondiente, y muchas otras
              cosas, como por ejemplo el uso del mail para reestablecer
              contraseñas, el manejo de vistas con Handlebars o de variables de
              entorno con dotenv (estaba deployada en railway pero se me terminó
              el tiempo de uso gratuito, por lo que ahora no está disponible).
            </li>
            <br />
            <li>
              <a href="https://github.com/roela12/entrega_sql_coderhouse">
                Proyecto de SQL
              </a>
              : En este proyecto empecé a practicar el uso de SQL simulando la
              creación de una base de datos para una empresa de ventas de
              productos.
            </li>
            <br />
          </ul>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
