import React, { useState, useComponent } from "react"
import Container from '@material-ui/core/Container';  
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'
import { Button } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import Navbar from './Components/NavBar'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App"  style={{ marginLeft: '40%', marginTop: '60px', width: '30%'}} >
      <Navbar/> 
        <Header />
        {/* <DeleteIcon /> */}     
        <HomeIcon style={{ color: "green" }} />
        <Box color="white" bgcolor="palevioletred" p={1}>
      Welcome to the app
      <Container maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: 'Orange', height: '100vh' 
      }}>
        Greetings from DIV!
      </Typography>
    </Container>
    </Box>
  <Switch>
    <Route path = '/' component = { Home } exact />
    <Route path = '/about' component = { About }/>
    <Route path = '/profile' component = { Profile }/>
    <Route path = '/post/:id' component = { Post } />
    <Route component = {NotFound} />
  </Switch>
  <Button color="primary" variant="contained" onClick={() => setLogin(!login)}>
          {login?"logout" : "login"}
        </Button>  
        
  </div>
</BrowserRouter>
  );
}

export default App;

// const App = () => {
  
//   return (
    
//   );
// }
  

// ReactDOM.render(<App />, document.getElementById('root'))
  
// export default function SimpleContainer() {
//   return (
//     <>
//     </>
//   );
// }


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



// //// Mapping 

// const employees = [
//   "Anthony", 
//   "Kevin", 
//   "George"
// ];
// export default function App () {
//   return (
//     <div className="App">
//       <h1> { employees[0]] </h1>
//       <h1> { employees[0]] </h1>
//       <h1> { employees[0]] </h1>
//         <h1> { employees[0]] </h1>

//     </div>
//   )
// }
