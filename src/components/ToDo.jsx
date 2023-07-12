import React from 'react'
import './list.css'
const ToDo = ({text, todo, setToDos, todos})=> {
    const deleteHandler = ()=>{
        setToDos(todos.filter((el)=> el.id !== todo.id))
    }
  return (
    <div className="todo">
        <li className='todo-item'>{text}</li>
        <button className='complete-btn'><i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  )
}

export default ToDo