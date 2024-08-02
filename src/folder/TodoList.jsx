import React from 'react'
// import "./TodoStyle.css/";
import { useState } from 'react';
function generateId(){
return Math.floor(Math.random() * 100);

}


const TodoList = () => {
    const [todo,setTodo]=useState([])
    const [input,setInput]=useState("")

    const handleSubmit=()=>{
      setTodo((todo)=>
        todo.concat({
          text:input,
          id: generateId()
        })
      )
        setInput("");
      
    }
const removeTodo = (id)=>{

setTodo((todo)=> todo.filter((t)=> t.id !==id))
}

  return (
    <>
   <div className='container'>
<input type='text' value={input}  onChange={(e)=>setInput(e.target.value)} placeholder='New Todo'></input>
<button onClick={handleSubmit}>submit</button>


<ul className='todo-list'>
  {
    todo.map(({text,id})=>(
     
      <li key={id}  className='todo'>
        <span>{text}</span>
        <button className='remove' onClick={()=> removeTodo(id) }>x</button>
      </li>
      
    ))
  }
</ul>
   </div>
   </>
  )
}

export default TodoList