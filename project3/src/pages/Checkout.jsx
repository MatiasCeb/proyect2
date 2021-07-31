import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./styles/Checkout.css"

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    };

    const handleSumTotal = () => {
        const reducer = ( accumulator, currentValue ) => accumulator + currentValue.price;
        const sumPrev = cart.reduce(reducer, 0);
        const sum = sumPrev.toFixed(2);
        console.log(cart)
        return sum;
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3> }
                {cart.map((product) => (
                    <div key={product.cardId} className="Checkout-item">
                        <div className="Checkout-element">
                            <p>{product.name}</p>
                            <span>${product.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(product)}>
                            <p>E</p>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>{`Precio Total : $ ${handleSumTotal()}`}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Checkout;