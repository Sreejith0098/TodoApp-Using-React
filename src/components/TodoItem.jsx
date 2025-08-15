import React from 'react'
import './Todo.css'
import styles from './TodoItem.module.css'
const TodoItem = ({item,setTodos,todos}) => {
    function handleDelete(item){
        console.log("delete button clicked for",item)
        setTodos(todos.filter((todo)=> todo != item))
    }

    function handleClick(name){
       const newArray = todos.map((todo)=>todo.name === name ? {...todo,done:!todo.done}:todo)
       setTodos(newArray)
    //    console.log(todos)
    }
         const className = item.done? styles.completed :""
  return (
    <div style={{fontSize:'bold'}}>
         <div  style={{color:'blue'}}> 
           <span className={className}  onClick={()=>handleClick(item.name)}>{item.name} </span> 
         <span>
            <button onClick={()=>handleDelete(item)} className='btn btn-outline-primary' style={{float:'right'}}>delete</button>
         </span>
         </div>
         
         <hr className='line' />
    </div>
  )
}

export default TodoItem