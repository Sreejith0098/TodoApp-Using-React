import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./TodoItem.module.css";
const Header = () => {
  return (
    <>
      <Navbar className={styles.header}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft_To-Do_icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            TodoApp
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
