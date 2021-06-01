import React from 'react';
import "./styles/Header.scss";
import logo from "../assets/logoChialvo.png";
import userIcon from "../assets/carrito.png";


const Header = () => (
    <header className="header">
        <img className="header__img" src={logo} alt="Platzi Video"/>
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt=""/>
            <p>Menú</p>
        </div>
        <ul>
            <li><a href="/">Ir al carrito</a></li>
            <li><a href="/">Ir a la web</a></li>
        </ul>
        </div>
  </header>
);

export default Header;