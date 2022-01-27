// import React, { useState } from 'react'
// import './App.css'

// function Todo({todo, index} = {}) {
//     return (
//       <div className="todo">
//         { todo.text }
//       </div>
//     )
// }

// function TodoForm({addTodo}) {
//   const [value, setValue] = useState('');

//   return (
//   <form onSubmit = {handleSubmit}>
//     <input type="text"className="input"value={value} onChange = {e => setValue()} />
//   </form>)
// }

// function App() {
//     const [todos, setTodos] = useState([{ 
//       text: 'Learn about React',
//       isCompleted: false
//     },
//     {
//       text: 'Meet friend for lunch',
//       isCompleted: false
//     },
//     { 
//       text: 'Build really cool todo app',
//       isCompleted: false
//     }
//   ])

//   return (
//     <div className="app">
//       <div className="todo-list">
//         {todos.map((todo, index) => (
//         <Todo key = {index} index = {index} todo = {todo} />
//         ))} 
//       </div>
//     </div>
//   )
// }

// export default App


// //useRef
// import React, { useState, useEffect, useRef } from 'react'

// export default function App() {
//   const [name, setName] = useState('')
//   const prevName = useRef('')

//   useEffect(() => { 
//     prevName.current = name
//   }, [name])
  
//   return (
//     <> 
//     <input value = {name} onChange = { e => setName (e.target.value)}/>
//     <div>My name is {name} and it used to be {prevName.current} </div>
//     </>
//   )
// }


// //useContext
// import React, { useContext } from 'react'
// import { ThemeContext } from './App'

// import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './ClassContextComponenent'

// export const ThemeContext = React.createContext() 

// export default function App() {
//     const [darkTheme, setDarkTheme] = useState(true)
//     const themeStyles = {
//         // CSS
//     }
//     function toggleTheme() {
//         setDarkTheme(prevDarkTheme => !prevDarkTheme)
//     }
//   render () 
//     return (
//         <>
//         <ThemeContext.Provider value = {darkTheme}>
//             <button onClick={toggleTheme}>Toggle Theme</button>
//             <FunctionContextComponent />
//             <ClassContextComponent />
//         </ThemeContext.Provider>
//         </>
//     )
// }

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Counter from './counter'

// import CSS from './app.css'

// class App extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             mount: true
//         }

//         this.mountCounter = () => this.setState({mount: true})
//         this.unmountCounter = () => this.setState({mount: false})
//     }

//     render () {
//         return <div>
//             <button onClick={this.mountCounter} disabled = {this.state.mount}>Mount</button>
//             <button onClick={this.unmountCounter} disabled = {this.state.mount}>Unmount</button>
//             <button onClick={this.ignoreProp} Ignore Prop></button>
//             <button onClick={this.seedGenerator} Generate Seed></button>

//             {this.state.mount ? 
//             <Counter
//                 ignoreProp={this.state.ignoreProp
//                 seed = {this.state.seed}
//                 showErrorComponent = {this.state.showErrorComponent}}/> : null}
//         </div>
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'))