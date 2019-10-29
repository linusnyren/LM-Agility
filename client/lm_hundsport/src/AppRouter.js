import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './AppRouter.css'
import {Nav, Navbar} from 'react-bootstrap'
import EventPage from './pages/EventPage'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
export default function AppRouter() {
  return (
      <div>
          <Router>
            <Navbar sticky='top' bg="dark" variant="dark" expand="lg">
                <Navbar.Brand><Link className="navLogo" to="/"> LM-HundSport             </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className="navBarItem" to="/"> Hem             </Link>
                <Link className="navBarItem" to="/events">  Aktiviter       </Link>
                <Link className="navBarItem" to="/contact"> Kontakta mig    </Link>
            </Nav>
            <Navbar.Text>
                <Link to="/login">Login</Link>
            </Navbar.Text>
            </Navbar.Collapse>
            </Navbar>
    

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/events" component={EventPage}>
            <EventPage />
          </Route>
          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}






