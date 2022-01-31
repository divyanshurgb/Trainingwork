import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'

function App() {
  return (
    <BrowserRouter getUserConfirmation={
      (message, callback) => {
        callback(window.confirm())
    }
    }>
    <div className="App">
          <Header />
      <h1> React Router Tutorial </h1>
    </div>
    <Switch>
    <Route path = '/' component = { Home } exact />
    <Route path = '/about' component = { About }/>
    <Route path = '/profile' component = { Profile }/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
