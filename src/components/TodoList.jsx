import React from 'react'
import ToDo from './ToDo'

function TodoList({todos, setToDos, filteredToDo}) {
 
  return (
    <div>
        <ul className='todo-list'>
         {filteredToDo.map(todo=>(
          <ToDo setToDos = {setToDos} todo = {todo} todos = {todos} key={todo.id} text = {todo.text}/>
         ))}
        </ul>
    </div>
  )
}

export default TodoList