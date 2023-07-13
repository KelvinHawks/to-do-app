import React from 'react'

function Form({setInputText, todos, setToDos, inputText, setStatus, }) {
  const inputTextHandler = (e)=>{
    setInputText(e.target.value);
  }
  const submitToDoHandler = (e)=>{
    e.preventDefault()
    setToDos([
      ...todos, {
      text: inputText,
      completed: false,
      id: Math.floor(Math.random() * 1000)
      }])
    setInputText("")
  }
  const statusHandler = (e)=>{
    setStatus(e.target.value)
  }
  return (
    <form>
        <input type="text" className='todo-input' value={inputText} onChange={inputTextHandler}/>
        <button className='todo-button' type='submit' onClick={submitToDoHandler}><i className='fas fa-plus-square'></i></button>
        <select onChange={statusHandler} name="todos" className='filter-todo'>
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
    </form>
  )
}

export default Form