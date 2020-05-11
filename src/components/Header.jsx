import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/icon.png';
import userIcon from '../assets/static/user-icon.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.id = props.IDUser;
        this.Email = props.Email;
        this.Name = props.Name;
    }

    render() {
        return (
            <header className="header" >

                <Link to="/">
                    <img className="header__img" src={logo} alt="icon" />
                </Link>

                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img src={userIcon} alt="" />
                    <p>{this.Name}</p>
                    </div>
                    <ul>
                        <li><a href="/login">Cerrar sesión</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
/*
<Link to="/login">
                    Iniciar Sesión
                </Link>*/

export default Header;