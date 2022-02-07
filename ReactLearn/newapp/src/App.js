import React, { useState, useComponent } from "react"
import Container from '@material-ui/core/Container';  
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css'
// import Header from "./Components/Header"
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Post from './Pages/Post'
import { Button } from "@material-ui/core"
import HomeIcon from "@material-ui/icons/HomeTwoTone";
// import DeleteIcon from "@material-ui/icons/DeleteForever";
import Navbar from './Components/NavBar'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function App() {
  const [login, setLogin] = useState(false);

  return (
  <BrowserRouter>
      <div className="App"  style={{ marginLeft: '40%', marginTop: '60px', width: '30%'}} >
      <Navbar/> 
        {/* <DeleteIcon /> */}     
        <HomeIcon style={{ color: "green" }} />
        <Box color="white" bgcolor="palevioletred" p={1}>
          Welcome to the app
            </Box>
      <Container maxWidth="md">
      <Typography component="div" style={{ 
        backgroundColor: 'Orange', height: '100vh' 
      }}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit et
      </Typography>
    </Container>
    
  <Switch>
    <Route path = '/' component = { Home } exact />
    <Route path = '/about' component = { About }/>
    <Route path = '/profile' component = { Profile }/>
    <Route path = '/post/:id' component = { Post } />d
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