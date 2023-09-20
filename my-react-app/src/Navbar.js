import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/index.css';
import desti from './svg/desti.svg';
import flight from './svg/flight.svg';
import dorm from './svg/dorm.svg';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav justify-content-between">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={desti} alt='destination' className='mr-5' /> */}
                                    Destination
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={flight} alt='destination' className='mr-5' /> */}
                                    Flight
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={dorm} alt='destination' className='mr-5' /> */}
                                    Dom
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="navbar-header">
                        <a className="navbar-brand nav-text nav-link" href="#">Trywow</a>
                    </div>
                    <ul className="navbar-nav ml-auto justify-content-between">

                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={desti} alt='destination' className='mr-5' /> */}
                                    Home
                                </div></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={flight} alt='destination' className='mr-5' /> */}
                                    About
                                </div></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link nav-text" activeClassName="active">
                                <div className="d-flex align-items-center">
                                    {/* <img src={dorm} alt='destination' className='mr-5' /> */}
                                    Contact
                                </div></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
