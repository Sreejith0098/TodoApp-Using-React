import React from 'react'

const TodoItem = ({item,setTodos,todos}) => {
    function handleDelete(item){
        console.log("delete button clicked for",item)
        setTodos(todos.filter((todo)=> todo != item))
    }
  return (
    <div style={{fontSize:'bold'}}>
         <div style={{color:'blue'}}>{item}
         <span>
            <button onClick={()=>handleDelete(item)} className='btn btn-outline-primary' style={{float:'right'}}>delete</button>
         </span>
         </div>
         
         <hr className='line' />
    </div>
  )
}

export default TodoItem