import React from "react";
import "./Logout.css";
import Logoutlogo from "../image/Logoutlogo.jpg";


export default function Logout() {
    return (
        <>
            <div className="logout">
                <h1>This is Logout Section</h1>
                <img src={Logoutlogo} alt="logout-logo" />
            </div>
        </>
    );
}