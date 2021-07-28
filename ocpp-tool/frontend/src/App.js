import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'react-virtualized/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './pages/home';
import Simulator from './pages/simulator';
import Report from './pages/report';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">OCPP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <LinkContainer to="/">
        <Nav.Link>Configuration</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/Simulator">
        <Nav.Link>Simulator</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Report">
        <Nav.Link>Report</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
      </header>
      <Switch>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/simulator">
            <Simulator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
