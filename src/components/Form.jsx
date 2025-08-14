import React, { useState } from 'react'
import './Todo.css'
const Form = ({todos,setTodos}) => {
      const [todo, setTodo] = useState("");
      
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
  return (
    <div className='form-container' >
   
   <form className='d-flex align-items-center'  onSubmit={handleSubmit}>
          <input
            value={todo}
            className=" modern-input w-100"
            placeholder='Add todos here...'
            type="text"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            style={{ marginLeft: "20px " ,height:'40px' }}
            className="btn btn-primary mt-3 text-center "
            type="submit"
          >
            Submit
          </button>
        </form>

    </div>
  )
}

export default Form