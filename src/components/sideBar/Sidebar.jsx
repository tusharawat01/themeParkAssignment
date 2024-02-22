import React from "react";
import "./Sidebar.css";
import Logo from "../image/Logo.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <div className="container">
                <nav className="sidebar">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="links">
                        <li><Link to="/cart" className="nav-link" activeClassName="active">Cart</Link></li>
                        <li><Link to="/" className="nav-link" activeClassName="active">Market</Link></li>
                        <li><Link to="/settings" className="nav-link" activeClassName="active">Setting</Link></li>
                        <li><Link to="/logout" className="nav-link" activeClassName="active">Logout</Link></li>
                    </div>
                    <div className="empty"></div>
                </nav>
            </div>
        </>
    );
}