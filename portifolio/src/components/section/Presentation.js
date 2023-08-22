import ButtonA from "../elements/ButtonA";
import styles from "./Presentation.module.css";
import { useEffect, useState } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = ["Davi Gomes", "Estudante Tecnologia"];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <div className={styles.presentation} id="Presentation">
      <p>
        <h4>Bem vindo ao meu Portifólio!</h4>
      </p>
      <h1>Olá, eu sou {text}</h1>
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
