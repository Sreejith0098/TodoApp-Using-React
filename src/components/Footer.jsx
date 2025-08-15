import React from "react";
import styles from "./TodoItem.module.css";
const Footer = ({ completedItems, totalTodos }) => {
  return (
    <div className={styles.footer}>
      <div>Completed items:{completedItems}</div>

      <div>Total todos: {totalTodos}</div>
    </div>
  );
};

export default Footer;
