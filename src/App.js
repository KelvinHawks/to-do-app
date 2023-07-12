import React, {useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const[inputText, setInputText] = useState('')
  const[todos, setToDos] = useState([])

 
  return (
    <div className="to-do-app">
      <header>
        <h1>To Do List</h1>
      </header>
     <Form inputText = {inputText} todos = {todos} setToDos = {setToDos} setInputText = {setInputText}/>
     <TodoList setToDos = {setToDos} todos = {todos}/>
    </div>
  );
}

export default App;
