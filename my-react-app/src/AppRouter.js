import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { NavLink } from 'react-router-dom';

function AppRouter() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Router>
    );
}

export default AppRouter;
