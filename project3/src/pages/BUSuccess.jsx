import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "./styles/Success.css";

const Succes = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);

    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>`${buyer.name}, gracias por tu compra.`</h2>
                <span>Tu pedido llegara en 3 días a tu dirección</span>
                <div className="Success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    );
}

export default Succes;