import "./Todo.css";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completedItems = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.map((todo) => todo).length;

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fproduct-ui%2Fbackgrounds%2Fwave-one-red.png')",
          width: "100%",
          height: "85vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=""
      >
        <div className="form">
          <Form todos={todos} setTodos={setTodos} />

          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <Footer completedItems={completedItems} totalTodos={totalTodos} />
    </>
  );
};

export default Todo;
