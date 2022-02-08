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
import Login from "./Pages/Login/Login"
function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App"  style={{ marginLeft: '40%', marginTop: '60px', width: '30%'}} >
      <Navbar/> 
        {/* <Header /> */}
        {/* <DeleteIcon /> */}     
        {/* <HomeIcon style={{ color: "green" }} /> */}
        
        <Switch>
    {/* <Route path = '/' component = { Home } exact /> */}
            <Route exact path = '/' component = { Login } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Profile }/>
            <Route path = '/post/:id' component = { Post } />
            <Route component = {NotFound} />
        </Switch>
  {/* <Button color="primary" variant="contained" onClick={() => setLogin(!login)}>
          {login?"logout" : "login"}
        </Button>   */}
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
  </div>
</BrowserRouter>
  );
}

export default App;

// const App = () => {
  
//   return (
//     <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
//     <Box color="white" bgcolor="palevioletred" p={1}>
//       Greetings from DIV!
//     </Box>
//     </div>
//   );
// }
  

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

