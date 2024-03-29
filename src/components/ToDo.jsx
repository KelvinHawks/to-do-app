import React from 'react'
import './list.css'
const ToDo = ({text, todo, setToDos, todos})=> {
    const deleteHandler = ()=>{
        setToDos(todos.filter((el)=> el.id !== todo.id))
    }
    const completeHandler = ()=>{
      setToDos(todos.map((item)=>{
        if(item.id === todo.id){
          return{
            ...item,
            completed: !item.completed
          }
        }
        return item
      } ))
    }
  return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed' : '' }`}>{text}</li>
        <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
    </div>
  )
}

export default ToDo