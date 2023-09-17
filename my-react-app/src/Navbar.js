import React from 'react';
import { NavLink } from 'react-router-dom'; // 导入 NavLink

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Your Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                            {/* 使用 NavLink 组件，并指定 activeClassName 为 "active" */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                            {/* 使用 NavLink 组件，并指定 activeClassName 为 "active" */}
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                            {/* 使用 NavLink 组件，并指定 activeClassName 为 "active" */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

