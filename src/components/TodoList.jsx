import React from 'react'
import TodoItem from "./TodoItem";
import './Todo.css'
const TodoList = ({todos,setTodos}) => {
  return (
    <div className='todo-tems'>
        {todos.map((item) => (
                    <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
                  ))}
    </div>
  )
}

export default TodoList