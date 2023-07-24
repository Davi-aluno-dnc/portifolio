import styles from "../section/Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Nav.Link href="#Presentation">Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skills">Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Projects">Projetos</Nav.Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://www.instagram.com/dgssystems13/">
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a href="https://github.com/Davi-aluno-dnc/portifolio.git">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7076635948632915969/?utm_source=share&utm_medium=member_android">
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
