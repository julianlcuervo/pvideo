import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/icon.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
    <header className="header">

        <Link to="/">
            <img className="header__img" src={logo} alt="icon"/>
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar sesión</a></li>
            </ul>
        </div>
  </header>
);
/*
<Link to="/login">
                    Iniciar Sesión
                </Link>*/

export default Header;