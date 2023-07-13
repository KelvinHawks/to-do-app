import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  

  const[inputText, setInputText] = useState('')
  const[todos, setToDos] = useState([])
  const[status, setStatus] = useState('all')
  const[filteredToDo, setFilteredToDo] = useState([])

  useEffect(()=>{
    getLocalTodos()
  }, [])
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  },[todos, status])

const filterHandler = ()=>{
  switch(status){
    case 'completed':
    setFilteredToDo(todos.filter(todo => todo.completed === true))
    break;
    case 'uncompleted':
      setFilteredToDo(todos.filter(todo=> todo.completed === false))
      break;
      default:
        setFilteredToDo(todos)
  }
  
}
const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}
const getLocalTodos =() =>{
  
    let toDoLocal = JSON.parse(localStorage.getItem('todos')) 
    setToDos(toDoLocal)
  
}
 
  return (
    <div className="to-do-app">
      <header>
        <h1>To Do List</h1>
      </header>
     <Form
      inputText = {inputText} 
      todos = {todos} setToDos = {setToDos} 
      setInputText = {setInputText} 
      setStatus = {setStatus}
      
      />
     <TodoList setToDos = {setToDos} todos = {todos} filteredToDo = {filteredToDo}/>
    </div>
  );
}

export default App;
