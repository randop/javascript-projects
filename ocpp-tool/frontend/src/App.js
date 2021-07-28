import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

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

function Home() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
  )
}

function Report() {
  return <h2>Report</h2>;
}

function Simulator() {
  return <h2>simulator</h2>;
}

export default App;
