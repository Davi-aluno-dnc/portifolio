import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../section/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer} id="Footer">
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
      <p>meucontatodgs@gmail.com</p>
      <p>Davi Gomes © 2023</p>
    </div>
  );
}

export default Footer;
