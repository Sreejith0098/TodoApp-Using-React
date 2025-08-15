import React from 'react'
import TodoItem from "./TodoItem";
import './Todo.css'
const TodoList = ({todos,setTodos}) => {
  return (
    <div className='todo-items'>
        {todos.map((item) => (
                    <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
                  ))}
    </div>
  )
}

export default TodoList