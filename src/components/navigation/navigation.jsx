import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo2.png";
// Will add svg later...
const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="logo-container">
                <img src={Logo} alt="Local-Design Logo" />
            </div>
            <ul className="navigation-container">
                <li className="nav-links">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-links">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-links">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="nav-links">
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
