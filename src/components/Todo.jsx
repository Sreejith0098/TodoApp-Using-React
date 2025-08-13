import React, { useState } from 'react'
import './Todo.css';
import TodoItem from './TodoItem';
const todo = () => {
  const[todo,setTodo] = useState("")
  const[todos,setTodos] = useState([])

   function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("")
   }

  return (
    <>
    <div style={{marginLeft:'600px'}} className='d-flex  mt-5'>
          <form onSubmit={handleSubmit} >
            <input value={todo} className='form-control w-100' type="text" onChange={(e)=>setTodo(e.target.value)} />
            <button  style={{marginLeft:'50px'}} className='btn btn-primary mt-3 text-center ' type='submit'>Submit</button>
          </form>
          <div className='text-center' style={{width:'300px', marginRight:'700px', border:'1px solid black', marginTop:'250px'}}>
          {
            
            todos.map((item)=>(
             <TodoItem key={item} item ={item} />
             
            ))
          }
          </div>
    </div>
    </>
  )
}

export default todo