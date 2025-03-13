import myphoto from "../../assets/myphoto.png";
import "./AboutMeContainer.css";

function AboutMeContainer() {
  return (
    <div class="parentAboutMe box" id="about">
      <div class="div1AboutMe">
        <img id="imgAboutMe" src={myphoto} alt="profile photo" />
      </div>
      <div class="div2AboutMe">
        <h2>Sobre mi:</h2>
        <p>
          ¡Hola! Mi nombre es Rodrigo Elias Martinez Jalil, soy un apasionado de
          la programación y las nuevas tecnologías. Desde joven, me ha fascinado
          el mundo de la informática, la lógica matemática y la resolución de
          problemas. Esta pasión me llevó a estudiar en un colegio con
          bachillerato en informática, lo que me permitió obtener una base
          sólida en el área. Posteriormente, decidí continuar mis estudios en
          ingeniería en sistemas, donde pasé dos años profundizando en conceptos
          fundamentales de la tecnología y el desarrollo de sistemas. Mi sed de
          conocimiento no se detiene allí. Soy una persona autodidacta, curiosa
          por naturaleza, y siempre busco nuevas formas de aprender. He
          complementado mi formación mediante recursos en línea, cursos
          especializados y proyectos personales, lo que me ha permitido adquirir
          una comprensión más profunda de las tecnologías más actuales. Además
          de mis estudios en informática, también tengo una fuerte orientación
          hacia el trabajo en equipo. Considero que la comunicación efectiva y
          la colaboración son esenciales para el éxito en cualquier proyecto.
          Disfruto compartir ideas y aprender de mis compañeros, y siempre estoy
          dispuesto a adaptarme y crecer en un entorno dinámico. Actualmente,
          sigo perfeccionando mis habilidades en inglés, lo que me permite
          comprender mejor la documentación técnica y comunicarme más
          eficazmente en un entorno global. Mi objetivo es conseguir mi primer
          empleo en programación y poder aplicar lo aprendido, a la vez que
          continúo desarrollándome como profesional en un entorno laboral.
        </p>
      </div>
    </div>
  );
}

export default AboutMeContainer;
