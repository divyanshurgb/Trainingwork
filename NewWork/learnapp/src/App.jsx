import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  button:{
    ...theme.myButton
  },
}))

const App = () => {
  const classes = useStyles()
  return (
  <div>
    <Navbar />
  </div>
  )
}

export default App;