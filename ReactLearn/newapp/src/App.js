import React, { useState, login, Post } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import ViewProfile from './Pages/ViewProfile'

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>{Login?"logout" : "login"}
        </button>
      <h1> React Router Tutorial </h1>
  <Switch>
    <Route path = '/' component = { Home } exact />
    <Route path = '/about' component = { About }/>
    <Route path = "/profile">
      <Profile login = {login} />
    </Route>
    <Route path = '/post/:id' component = { Post } />
    <Route component = {NotFound} />
  </Switch>
  </div>
</BrowserRouter>
  );
}

export default App;
