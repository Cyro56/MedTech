import logo from "./logo.svg"
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Cadastro from "./components/Cadastro"
import Avaliação from "./components/Avaliação"
import Consulta from "./components/Consulta"
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {Nav, Navbar} from "react-bootstrap"


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />
          MedTech
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Cadastro</Nav.Link>
            <Nav.Link href="Consulta">Consulta</Nav.Link>
            <Nav.Link href="Avaliação">Avaliação</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     

      <Switch>
        <Route exact path="/">
          <Cadastro />
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
