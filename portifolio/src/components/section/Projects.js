import ButtonB from "../elements/ButtonB";
import styles from "./Projectts.module.css";
import Card from "../elements/Card";
import lpdnc from "../../Image/projects/lpdnc.svg";

function Projects() {
  return (
    <div className={styles.projects} id="Projects">
      <h1>Projetos</h1>
      <Card
        img={lpdnc}
        title="LP - DNC"
        tech="HTML, CSS, JS"
        description="Desenvolvimento de uma Landing Page para o lanamento da formação em tecnologia"
        repo="https://github.com/Davi-aluno-dnc/portifolio.git"
        site="https://stuppendous-sable-3c4746.netfly.app/"
      />

      <ButtonB
        text="Acesse meu repositório"
        link="https://github.com/Davi-aluno-dnc/portifolio.git"
      />
    </div>
  );
}

export default Projects;
