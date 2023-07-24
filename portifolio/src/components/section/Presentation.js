import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";

function Presentation() {
  return (
    <div className={styles.presentation} id="Presentation">
      <p>
        <h4>Bem vindo ao meu Portifólio!</h4>
      </p>
      <h1>Olá, eu sou Davi Gomes</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras. Como iniciante
        <br />
        em desenvolvimento estou sempre procurando vencer os desafios da
        <br />
        tecnologia moderna, para melhorar minha performance e me tornar um
        <br />
        excelente profissional!
      </p>
      <ButtonA
        link={"https://github.com/Davi-aluno-dnc/portifolio.git"}
        text="Conecte-se comigo!"
      />
    </div>
  );
}

export default Presentation;
