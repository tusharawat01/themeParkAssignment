import React from "react";
import "./Cart.css";
import Cartlogo from "../image/Cartlogo.jpg"

export default function Cart() {
    return (
        <>
            <div className="cart">
                <h1>This is Cart</h1>
                <img src={Cartlogo} alt="cart-logo" />
            </div>
        </>
    );
}