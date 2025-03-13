import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// components:
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import AboutMeContainer from "./components/AboutMeContainer/AboutMeContainer";
import KnowledgeContainer from "./components/KnowlegeContainer/KnowledgeContainer";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <>
      <div id="home">
        <NavBarComponent />
        <AboutMeContainer />
        <KnowledgeContainer />
        <ExperienceContainer />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
