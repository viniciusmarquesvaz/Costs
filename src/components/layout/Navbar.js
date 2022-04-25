import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

export const Navbar = () => {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/Home">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Contact">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projects">Projetos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};
export default Navbar;
