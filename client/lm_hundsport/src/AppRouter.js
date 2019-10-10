import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Nav, Navbar, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import Event from './components/Event'
import Homes from './pages/Home'
export default function AppRouter() {
  return (
      <div>
          <Router>
            <Navbar sticky='top' bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">LM-HundSport</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/"><Link to="/">        Hem             </Link></Nav.Link>
                <Nav.Link ><Link to="/events">  Aktiviter       </Link></Nav.Link>
                <Nav.Link ><Link to="/contact"> Kontakta mig    </Link></Nav.Link>
            </Nav>
            <Navbar.Text>
                Signed in as: <a href="#login">DogLover</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

function Home() {
  return <Homes/>
}


function Events() {
  return <Event/>;
}
function Contact(){
    return <h2>Contact</h2>;
}

