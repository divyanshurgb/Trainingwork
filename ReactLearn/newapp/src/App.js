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

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App">
      <Navbar/> 
        <Header />
        <HomeIcon style={{ color: "green" }} />
        <DeleteIcon />
        <Button color="primary" variant="contained" onClick={() => setLogin(!login)}>
          {login?"logout" : "login"}
        </Button>       

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

// const App = () => {
  
//   return (
//     <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
//     <Box color="white" bgcolor="palevioletred" p={1}>
//       Greetings from DIV!
//     </Box>
//     </div>
//   );
// }
  
export default App;

  
// export default function SimpleContainer() {
//   return (
//     <>
//       <Container maxWidth="lg">
//         <h1  style={{ backgroundColor: '#cfe8fc'}}>
//           Container Of maxWidth = lg 
//          </h1>
//       </Container>
//       <Container maxWidth="md">
//         <h1  style={{ backgroundColor: '#cfe8fc'}}>
//           Container Of maxWidth = md 
//          </h1>
//       </Container>
//       <Container maxWidth="sm">
//         <h1  style={{ backgroundColor: '#cfe8fc'}}>
//           Container Of maxWidth = sm
//         </h1>
//       </Container>
//       <Container maxWidth="xs">
//         <h1  style={{ backgroundColor: '#cfe8fc'}}>
//           Container Of maxWidth = xs 
//         </h1>
//       </Container>
//       <Container fixed>
//         <h1  style={{ backgroundColor: '#cfe8fc'}}>
//           Container with fixed prop
//          </h1>
//       </Container>
//     </>
//   );
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
