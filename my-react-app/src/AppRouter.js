import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { NavLink } from 'react-router-dom';

function AppRouter() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact activeclassname="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeclassname="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeclassname="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </div>
    );
}

export default AppRouter;
