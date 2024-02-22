import React from "react";
import "./Setting.css";
import Settinglogo from "../image/Settinglogo.jpeg"

export default function Setting() {
    return (
        <>
            <div className="setting">
                <h1>Here are Settings</h1>
                <img src={Settinglogo} alt="setting-logo" />
            </div>
        </>
    );
}