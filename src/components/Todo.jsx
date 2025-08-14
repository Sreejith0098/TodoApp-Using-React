import "./Todo.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
useState
const todo = () => {

          const [todos, setTodos] = useState([]);
  return (
    <>
      <div style={{ marginLeft: "600px" }} className="mt-5">
       <Form todos={todos} setTodos={setTodos} />
       <TodoList todos={todos} setTodos={setTodos} />
       
      </div>
    </>
  );
};

export default todo;
