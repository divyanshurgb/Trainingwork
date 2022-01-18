import React, { useState } from 'react'
import './App.css'

function Todo({todo, index} = {}) {
    return (
      <div className="todo">
        { todo.text }
      </div>
    )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  return (
  <form onSubmit = {handleSubmit}>
    <input type="text"className="input"value={value} onChange = {e => setValue()} />
  </form>)
}

function App() {
    const [todos, setTodos] = useState([{ 
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    { 
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ])

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
        <Todo key = {index} index = {index} todo = {todo} />
        ))} 
      </div>
    </div>
  )
}

export default App