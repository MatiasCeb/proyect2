import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import logo from "../assets/logoChialvo.png";
import userIcon from "../assets/carrito.png";
import "./styles/Header.scss";


const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
                <div className= "header__menu--profile">
                    <Link to="/checkout">
                        <img src={userIcon} alt=""/>
                    </Link>
                    {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
                </div>
            </div>
        </header>
    );
}

export default Header;