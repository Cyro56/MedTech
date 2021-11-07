import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Home from "./components/Home"
import Avaliação from "./components/Avaliação"
import Consulta from "./components/Consulta"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Consulta">
          <Consulta />
        </Route>
        <Route exact path="/Avaliação">
          <Avaliação />
        </Route>
      </Switch>
    </Router>
  );   
}

export default App;
