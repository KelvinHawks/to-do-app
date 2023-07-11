import React, {useState} from 'react'

function TodoForm(props) {
    const[inputValue, setInput] = useState('')

    const handleChange = (e)=>{
        setInput(()=>{
          const {name, value} = e.target
          return{
            ...inputValue,
            [name]:value
          }
        }
          
        )
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: inputValue
     })
     
    
     
    
    }
    
  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add to do' name='text' onChange={handleChange} className='todo-input'/>
            <button className='todo-button' onClick={handleSubmit}>Add to do</button>
        </form>
    </div>
  )
}

export default TodoForm