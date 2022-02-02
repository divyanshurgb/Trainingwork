import React, { useState } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'
import {Button} from "@material-ui/core"

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <Button color="primary" variant="contained" onClick={() => setLogin(!login)}>
          {login?"logout" : "login"}
        </Button>
      <h1> React Router Tutorial </h1>
  <Switch>
    <Route path = '/' component = { Home } exact />
    <Route path = '/about' component = { About }/>
    <Route path = '/profile' component = { Profile }/>
    <Route path = '/post/:id' component = { Post } />
    <Route component = {NotFound} />
  </Switch>
  </div>
</BrowserRouter>
  );
}

export default App;







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
