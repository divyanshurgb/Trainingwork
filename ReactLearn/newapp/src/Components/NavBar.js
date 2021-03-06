import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from "./Header"

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
  
// Exporting Default Navbar to the App.js File
export default function Navbar() {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" 
            className={classes.menuButton} 
            color="inherit" aria-label="menu">
              {/* <MenuIcon /> */}
              <MenuIcon onClick={() => setShow((s) => !s)}>toggle</MenuIcon>
            <div style={{ display: show ? "block" : "none" }}> 
              <Header />
            </div>
          </IconButton>
          <Typography variant="h6" color="inherit">
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}