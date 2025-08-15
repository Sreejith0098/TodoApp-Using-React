import React, { useState } from 'react'
import './Todo.css'
const Form = ({todos,setTodos}) => {
      const [todo, setTodo] = useState({name:"",done:false});
      
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:"",done:false});
        
      }
  return (
    <div className='form-container' >
   
   <form className='d-flex align-items-center'  onSubmit={handleSubmit}>
          <input
            value={todo.name}
            className=" modern-input w-100"
            placeholder='Add todos here...'
            type="text"
            onChange={(e) => setTodo({name:e.target.value, done:false})}
          />
          <button
            style={{ marginLeft: "20px " ,height:'40px'}}
            className="btn btn-primary  text-center "
            type="submit"
          >
            Submit
          </button>
        </form>

    </div>
  )
}

export default Form