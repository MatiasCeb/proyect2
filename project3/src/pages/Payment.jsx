import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./styles/Payment.css";

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.name}>
                        <div className="Payment-element">
                            <h4>{item.name}</h4>
                            <span>$ {' '} {item.price}</span>
                        </div>
                    </div>
                ))}
                <Link to="/checkout/success" className="Payment-button">
                    Pagar
                </Link>
            </div>
        </div>
    );
}

export default Payment;